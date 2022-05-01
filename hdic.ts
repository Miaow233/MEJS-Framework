import { Bot } from './src/core/bot.js'
import './src/core/event/launch.js'
import { Session } from './src/core/session.js'
import { Logger } from './src/utils/logger.js'

// 导入插件
import './src/plugin.js'
import './src/plugins/calc.js'

$.on('system.loaded', async (loaded) => {
  loaded.ON = '喵喵起床'
  loaded.OFF = '喵喵睡觉'
  loaded.permission = '手机信息,红包支付'
})
$.on('system.ON', async (message: MeMessage) => {
  console.log('MEJS Enabled')
  let client = message.client
  client.addText('喵喵酱已经醒了')
  bot.send(client)
})
$.on('system.OFF', async (message: MeMessage) => {
  console.log('MEJS Disabled')
  let client = message.client
  client.addText('喵喵酱已经醒了')
  bot.send(client)
})

// 全局消息处理
$.on('message', async (session: Session) => {
  if (Bot.waitPrompt.get(session.sender)) {
    $.emit('prompt', session.content)
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
