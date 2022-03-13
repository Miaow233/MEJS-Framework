declare interface client {
  group: number
  uin: number
  addText(text: string): void
  addImg(url: string): void
  addAt(uin: number, nick: string): void
  setReply(): void
}

declare namespace client {
  let group: number
  let uin: number
  const addText: (text: string) => void
  const addImg: (url: string) => void
  const addAt: (uin: number, nick: string) => void
  const setReply: () => void
}
