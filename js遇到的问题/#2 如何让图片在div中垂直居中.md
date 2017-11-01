## 如何让图片在div中垂直居中
- 问题描述：如何让图片在div中垂直居中
- 解决办法：
``` javascript
// 水平居中
dispaly: block;
margin: 0 auto;
//垂直居中 高度知不知道都可以用
用js算出（div的高度-图片的高度）/2，得到margin-top值赋给它。
``` 