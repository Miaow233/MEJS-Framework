# 快速开始

## 前言
本章假设你已经下载并会使用 `Medic` 程序, 如果不是这样, 请耐心地向他人请教或者仔细阅读教程文档.

Bot 登录相关事宜, 清移步 `Medic 交流群`

## 使用 JS 词库
`Medic 2.x` 版本已将 JS 词库分离开来, 若要使用 JS 词库, 请在词库文件夹创建 `hdic.js` 文件并填入以下内容
```javascript
$.on('message.group', async (message) => {
  if (message.msg === 'test') {
    console.log('other message') // 向主程序打印log
    let client = message.client
    client.addText('来自JS2')
    bot.send(client)
  }
})
```
现在, 请在 Bot 所在的群聊发送 `test`, 如果一切正常, 你将会收到 Bot 的消息 `来自JS2`.
