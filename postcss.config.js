module.exports = {
    plugins: {
        'autoprefixer': {
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8"
            ]
        },
        'postcss-pxtorem': {
            rootValue:37.5,//配合vant使用根元素为37.5
            propList: ['*']
        }
    }
}