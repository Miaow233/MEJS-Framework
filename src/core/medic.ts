// @ts-ignore

export class Message {
  sender: number
  group?: number
  msg: string
  constructor(message: typeof globalThis.message) {
    this.sender = message.uin
    this.group = message.group
    this.msg = message.msg
  }
}
