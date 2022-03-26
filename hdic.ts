import './src/logger.js'
import { Logger } from './src/logger.js'

import { Bot, Session } from './src/medic.js'

// 事件监听器
const Event = Bot.Event

// 消息相关，At Image Text 是消息元素
import { At, Image, Text, createChain, reply, sendGroupMessage, sendFriendMessage } from './src/message.js'

// 导入插件
import './src/plugins/jrrp.js'
import './src/plugin.js'

/** 消息处理函数 */
async function msgHandler(session: Session) {}

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
// 几个测试命令
Bot.cli.command('ping').action(async () => {
  let session = Bot.curMsg()
  session.reply('pong')
})
Bot.cli.command('echo <text>').action(async (args) => {
  let session = Bot.curMsg()
  session.reply(args)
  console.log(args.text)
})
Bot.cli.command('send <uin> <text>', '发送消息').action(async (uin: number, text: string) => {
  sendFriendMessage(uin, text)
})
;(function loopOnline() {
  return new Promise<void>((resolve, reject) => {
    Logger.time('Online')
    Logger.log('正在检查登录状态... ' + Bot.isOnline())
    while (true) {
      // Bot上线事件
      if (Bot.isOnline()) {
        try {
          Logger.log(`${bot.uin} 已上线`)
          globalThis.bot = new Bot()
          Logger.log('初始化完成')
        } catch (e) {
          reject()
          Logger.log('啊哦, 出了些问题\n' + e.stack)
        }
        resolve()
        Logger.timeEnd('Online')
        break
      }
    }
  })
})()

Event.on('message', async (session: Session) => {
  // 进行下一次解析前请务必取消上一次解析
  Bot.cli.unsetMatchedCommand()
  try {
    Bot.cli.parse(session.msg)
  } catch (e) {
    console.log(`MEJS发生错误: ${e}`)
    const missingRequired = 'CACError: missing required args for command'
    if (String(e).startsWith(missingRequired)) {
      session.reply(`缺少必要参数：${e.toString().replace(missingRequired, '')}`)
    } else {
      session.reply(`未知错误：${e.toString()}`)
    }
  }
  await msgHandler(session)
})
Bot.cli.outputHelp()
