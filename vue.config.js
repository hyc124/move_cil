module.exports = {
    //设置代理
    devServer: {
        open: false, // 编译完成是否打开网页
        host: "0.0.0.0", // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
        port: 8080, // 访问端口
        https: false, // 编译失败时刷新页面
        hot: true, // 开启热加载
        hotOnly: false,
        // proxy: null, // 设置代理
        proxy: {
            "/api": {
                // target: 'http://property.mgtx-tech-dev.mgtx.com.cn/admin',
                target: "http://lotus.mgtx-tech-dev.mgtx.com.cn",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/",
                },
            },
        },
        // overlay: {
        //     // 全屏模式下是否显示脚本错误DRFC
        //     warnings: true,
        //     errors: true,
        // },

    },
}