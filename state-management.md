# State Management

```js
 var { reactive } = Dative;
 
 var SourceofTruth = reactive({
   name: "dative"
 })
 
 var vm = new Dative({
   el: "#app",
   data: SourceofTruth
 })
 vm.render()

 var app = new Dative({
   el: "#root",
   data: SourceofTruth
 })
 app.render()
 
 // it should update the two applications
 
 SourceofTruth.name = "Tobithedev";
 
```