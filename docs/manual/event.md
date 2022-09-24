# 事件（Event）

正如 JS 的介绍中所说，JS 的优势之一是由事件驱动，MEJS 自然也引进了事件概念。

MEJS 基于事件驱动机制构建，MEJS 中的事件包括但不限于好友、群消息事件等。当事件发生时，MEJS 将会通过回调函数通知监听者。

> [事件(Event)参考](../reference/event.md)中包含了所有可用的事件类型

- message.group
- message.friend

## 事件监听

使用`$.on(event, callback)`方法监听事件。

```js
//这个是群消息的处理,入口不可修改
$.on('message.group', async (message) => {
  //这下面，包裹的内容都可修改
  if (message.msg === 'test') {
    console.log('other message') // 向主程序打印log
    let client = message.client
    client.addText('来自JS2')
    bot.send(client)
  }
  //这上面，包裹的内容都可修改
})
```

## 监听器

监听器是一个函数，当事件发生时，该函数会接收到一个数据对象，该对象包含了发送者，接收群，消息等信息。

在不同的事件类型中，数据对象中包含的成员不同，如消息事件为 message 类型的对象。
