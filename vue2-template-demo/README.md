# vue2-template-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 环境信息
node: 20.12.1 | @vue/cli: 5.0.8 | npm 淘宝镜像源

### 部分代码参考
vue-admin-template：https://github.com/PanJiaChen/vue-admin-template

### 额外插件说明
babel-plugin-component：用于 Element UI 组件的按需引入。
script-ext-html-webpack-plugin：Webpack 插件，用于向 HTML 文件中动态添加或修改 script 标签的属性。
autoprefixer：PostCSS 插件，自动添加浏览器前缀。
cssnano：PostCSS 插件，压缩和优化 CSS 代码。
postcss-preset-env：PostCSS 插件，使用未来的 CSS 语法。

### 修改记录
2021/10/13
    改动："gitHooks": { "pre-commit": "lint-staged" } => "gitHooks": { "pre-commit": "echo 'Skipping lint checks'" }
    文件：package.json
    描述：get commit 时 lint 会自动格式化代码，于是我禁用了 get commit 时的代码 lint。
