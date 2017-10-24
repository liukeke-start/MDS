## react项目总结
- 问题描述：兑换礼物用户手动输入数量无法输入
- 解决办法：
``` javascript
constructor(props) {
  super(props);
    this.state = {
     };
     //这里需要加上 handleChange
    this.handleChange = this.handleChange.bind(this);
}
// 解决用户不能输入以及判断输入的是否为数字
handleChange(event) {
  var old = this.state.value;    // 页面最原始的value
  var val = event.target.value;  //用户输入的值
    if(isNaN(val)) {
       // 如果输入的不是数字的话，就赋值给它用户输入的最后一次是数字的值
       this.setState({value: old});
     }else {
       // 如果输入的是数字的话，就赋值给它用户输入的值
       if( val != 0) {
          this.setState({value: event.target.value});
       }else {
         return;
       }
     }
}
``` 