## react项目总结
- 问题描述：如何获取url链接上斜杠/后的内容以及点击tab切换跳到另一个页面相应的tab上
- 解决办法：
``` javascript
//从子组件获取
constructor(props) {
		super(props);
		this.state = { 
		// 判断是否为undefied
			currentIndex : this.props.currentIndex !== undefined ? this.props.currentIndex : 0
		}
}
// 父组件中引用
this.show = null;
if(props.location){      
    let arr = props.location.pathname.split("/");
    this.show = parseInt(arr[arr.length -1 ]);
}
// 判断不是的话，就默认的第一个显示
ishow() {
    if(this.show){
      return 1;
    }else{
      return 0;
    }
  }
// 引用组件
 <Tabs  currentIndex={this.ishow()}>
``` 