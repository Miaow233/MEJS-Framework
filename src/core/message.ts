export class Message {
  mark: any
}
class Element {
  asDisplay(): string {
    return ''
  }
}
class MessageChain {
  content: Array<Element>
  constructor(elements: Array<Element>) {
    this.content = elements
  }
  has(element: Element): boolean {
    return this.content.includes(element)
  }
  asDisplayString(): string {
    return this.content.map((element) => element.asDisplay()).join('')
  }

  [Symbol.iterator] = function* () {
    for (const element of this.content) {
      yield element
    }
  }
}

export let Image = (url: string) => {
  return { type: 'image', url: url }
}

export let Text = (text: string) => {
  return text
}

export let At = (qq: number, text: string) => {
  return { type: 'at', qq: qq, text: text }
}

import { Friend, Group } from './target.js'
export function createChain(elem: Array<any>): MeClient {
  let client = globalThis.client
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
  let client = globalThis.client
  client.addText(msg)
  bot.send(client)
}

export async function sendGroupMessage(group: number | Group, msg: any) {
  let client = globalThis.client
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
  let client = globalThis.client
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
