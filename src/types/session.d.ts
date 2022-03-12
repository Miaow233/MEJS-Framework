declare namespace session {
  // message.msg 获取消息
  // message.img 获取图片，注意是个数组哦
  // message.xml 获取xml 没有则为空
  // message.json 获取json，没有则为空
  // message.at 获取被艾特人，是数组哦（仅限群聊）
  // message.reply 获取被回复的消息文本，没有则为空（私聊消息没有该参数）
  // message.code 获取群code（好友消息没有该参数）
  // message.mark 获取消息标记（仅限群聊）
  // message.title 获取发送者群头衔（仅限群聊）
  // message.group 获取群号（好友消息没有该参数）
  // message.groupName 获取群名（好友消息没有该参数）
  // message.uin 获取发送者QQ
  // message.nick 获取发送者昵称
  // message.time 获取这条消息的时间戳
  // message.client 用于发送消息的接口
  const msg: string
  const img: string[]
  const xml: string
  const json: string
  const at: number[]
  const reply: string
  const code: number
  const mark: any
  const title: string
  const group: number
  const groupName: string
  const uin: number
  const nick: string
  const time: number
  const client: client
}
