const path = require('path');
module.exports = {
    // 基本路径

    publicPath: process.env.NODE_ENV === 'production' ? '' : '/vue_cars',
    // 输出文件目录
    outputDir: process.env.NODE_ENV === 'production' ? 'build' : 'devdist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    /**
     * webpack配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
     **/
    chainWebpack: (config) => {

        const svgRule = config.module.rule("svg");
        svgRule.uses.clear();
        svgRule
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            .options({
                symbolId: "icon-[name]",
                include: ["./src/icons"]
            });
    },
    configureWebpack: (config) => {

        // config.externals = {
        //     'vue': 'Vue',
        //     'vuex': 'Vuex',
        //     'vue-router': 'VueRouter',
        //     'element-ui':'element-ui'
        // }

        config.resolve = { // 配置解析别名
            extensions: ['.js', '.json', '.vue'],
            alias: {
                'vue': 'vue/dist/vue.js',
                '@': path.resolve(__dirname, './src'),
                'public': path.resolve(__dirname, './public'),
                '@c': path.resolve(__dirname, './src/components'),
            }
        }
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            sass: {
                prependData: `@import "./src/styles/main.scss";`
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    /**
     *  PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
     */
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        open: true, // 编译完成是否打开网页
        host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
        port: 8080, // 访问端口
        https: false, // 编译失败时刷新页面
        hot: false, // 开启热加载
        hotOnly: false,
        proxy: {
            [process.env.VUE_APP_API]: {
                target: 'http://www.web-jshtml.cn/vue_admin_api/token',
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_API]: ''
                }
            }
        }, // 设置代理
        overlay: { // 全屏模式下是否显示脚本错误
            warnings: true,
            errors: true
        },
        before: app => {
        }
    },
    /**
     * 第三方插件配置
     */
    pluginOptions: {}
}
