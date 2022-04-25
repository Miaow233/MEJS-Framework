import { Bot } from './core/bot.js'
import { Session } from './core/session.js'
import http from './extensions/http.js'
import * as java from './packages/java.js'
import { InnerMode } from './utils/helper.js'
import { Logger } from './utils/logger.js'

// 由于eval不能传递当前作用域变量，所以将其保存为全局变量
const { File } = java
globalThis.File = File
export const module = {
  Bot,
  Session,
  //File,
  http,
  InnerMode,
  Logger,
}

let pluginsFolder = new File('/sdcard/DIC/src/plugins')
if (!pluginsFolder.isDirectory()) {
  throw new Error('请将插件文件夹放在 /sdcard/DIC/src/plugins')
}
let files = pluginsFolder.listFiles()
for (let file of files) {
  if (file.isDirectory()) continue
  if (file.getName().endsWith('.d.ts')) continue
  try {
    // @ts-ignore
    let script = await compat.readText(file.getAbsolutePath())
    Function('module', script.replace(`import { module } from '../plugin.js'`, ''))(module)
  } catch (e) {
    Logger.warn(`插件 ${file.getName()} 加载失败，请检查插件代码。`)
    Logger.warn(e.stack)
    continue
  }
  // 如果成功
  Logger.log(`MEJS: load ${file.getName()}`)
}
Bot.cli.command('help').action(async () => {
  let session = Bot.curMsg()
  Bot.cli.unsetMatchedCommand()
  let helpMsg = Bot.cli.outputHelp()
  session.send(helpMsg)
})
