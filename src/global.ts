declare class myClient {
  public addText(text: string): void
  public addImg(img: string): void
  public addAt(uin: number, nick: string): void
  public setReply(): void
}

declare class myBot {
  uin: number
  machineCode: string
  batteryLevel: string
  batteryStatus: string
  public checkAdmin(uin: number): boolean
  public getClientKey(): string
  public getPSkey(): string
  public getSkey(): string
  public reload(): void
  public send(client: myClient): void
  public setAdmin(uin: number, t: boolean): void
  public shutup(group: number, uin: number, time: string): void
  public shutupAll(group: number, t: boolean): void
  deleteMember(group: number, uin: number): void
  getTroopList(): Array<number>
  getTroopMemberList(group: number): Array<number>
  getTroopSwicth(uin: number): boolean
  pokeAvatar(group: any, uin: number): void
  sendRedPacket(group: number, title: any, money: any, uin: number): void
  setMemberCard(group: number, uin: number, card: string): void
  setTroopSwicth(uin: number, t: boolean): void
  withDrawMsg(uin: number, mark: any): void
}

declare class myMessage {
  msg: string
  img?: Array<string>
  xml?: string
  json?: string
  at?: Array<number>
  reply?: boolean
  code?: number
  mark?: any
  title?: string
  group?: number
  groupName?: string
  uin: number
  nick: string
  time: string
  client: myClient
}

declare class myCompat {
  path: string
  writeConfig(path: string, key: string, val: any): void
  writeData(path: string, byte: Int8Array): void
  writeText(path: string, text: string): void
  readConfig(path: string, key: string, val: any): string
  readData(path: string): Int8Array
  readText(path: string): string
  access(url: string, ...[rest]): object
}
