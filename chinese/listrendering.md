# **列表渲染**

对于 DativeJs 中的 ListRendering，您使用 ``map()``.

像这样：

```js
  var vm = new Dative({
    el: "#app",
    data:()=>({
      items: ['做事','学习']
    }),
    template(){
      return `
        ${
          this.data.items.map((item)=>{
            return `
             <li>${item}</li>
            `
          }).join("")
        }
      `
    }
  })
  vm.render()
```
### 输出
- 做事
- 学习