// 消息中断器示例
innerMode.setMsg(session)
if (session.msg.includes('test') && !innerMode.getStatus()) {
  innerMode.enter()
  session.reply('是否确认')
}
if (innerMode.getStatus()) {
  if (session.msg === '是' || session.msg === '确认') {
    session.reply('确认')
    innerMode.exit()
  } else if (session.msg === '否' || session.msg === '取消') {
    session.reply('取消')
    innerMode.exit()
  } else {
    session.reply('请回答是或否')
  }
}
// 消息中断器示例结束
