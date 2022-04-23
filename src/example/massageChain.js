import { Bot } from './src/core/medic.js'
import { createChain, At, Image, Text } from './src/core/message.js'
async function main(session) {
  let client = session.client
  let group = session.group
  let sender = session.uin
  let msg = session.msg

  // createChain 接收一个元素列表，输出转换后的 client，最后使用 bot.send() 发送
  // client 是局部变量，你可以多次使用 createChain，他们之间互不影响
  // Text 元素也可以直接写引号包裹的文本
  bot.send(
    createChain([
      Image('https://www.baidu.com/img/bd_logo1.png'),
      'file',
      At(sender, 'Hello World!'),
      Image('https://www.baidu.com/img/bd_logo1.png'),
    ])
  )
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
