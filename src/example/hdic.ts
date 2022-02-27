

// @ts-ignore
$.on('message.group', async (session) => {
  if (session.msg === 'test') {
    console.log('other message') // 向主程序打印log
    // 别用var！！！
    let client = session.client
    client.addText('来自JS2')
    bot.send(client)
  }
})
