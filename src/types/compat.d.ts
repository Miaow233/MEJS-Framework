declare interface Response {
  readonly status: number
  readonly result: string | ArrayBuffer
  readonly header: String[]
  json(): Object
  text: string
}

declare namespace compat {
  // compat.access(url) GET访问网络，参数为：网址，返回键值对的数组
  function access(url: string): Promise<Response>

  // compat.access(url, head) GET访问网络，参数为：网址,请求头（js中键值对的数组），返回键值对的数组
  function access(url: string, headers: object): Promise<Response>

  // compat.access(url，param) POST访问网络，参数为：网址，post内容(字符串或字节组)，返回键值对的数组
  function access(url: string, data: string | ArrayBuffer): Promise<Response>

  // compat.access(url, head，param) POST访问网络，参数为：网址, 请求头（js中键值对的数组），post内容(字符串或字节组)，返回键值对的数组
  function access(url: string, headers: any, data: string | ArrayBuffer): Promise<Response>

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

declare function delay(ms:number): Promise<void>
