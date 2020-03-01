## react项目总结
- 问题描述：div中图片过大，导致图片压缩变形
- 解决办法：
``` javascript
componentDidMount() {
    // this.big_image这是从后台获取的图片
    this.refs["bigImg"].src = this.big_image;
    this.refs["bigImg"].onload =(e)=>{
        var imgHeight = this.refs["bigImg"].height,
             imgWidth = this.refs["bigImg"].width;
        var height = 108, // div的高度和宽度
            width = 108;
        // 图片的高度大于图片的宽度，图片的高度小于图片的宽度2种情况
        if(imgHeight > imgWidth){
            imgWidth = Math.floor(imgWidth * height / imgHeight);
            imgHeight = height;
        }else{
            imgHeight = Math.floor(imgHeight * width / imgWidth);
            imgWidth = width;
        }
        // 之后在赋值给img
        this.refs["bigImg"].style.width = imgWidth + "px";
        this.refs["bigImg"].style.height = imgHeight + "px";
        this.refs["bigImg"].style.display = "block";
        // 如果图片的高小于div的高，让它垂直居中，给出margin-top
        var marginTop = (108 - imgHeight)/2;
        if(imgHeight<108){
            this.refs["bigImg"].style.marginTop = marginTop + "px";
        }
    }
}
// 在render()中
<img ref="bigImg"/>
``` 