- ``el 或目标``

#### el 或 target 是应用程序的目标
  
  ```js
var mv = new Dative({
  el: "#app"
})
// 要么
var mv = new Dative({
  el: "#app"
})
  ```
- ``数据``

#### 数据可以是函数也可以是对象

```js

  var mv = new Dative({
    el: "#app",
    data: {
      msg: "与物"
    }
  })
  //要么
  var mv = new Dative({
    el: "#app",
    data: function(){
      return {
        msg: "与物"
      }
    }
  })
  // 要么
  var mv = new Dative({
    el: "#app",
    data: ()=>({
      msg: "与物"
    })
  })

```

- ``方法``

#### 方法是应用程序的事件监听器

```html
  <script type="text/dative">
    <h1>{{ name }}</h1>
    <button on:click="change">更改</button>
  </脚本>
```
```js
 var mv = new Dative({
   el: "#app",
   data: function(){
     return {
      name: "与物"
     }
   },
   methods：{
    change(){
      this.data.name += "一个微型用户界面框架"
     }
   }
  })
  mv.render()
```
- ``计算``
检查[此处计算的属性](/chinese/computed)

- ``安装``

#### Mounted 函数是应用程序挂载时使用的函数

```js
 var mv = new Dative({
    el: "#app",
    data: function(){
      return {
       name: "哇"
      }
    },
    mounted{
       this.data.name = "DativeJs 是一个微型 Ui 框架"
    }
   })
   mv.render()
```

- ``创建``

#### Created 函数是在创建应用程序时使用的函数

```js
 var mv = new Dative({
    el: "#app",
    data(){
      return {
       name: "哇"
      }
    },
    created(){
       this.data.name = "DativeJs 是一个微型 Ui 框架"
    }
   })
   mv.render()
```

- ``更新``

#### Update 函数是应用程序更新时使用的函数

```js
 var mv = new Dative({
    el: "#app",
    data(){
      return {
        name: "哇"
      }
    },
    update(){
       console.log("是的，它已经更新了")
    }
   })
   mv.render()
```