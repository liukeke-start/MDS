### js����ν�objectת��Ϊjson���ݣ�json����תjs����

#### js����תjson����:  JOSN.stringify();
- ���ã�JSON.stringify() �������ڽ� JavaScript ֵת��Ϊ JSON �ַ�����
- �﷨��JSON.stringify(value[, replacer[, space]])��
- ����ֵ�����ذ��� JSON �ı����ַ�����
```javascript
// ����   
let arr = {
    name: 'С��',
    age: '12'��
}
// ת��֮��ȡֵarr.name
JSON.stringify(arr) // ��ת��֮ǰ��ȡֵ arr['name']
```

#### json����תjs����:  JSON.parse();
- ���ã�JSON.parse() �������ڽ�һ�� JSON �ַ���ת��Ϊ����
- �﷨��SON.parse(text[, reviver])��
- ����ֵ�����ظ��� JSON �ַ���ת����Ķ���
```javascript
// ����   
let arr = {
    'name': 'С��',
    'age': '12'��
}
// ��ת��֮ǰ��ȡֵ arr['name']
JSON.parse(arr) // ת��֮��ȡֵarr.name
```