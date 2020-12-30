const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(createProxyMiddleware("/api/domains/available.json", { target: "https://domaincheck.httpapi.com/api/domains/available.json?auth-userid=795300&api-key=sOZ7I52D5Jx8Vtbkxfnn1PYIVoqL0D5O&domain-name=getsetmeet&tlds=com", changeOrigin: true, }));
    app.use(createProxyMiddleware("/api", { target: "https://httpapi.com", changeOrigin: true, }));

};