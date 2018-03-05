###   iframe嵌套

####  演示代码
- css部分
``` css
<style type="text/css">
    html, body {
	    height: 100%;
	    width: 100%;
    }
    body {
	    overflow: hidden;
    }
</style>
```
- html部分
``` htmlbars
<div class="content" id="container">
    <iframe id="iFrame1" name="iFrame1" width="100%" height="9000" frameborder="0" src="嵌套页面的地址"></iframe>
    <!-- <iframe id="iFrame1" name="iFrame1" width="100%" frameborder="0" src="http://news.ifeng.com/mainland/special/19th/"></iframe>  -->
    <script>
        function render() {
            var iframe = document.getElementById('iFrame1');
            var h = window.innerHeight || (document[document.compatMode == 'CSS1Compat' ? 'documentElement': 'body'].clientHeight);
            iframe.style.height = (h - 50) + 'px';
            // iframe.style.height = '4345' + 'px';
        }
        render();
        var addEvent = function(element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + type, handler);
            } else {
                element['on' + type] = handler;
            }
        }
        addEvent(window, 'resize',
        function() {
            render();
        });
    </script>
</div>
``` 
