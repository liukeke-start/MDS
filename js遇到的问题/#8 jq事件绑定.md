## jq事件绑定
- 点击事件最后动态生成的节点，无法绑定事件。
- 当整个html文档加载完毕的时候，所有的事件其实已经执行完毕了，当我们点击li的时候，我们的DOM重新生成，可是js事件并不会重新渲染当前新DOM。因此无法给动态生成的li加上点击事件。
###  1.bind
- bind(type,[data],function(eventObject))  bind是使用频率较高的一种，作用就是在选择到的元素上绑定特定事件类型的监听函数。
- bind的特点就是会把监听器绑定到目标元素上，有一个邦一个，在页面上的元素不会动态添加的时候使用它没有什么问题。
- 但如果列表中动态增加一个“列表5”，点击它是没有反应的，必须再bind一次才行。（不推荐，1.7以后的jQuery版本被on取代）
- 优点：可以同时绑定多个事件，比如：bind(“mouseenter  mouseleave”, function(){})
- 缺点：仍然无法给动态创建的元素绑定事件。

事件解绑：unbind() 方式
``` javascript
$(selector).unbind(); //解绑所有的事件
$(selector).unbind(“click”); //解绑指定的事件
```
### 2.live
- 通过 live() 方法添加的事件处理程序适用于匹配选择器的当前及未来的元素（比如由脚本创建的新元素）,使用事件委托的优点一目了然，新添加的元素不必再绑定一次监听器。

注意：live方法在在 jQuery 版本 1.7 中被废弃，在版本 1.9 中被移除，官方建议使用on代替。
### 3.delegate
- 将监听事件绑定在就近的父级元素上，
- delegate() 方法为指定的元素（属于被选元素的子元素）添加一个或多个事件处理程序，这下又多了一些灵活性，不单可以利用事件委托，还可以选择委托的对象。
- 作用：给匹配到的元素绑定事件，对支持动态创建的元素有效（特点：性能高，支持动态创建的元素）。

注意：mouseover与mouseenter的区别：mouseover冒泡，mouseenter不冒泡

事件解绑：undelegate() 方式
``` javascript
$( selector ).undelegate(); //解绑所有的delegate事件
$( selector).undelegate( “click” ); //解绑所有的click事件
```
### 4.on
- 参数与delegate差不多但还是有细微的差别，首先type与selector换位置了，其次selector变为了可选项。on() 方法在被选元素及子元素上添加一个或多个事件处理程序。
- 自 jQuery 版本 1.7 起，on() 方法是 bind()、live() 和 delegate() 方法的新的替代品。（最现代的方式，强烈建议使用的方式）。作用：给匹配的元素绑定事件，包括了上面所有绑定事件方式的优点
``` javascript
//参数1：events，绑定事件的名称可以是由空格分隔的多个事件
//参数2：selector, 执行事件的后代元素
//参数3：data，传递给处理函数的数据，事件触发的时候通过event.data来使用
//参数4：handler，事件处理函数
$(selector).on(events[,selector][,data],handler);

//表示给$(selector)绑定事件，但必须是它的内部元素span才能执行这个事件
$(selector).on( "click",“span”, function() {});
// 绑定多个事件
// 表示给$(selector)匹配的元素绑定单击和鼠标进入事件
$(selector).on(“click mouseenter”, function(){});

```

事件解绑：off() 方式
``` javascript
// 解绑匹配元素的所有事件
$(selector).off();
// 解绑匹配元素的所有click事件
$(selector).off(“click”);
// 解绑所有代理的click事件，元素本身的事件不会被解绑
$(selector).off( “click”, “**” );
```
### 5.demo
``` htmlbars
<ul>
	<li>列表1</li>
	<li>列表2</li>
	<li>列表3</li>
	<li>列表4</li>
	<li>列表5</li>
</ul>
```
``` javascript
// 修改前
$("ul li").on("click",function() {
		var a = '<li>列表6</li>';
		$("ul li").eq(4).after(a);
		console.log(123);
});
// 修改后
$("ul").delegate("click","li", function() {
		var a = '<li>列表6</li>';
		$("ul li").eq(4).after(a);
		console.log(123);
});
// 建议使用on
$("ul").on("click","li", function() {
		var a = '<li>列表6</li>';
		$("ul li").eq(4).after(a);
		console.log(123);
});
```