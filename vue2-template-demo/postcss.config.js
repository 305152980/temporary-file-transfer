module.exports = {
  plugins: {
    // autoprefixer 插件：自动添加浏览器前缀。
    autoprefixer: {},
    // cssnano 插件：压缩和优化 CSS 代码。
    cssnano: {
      preset: 'default'
    },
    // postcss-preset-env 插件：使用未来的 CSS 语法。
    'postcss-preset-env': {}
  }
}
