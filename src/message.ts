import { Friend, Group } from './contact'
import { Plain, Image } from './type'
export class Message {
  constructor(...msg: any[]) {
    msg.forEach((m) => {
      this.__add__(m)
    })
  }
  text = message.msg
  type: string
  getText() {
    return message.msg
  }
  getImg() {
    return message.img
  }
  getXml() {
    return message.xml
  }
  getJson() {
    return message.json
  }
  getAt() {
    return message.at
  }
  __add__(msg: any) {
    if (msg instanceof Plain) {
      client.addText(msg.text)
    }
    if (msg instanceof Image) {
      client.addImg(msg.url)
    }
  }
  send(uin?: number) {
    bot.send(client)
  }
}
