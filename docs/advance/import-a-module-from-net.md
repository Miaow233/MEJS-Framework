# 导入网络包

```js
/**
 * 加载外部js，支持本地导入
 * 这种import的写法只支持es6 module，然而先在有些库没有以es6的方式导出，那怎么办呢？
 * 可以在URL的尾部加上#xxx，比如这里的#default QRCode就相当于export default QRCode;
 * 本地导入路径为相对路径（相对于DIC文件夹下）
 */
import qr from 'https://cdn.jsdelivr.net/npm/qrcode@1.5.0/build/qrcode.js#default QRCode';
```