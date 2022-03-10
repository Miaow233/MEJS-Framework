export let Image = (url: string) => {
  return { type: 'image', url: url }
}

export let Text = (text: string) => {
  return text
}

export let At = (qq: number, text: string) => {
  return { type: 'at', qq: qq, text: text }
}

import { Friend, Group, Temp } from './target.js'

export function createChain(elem: Array<any>): client {
  let client = session.client
  elem.forEach((element) => {
    if (typeof element === 'string') {
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
  let client = session.client
  client.addText(msg)
  bot.send(client)
}

export async function sendGroupMessage(group: number | Group, msg: any) {
  let client = session.client
  switch (typeof group) {
    case 'number':
      client.group = group
      break
    case 'object':
      client.group = group.target
      break
  }
  client.addText(msg)
  bot.send(client)
}

export async function sendFriendMessage(friend: number | Friend, msg: any) {
  let client = session.client
  switch (typeof friend) {
    case 'number':
      client.uin = friend
      break
    case 'object':
      client.uin = friend.target
      break
  }
  client.addText(msg)
  bot.send(client)
}
