const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    // app.use('/rjwl', createProxyMiddleware({
    //     target: 'http://47.94.142.215:8081',
    //     secure: false,
    //     changeOrigin: true,
    //     pathRewrite: {
    //         '^/rjwl': '/rjwl',
    //     },
    // }))
    /*app.use('/api', createProxyMiddleware({
        target: 'http://wstopic.woa.com',
        secure: false,
        changeOrigin: true,
    }))*/
    /*app.use('/demo', createProxyMiddleware({
        target: 'http://wstopic.woa.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            '^/demo': '',
        },
    }))*/
    app.use('/api', createProxyMiddleware({
        target: 'https://interface.sina.cn/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            '^/api': '',
        },
    }))
}
