declare namespace bot {
  const batteryLevel: number
  const batteryStatus: string
  const machineCode: string
  const pskey: string
  const skey: string
  const uin: number
  function checkAdmin(group_id: number, qq_id: number): boolean
  function deleteMember(group_id: number, qq_id: number): void
  function getClientKey(): string
  function getPSkey(): string
  function getSkey(): string
  function getTroopList(): number[]
  function getTroopMemberList(group_id: number | number[]): number[]
  function getTroopSwicth(group_id: number): boolean
  function pokeAvatar(group_id: number, qq_id: number): void
  function reload(): void
  function send(client: MeClient): void
  function sendJson(group_id: number, json: string): void
  function sendPtt(group_id: number, ptt: string, time?: number): void
  function sendRedPacket(group_id: number, title: string, money: number, qq_id: number | number[]): void
  function sendXml(group_id: number, xml: string): void
  function setAdmin(group_id: number, qq_id: number, is_admin: boolean): void
  function setGroupAdmin(id: number, qq: number, is_admin: boolean): void
  function setMemberCard(group_id: number, qq_id: number, card: string): void
  function setTroopSwicth(group_id: number, iSwitch: boolean): void
  function shutup(group_id: number, qq_id: number, time: number): void
  function shutupAll(group_id: number, time: number): void
  function withDrawMsg(group_id: number, mark: number): void
}

declare namespace $ {
  function emit(event: string, ...args: any[]): void
  function on(event: string, callback: (...args: any[]) => void): void
}

declare namespace Java {
  function type(name: string): any
  function has(name: string): boolean
}

declare interface Response {
  readonly status: number
  readonly result: string | ArrayBuffer
  readonly header: String[]
  json(): Object
  text: string
}

declare namespace compat {
  const path: string
  // compat.access(url) GET访问网络，参数为：网址，返回键值对的数组
  function access(url: string): Promise<Response>
  // compat.access(url, head) GET访问网络，参数为：网址,请求头（js中键值对的数组），返回键值对的数组
  function access(url: string, headers: object): Promise<Response>
  // compat.access(url，param) POST访问网络，参数为：网址，post内容(字符串或字节组)，返回键值对的数组
  function access(url: string, data: string): Promise<Response>
  function access(url: string, data: ArrayBuffer): Promise<Response>
  // compat.access(url, head，param) POST访问网络，参数为：网址, 请求头（js中键值对的数组），post内容(字符串或字节组)，返回键值对的数组
  function access(url: string, headers: any, data: string): Promise<Response>
  function access(url: string, headers: any, data: ArrayBuffer): Promise<Response>
  // compat.writeConfig(path,key,val) 写入键值对，参数为：本地全路径，键，值；无返回
  function writeConfig(path: string, key: string, val: string): void
  // compat.writeData(path,byte[]) 写入字节数据，参数为：本地全路径，字节组；返回布尔值
  function writeData(path: string, data: ArrayBuffer): boolean
  // compat.writeText(path,text) 写入文本数据，参数为：本地全路径，文本；返回布尔值
  function writeText(path: string, text: string): boolean
  // compat.readConfig(path,key,val) 读取键值对，参数为：本地全路径，键，默认值；返回字符串
  function readConfig(path: string, key: string, def?: string): Promise<string>
  // compat.readData(path) 读取字节数据，参数为：本地全路径；返回字节组
  function readData(path: string): Promise<ArrayBuffer>
  // compat.readText(path) 读取文本数据，参数为：本地全路径；返回字符串
  function readText(path: string): Promise<string>
}

declare function delay(ms: number): Promise<void>

declare namespace console {
  function log(...args: any[]): void
  function info(...args: any[]): void
  function warn(...args: any[]): void
  function error(...args: any[]): void
}

declare interface MeClient {
  group: number
  uin: number
  addAt(uin: number, nick: string): void
  addImg(url: string): void
  addText(text: string): void
  setReply(): void
}

declare interface MeMessage {
  readonly at: number[]
  readonly client: MeClient
  readonly code: number
  readonly group: number
  readonly groupName: string
  readonly img: string[]
  readonly json: string
  readonly mark: any
  readonly msg: string
  readonly nick: string
  readonly reply: string
  readonly time: number
  readonly title: string
  readonly uin: number
  readonly xml: string
}
