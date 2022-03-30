> MEJS 文档：https://docs.nekohouse.cafe 和 https://docs.nekohouse.cafe/types
>
> Medic 文档：https://docs.nekohouse.cafe/Medic 或 http://medicxd.top

## v1.2.7-update.1

1. 添加 `Logger` 类
   - Logger.log(...args)
   - Logger.warn(...args)
   - Logger.error(...args)
   - Logger.time(name) // 计时器
   - Logger.timeEnd(name) // 结束计时
2. 调整 Java 类文件结构
3. 添加自定义配置文件
4. 添加快速读写配置方法
   - `readConfig()`
   - `writeConfig()`

## v1.2.7

1. 添加特性：等待用户输入

   用法：

   ```js
   session.send('请问你是')
   const name = await session.prompt() // 可以传入超时时间，默认 5s
   if (!name) {
     session.send('怎么不说呀')
     return
   }
   session.send(`你好，${name}`)
   ```

2. 修复 `jrrp` 插件数据目录不存在的问题
3. 添加 `getURLParameters`, `getBaseURL`, `URLJoin` 等便携方法

## v1.2.6-fix1

1. 修复插件在初始化前调用的问题
2. 调整默认插件存放位置（`src/plugins`）
3. 插件系统可自行生成帮助菜单

## v1.2.6

支持插件导入

请将插件放在 `src/plugins/__test__` 目录即可自动导入（此目录可以修改）

插件编写请看示例插件

## v1.2.5-RC1

1. 完成指令系统
2. 添加 Bot 类

   除内置属性外拓展了以下内容

   - 静态属性：
     - `cli` 指令系统 cli
     - `Event` 事件监听器
     - `messageQueue` 消息队列

3. 添加消息队列
   - Bot.messageQueue 消息队列
   - Bot.popMessage() 获取最新的消息
   - Bot.pushMessage(message) 将一个消息加入队列，这个会自动执行
4. 美化输出文字

## v1.2.5

更强大的命令解析器 CAC

用法：

```js
import CAC from './src/extensions/cac.js'
// 实例化 CAC
let cli = new CAC()
cli.command('你好')
.action(() => reply('你好')
```

`command` 用于注册一个命令，一般加上参数选项

比如 `echo <text>`，text 就是一个必须参数，而用中括号包裹的是可选参数

`action` 接收一个回调函数，参数就是 command 解析的参数，如果没有可以不写，如果是可选参数最好也注明

option 用于添加可选参数

parse 解析用户消息，接收一个消息数组（可以用 `split` 分割）前两个保持空

由于兼容性问题，推荐这样解析 `cli.parse(['', '', msg.split(' ')])`

如果匹配会自动运行回调函数，也可以像下面这样重写回调函数

```js
// Listen to the default command
cli.on('command:!', () => {
// Do something
})
```

梳理一下，command 注册一个命令，parse 解析后将参数交给 action 处理

所有操作均返回 CAC 自身，因此你可以使用这样的结构 `cli.command().option().option().action().parse()`

## v1.2.4-RC2

1. 修复 Bot 类属性不存在的问题
2. 添加事件监听器 Event

   特性：

   - 支持自定义触发事件
   - 支持同一事件注册多个监听函数
   - 支持动态添加/移除监听器

3. 将插件注册为全局事件

## v1.2.4-RC1

1. 文件或路径不存在时会自动创建
2. 添加 Response 类
3. 优化 http 模块结构
4. 完成了 jrrp 插件
5. 为插件系统添加了菜单
6. 完善 Bitmap, Canvas, Paint 等绘图库和注释

没什么重要更新就不算大版本了

文档已更新, 欢迎查看

## v1.2.4

1. 添加特性: 消息中断器
2. 添加一些辅助工具
3. 修改文件导出结构

## v1.2.3-RC1

1. 修复创建数据库时路径不存在导致的错误
2. 修复导入 http 模块的错误
3. 完善 File 类, SQLiteDatabase 类

## v1.2.3

1. 新增 SQLite 数据库操作
