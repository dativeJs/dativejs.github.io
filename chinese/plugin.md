# 插件

### Dative 插件

```js
   var plugin = {
     install(Dative，options){
       Dative.prototype.plugname = options.name || "插件测试"
     }
   }
```
### 用法

```js
  Dative.use(plugin);
  // 带选项
  Dative.use（plugin，{
     name："插件名称"
  })
```