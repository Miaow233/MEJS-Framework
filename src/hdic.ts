import * as app from './index.js'

function reply(msg: string) {
  let client = session.client
  client.addText(msg)
  bot.send(client)
}

function sendGroupMessage(gid: number, msg: any) {
  let client = session.client
  client.group = gid
  client.addText(msg)
  bot.send(client)
}

async function main(session: typeof globalThis.session) {
  globalThis.session = session
  reply('Hello World!')
  sendGroupMessage(164725525, 'Hello World!')
}

// @ts-ignore
$.on('message.group', async (session) => {
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
