const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://wstopic.woa.com/demo2/',// api?query=7cV3wNJo11JipJlkm&query_type=query',
        changeOrigin: true
    }))
}
