## 截取url上等于号前后的字符串参数
- 有的时候需要截取url上面的参数，就可以这么做。
``` javascript
let map = {};
// Array.prototype.reduce
var search = window.location.search;
    if(search == "" && window.location.href.indexOf("?") != -1){
        search = window.location.href.split("?")[1];
        search = "?" + search;
     }
search.slice(1)
  .split("&")
  .forEach(val => {
  let arr = val.split("=");
  if (arr.length == 0) {
     return;
 }
map[arr[0]] = arr[1];
// 假如当前url为http://10.129.192.182:3000/publish?page=1&status=1
// map的值就为
map = {page:"1", status:"1"}
// page和status的就可以这样取值
map.page
map.status
```