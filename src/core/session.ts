import Config from '../../.hdic.config.js'
import { setTimeout } from '../utils/timer.js'
import { Bot } from './bot.js'

export class Session {
  type: string
  img: Array<string>
  xml: Array<string>
  json: Array<string>
  client: MeClient
  group: number
  sender: number
  content: string
  nick: string

  constructor(message: any, type: string) {
    this.type = type
    this.client = message.client
    this.group = message.group
    this.sender = message.uin
    this.content = message.msg
    this.nick = message.nick
    this.img = message.img
    this.xml = message.xml
    this.json = message.json
  }
  send(msg: string) {
    this.client.addText(msg)
    bot.send(this.client)
  }

  prompt(ms: number = Config.promptDelay): Promise<string> {
    Bot.waitPrompt.set(this.sender, true)
    return new Promise((resolve) => {
      setTimeout(() => {
        Bot.waitPrompt.delete(this.sender)
        try {
          resolve('')
        } catch (e) {}
      }, ms)
      $.on('prompt', (msg: string) => {
        Bot.waitPrompt.delete(this.sender)
        resolve(msg)
      })
    })
  }
}
