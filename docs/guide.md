# 词库编写指南

MEJS 实现了 ECMAScript 6(ES6)规范，同时集成了 Java 环境。
关于 JS 及 ES6 的其它说明，可以参阅以下链接。

- [JS 教程](https://www.runoob.com/js/js-tutorial.html)
- [ECMAScript 6 规范](http://es6.ruanyifeng.com/)
- [JavaScript 权威指南(第 7 版)](<https://pan.nekohouse.cafe/d/Book_%E7%94%B5%E5%AD%90%E4%B9%A6/%E7%BC%96%E7%A8%8B%E7%9B%B8%E5%85%B3/JavaScript/TOP/JavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97(%E7%AC%AC7%E7%89%88).pdf>)

## 词库结构
当程序启动后，会自动读取 DIC 目录 (/sdcard/DIC) 下的 `hdic.js` 作为 JS 词库。

先来看一下这个简单的示例:
```js
$.on('message.group', async (message) => {
  console.log('other message') // 向主程序打印log
  if (message.msg === 'test') {
    let client = message.client
    client.addText('来自JS2')
    bot.send(client)
  }
})
```

本质上来说，hdic.js是一个可执行的js文件，你可以以任意合理的方式编写它。

对于我们的程序，与机器人交互才是重点。

`$.on`函数提供了于bot交互的入口点，你的逻辑代码都应当放在这里。

## 详解
注意第一行 `$.on('message.group', async (message) => {`

`$.on` 是一个监听器，其作用是当一个事件发生时，调用提供的回调函数。

`async (message) => {` 定义了一个匿名异步函数，被调用时会把元信息以message传递到函数内部。

第二行：使用 `console.log` 向控制台打印log

第三行：这里使用 `message.msg` 获取消息原文

第四行：从 `message.client` 获得客户端 client 对象

第五行：调用 `client.addText` 添加回复消息

第六行：调用 `bot.send` 将消息发送至消息来源群

你可以多次调用 `$.on` 添加多个监听器，将独立的功能放在不同的监听器中是一个良好的编码习惯。

## 使用 import 引入其他js文件
MEJS 使用 ES6 的模块导入系统，详细语法请参考[文档](https://zh.javascript.info/import-export)

- 可以使用相对路径
- 必须添加完整文件名，比如 `./bar.js`
- 只能是静态导入，在代码开始运行之前所有文件已导入完毕
- **没有**动态导入语法，像`require`,`import`
- 可以导入网络包，提供url即可

请仔细学习import使用方法，接下来会使用此特性增强代码

## 模块化

起初，我们的bot没有太多的功能，hdic.js也只有几行代码，随着功能的逐渐增加，hdic.js的结构也变得越来越复杂，使维护成了一个难题。

幸好，模块化可以解决这个问题。

模块化是将js程序拆分为可按需导入的单独模块的机制。

js模块化机制将js代码拆分到不同的细小文件中，有以下优点：
- 每个文件都具有私有命名空间，避免全局污染、变量冲突。
- 逻辑分离，可以将不同逻辑代码放在不同的js文件中。
- 提高代码的可复用性、可维护性和可读性

下面，我们学习如何将词库模块化。

上面提到，监听器作用是调用回调函数。对于一个函数，只要保证其在调用前声明即可，因此上述示例可修改为：
```js
let listener = async (message) => {
  console.log('other message') // 向主程序打印log
  if (message.msg === 'test') {
    let client = message.client
    client.addText('来自JS2')
    bot.send(client)
  }
}

$.on('message.group', listener)
```

这样，监听器回调函数就被分离了出来，你有兴趣的话，还可以重复使用它。
```js
...
$.on('message.group', listener)
$.on('message.group', listener)
$.on('message.group', listener)
...
```
目前，这两部分还是在同一个文件里，再考虑一下js的导入导出功能，如果我们通过import导入listener，就完全实现了两者的分离。

在 DIC 目录下新建一个文件 `listener.js`，填入以下内容：
```js
export default async (message) => {
  console.log('other message') // 向主程序打印log
  if (message.msg === 'test') {
    let client = message.client
    client.addText('来自JS2')
    bot.send(client)
  }
}
```

移除 `hdic.js`相应的代码，并在最上方添加`import listener from './listener.js'`

重载词库，还是一样的结果。

你可能会说：除了可以分割代码，我还有什么理由使用模块化呢？

请考虑以下场景：

你在某论坛找到了一个不错的词库，你想把其中几个功能添加到你的程序中。

你复制了上百行代码并粘贴到`hdic.js`。

运行，~~看到一堆报错~~。

为什么会这样？可能他的代码语法上有问题，可能他的变量跟你的重复了。

于是你开始修改代码，但从这几百行中找bug并不是容易的事。

总之你画了半个小时搞定了。

为什么要这样浪费时间呢

你可以新建一个文件，把代码放进去，在`hdic.js`里使用import导入。

不需要导出具名模块，这里我们只是用到它的副作用，即在一个相对独立的环境里运行代码，这样可以免除许多麻烦。

模块化的另一个优势是可自定义性高，你可以将每个功能做成模块，逐一导入来启用它们，这样就实现了简单的插件化系统，当你要禁用某个功能，注释掉对应的导入行即可，不必修改逻辑代码。

再者，如果大家都使用模块化，你可以任意引入其他人的功能，这让~~抄袭~~借鉴变得更加方便～

总之，模块化肯定是又好处的（至少别把代码都丢到一个文件）
