const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api1", {
      target:
        "http://api.live.bilibili.com/live_user/v1/Master/info?uid=434334701",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api1": "/api1",
      },
    }),
    createProxyMiddleware("/api2", {
      target:
        "https://api.bilibili.com/x/space/arc/search?mid=434334701&ps=30&tid=0&pn=1&keyword=&order=pubdate&jsonp=jsonp",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api2": "/api2",
      },
    })
  );
};
