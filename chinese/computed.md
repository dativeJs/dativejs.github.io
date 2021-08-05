# 计算属性

计算属性允许我们定义一个属性，它的使用方式与数据相同，但也可以有一些基于其依赖项缓存的自定义逻辑

```js
  computed: {
    fullname: functio(){
     return this.firstname + 'Tobithedev'
    }
  }
```

```js
   var vm = new Dative({
      el: "#app",
      data: ()=>({
        name: "Dev"
      }),
      template(){
       return `
          <h1>{{ fullname }}</h1>
        `
      },
      computed: {
        fullname(){
          return "Tobithe"+this.name
        }
      }
    })
    vm.render()
```