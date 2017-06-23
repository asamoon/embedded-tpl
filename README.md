# embedded-tpl

> customize template for embedded components, use wepack2 + vue2

## Usage

This is a project template for vue-cli.

install vue-cli:
```
$ npm install -g vue-cli
```

```
$ vue init asamoon/embedded-tpl my-project
$ cd my-project
$ yarn install
$ npm run dev
```

serve with hot reload at localhost:3000


## 在專案中嵌入

```diff
<!DOCTYPE html>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>DEMO</title><link href="./embedded-tpl_files/app.d89523753ce1397bde1d5baec19c926e.css" rel="stylesheet"></head><body>
<div id="app">
  <h1>DEMO</h1>
// 像自定義元件一樣使用組件
+  <hello></hello>
</div>

// 引用 vue
+<script src="https://unpkg.com/vue@2.3.4/dist/vue.js"></script>

// 嵌入自有組件與引用的第三方插件
+<script type="text/javascript" src="./static/js/manifest.54f19be4cc83738020da.js"></script>
+<script type="text/javascript" src="./static/js/vendor.66bfd12c37e3d7d60804.js"></script>
+<script type="text/javascript" src="./static/js/app.d723740db036e8bd4a21.js"></script>

// 创建一个 Vue 的根实例，並掛載至 #app 中
// 注意要在 app.js 之後加入，否則無法取得組件
+<script type=text/javascript>
+var app = new Vue({
+  el: '#app'
+})
+</script>

</body></html>
```


## What's Included

- vue-router
- vuex
- postcss-loader
- postcss-cssnext
- node-sass
- sass-loader
