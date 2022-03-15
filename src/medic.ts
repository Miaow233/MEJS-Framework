const odd_bot = bot
import { getAvatarById } from './utils/index.js'
import { getCSRFToken } from './utils/util.js'

export class Bot {
  uin: number
  avatar: string
  name: string
  pskey: string
  skey: string
  machineCode: string
  batteryLevel: number
  batteryStatus: string
  bkn: number
  constructor() {
    this.uin = odd_bot.uin
    this.avatar = getAvatarById(this.uin)
    this.name = odd_bot.name
    this.pskey = odd_bot.pskey
    this.skey = odd_bot.skey
    this.machineCode = odd_bot.machineCode
    this.batteryLevel = odd_bot.batteryLevel
    this.batteryStatus = odd_bot.batteryStatus
    this.bkn = getCSRFToken(this.skey)
  }
  checkAdmin(group_id: number, qq_id: number): boolean {
    return odd_bot.checkAdmin(group_id, qq_id)
  }
  deleteMember(group_id: number, qq_id: number): void {
    odd_bot.deleteMember(group_id, qq_id)
  }
  getClientKey(): string {
    return odd_bot.getClientKey()
  }
  getPSkey(): string {
    return odd_bot.getPSkey()
  }
  getSkey(): string {
    return odd_bot.getSkey()
  }
  getTroopList(): number[] {
    return odd_bot.getTroopList()
  }
  getTroopMemberList(group_id: number | number[]): number[] {
    return odd_bot.getTroopMemberList(group_id)
  }
  getTroopSwicth(group_id: number): boolean {
    return odd_bot.getTroopSwicth(group_id)
  }
  pokeAvatar(group_id: number, qq_id: number): void {
    odd_bot.pokeAvatar(group_id, qq_id)
  }
  reload(): void {
    odd_bot.reload()
  }
  send(client: client): void {
    odd_bot.send(client)
  }
  sendRedPacket(
    group_id: number,
    title: string,
    money: number,
    qq_id: number | number[]
  ): void {
    odd_bot.sendRedPacket(group_id, title, money, qq_id)
  }
  setAdmin(group_id: number, qq_id: number, is_admin: boolean): void {
    odd_bot.setAdmin(group_id, qq_id, is_admin)
  }
  setGroupAdmin(id: number, qq: number, is_admin: boolean): any {
    return odd_bot.setGroupAdmin(id, qq, is_admin)
  }
  setMemberCard(group_id: number, qq_id: number, card: string): void {
    odd_bot.setMemberCard(group_id, qq_id, card)
  }
  setTroopSwicth(group_id: number, iSwitch: boolean): void {
    odd_bot.setTroopSwicth(group_id, iSwitch)
  }
  shutup(group_id: number, qq_id: number, time: number): void {
    odd_bot.shutup(group_id, qq_id, time)
  }
  shutupAll(group_id: number, time: number): void {
    odd_bot.shutupAll(group_id, time)
  }
  withDrawMsg(group_id: number, qq_id: number): void {
    odd_bot.withDrawMsg(group_id, qq_id)
  }
}

export class Session {
  type: string
  client: client
  group: number
sender: number
  msg: string
  constructor(message: any, type: string) {
    this.type = type
    this.client = message.client
    this.group = message.group
    this.sender = message.uin
    this.msg = message.msg
  }
}

export class Message {
  sender: number
  group?: number
  msg: string
  constructor(message: typeof globalThis.message) {
    this.sender =message.uin
    this.group = message.group
    this.msg = message.msg
  }
}
