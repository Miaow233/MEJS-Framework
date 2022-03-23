// Bot是从全局变量中获取的
// @ts-nocheck
Bot.cli.command('another', 'Test command').action(async () => {
  //let msg = await Bot.cli.prompt("What's your name?");
  //let session = Bot.curMsg()
  //session.reply('Hello, ' + session.nick + '!')
  console.log('another')
})
