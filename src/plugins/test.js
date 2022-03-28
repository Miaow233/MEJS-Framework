import { module } from '../plugin.js'
// 推荐使用Bot.cli.command()创建命令

let { Bot } = module
Bot.cli.command('test', 'Test command').action(async () => {
  // 获取当前消息
  let session = Bot.curMsg()
  // 防止初始化前调用
  if (!session) return new Error('请在 Bot 初始化后调用')
  // 回复
  session.send('Hello, ' + session.nick + '!')
})
// 几个测试命令
Bot.cli.command('ping', 'ping你的机器人').action(async () => {
  let session = Bot.curMsg()
  session.send('pong')
})
Bot.cli.command('echo <text>', '让机器人复读').action(async (text) => {
  let session = Bot.curMsg()
  session.send('复读几次?')
  const times = Number(await session.prompt())
  if (!times) return session.send('取消复读')
  else {
    for (let i = 0; i < times; i++) {
      await delay(200), session.send(text)
    }
  }
})
