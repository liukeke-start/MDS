## ajax请求
### POST和GET的区别
- Get方式: 
用get方式可传送简单数据，但大小一般限制在1KB下，数据追加到url中发送（http的header传送），也就是说，浏览器将各个表单字段元素及 
其数据按照URL参数的格式附加在请求行中的资源路径后面。另外最重要的一点是，它会被客户端的浏览器缓存起来，那么，别人就可以从浏览器的历史记录中， 
读取到此客户的数据，比如帐号和密码等。因此，在某些情况下，get方法会带来严重的安全性问题。 
- Post方式: 
当使用POST方式时，浏览器把各表单字段元素及其数据作为HTTP消息的实体内容发送给Web服务器，而不是作为URL地址的参数进行传递，使用POST方式传递的数据量要比使用GET方式传送的数据量大的多。 

总之，GET方式传送数据量小，处理效率高，安全性低，会被缓存，而POST反之。 

- Post传输数据时，不需要在URL中显示出来，而Get方法要在URL中显示。 

- Post传输的数据量大，可以达到2M，而Get方法由于受到URL长度的限制,只能传递大约1024字节. 

- Post顾名思义,就是为了将数据传送到服务器段,Get就是为了从服务器段取得数据.而Get之所以也能传送数据,只是用来设计告诉服务器,你到底需要什么样的数据.Post的信息作为http请求的内容，而Get是在Http头部传输的。 

- 注意：尽量避免使用Get方式提交表单，因为有可能会导致安全问题 

####  要点：POST在data里面传参，GET在url上传参。

- 具体代码如下：
``` javascript
function getFun(){
    // 截取当前url的值，赋给 man 根据不同的 后台不同的参数man  显示不同的
    // 这里的man就是模拟截取的url的参数index.html?iv=76&man=xiaomi 这里xiaomi就是参数
    let searchArr = window.location.search.substr(1).split('&'),
        len = searchArr.length,man,strArr;
    for(let i = 0;i < len; i ++){
        strArr = searchArr[i].split('=');
        if(strArr[0] == 'man'){
            man = strArr[1];
            break;
        }
    }
    /* 1.文本："uname=alice&mobileIpt=110&birthday=1983-05-12"
    2.json对象：{uanme:'vic',mobileIpt:'110',birthday:'2013-11-11'}
    3.json数组：
    [
        {"name":"uname","value":"alice"},
        {"name":"mobileIpt","value":"110"},   
        {"name":"birthday","value":"2012-11-11"}
    ] */
    $.ajax({
        type: "GET",
        url: "index.html?iv=76&man=" + man,  // get请求参数在url上，例如传的参数man
        dataType: "json", // 后台接口的数据类型1：纯文本text 2：json对象 3：json数组
        success: function(msg) {
            console.log(msg);
        },
        error: function(e) {
            console.log(e);
        }
    });
    // 建议使用jq中的 get 方法
    $.get(URL,callback);
};
function postFun(maprr){
    $.ajax({
        type: "POST",
        url: "index.html?iv=76&man=xiaomi",
        data: maprr, // 这里 maprr 就是参数
        dataType: "json",
        success: function(msg) {
            console.log(msg);
        },
        error: function(e) {
            console.log(e);
        }
    });
     // 建议使用jq中的 post 方法 
    $.post(URL,data,callback);
    $.post(URL, data, 
        function(msg){
            console.log(msg);
        }).fail(function(e){
            console.log(e);
        }
    );
};
```