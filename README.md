# MEJS-Framework

## 关于本框架
MEJS Framework 是为 Medic 设计的 JS 词库开发框架. 基于 Javet, 使用 TS 编写, 提供了丰富的 API 功能.

## 特性
- 符合直觉的接口
- 丰富的 API 功能
- 对常用功能进行了封装, 便于简化操作
- 易于开发

## 如何使用
将本项目所有文件解压到词库目录 `DIC/mejs` 下, 然后在 `hdic.js` 中导入即可.
```js
import * as app from './mejs/index.js'
// Do somethings.
```

`index.js` 文件默认导入全部模块, 如有需要请逐个导入.

更多示例请参考 `hdic.example.js`.

**使用文档[建设中] [https://docs.nekohouse.cafe](https://docs.nekohouse.cafe)**
