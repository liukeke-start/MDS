## js中的event对象
- event 对象是 JavaScript 中一个非常重要的对象，用来表示当前事件。event 对象的属性和方法包含了当前事件的状态。
- 当前事件，是指正在发生的事件；状态，是与事件有关的性质，如 引发事件的DOM元素、鼠标的状态、按下的键等等。
- event 对象只在事件发生的过程中才有效。

#### 获取event对象
- 在 W3C 规范中，event 对象是随事件处理函数传入的，Chrome、FireFox、Opera、Safari、IE9.0及其以上版本都支持这种方式；但是对于 IE8.0 及其以下版本，event 对象必须作为 window 对象的一个属性。
- 在遵循 W3C 规范的浏览器中，event 对象通过事件处理函数的参数传入。
``` javascript
// 语法
elementObject.OnXXX = function(e){
    var eve = e; // 声明一个变量来接收 event 对象
}
```
- 对于 IE8.0 及其以下版本，event 必须作为 window 对象的一个属性。
``` javascript
// 语法
elementObject.OnXXX = function(){
    var eve = window.event; // 声明一个变量来接收event对象
}
```

``` javascript
// 经典代码
elementObject.OnXXX = function(e){
    var eve = e || window.event;  // 使用 || 运算取得event对象
}
```
- 这里要注意一点， || 运算的返回值不一定是 Boolean 类型，当 || 运算的两个操作数中有一个为真时，将返回该操作数本身的值。上面的代码，如果 event 随函数的参数传入，e 为真，eve = e；如果作为 window 对象的属性，window.event 为真，eve = window.event 

#### event对象常用属性和方法
- event 对象用来表示当前事件，事件有很多状态，例如，鼠标单击时的位置，按下键盘时的按键，发生事件的HTML元素，是否执行默认动作，是否冒泡等，这些都是作为event对象的属性和方法存在的。要想获得相应的状态，就要访问对应的属性和方法。
![enter image description here](https://i.loli.net/2019/12/09/KRQjIB3UDCSogl9.png)
![enter image description here](https://i.loli.net/2019/12/09/sG6AJr2P1kFpjel.png)
- 例如一个点击事件中的e
![enter image description here](https://i.loli.net/2019/12/09/H9bTdCQls2KhXYt.png)
![enter image description here](https://i.loli.net/2019/12/09/rLvN8c26leYsXjI.png)