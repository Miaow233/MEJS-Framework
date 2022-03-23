// Bot是从全局变量中获取的
// 使用Bot.cli.command()创建命令
// @ts-nocheck
Bot.cli.command('test', 'Test command').action(async () => {
  // 获取当前消息
  let session = Bot.curMsg()
  // 回复
  session.reply('Hello, ' + session.nick + '!')
  console.log('test')
})
