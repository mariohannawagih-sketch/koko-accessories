/**
 * Cloudflare Pages Function: /api/catalog
 * Handles global real-time catalog syncing via Cloudflare KV database,
 * automatically offloading inline base64 images to dedicated /api/image entries
 * so catalog JSON stays tiny (< 100 KB) and fast on all devices.
 */

const NO_CACHE_HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "no-cache, no-store, must-revalidate",
  "Pragma": "no-cache"
};

/**
 * Offload inline base64 data:image/... URIs into dedicated Cloudflare KV binary keys
 * and replace them with /api/image?id=img_<hash> URLs. Deduplicates identical URIs.
 */
async function offloadBase64Images(catalogObj, kv) {
  if (!catalogObj || !Array.isArray(catalogObj.products) || !kv) {
    return { changed: false, catalog: catalogObj };
  }

  const memo = new Map();
  let changed = false;

  async function uploadDataUri(uri) {
    if (typeof uri !== "string" || !uri.startsWith("data:image/")) {
      return uri;
    }
    if (memo.has(uri)) {
      changed = true;
      return memo.get(uri);
    }

    const match = uri.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,([\s\S]+)$/);
    if (!match) {
      return uri;
    }

    try {
      const contentType = match[1];
      const cleanB64 = match[2].replace(/\s+/g, "");
      const binaryStr = atob(cleanB64);
      const len = binaryStr.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryStr.charCodeAt(i);
      }

      const digest = await crypto.subtle.digest("SHA-256", bytes);
      const hashHex = Array.from(new Uint8Array(digest))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("")
        .slice(0, 24);

      const key = `img_${hashHex}`;
      await kv.put(key, bytes.buffer, { metadata: { contentType } });

      const servedUrl = `/api/image?id=${key}`;
      memo.set(uri, servedUrl);
      changed = true;
      return servedUrl;
    } catch (imgErr) {
      console.error("Failed to offload base64 image:", imgErr);
      return uri;
    }
  }

  for (const prod of catalogObj.products) {
    if (!prod || typeof prod !== "object") continue;

    if (typeof prod.image === "string" && prod.image.startsWith("data:image/")) {
      const nextImg = await uploadDataUri(prod.image);
      if (nextImg !== prod.image) {
        prod.image = nextImg;
        changed = true;
      }
    }

    if (Array.isArray(prod.images)) {
      for (let i = 0; i < prod.images.length; i++) {
        const entry = prod.images[i];
        if (typeof entry === "string" && entry.startsWith("data:image/")) {
          const nextEntry = await uploadDataUri(entry);
          if (nextEntry !== entry) {
            prod.images[i] = nextEntry;
            changed = true;
          }
        }
      }
    }
  }

  return { changed, catalog: catalogObj };
}

export async function onRequestGet(context) {
  const { env } = context;
  try {
    if (env.KOKO_CATALOG) {
      const data = await env.KOKO_CATALOG.get("catalog_data");
      if (data) {
        try {
          let parsed = JSON.parse(data);
          if (data.includes("data:image/") && parsed && Array.isArray(parsed.products)) {
            const offloaded = await offloadBase64Images(parsed, env.KOKO_CATALOG);
            if (offloaded.changed) {
              parsed = offloaded.catalog;
              await env.KOKO_CATALOG.put("catalog_data", JSON.stringify(parsed));
            }
          }
          return new Response(JSON.stringify(parsed), {
            status: 200,
            headers: NO_CACHE_HEADERS
          });
        } catch (parseErr) {
          return new Response(data, {
            status: 200,
            headers: NO_CACHE_HEADERS
          });
        }
      }
    }
  } catch (err) {
    console.error("KV read error:", err);
  }

  return new Response(JSON.stringify({ status: "fallback" }), {
    status: 200,
    headers: NO_CACHE_HEADERS
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    let parsed = null;
    try {
      parsed = await request.json();
    } catch (jsonErr) {
      return new Response(JSON.stringify({ status: "error", message: "Invalid JSON payload" }), {
        status: 400,
        headers: NO_CACHE_HEADERS
      });
    }

    if (!parsed || typeof parsed !== "object" || !Array.isArray(parsed.products)) {
      return new Response(JSON.stringify({ status: "error", message: "Invalid catalog payload: products array required" }), {
        status: 400,
        headers: NO_CACHE_HEADERS
      });
    }

    if (env.KOKO_CATALOG) {
      const { catalog: cleaned } = await offloadBase64Images(parsed, env.KOKO_CATALOG);

      cleaned.products.forEach(p => {
        if (p && typeof p === "object") {
          p.isSoldOut = Boolean(p.isSoldOut || p.soldOut);
          if ("soldOut" in p) delete p.soldOut;
        }
      });

      cleaned.updatedAt = Math.max(Number(cleaned.updatedAt) || 0, Date.now());
      if (typeof cleaned.revision === "number" || cleaned.revision != null) {
        cleaned.revision = (Number(cleaned.revision) || 0) + 1;
      }

      await env.KOKO_CATALOG.put("catalog_data", JSON.stringify(cleaned));
      return new Response(JSON.stringify({
        status: "ok",
        updatedAt: cleaned.updatedAt,
        productCount: cleaned.products.length,
        catalog: cleaned,
        message: "Saved directly to Cloudflare Global Cloud Database"
      }), {
        status: 200,
        headers: NO_CACHE_HEADERS
      });
    }

    return new Response(JSON.stringify({ status: "error", message: "KV binding missing" }), {
      status: 500,
      headers: NO_CACHE_HEADERS
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: "error", error: err.message }), {
      status: 500,
      headers: NO_CACHE_HEADERS
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
