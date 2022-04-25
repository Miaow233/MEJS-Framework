import { Bot } from './src/core/bot.js'
import './src/core/event/launch.js'
import { Session } from './src/core/session.js'
import { Logger } from './src/utils/logger.js'

// 导入插件
import './src/plugin.js'
import './src/plugins/calc.js'

// 事件监听器
const Event = Bot.Event

$.on('system.loaded', async (loaded) => {
  loaded.ON = '开机'
  loaded.OFF = '关机'
  loaded.permission = '手机信息,红包支付'
})
// 开机事件
$.on('system.ON', async () => {
  console.log('MEJS Enabled')
})
// 关机事件
$.on('system.OFF', async () => {
  console.log('MEJS Disabled')
})

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
