'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 9527 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  outputDir: 'dist',
  // 设置静态资源（js、css、img、fonts）文件（相对于 outputDir）的输出目录。
  assetsDir: 'static',
  // 设置 index.html 文件（相对于 outputDir）的输出路径。也可以设置一个绝对路径。
  indexPath: 'index.html',
  filenameHashing: true,
  // 设置是否在开发环境下使用 eslint-loader 加载器在每次保存代码时 lint 代码。
  // 这个值会在 @vue/cli-plugin-eslint 包被安装之后生效。
  lintOnSave: process.env.NODE_ENV === 'development',
  runtimeCompiler: false,
  transpileDependencies: false,
  productionSourceMap: false,
  devServer: {
    // 配置开发服务器的端口号。
    port: port,
    // 在启动开发服务器后自动打开浏览器。
    open: true,
    // 配置请求的代理服务器，解决开发阶段的跨域问题。
    proxy: {
      '/dev-api': {
        // 目标服务器的地址。
        target: 'http://www.baidu.com:8080',
        // 支持 websocket 请求的代理。
        ws: true,
        // 代理服务器转发请求时请求头中的 host 值是否伪装。
        changeOrigin: true,
        // localhost:8080/dev-api/login ==> http://www.baidu.com:8080/login
        pathRewrite: {
          '^/dev-api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      // 设置路径别名。
      alias: {
        '@': resolve('src'),
        'm-ui': resolve('src/components/m-ui')
      }
    }
  },
  chainWebpack: config => {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.plugin('html').tap(args => {
      args[0].title = '项目模板'
      return args
    })

    // 关闭 Webpack 的性能提示。
    config.performance.hints(false)

    // 下面的这三项有待配置。
    // it can improve the speed of the first screen, it is recommended to turn on preload.
    // when there are many pages, it will cause too many meaningless requests.
    // set svg-sprite-loader

    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }
        ])
        .end()
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      })
      // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk('single')
    })
  }
}
