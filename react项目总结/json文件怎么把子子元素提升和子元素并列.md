#react项目总结
- 问题描述：json文件怎么把子子元素提升和子元素并列
``` javascript
{
    "status": 1,
    "msg": "",
    "dada":[
        {
        "id": "15",
        "supplier_id": "23",
        "subBills": [
              {
                  "id":"12",
                  "product": "A",
                  "supplier_id": "23",
              }
         ]
       }       
    ]
}
``` 
- 解决办法：
``` javascript
let data = [];
    if( typeof msg.data !== "string") {
        msg.data && msg.data.forEach(o => {
            data.push(o);
            o.subBills.forEach(o => {
              data.push(o);
        });
    });
}
``` 