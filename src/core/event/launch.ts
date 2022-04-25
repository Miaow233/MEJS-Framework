import { Logger, LOGO } from '../../utils/logger.js'
import { clearInterval, getTimerId, setInterval, setTimeout } from '../../utils/timer.js'
import { Bot } from '../bot.js'
import { Session } from '../session.js'
const Event = Bot.Event
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

Logger.log(LOGO)
