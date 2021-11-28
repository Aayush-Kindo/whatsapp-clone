const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://whats-appbackend.herokuapp.com',
      changeOrigin: true,
    })
  );
};