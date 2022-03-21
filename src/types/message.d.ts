// declare namespace message {
//   // message.msg 获取消息
//   // message.img 获取图片，注意是个数组哦
//   // message.xml 获取xml 没有则为空
//   // message.json 获取json，没有则为空
//   // message.at 获取被艾特人，是数组哦（仅限群聊）
//   // message.reply 获取被回复的消息文本，没有则为空（私聊消息没有该参数）
//   // message.code 获取群code（好友消息没有该参数）
//   // message.mark 获取消息标记（仅限群聊）
//   // message.title 获取发送者群头衔（仅限群聊）
//   // message.group 获取群号（好友消息没有该参数）
//   // message.groupName 获取群名（好友消息没有该参数）
//   // message.uin 获取发送者QQ
//   // message.nick 获取发送者昵称
//   // message.time 获取这条消息的时间戳
//   // message.client 用于发送消息的接口
//   const msg: string
//   const img: string[]
//   const xml: string
//   const json: string
//   const at: number[]
//   const reply: string
//   const code: number
//   const mark: any
//   const title: string
//   const group: number
//   const groupName: string
//   const uin: number
//   const nick: string
//   const time: number
//   namespace client {
//     let group: number
//     let uin: number
//     function addText(text: string): void
//     function addImg(url: string): void
//     function addAt(uin: number, nick: string): void
//     function setReply(): void
//   }
// }

declare interface client {
  group: number
  uin: number
  addText(text: string): void
  addImg(url: string): void
  addAt(uin: number, nick: string): void
  setReply(): void
}
declare interface message {
  msg: string
  img: string[]
  xml: string
  json: string
  at: number[]
  reply: string
  code: number
  mark: any
  title: string
  group: number
  groupName: string
  uin: number
  nick: string
  time: number
  client: client
}
