/**
 * Cloudflare Pages Function: /api/image
 * Serves uploaded product images offloaded to Cloudflare KV binary entries.
 */

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

export async function onRequestGet(context) {
  const { request, env } = context;
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id") || "";

    // Security: strictly allow only hashed image keys (never catalog_data or sales_ledger_data)
    if (!/^img_[a-f0-9]{16,40}$/.test(id)) {
      return new Response(JSON.stringify({ status: "error", message: "Invalid image id" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          ...CORS_HEADERS
        }
      });
    }

    if (!env.KOKO_CATALOG) {
      return new Response(JSON.stringify({ status: "error", message: "KV binding missing" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...CORS_HEADERS
        }
      });
    }

    const { value, metadata } = await env.KOKO_CATALOG.getWithMetadata(id, { type: "arrayBuffer" });
    if (!value) {
      return new Response(JSON.stringify({ status: "error", message: "Image not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
          ...CORS_HEADERS
        }
      });
    }

    return new Response(value, {
      status: 200,
      headers: {
        "Content-Type": (metadata && metadata.contentType) || "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: "error", error: err.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        ...CORS_HEADERS
      }
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: CORS_HEADERS
  });
}
