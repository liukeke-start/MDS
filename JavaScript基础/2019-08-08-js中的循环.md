## js中的循环

###  一  for循环

- 多次遍历代码块；
- 一个 for 循环会一直重复执行，直到指定的循环条件为 false。 JavaScript 的 for 循环，和 Java、C 的 for 循环，是很相似的。

``` javascript
// 语法
for (语句 1; 语句 2; 语句 3){
  //被执行的代码块
}
/*语句 1 在循环（代码块）开始前执行
语句 2 定义运行循环（代码块）的条件
语句 3 在循环（代码块）已被执行之后执行*/   
 
var x = "";
for (var i = 0; i < 5; i++) {
    x = x + "The number is " + i + ",";
}
console.log(x); // The number is 0,The number is 1,The number is 2,The number is 3,The number is 4,

``` 
###  二  forEach循环遍历

- 常用遍历数组方法：

``` javascript
for (var index = 0; index < myArray.length; index++) {
  console.log(myArray[index]);
}
``` 
- 自JavaScript5之后可以使用内置的forEach方法：

``` javascript
myArray.forEach(function (value) {
  console.log(value);
});
``` 
- 写法虽然简单了，但是也有缺点，你不能中断循环（使用break或者return）。

###   三  for/in循环

- for/in 语句用于对数组或者对象的属性进行循环操作；
- for/in 循环中的代码每执行一次，就会对数组的元素或者对象的属性进行一次操作；
- for/in 循环应该用在非数组对象的遍历上，使用for-in进行循环也被称为“枚举”；

``` javascript
// 语法
for (变量 in 对象){
    //在此执行代码
}
// 一层数据时
var person = {fname:"Bill", lname:"Gates", age:62}; 
var text = "";
var x;
for (x in person) {
    text += person[x];
}
console.log(text) // BillGates62

for (var index in myArray) {    // 不推荐这样
  console.log(myArray[index]);
}
/* 不推荐用for/in来循环一个数组，因为，不像对象，数组的index跟普通的对象属性不一样，是重要的数值序列指标；
- for/in是用来循环带有字符串key的对象的方法。*/

// 两层数据时
var objArray = [{
    pid: "Af22499",
    name: "buluo",
    date: "2019-09-30",
}, {
    pid: "Af22465",
    name: "buluo",
    date: "2019-09-30",
}, {
    pid: "Af22459",
    name: "buluo",
    date: "2019-09-30",
}]
var arr = [];
for (var key in objArray) {
    arr.push(objArray[key].pid);
}
console.log(arr);
``` 

###   四  for/of循环遍历

- JavaScript6里引入了一种新的循环方法，它就是for/of循环，它既比传统的for循环简洁，同时弥补了forEach和for/in循环的短板。
``` javascript
for (var value of myArray) {
  console.log(value);
}
```
- for/of可以循环遍历很多东西：

##### 1、循环一个数组（Array）

``` javascript
let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

##### 2、循环一个字符串

``` javascript
let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

#####3、循环一个类型化的数组（TypedArray）

``` javascript
let iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
  console.log(value);
}
// 0
// 255
```

##### 4、循环一个Map

``` javascript
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3

for (let entry of iterable) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]
```

##### 5、循环一个set

``` javascript
let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

##### 6、循环一个 DOM collection（节点）

- 循环一个DOM collections，比如NodeList，之前我们讨论过如何循环一个NodeList，现在方便了，可以直接使用for-of循环：
``` javascript
// Note: This will only work in platforms that have
// implemented NodeList.prototype[Symbol.iterator]
let articleParagraphs = document.querySelectorAll("article > p");

for (let paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

##### 7、循环一个拥有enumerable属性的对象

- for/of循环并不能直接使用在普通的对象上，但如果我们按对象所拥有的属性进行循环，可使用内置的Object.keys()方法：
``` javascript
for (var key of Object.keys(someObject)) {
  console.log(key + ": " + someObject[key]);
}
```

##### 8、循环一个生成器(generators)

- for/of循环并不能直接使用在普通的对象上，但如果我们按对象所拥有的属性进行循环，可使用内置的Object.keys()方法：
``` javascript
function* fibonacci() { // a generator function
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // truncate the sequence at 1000
  if (n >= 1000) {
    break;
  }
}
```

###  五 while循环

 - 当指定条件为 true 时循环一段代码块
 - while语句属于前测试循环语句，也就是说，在循环体内的代码被执行之前，就会对出口条件求值。因此，循环体内的代码有可能永远不会被执行，
 
``` javascript
// 语法
while (条件) {
    //要执行的代码块
}

var text = "";
var i = 0; // 如果i大于10则代码块不会被执行 console出 空
while (i < 10) {
  text += "<br>数字是 " + i;
  i++;
}
console.log(text);
//数字是 0,数字是 1,数字是 2,数字是 3,数字是 4,数字是 5,数字是 6,数字是 7,数字是 8,数字是 9,

``` 
 
###  六  do/while 

- 当指定条件为 true 时循环一段代码块
- do/while语句是一种后测试循环语句，即只有在循环体中的代码执行之后，才会测试出口条件。换句话说，在对条件表达式求值之前，循环体内的代码至少会被执行一次。
``` javascript
// 语句
do {
    //要执行的代码块
}
while (条件);

// 例子
var text = ""
var i = 0; // 如果i大于10，则代码块会被执行一次，console出 数字是 11,
do {
    text += "数字是 " + i + ",";
    i++;
}
while (i < 10);
console.log(text) 
//数字是 0,数字是 1,数字是 2,数字是 3,数字是 4,数字是 5,数字是 6,数字是 7,数字是 8,数字是 9,
``` 
###  七  Break 语句“跳出”循环。

``` javascript
// 例子
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { 
      break;  // 条件满足时，循环体会跳出停止
  }
  text += "数字是 " + i + ",";
}
console.log(text);
// 数字是 0,数字是 1,数字是 2,
``` 

###  八  Continue 语句

- continue 语句中断（循环中）的一个迭代，如果发生指定的条件。然后继续循环中的下一个迭代。

``` javascript
// 例子 
var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) {
        continue; // 条件满足时，循环体会跳出3，然后继续执行代码块
    }
    text += "数字是 " + i + ",";
}
console.log(text);
// 数字是 0,数字是 1,数字是 2,数字是 4,数字是 5,数字是 6,数字是 7,数字是 8,数字是 9,
``` 