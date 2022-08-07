import { Bot } from '../core/bot.js'
import { Session } from '../core/session.js'
import { parse } from 'algebra.js'

$.on('message', async (session: Session) => {
  if (Bot.waitPrompt.get(session.sender)) {
    $.emit('prompt', session.content)
    return
  }
  if (session.content.startsWith('解方程')) {
    let q = session.content.replace('解方程', '')
    if (q.length > 0) {
      // @ts-ignore
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
