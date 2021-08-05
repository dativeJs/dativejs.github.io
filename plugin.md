# Plugin

### Dative Plugin

```js
  var plugin = {
    install(Dative, options){
      Dative.prototype.plugname = options.name || "Plugin Test"
    }
  }
```
### Usage

```js
 Dative.use(plugin);
 // with options
 Dative.use(plugin, { 
    name: "Plugin-namex" 
 })
```