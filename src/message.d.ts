declare namespace message {
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
  let msg: string
  let img: string[]
  let xml: string
  let json: string
  let at: number[]
  let reply: string
  let code: number
  let mark: any
  let title: string
  let group: number
  let groupName: string
  let uin: number
  let nick: string
  let time: number
  let client: client
}
