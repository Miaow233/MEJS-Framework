import * as app from './index.js'
import { At, Image, Text, createChain, reply, sendGroupMessage } from './message.js'

async function main(session: typeof globalThis.session) {
  let client = session.client
  let group = session.group
  let sender = session.uin
  let msg = session.msg
  //reply('Hello World!')
  //sendGroupMessage(group, 'Hello World!')
  bot.send(createChain([Image('https://www.baidu.com/img/bd_logo1.png'), Text('file'), At(sender, 'Hello World!')]))
}

// @ts-ignore
$.on('message.group', async (session) => {
  globalThis.session = session
  try {
    await main(session)
  } catch (e) {
    console.log(e)
  }
})

// @ts-ignore
$.on('message.friend', async (session) => main(session))

// @ts-ignore
$.on('message.temp', async (session) => main(session))

// @ts-ignore
$.on('online', (bot) => {
  console.log(`${bot.uin} 已上线`)
  globalThis.SKEY = bot.getSkey()
  globalThis.PSKEY = bot.getPSkey()
  globalThis.BKN = app.getCSRFToken(SKEY)
  console.log('初始化完成')
})

while (true) {
  if (bot.uin) {
    // @ts-ignore
    $.emit('online', bot)
    break
  }
}
