import { Logger, LOGO } from './src/utils/logger.js'
import { Bot, Session } from './src/core/medic.js'
// 导入插件
import './src/plugin.js'
import './src/plugins/calc.js'
import { clearInterval, getTimerId, setInterval, setTimeout } from './src/utils/timer.js'

// 事件监听器
const Event = Bot.Event
Logger.log(LOGO)
$.on('system.loaded', async (loaded) => {
  loaded.ON = '开机'
  loaded.OFF = '关机'
  loaded.permission = '手机信息,红包支付'
})
// 开机事件
$.on('system.ON', async (message) => {
  console.log('MEJS Enabled')
})
// 关机事件
$.on('system.OFF', async (message) => {
  console.log('MEJS Disabled')
})

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

// Bot 上线事件
let onlineTask = getTimerId()
Logger.time('Online')
setInterval(() => {
  Logger.warn(`正在检查登录状态: ${Bot.isOnline() ? '已登录' : '未登录'}`)
  if (Bot.isOnline()) {
    try {
      Logger.log(`${bot.uin} 已上线`)
      globalThis.abot = new Bot()
      Logger.log('初始化完成')
    } catch (e) {
      Logger.error('啊哦, 出了些问题\n' + e.stack)
    }
    clearInterval(onlineTask)
    Logger.timeEnd('Online')
  } else {
    Logger.log('未登录, 3s后重试')
  }
}, 3000)

// 超时取消
setTimeout(() => {
  clearInterval(onlineTask)
  Logger.warn('取消检查登录状态')
}, 1000 * 60)

Event.on('message', async (session: Session) => {
  if (Bot.waitPrompt.get(session.sender)) {
    Bot.Event.emit('prompt', session.content)
    return
  }
  // 进行下一次解析前请务必取消上一次解析
  Bot.cli.unsetMatchedCommand()
  try {
    Bot.cli.parse(session.content, { run: false })
    await Bot.cli.runMatchedCommand()
  } catch (e) {
    Logger.error(`MEJS发生错误: ${e}`)
    const missingRequired = 'CACError: missing required args for command'
    if (String(e).startsWith(missingRequired)) {
      session.send(`缺少必要参数：${e.toString().replace(missingRequired, '')}`)
    } else {
      session.send(`未知错误：${e.toString()}`)
    }
  }
})
