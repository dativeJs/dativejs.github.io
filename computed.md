# Computed Property

Computed properties allow us to define a property that is used the same way as data, but can also have some custom logic that is cached based on its dependencies

```js
 computed:{
   fullname: function(){
     return this.firstname + ' Tobithedev'
   }
 }
```

```js
  var vm = new Dative({
     el: "#app",
     data:()=>({
       name: "Dev"
     }),
     template(){
       return `
         <h1>{{ fullname }}</h1>
       `
     },
     computed:{
       fullname(){
         return "Tobithe"+this.name
       }
     }
   })
   vm.render()
```