## JSON TO JSON-Schema

给定数据转化为json-schema定义. FORK from https://www.npmjs.com/package/json-to-schema



convert raw JSON to json-schema.

效果请看[Demo](http://groups.alidemo.cn/jsonnanny/json-to-schema/test/index.html)

## 安装



```
tbower install json-to-schema --save
```

NPM

```
npm install json-to-schema --save
```

## 使用

```javascript
var JSONToSchema = require( 'json-to-schema' );
\\ 如果在浏览器中又不借助包管理，则window.JSONToSchema

console.log( JSONToSchema( {
    name: 'lalal',
    age: 12
});

/**
 * output:
 {
    type: 'object',
    description: '',
    properties: {
        name: {
            type: 'string',
            description: ''
        },
        age: {
            type: 'integer',
            description: ''
        }
    }
 }
 */
```

