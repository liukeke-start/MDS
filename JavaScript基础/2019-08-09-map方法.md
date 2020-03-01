## map方法
- map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

- map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

- map() 方法按照原始数组元素顺序依次处理元素。

- 注意： map() 不会对空数组进行检测。

- 注意： map() 不会改变原始数组。
- 支持ie9+。

``` javascript
// 语法
array.map(function(currentValue,index,arr), thisValue)
```

### 在 JavaScript 库中用于渲染列表

``` javascript
import React from "react";
import ReactDOM from "react-dom";
 
const names = ["john", "sean", "mike", "jean", "chris"];
 
const NamesList = () => (
  <div>
    <ul>{names.map(name => <li key={name}> {name} </li>)}</ul>
  </div>
);
 
const rootElement = document.getElementById("root");
ReactDOM.render(<NamesList />, rootElement);
```

### 重新格式化数组对象


``` javascript
const myUsers = [
    { name: 'chuloo', likes: 'grilled chicken' },
    { name: 'chris', likes: 'cold beer' },
    { name: 'sam', likes: 'fish biscuits' }
];
const usersByFood = myUsers.map(item => {
    const container = {};
 
    container[item.name] = item.likes;
    container.age = item.name.length * 10;
 
    return container;
});
console.log(usersByFood);
// [{chuloo: "grilled chicken", age: 60}, {chris: "cold beer", age: 50}, {sam: "fish biscuits", age: 30}]
```