![MEJS-Framework](https://socialify.git.ci/Miaow233/MEJS-Framework/image?description=1&language=1&logo=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FMiaow233%2FMEJS-Framework%40main%2Fdocs%2Fassets%2Flogo.png&name=1&owner=1&pattern=Charlie%20Brown&stargazers=1&theme=Light)

## 关于本框架

MEJS Framework 是为 [Medic](http://docs.nekohouse.cafe/Medic/) 设计的 JS 词库开发框架. 基于 [Javet](https://github.com/caoccao/Javet), 使用 TS 编写, 提供了丰富的 API 功能.

## 特性

- 符合直觉的接口
- 丰富的 API 功能
- 对常用功能进行了封装, 便于简化操作
- 支持调用 Java (Javet)
- 易于开发

## 如何使用

将本项目所有文件解压到词库目录, 然后在 `hdic.js` 中导入即可.

```js
import { Bot, Session, api } from './src/index.js'
const Event = Bot.Event
Event.on('message', async (session) => {
  if (session.content === 'test') {
    session.send(`Hello, ${session.sender}`)
  }
})
```

`index.js` 文件默认导入全部模块, 如有需要请逐个导入.

更多示例请参考 `hdic.js`.

**使用文档[建设中] [https://docs.nekohouse.cafe](https://docs.nekohouse.cafe)**

**API 参考 [https://docs.nekohouse.cafe/type](https://docs.nekohouse.cafe/type)**

![Alt](https://repobeats.axiom.co/api/embed/80476bfcb2be552b6548029824d98780ddd5f7fc.svg 'Repobeats analytics image')
