![标志](public/logo.svg)

# **DativeJs - 一个微型 JavaScript 用户界面框架**

![License](assets/img/License-MIT-yellow.svg)
![Version](https://img.shields.io/github/v/release/dativeJs/dativejs)
![repo size](https://img.shields.io/github/repo-size/dativeJs/dativejs)


### 安装
### 下载
```html
<script src="path/to/dative.min.js"></script>
```
### CDN
```html
<!--开发-->
<script src="https://cdn.jsdelivr.net/gh/dativeJs/dativejs@main/dist/dative.js"></script>
<!--生产-->
<script src="https://cdn.jsdelivr.net/gh/dativeJs/dativejs@main/dist/dative.min.js"></script>
```
## 克隆模板
```bash
 git clone https://github.com/dativeJs/dative-template.git
```
## EsModule
```js
import Dative from "https://cdn.jsdelivr.net/gh/dativeJs/dativejs@main/dist/dative.es.min.js"；
```
<!--## NPM
```bash
  npm install dative
```
### 用法
```js
import Dative from 'dative'；
```-->
## 开始

```html
<body>
<div id="app"></div>
<script src="https://cdn.jsdelivr.net/gh/dativeJs/dativejs@main/dist/dative.min.js"></script>
<script>
    // 代码在这里
  </script>
</body>
```

```html
<body>
  <div id="app"></div>
  <script src="https://cdn.jsdelivr.net/gh/dativeJs/dativejs@main/dist/dative.min.js"></script>
  <script>
    var vm = new Dative({
      el: "#app"，
      data: {
        msg: "你好世界"
      },
      template(){
        return `
          <h1 :text="msg"></h1>
        `;
      }
    });
    vm.render()
  </script>
  </body>
```
<note :label="true">
   <h3>I'm not a chinese.<br />
      If You see any misspelled word you can help me to correct it by editing the page</h3>
</note>