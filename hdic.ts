import './src/logger.js'

import { Bot, Session } from './src/medic.js'

// 事件监听器
const Event = Bot.Event

// 消息相关，At Image Text 是消息元素
import { At, Image, Text, createChain, reply, sendGroupMessage, sendFriendMessage } from './src/message.js'

// 导入插件
import './src/plugins/jrrp.js'
import './src/plugins/plugin.js'

/** 消息处理函数 */
async function msgHandler(session: Session) {
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
// 手动触发指令
Bot.cli.parse('test')
Bot.cli.parse('another')
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
  // 进行下一次解析前请务必取消上一次解析
  Bot.cli.unsetMatchedCommand()
  try {
    await Bot.cli.parse(session.msg)
  } catch (e) {
    console.log(e.stack)
    const missingRequired = 'CACError: missing required args for command'
    if (String(e).startsWith(missingRequired)) {
      session.reply(`缺少必要参数：${e.toString().replace(missingRequired, '')}`)
    } else {
      session.reply(`未知错误：${e.toString()}`)
    }
  }
  await msgHandler(session)
})
