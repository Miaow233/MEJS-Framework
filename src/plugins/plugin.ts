import { Bot, Session } from '../medic.js'
import { File } from '../index.js'
import http from '../extensions/http.js'
import { InnerMode } from '../utils/helper.js'
// 由于eval不能传递当前作用域变量，所以将其保存为全局变量
globalThis.Bot = Bot
globalThis.http = http
globalThis.InnerMode = InnerMode
let pluginsFolder = new File('/sdcard/DIC/src/plugins/__test__')
if (!pluginsFolder.isDirectory()) {
  throw new Error('请将插件文件夹放在 /sdcard/DIC/src/plugins/__test__')
}
let plugins = pluginsFolder.listFiles()
for (let plugin of plugins) {
  try {
    eval(await compat.readText(`${plugin.getAbsolutePath()}`))
  } catch (e) {
    console.log(e)
    continue
  }
  // 如果成功
  console.log(`MEJS: load ${plugin.getName()}`)
  Bot.plugins.push(plugin.getName())
}
Bot.cli.command('list').action(async () => {
  let session = Bot.curMsg()
  session.reply(`当前插件：\n${Bot.plugins.join('\n')}`)
  console.log(Bot.plugins.join('\n'))
})
