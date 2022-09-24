## 简介

![MEJS-Framework](https://socialify.git.ci/Miaow233/MEJS-Framework/image?description=1&language=1&logo=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FMiaow233%2FMEJS-Framework%40main%2Fdocs%2F.vuepress%2Fpublic%2Fimages%2Flogo.png&name=1&owner=1&pattern=Charlie%20Brown&stargazers=1&theme=Light)

MEJS-Framework 是基于 QQ 机器人程序 `Medic` 的 JS 词库而编写的聊天软件自动化框架。其丰富而简洁的接口相信可以使开发者能更好的完成业务逻辑.


#### 实现"AI"仅需 6 行

```js
$.on('message.group', async (message) => {
    let client = message.client
    let rep = message.msg.replace('你','我').replace('吗','').replace('?','!').replace('？','！')
    client.addText(rep)
    bot.send(client)
})
```


## 参与开发

- 如果你在使用过程中发现任何 bug，请向开发者报告。
- 有什么好玩或者想要的的功能, 或者有什么需求，包括但不限于更多便利操作，API 接口等, 请在下方评论区提出。我们将认真对待你的每一条评论.
- 欢迎为本项目提出宝贵的建议，你的支持就是我们发展的动力。
- 加入 QQ 讨论群 [410351186](https://jq.qq.com/?_wv=1027&k=DkfRxEhn)


## 相关内容

- Medic 下载: [密码 medic](https://wwi.lanzoui.com/b00os6baf)