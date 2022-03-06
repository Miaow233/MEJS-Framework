import * as app from './index.js'
import { At, Image, Text } from './message.js'
import { createChain, reply, sendGroupMessage } from './message.js'
async function main(session: typeof globalThis.session) {
  let client = session.client
  let group = session.group
  let sender = session.uin
  let msg = session.msg
  //reply('Hello World!')
  //sendGroupMessage(164725525, 'Hello World!')
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
