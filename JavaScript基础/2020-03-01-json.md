## json
- JSON 是用于存储和传输数据的格式；
- JSON 通常用于服务端向网页传递数据。
### 语法规测 
- 数据为 键/值 对；
- 数据由逗号分隔；
- 大括号保存对象；
- 方括号保存数组。
### JSON 数据 - 一个名称对应一个值
- JSON 数据格式为 键/值 对，就像 JavaScript 对象属性。
- 键/值对包括字段名称（在双引号中），后面一个冒号，然后是值：
```javascript
"name":"Runoob"
```
### JSON 对象
- JSON 对象保存在大括号内。
- 就像在 JavaScript 中, 对象可以保存多个 键/值 对：
```javascript
{"name":"Runoob", "url":"www.runoob.com"}
//访问对象值  你可以使用点号（.）来访问对象的值：
var myObj, x;
myObj = { "name":"runoob", "alexa":10000, "site":null };
x = myObj.name;
// 你也可以使用中括号（[]）来访问对象的值：
x = myObj["name"];
```
- 循环对象：你可以使用 for-in 来循环对象的属性：就像在 JavaScript 中, 对象可以保存多个 键/值 对：
- 在 for-in 循环对象的属性时，使用中括号（[]）来访问属性的值：
```javascript
var myObj = { "name":"runoob", "alexa":10000, "site":null };
for (x in myObj) {
    console.log(x); // name  alexa  site  打印的json的属性
    console.log(myObj[x]) // runoob 10000 null  打印的json属性的值
}
```
- 嵌套 JSON 对象
- JSON 对象中可以包含另外一个 JSON 对象：
```javascript
var myObj = {
    "name":"runoob",
    "alexa":10000,
    "sites": {
        "site1":"www.runoob.com",
        "site2":"m.runoob.com",
        "site3":"c.runoob.com"
    }
}
// 你可以使用点号(.)或者中括号([])来访问嵌套的 JSON 对象。
x = myObj.sites.site1;
// 或者
x = myObj.sites["site1"];
// 修改值
myObj.sites.site1 = "www.google.com";
myObj.sites["site1"] = "www.google.com";
// 删除值
delete myObj.sites.site1;
delete myObj.sites["site1"]
```
###JSON 数组
- JSON 数组保存在中括号内。
- 就像在 JavaScript 中, 数组可以包含对象：
```javascript
//数组作为 JSON 对象
[ "Google", "Runoob", "Taobao" ];
// JSON 对象中的数组
{
    "name":"网站",
    "num":3,
    "sites":[ "Google", "Runoob", "Taobao" ]
}
//嵌套 JSON 对象中的数组
var myObj = {
    "name":"网站",
    "num":3,
    "sites": [
        { "name":"Google", "info":[ "Android", "Google 搜索", "Google 翻译" ] },
        { "name":"Runoob", "info":[ "菜鸟教程", "菜鸟工具", "菜鸟微信" ] },
        { "name":"Taobao", "info":[ "淘宝", "网购" ] }
    ]
}
// 我们可以使用 for-in 来循环访问每个数组：
for (i in myObj.sites) {
    console.log(myObj.sites[i].name);
    for (j in myObj.sites[i].info) {
        console.log(myObj.sites[i].info[j])
    }
}
```
### JSON转换成为JS
- 1.处理：用jQuery的一个方法$.parseJSON()将JSON格式的数据转成JS对象
```javascript
var json_data = $.getJSON();
var data = $.parseJSON(json_data);
```
- 2.将json转换成js对象的方法：
```javascript
var json = eval('(' + result + ')');
```
- 3.我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象。
语法：JSON.parse(text[, reviver])
参数： text:必需， 一个有效的 JSON 字符串。 reviver: 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。
- 4.JSON.stringify()
JSON.stringify(value[, replacer[, space]])
``` javascript
// 例子 让c d里面都有a b
let depart = 'a',
role = 'b',
userid = ['c','d'];
let all = {List:[]};
for(let i = 0; i < userid.length; i++){
    let singal = {departId: depart,roleId: role,userId:userid[i]};
    all.List.push(singal);
}
```
