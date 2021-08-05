# **List Rendering**

For ListRendering in DativeJs You Use ``map()``.

Like this:

```js
 var vm = new Dative({
   el: "#app",
   data:()=>({
     items: ['doing things','learning']
   }),
   template(){
     return `
       ${
         this.data.items.map((item)=>{
           return `
            <li>${item}</li>
           `
         }).join('')
       }
     `
   }
 })
 vm.render()
```
#### Output
- doing things
- learning
