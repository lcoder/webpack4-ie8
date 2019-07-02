### webpack4的模块系统兼容IE8方案

`webpack.config.js `中引入`webpack-ie8-plugin`

```javascript
const ie8 = require( "./webpack-ie8-plugin/index" )

module.exports = {
    plugins: [ 
        new ie8() ,
    ]
}
```

目的：直接pollfill，IE8的Object.defineProperty方法

在script中通过src引入`./webpack-ie8-plugin/template`也可以。

参考：
- [如何让React(anujs)跑在IE8上](https://zhuanlan.zhihu.com/p/39103023)