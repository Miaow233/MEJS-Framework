const mebot = globalThis.bot
import { CAC } from '../extensions/cac/index.js'
import EventEmitter from '../extensions/events.js'
import { setTimeout } from '../utils/timer.js'
import { getAvatarById } from '../utils/index.js'
import { getCSRFToken } from '../utils/utils.js'
import { Logger } from '../utils/logger.js'
import Config from '../../.hdic.config.js'

export class Bot {
  static cli: CAC = new CAC()
  static Event: EventEmitter = new EventEmitter()
  uin: number
  avatar: string
  name: string
  pskey: string
  skey: string
  machineCode: string
  batteryLevel: number
  batteryStatus: string
  bkn: number
  static waitPrompt: Map<number, boolean> = new Map()
  static msgQueue: Session[] = []
  constructor() {
    this.avatar = getAvatarById(mebot.uin)
    this.batteryLevel = mebot.batteryLevel
    this.batteryStatus = mebot.batteryStatus
    this.bkn = getCSRFToken(mebot.skey)
    this.machineCode = mebot.machineCode
    this.pskey = mebot.pskey
    this.skey = mebot.skey
    this.uin = mebot.uin
  }
  static isOnline(): boolean {
    return Boolean(mebot.skey)
  }
  updateBkn(): void {
    this.bkn = getCSRFToken(this.skey)
  }
  static checkAdmin(group_id: number, qq_id: number): boolean {
    return mebot.checkAdmin(group_id, qq_id)
  }
  checkAdmin(group_id: number, qq_id: number): boolean {
    return mebot.checkAdmin(group_id, qq_id)
  }
  deleteMember(group_id: number, qq_id: number): void {
    mebot.deleteMember(group_id, qq_id)
  }
  getClientKey(): string {
    return mebot.getClientKey()
  }
  getPSkey(): string {
    return mebot.getPSkey()
  }
  getSkey(): string {
    return mebot.getSkey()
  }
  getTroopList(): number[] {
    return mebot.getTroopList()
  }
  getTroopMemberList(group_id: number | number[]): number[] {
    return mebot.getTroopMemberList(group_id)
  }
  getTroopSwicth(group_id: number): boolean {
    return mebot.getTroopSwicth(group_id)
  }
  pokeAvatar(group_id: number, qq_id: number): void {
    mebot.pokeAvatar(group_id, qq_id)
  }
  static reload(): void {
    mebot.reload()
  }
  reload(): void {
    mebot.reload()
  }
  send(client: any): void {
    mebot.send(client)
  }
  sendRedPacket(group_id: number, title: string, money: number, qq_id: number | number[]): void {
    mebot.sendRedPacket(group_id, title, money, qq_id)
  }
  static setAdmin(group_id: number, qq_id: number, is_admin: boolean): void {
    mebot.setAdmin(group_id, qq_id, is_admin)
  }
  setAdmin(group_id: number, qq_id: number, is_admin: boolean): void {
    mebot.setAdmin(group_id, qq_id, is_admin)
  }
  setGroupAdmin(id: number, qq: number, is_admin: boolean): any {
    return mebot.setGroupAdmin(id, qq, is_admin)
  }
  setMemberCard(group_id: number, qq_id: number, card: string): void {
    mebot.setMemberCard(group_id, qq_id, card)
  }
  setTroopSwicth(group_id: number, iSwitch: boolean): void {
    mebot.setTroopSwicth(group_id, iSwitch)
  }
  shutup(group_id: number, qq_id: number, time: number): void {
    mebot.shutup(group_id, qq_id, time)
  }
  shutupAll(group_id: number, time: number): void {
    mebot.shutupAll(group_id, time)
  }
  withDrawMsg(group_id: number, mark: number): void {
    mebot.withDrawMsg(group_id, mark)
  }
  static curMsg(): Session {
    return Bot.msgQueue[Bot.msgQueue.length - 1]
  }
  static pushMsg(message: Session): void {
    if (Bot.msgQueue.length > 20) {
      Bot.msgQueue.shift()
    }
    Bot.msgQueue.push(message)
  }
  static popMsg(): Session {
    return Bot.msgQueue.pop()
  }
}

export class Session {
  type: string
  img: Array<string>
  xml: Array<string>
  json: Array<string>
  client: client
  group: number
  sender: number
  content: string
  nick: string

  constructor(message: any, type: string) {
    this.type = type
    this.client = message.client
    this.group = message.group
    //this.group.name = message.groupName
    this.sender = message.uin
    //this.sender.name = message.nick
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
      Bot.Event.on('prompt', (msg: string) => {
        Bot.waitPrompt.delete(this.sender)
        resolve(msg)
      })
    })
  }
}

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
