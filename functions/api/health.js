/**
 * Cloudflare Pages Function: /api/health
 */

export async function onRequestGet(context) {
  const { env } = context;
  const hasKV = !!env.KOKO_CATALOG;
  return new Response(JSON.stringify({ 
    status: "ok", 
    cloudDatabase: true, 
    storage: hasKV ? "Cloudflare KV" : "memory" 
  }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-store"
    }
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
