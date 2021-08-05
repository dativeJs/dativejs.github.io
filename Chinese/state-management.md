# 状态管理

```js
  var {reactive } = Dative;
 
  var SourceofTruth = reactive({
    name："dative"
  })
 
  var vm = new Dative({
    el: "#app",
    data：SourceofTruth
  })
  vm.render()

  var app = new Dative({
    el: "#root",
    data：SourceofTruth
  })
  app.render()
 
  // 它应该更新两个应用程序
 
  SourceofTruth.name = "Tobithedev";
 
```