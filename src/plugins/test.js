// 使用Bot.cli.command()创建命令
// import { module } from "../plugin"
// @ts-ignore
let Bot = module.Bot
Bot.cli.command('test', 'Test command').action(async () => {
  // 获取当前消息
  let session = Bot.curMsg()
  // 防止初始化前调用
  if (!session) return
  // 回复
  session.reply('Hello, ' + session.nick + '!')
})
