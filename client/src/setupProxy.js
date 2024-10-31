const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/graphql',
        createProxyMiddleware({
            target: 'http://51.21.6.145',
            changeOrigin: true,
        })
    );
};
