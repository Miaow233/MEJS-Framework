---
title: 词库编写指南
---

# 词库编写指南

MEJS 实现了 ECMAScript 6(ES6)规范，同时集成了 Java 环境。
关于 JS 及 ES6 的其它说明，可以参阅以下链接。

- [ECMAScript 6 规范](http://es6.ruanyifeng.com/)
- [JavaScript 权威指南(第 7 版)](<https://pan.nekohouse.cafe/d/Book_%E7%94%B5%E5%AD%90%E4%B9%A6/%E7%BC%96%E7%A8%8B%E7%9B%B8%E5%85%B3/JavaScript/TOP/JavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97(%E7%AC%AC7%E7%89%88).pdf>)

## Bot 对象

::: tip
请注意区分 Bot 对象和 bot 这两个概念。
:::

Bot 代理对象扩展自 bot，包含消息发送，群员操作等方法。

`bot`是一个全局变量，指向当前已登录机器人。

它具有以下属性

| 属性          | 说明       |
| ------------- | ---------- |
| uin           | 机器人账号 |
| skey          | 登录凭证   |
| pskey         | 登录凭证   |
| batteryStatus | 电池状态   |
| batteryLevel  | 电池电量   |
| machineCode   | 设备信息   |

使用 Bot 对`bot`进行代理，可以实现更多的方法。

### 单独构造

要构造一个 Bot 对象，首先要从`core/medic`模块中导入 `Bot` 类。

```js
import { Bot } from './src/core/medic.js'
```

使用 `new Bot(bot)` 方法构造一个 Bot 对象。

```js
globalThis.bot = new Bot(bot)
```

::: warning
注意，在机器人登录完成之前初始化的 Bot 对象是无效的。
:::

> 了解更多：[机器人（Bot）](bot.md)

## 事件监听

MEJS 提供了一系列事件监听方法，可以监听机器人的各种事件。

由于内置监听器的缺陷，本框架使用 Node.js 的 Event
库代替，并对基础事件进行了再分发。

关于 Event 库的说明，可以参阅以下链接。[http://nodejs.cn/api-v16/events.html](http://nodejs.cn/api-v16/events.html)

### 获取全局监听器

通过导入 Bot 的静态字段 `Event`，可以获取全局监听器。

```js
const Event = Bot.Event
```

### 监听事件

使用 `Event.on(event, listener)` 方法监听事件。

其中，`event`是事件名，`listener`是回调函数。

一个事件可以有多个监听器。

```js
Event.on('message.group', async (message) => {
  console.log(message.msg)
})
```

支持的事件类型

- `message`：接收到消息
- `message.group`：群消息
- `message.temp`：私聊消息
- `message.friend`：好友消息
- system.loaded：词库完成加载
- system.ON：机器人开机
- system.OFF：机器人关机

### 手动触发

使用 `Event.emit(event, ...args)` 方法手动触发事件。

其中 `event`是事件名，`args`是要传递的参数列表。

```js
Event.emit('message', new Session({msg: 'hello'}))
```

> 了解更多：[事件（Event）](event.md)

## 常用操作

### 通过消息链构建 client

```js
import { createChain, At, Image, Text } from './src/core/message.js'
async function main(session) {
    let sender = session.uin;

    // createChain 接收一个元素列表，输出转换后的 client，最后使用 bot.send() 发送
    // client 是局部变量，你可以多次使用 createChain，他们之间互不影响
    // Text 元素也可以直接写引号包裹的文本
    bot.send(createChain([
      Image('https://www.baidu.com/img/bd_logo1.png'),
      'file',
      At(sender, 'Hello World!'),
      Image('https://www.baidu.com/img/bd_logo1.png')
    ]));
}
// @ts-ignore
$.on('message.group', async (session) => {
    globalThis.session = session
    try {
        await main(session);
    }
    catch (e) {
        console.log(e);
    }
});
```

> 了解更多：[消息（Message）](message.md)
