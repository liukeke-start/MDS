## react项目总结
- 问题描述：如何获取拼接到url链接上的参数
- 解决办法：
``` javascript
export function queryString(key) {
  let map = {};
  // Array.prototype.reduce
  window.location.search
    .slice(1)
    .split("&")
    .forEach(val => {
      let arr = val.split("=");
      if (arr.length == 0) {
        return;
      }
      map[arr[0]] = arr[1];
    });

  return key ? map[key] : map;
}
// 引用案例 标题 图片  id 都可以截取
// cart.html?id=29&title=金士顿（Kingston)%20DT101G2%2016G%20U盘%20黑色&price=1890&big_image=http://p2.123.sogoucdn.com/imgu/2017/10/20171013101643_664.jpg
queryString("id")
``` 