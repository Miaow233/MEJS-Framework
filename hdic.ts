import './src/logger.js'

import { Bot, Session } from './src/medic.js'

// 事件监听器
const Event = Bot.Event

// 消息相关，At Image Text 是消息元素
import { At, Image, Text, createChain, reply, sendGroupMessage, sendFriendMessage } from './src/message.js'

// 文件扩展
//import * as fs from './src/extensions/fs.js'

// http 扩展
//import http from './src/extensions/http.js'

// 导入插件
import './src/plugins/jrrp.js'

import { InnerMode } from './src/utils/helper.js'
let innerMode = new InnerMode()
async function messageHandler(session: Session) {
  globalThis.client = session.client

  // 消息中断器示例
  innerMode.setMsg(session)
  if (session.msg.includes('test') && !innerMode.getStatus()) {
    innerMode.enter()
    session.reply('是否确认')
    return
  }
  if (innerMode.getStatus()) {
    if (session.msg === '是' || session.msg === '确认') {
      session.reply('确认')
      innerMode.exit()
    } else if (session.msg === '否' || session.msg === '取消') {
      session.reply('取消')
      innerMode.exit()
    } else {
      session.reply('请回答是或否')
    }
  }
  // 消息中断器示例结束
}

$.on('message.group', async (message) => {
  let session = new Session(message, 'GroupMessage')
  Bot.pushMsg(session)
  Event.emit('message', session)
  Event.emit('message.group', session)
})

$.on('message.friend', async (message) => {
  let session = new Session(message, 'FriendMessage')
  Bot.pushMsg(session)
  Event.emit('message', session)
  Event.emit('message.friend', session)
})

$.on('message.temp', async (message) => {
  let session = new Session(message, 'FriendMessage')
  Bot.pushMsg(session)
  Event.emit('message', session)
  Event.emit('message.temp', session)
})

Bot.cli.command('测试命令 <text>').action(async (args, ctx) => {
  console.log('测试命令')
})
Bot.cli.command('echo <text>').action(async (args) => {
  let session = Bot.curMsg()
  session.reply(args)
  console.log(args.text)
})
Bot.cli.command('send <uin> <text>', '发送消息').action(async (uin: number, text: string) => {
  sendFriendMessage(uin, text)
})

// Bot上线事件
while (true) {
  if (bot.uin) {
    try {
      console.log(`${bot.uin} 已上线`)
      globalThis.bot = new Bot()
      console.log('初始化完成')
    } catch (e) {
      //globalThis.bot.updateBkn()
    }
    break
  }
}

Event.on('message', async (session: Session) => {
  try {
    Bot.cli.parse(['', '', ...session.msg.split(' ')], { run: false })
    await Bot.cli.runMatchedCommand()
  } catch (e) {
    console.log(e.stack)
    const missingRequired = 'CACError: missing required args for command'
    if (String(e).startsWith(missingRequired)) {
      session.reply(`缺少必要参数：${e.toString().replace(missingRequired, '')}`)
    } else {
      session.reply(`未知错误：${e.toString()}`)
    }
  }
  await messageHandler(session)
})
