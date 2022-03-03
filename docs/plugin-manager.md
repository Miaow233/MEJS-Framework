# 插件系统
## 概述
`plugin-mamager` 是 `MEJS-Framework` 的可选拓展功能, 旨在实现功能的插件化, 增强可移植性, 降低耦合度.

得益于模块导入系统, 你可以随时开启或关闭这个功能, 也可以将它用于任何地方, 无需依赖 `MEJS-Framework`.

> 注意：本功能极不稳定. 
>
> 如果你发现不能正常启动或导入失败, 请清空 `plugin-importer.js` 文件所有内容（不是删除文件）并重新运行 `plugin-manager`, 这样将会自动生成导入清单.


## 如何启用
打开 `hdic.js` 并在上方加入以下内容
```js
import './plugin-manager.js'
import './plugin-importer.js'
```

并将一下内容附加到消息入口函数任意位置
```js
globalThis.plugins.forEach((p) => {
    if (p.enable) {
      try {
        p.action(session)
      } catch (e) {
        console.log(e)
      }
    }
  })
```

这样, 在每次启动时都会根据 `plugins` 文件夹内文件生成导入清单, 并逐一导入所有插件. 

当然, 你也可以通过与机器人交互来执行这个功能. 具体用法将在下面介绍. 


## 手动导入
对于自动导入失败的情况, 或者想自定义导入内容, 你可以手动编写 `plugin-importer.js` 清单文件. 

这个文件引用了所有插件, 只需使用 `import` 导入你需要的插件即可. 


## 编写插件
为了方便移植, 每个插件都是一个对象, 它具有 `info`, `enable`, `action`三个属性. 

`info` 记录了插件的信息, 包括作者, 名称, 介绍等. 

`enable` 用来标记插件是否启用. 

`action` 是插件的主体, 是可运行部分. 它是一个函数, 接收一个 `session` 参数. 

下面是一个简单的例子
```js
import cli from '../utils/commander.js'
let example_plugin = {
    info: {
        name: 'example-plugin',
        version: '0.1',
        description: 'A plugin example',
        author: '',
        help: '',
    },
    enable: true,
    action: function (session) {
        let argv = cli(session.msg.split(' '))
        let client = session.client
        client.addText(JSON.stringify(argv))
        bot.send(client)
    },
};
export default example_plugin
```
> 注意：每个插件都要有默认导出

将写好的插件放入 `plugins` 文件夹, 再启动便会自动导入. 所有插件都以 `.js` 结尾.

为了避免不必要的问题, 请勿使用除字母, 数字, 英文连字符和下划线之外的字符作文件名.

## 交互式使用
除了手动执行生成函数, 你还可以通过与机器人对话来触发这些命令. 

此功能命令前缀均为 `plugin-manager`, 当然, 你可以在 `config.json` 修改这个前缀.

同时, 别忘了在配置文件中填写 `master`. 只有 `master` 才能使用这个功能.

plugin-manager 提供了以下几个子命令：add, remove, enable, disable, list, store, reload

- add <id\> | -u <url\> | -p <path\>
  <br/>用于添加一个插件，可以是本地文件，也可以是 url或id。
- remove <id\>
  <br/>删除一个插件（不可恢复）
- enable <id\>
  <br/>启用一个插件
- disable <id\>
  <br/>禁用一个插件（不会删除）
- list
  <br/>已添加插件列表
- store
  <br>用于访问插件商店，它有以下两个子命令
  - list
    <br/>列出目前商店所有可用的插件
  - search <keyword\>
    <br/>根据关键词搜索插件商店
- reload
  <br/>重载插件系统
  
提供从网络导入插件的功能, 同时对接了插件商店. 你可以在这里导入想要的功能, 也可以上传自己的插件.

可使用 `store list` 获取插件列表, 也可以用 `store search` 来搜索目标插件.

获取到插件列表后, 使用 `add <id>` 即可导入对应插件.
  
## 常见问题解答