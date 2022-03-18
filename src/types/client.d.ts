declare interface client {
  group: number
  uin: number
  addText(text: string): void
  addImg(url: string): void
  addAt(uin: number, nick: string): void
  setReply(): void
}
