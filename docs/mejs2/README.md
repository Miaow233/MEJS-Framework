---
home: true
heroText: MEJS Framework
heroImage: /images/logo.png
actions:
  - text: 快速开始
    link: /mejs2/guide/introduce.md
    type: primary
  - text: Github
    link: https://github.com/Miaow233/MEJS-Framework
    type: secondary
features:
  - title: 简单、轻便
    details: 几行代码即可实现Bot
  - title: 零配置
    details: 无需繁琐配置
  - title: 快速上手
    details: 10分钟即可上手
footer:  Copyright © 2021-present Medic Project.
---

#### 实现"AI"仅需 6 行

```js
$.on('message.group', async (message) => {
    let client = message.client
    let rep = message.msg.replace('你','我').replace('吗','').replace('?','!').replace('？','！')
    client.addText(rep)
    bot.send(client)
})
```
