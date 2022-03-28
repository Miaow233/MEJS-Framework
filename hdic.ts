import './src/logger.js'
import { Logger } from './src/logger.js'

import { Bot, Session } from './src/medic.js'

// 事件监听器
const Event = Bot.Event

// 消息相关，At Image Text 是消息元素
import { At, Image, Text, createChain, sendGroupMessage, sendFriendMessage } from './src/message.js'

// 导入插件
import './src/plugin.js'
import { clearInterval, getTimerId, setInterval } from './src/timer.js'

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
let task = getTimerId()
Logger.time('Online')
setInterval(() => {
  Logger.log('正在检查登录状态... ' + Bot.isOnline())
  // Bot上线事件
  if (Bot.isOnline()) {
    try {
      Logger.log(`${bot.uin} 已上线`)
      globalThis.bot = new Bot()
      Logger.log('初始化完成')
    } catch (e) {
      Logger.log('啊哦, 出了些问题\n' + e.stack)
    }
    clearInterval(task)
    Logger.timeEnd('Online')
  } else {
    Logger.log('未登录, 3s后重试')
  }
}, 3000)

Event.on('message', async (session: Session) => {
  if (Bot.waitPrompt.get(session.sender)) {
    Bot.Event.emit('prompt', session.content)
    return
  }
  // 进行下一次解析前请务必取消上一次解析
  Bot.cli.unsetMatchedCommand()
  try {
    Bot.cli.parse(session.content, {run: false})
    await Bot.cli.runMatchedCommand()
  } catch (e) {
    Logger.log(`MEJS发生错误: ${e}`)
    const missingRequired = 'CACError: missing required args for command'
    if (String(e).startsWith(missingRequired)) {
      session.send(`缺少必要参数：${e.toString().replace(missingRequired, '')}`)
    } else {
      session.send(`未知错误：${e.toString()}`)
    }
  }
  if (session.content === 'prompt') {
    session.send('输入用户名')
    const name = await session.prompt()
    if (!name) {
      session.send('输入超时')
      return
    }
    session.send(`你好, ${name}`)
  }
})
