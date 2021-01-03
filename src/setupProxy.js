const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(createProxyMiddleware("/api/domains/available", { target: "https://domaincheck.httpapi.com",
    "secure": true,
    "logLevel": "debug",
    "changeOrigin": true,
    "headers": {
      "Connection": "keep-alive"
    }
    }));
    app.use(createProxyMiddleware("/api", {
        target: "https://httpapi.com",
        "secure": true,
        "logLevel": "debug",
        "changeOrigin": true,
        "headers": {
          "Connection": "keep-alive"
        }
    }));

};