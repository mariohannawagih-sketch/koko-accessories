/**
 * Cloudflare Pages Function: /api/sales
 * Stores and syncs private daily sales & profit ledger entries in Cloudflare KV.
 */

const CORS_HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "no-cache, no-store, must-revalidate"
};

export async function onRequestGet(context) {
  const { env } = context;
  try {
    if (env.KOKO_CATALOG) {
      const data = await env.KOKO_CATALOG.get("sales_ledger_data");
      if (data) {
        return new Response(data, {
          status: 200,
          headers: CORS_HEADERS
        });
      }
    }
  } catch (err) {
    console.error("KV sales read error:", err);
  }

  return new Response(JSON.stringify({ sales: [], status: "empty" }), {
    status: 200,
    headers: CORS_HEADERS
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const parsed = await request.json();
    if (!parsed || !Array.isArray(parsed.sales)) {
      return new Response(JSON.stringify({ status: "error", message: "Invalid sales payload" }), {
        status: 400,
        headers: CORS_HEADERS
      });
    }

    if (env.KOKO_CATALOG) {
      const payload = JSON.stringify({
        sales: parsed.sales,
        updatedAt: new Date().toISOString()
      });
      await env.KOKO_CATALOG.put("sales_ledger_data", payload);
      return new Response(JSON.stringify({
        status: "ok",
        count: parsed.sales.length,
        message: "Saved sales ledger to Cloudflare KV"
      }), {
        status: 200,
        headers: CORS_HEADERS
      });
    }

    return new Response(JSON.stringify({ status: "error", message: "KV binding missing" }), {
      status: 500,
      headers: CORS_HEADERS
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: "error", error: err.message }), {
      status: 500,
      headers: CORS_HEADERS
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
