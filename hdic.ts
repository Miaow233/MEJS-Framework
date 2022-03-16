import { Bot, Session } from './src/medic.js'

import {app} from './src/index.js'

// 消息相关，At Image Text 是消息元素
import {
  At,
  Image,
  Text,
  createChain,
  reply,
  sendGroupMessage,
} from './src/message.js'

// 文件扩展
import * as fs from './src/extensions/fs.js'

// http 扩展
import http from './src/extensions/http.js'

// 导入插件
import { Plugin } from './src/types/plugin.js'
import './src/plugins/jrrp.js'

import { InnerMode } from './src/utils/helper.js'
let innerMode = new InnerMode()
async function main(session: Session) {
  globalThis.client = session.client

  // 消息中断器示例
  innerMode.setMsg(session)
  if (session.msg.includes('test')) {
    innerMode.enter()
    reply('是否确认')
    return
  }
  if (innerMode.getStatus()) {
    if (session.msg === '是' || session.msg === '确认') {
      reply('确认')
      innerMode.exit()
    } else if (session.msg === '否' || session.msg === '取消') {
      reply('取消')
      innerMode.exit()
    } else {
      reply('请回答是或否')
    }
  }
  // 消息中断器示例结束

  // 插件系统
  if (globalThis.plugins && globalThis.plugins.length > 0) {
    globalThis.plugins.forEach((p: Plugin) => {
      if (p.enable) {
        try {
          p.action(session)
        } catch (e) {
          console.log(e)
        }
      }
    })
  }
  // 插件系统结束
}

$.on('message.group', async (message) => {
  let session = new Session(message, 'GroupMessage')
  try {
    await main(session)
  } catch (e) {
    console.warn('MEJS运行失败: ' + e)
  }
})

$.on('message.friend', async (message: typeof globalThis.message) => {
  let session = new Session(message, 'FriendMessage')
  main(session)
})

$.on('message.temp', async (message: typeof globalThis.message) => {
  let session = new Session(message, 'FriendMessage')
  main(session)
})

// Bot 上线事件
$.on('online', (bot: typeof globalThis.bot) => {
  console.log(`${bot.uin} 已上线`)
  try {
    globalThis.bot = new Bot()
  } catch (e) {
    console.log(e)
  }
  console.log('初始化完成')
})

// 循环检测
while (true) {
  if (bot.uin) {
    $.emit('online', bot)
    break
  }
}
