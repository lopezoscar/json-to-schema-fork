## JSON TO JSON-Schema

FORK from https://www.npmjs.com/package/json-to-schema



convert raw JSON to json-schema.

```
npm install json-to-schema-fork --save
```

## 使用

```javascript
var JSONToSchema = require( 'json-to-schema-fork' );


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

[GITHUB](https://github.com/lopezoscar/json-to-schema-fork)

