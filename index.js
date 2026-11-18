export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return Response.json({
        ok: true,
        app: "Venix Crypto Digital",
        mode: "demo",
        message: "API de demonstração ativa. Nenhuma mineração ou transação real é executada."
      }, {
        headers: { "Cache-Control": "no-store" }
      });
    }

    return env.ASSETS.fetch(request);
  }
};
