import { Bot, Session } from './src/medic.js'

import { app } from './src/index.js'

// 消息相关，At Image Text 是消息元素
import { At, Image, Text, createChain, reply, sendGroupMessage } from './src/message.js'

// 文件扩展
import * as fs from './src/extensions/fs.js'

// http 扩展
import http from './src/extensions/http.js'

// 导入插件
import { Plugin } from './src/types/plugin.js'
import './src/plugins/jrrp.js'

// 事件监听器
import EventEmitter, { once } from './src/extensions/events.js'
const Event = new EventEmitter()
globalThis.Event = Event

import { InnerMode } from './src/utils/helper.js'
let innerMode = new InnerMode()
async function messageHandler(session: Session) {
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
}

$.on('message.group', async (message) => {
  let session = new Session(message, 'GroupMessage')
  Event.emit('message', session)
  Event.emit('message.group', session)
})

$.on('message.friend', async (message) => {
  let session = new Session(message, 'FriendMessage')
  Event.emit('message', session)
  Event.emit('message.friend', session)
})

$.on('message.temp', async (message) => {
  let session = new Session(message, 'FriendMessage')
  Event.emit('message', session)
  Event.emit('message.temp', session)
})

// Bot 上线事件
$.on('online', (bot: typeof globalThis.bot) => {
  console.log(`${bot.uin} 已上线`)
  try {
    globalThis.bot = new Bot()
    bot = globalThis.bot
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

Event.on('message', async (session: Session) => {
  await messageHandler(session)
})
