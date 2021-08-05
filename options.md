- ``el or target``

#### The el or target  is the target for the application
  
  ```js
var mv = new Dative({
  el: "#app"  
})
// Or
var mv = new Dative({
  target: "#app"  
})
  ```
- ``data`` 

####  The data can be either a function or an object

```js

  var mv = new Dative({
    el: "#app",
    data: {
      name: "Dative"
    }
  })
  //Or
  var mv = new Dative({
    el: "#app",
    data: function(){
      return {
        name: "Dative"
      }
    }
  })
  // or
  var mv = new Dative({
    el: "#app",
    data:()=>({
      name: "Dative"
    })
  })

```

- ``methods``

#### The methods is the event listeners for the application

```html
  <script type="text/dative">
    <h1>{{ name }}</h1>
    <button on:click="change">Change</button>
  </script>
```
```js
 var mv = new Dative({
   el: "#app",
   data: function(){
     return {
      name: "Dative"
     }
   },
   methods:{
    change(){
      this.data.name += " A Micro Ui Framework"
     }
   }
  }) 
  mv.render()
```
- ``computed``
Check [computed property here](/computed)

- ``mounted``

#### The Mounted function is a function thats been used when the application has mounted

```js
 var mv = new Dative({
    el: "#app",
    data: function(){
      return {
       name: "wow"
      }
    },
    mounted(){
       this.data.name = "DativeJs is A Micro Ui Framework"
    }
   }) 
   mv.render()
```

- ``created``

#### The Created function is a function thats been used when the application has been created

```js
 var mv = new Dative({
    el: "#app",
    data: function(){
      return {
       name: "wow"
      }
    },
    created(){
       this.data.name = "DativeJs is A Micro Ui Framework"
    }
   }) 
   mv.render()
```

- ``update``

#### The Update function is a function thats been used when the application has updated

```js
 var mv = new Dative({
    el: "#app",
    data: function(){
      return {
       name: "wow"
      }
    },
    update(){
       console.log("yes it has updated")
    }
   }) 
   mv.render()
```