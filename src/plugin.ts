import { Bot, Session } from './medic.js'
import { File } from './index.js'
import http from './extensions/http.js'
import { InnerMode } from './utils/helper.js'
import { Logger } from './logger.js'
// 由于eval不能传递当前作用域变量，所以将其保存为全局变量
// export let module = new Map()
// module.set('Bot', Bot)
// module.set('Session', Session)
// module.set('File', File)
// module.set('http', http)
// module.set('InnerMode', InnerMode)
export let module = {
  Bot: Bot,
  Session: Session,
  File: File,
  http: http,
  InnerMode: InnerMode,
  Logger: Logger
}

let pluginsFolder = new File('/sdcard/DIC/src/plugins')
if (!pluginsFolder.isDirectory()) {
  throw new Error('请将插件文件夹放在 /sdcard/DIC/src/plugins')
}
let files = pluginsFolder.listFiles()
for (let file of files) {
  if (file.isDirectory()) continue
  try {
    // eval(await compat.readText(`${file.getAbsolutePath()}`))
    Function('module', await compat.readText(`${file.getAbsolutePath()}`))(module)
  } catch (e) {
    Logger.log(`插件 ${file.getName()} 加载失败，请检查插件代码。`)
    Logger.log(e.stack)
    continue
  }
  // 如果成功
  console.log(`MEJS: load ${file.getName()}`)
  Bot.plugins.push(file.getName())
}
Bot.cli.command('list').action(async () => {
  let session = Bot.curMsg()
  session.reply(`当前插件：\n${Bot.plugins.join('\n')}`)
  console.log(Bot.plugins.join('\n'))
})
