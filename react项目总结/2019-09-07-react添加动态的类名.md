## react项目总结
- 问题描述：react添加动态的类名
- 解决办法：
``` javascript
// 函数
next(index) {
    if( //判断条件1 ) {
      return 'active last'
    } else if( //判断条件2 ) {
      return 'active'
    } else{
    }
}
<div className={ this.next(index)}></div>
``` 