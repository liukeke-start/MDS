## ie浏览器常见的兼容问题

###  一  文字透明问题

``` scss
a {
    float: left;  /* 如果不浮动在ie8下就不会透明 */
    opacity: .5;
    filter: alpha(opacity=50);  /* 兼容ie下透明度 */
    &:hover {
        opacity: 1;
        filter: alpha(opacity=100);
    }
}
``` 

###  二  背景透明，文字不透明

``` scss
<div>
    <span class="p"></span>
    <span class="t">我是文字内容</span>
</div>
/* 使用定位，给第一个span背景，第二个span在上面就ok */
.p {
    background-color: #000;
    opacity: .7;
    filter: alpha(opacity=70);
}
``` 

###  三  初始化没有文字，鼠标浮动上去的时候有文字

``` scss
p {
    /* 要给宽和高然后overflow */
    width: 30px; 
    /* IE 8 及低于IE8版本 */
    width: 30px\9;
    height: 30px;
    text-indent: -999px;  /* 单位使用px，rem不兼容ie8及以下 */
    overflow: hiddenl;
    &:hover {
      text-indent: 0;
    }
}
``` 

###  四  当banner是1920的时候，怎么布局

``` scss
<div class="banner">
    <div class="bannerWrap">如果要居中，我就是内容，否则不用写</div>
</div>
.banner {
    width: 100%;
    height: 100px;  /* 要给图片的实际高，要不然撑不起来 */
    background: url(/assets/banner1.png) no-repeat center top;
}
/* 如果有内容要一直居中的话，就在定位一个div给个版心 margin: 0 auto; 然后让内容定位或者居中就行 */
.bannerWrap {
    width: 1200px;
    margin: 0 auto; 
}
``` 

###  五  兼容ie+浏览器的轮播图插件

- superslide插件地址： http://www.superslide2.com/index.html
``` javascript
// 事件需要绑定给body如果绑定给window不兼容ie8-
$('body').mousewheel(function(event) {
    // 判断鼠标滚动方向，上为正数，下为负数
    var event = event || window.event;
    var delta = event.originalEvent.wheelDelta;
    if (delta > 0) { // 鼠标向上滚，向后翻
        jQuery('.prev').trigger('click'); //当用 jquery-mousewhee库给轮播图加鼠标滑动翻页的时候，只需要引用向前向后翻页的点击事件就行
    } else { // 鼠标向下滚，向前翻
        jQuery('.next').trigger('click');
    }
})
``` 

###  六  兼容ie6+的鼠标滚动事件库

- jquery-mousewheel库的git地址：https://github.com/jquery/jquery-mousewheel/blob/master/jquery.mousewheel.js?tdsourcetag=s_pcqq_aiomsg
-  jquery-mousewheel库的npm地址：https://www.npmjs.com/package/jquery-mousewheel