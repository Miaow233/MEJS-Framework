export let Image = (url: string) => {
  return { type: 'image', url: url }
}
export let Text = (text: string) => {
  return { type: 'text', text: text }
}
export let At = (qq: number, text: string) => {
  return { type: 'at', qq: qq, text: text }
}
export function createChain(elem) {
  let client = session.client
  elem.forEach((element) => {
    if (typeof element === 'string' || element.type === 'text') {
      client.addText(element)
    } else if (element.type === 'image') {
      client.addImg(element.url)
    } else if (element.type === 'at') {
      client.addAt(element.qq, element.text)
    }
  })
  return client
}
export async function reply(msg: string) {
  client.addText(msg)
  bot.send(client)
}

export async function sendGroupMessage(gid: number, msg: any) {
  client.group = gid
  client.addText(msg)
  bot.send(client)
}
