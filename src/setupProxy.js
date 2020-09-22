const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/demo2', {
        target: 'http://wstopic.woa.com',// api?query=7cV3wNJo11JipJlkm&query_type=query',
        changeOrigin: true
    }))
}
