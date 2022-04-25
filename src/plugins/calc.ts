import { Bot } from '../core/bot.js'
import { Session } from '../core/session.js'
import { Expression, parse } from '../extensions/algebra.js/algebra.js'

Bot.Event.on('message', async (session: Session) => {
  if (Bot.waitPrompt.get(session.sender)) {
    Bot.Event.emit('prompt', session.content)
    return
  }
  if (session.content.startsWith('解方程')) {
    let q = session.content.replace('解方程', '')
    if (q.length > 0) {
      let result = parse(q).solveFor('x')
      if (result && result.length > 0) {
        session.send(`方程 ${q} 的解为\n${result.join(',\n')}`)
      } else {
        session.send(`无解`)
      }
    } else {
      session.send('请输入方程式')
      //q = await session.prompt()
    }
  }
})
