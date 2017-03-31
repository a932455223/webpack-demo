#### 异步加载component

```javascript
require.ensure([],function(){
    this.setState({
        com:require('./Hello')
    })
})

//调用这个组件
<this.state.com />
```
