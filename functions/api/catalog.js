/**
 * Cloudflare Pages Function: /api/catalog
 * Handles global real-time catalog syncing via Cloudflare KV database.
 */

export async function onRequestGet(context) {
  const { env } = context;
  try {
    if (env.KOKO_CATALOG) {
      const data = await env.KOKO_CATALOG.get("catalog_data");
      if (data) {
        return new Response(data, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "public, max-age=5, must-revalidate"
          }
        });
      }
    }
  } catch (err) {
    console.error("KV read error:", err);
  }

  return new Response(JSON.stringify({ status: "fallback" }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const body = await request.text();
    if (env.KOKO_CATALOG) {
      await env.KOKO_CATALOG.put("catalog_data", body);
      return new Response(JSON.stringify({ 
        status: "ok", 
        message: "Saved directly to Cloudflare Global Cloud Database" 
      }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
    return new Response(JSON.stringify({ status: "error", message: "KV binding missing" }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: "error", error: err.message }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
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
