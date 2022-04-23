declare interface client {
  group: number
  uin: number
  addAt(uin: number, nick: string): void
  addImg(url: string): void
  addText(text: string): void
  setReply(): void
}

declare interface message {
  readonly at: number[]
  readonly client: client
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
