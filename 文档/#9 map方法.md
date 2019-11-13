## map����
- map() ��������һ�������飬�����Ǹ������е�ÿ��Ԫ�ض�����һ���ṩ�ĺ����󷵻صĽ����

- map() ��������һ�������飬�����е�Ԫ��Ϊԭʼ����Ԫ�ص��ú���������ֵ��

- map() ��������ԭʼ����Ԫ��˳�����δ���Ԫ�ء�

- ע�⣺ map() ����Կ�������м�⡣

- ע�⣺ map() ����ı�ԭʼ���顣
- ֧��ie9+��

``` javascript
// �﷨
array.map(function(currentValue,index,arr), thisValue)
```

### �� JavaScript ����������Ⱦ�б�

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

### ���¸�ʽ���������


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