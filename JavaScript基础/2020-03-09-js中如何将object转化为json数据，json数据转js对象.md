### js中如何将object转化为json数据，json数据转js对象

#### js对象转json数据:  JOSN.stringify();
- 作用：JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
- 语法：JSON.stringify(value[, replacer[, space]])。
- 返回值：返回包含 JSON 文本的字符串。
```javascript
// 例子   
let arr = {
    name: '小明',
    age: '12'，
}
// 转换之后取值arr.name
JSON.stringify(arr) // 不转换之前的取值 arr['name']
```

#### json数据转js对象:  JSON.parse();
- 作用：JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
- 语法：SON.parse(text[, reviver])。
- 返回值：返回给定 JSON 字符串转换后的对象。
```javascript
// 例子   
let arr = {
    'name': '小明',
    'age': '12'，
}
// 不转换之前的取值 arr['name']
JSON.parse(arr) // 转换之后取值arr.name
```