import { module } from '../plugin.js'
/**
 * 抽象话转换
 */

const { Bot, Session, http } = module
Bot.cli.command('抽象话[text]').action(async (text) => {
  const session = Bot.curMsg()
  if (!text) {
    session.send('用法：抽象话[text]')
  }
  const url = 'https://api.nekohouse.cafe/api/emoji/'
  const res = await http.get(url + text)
  session.send(res.result.toString())
})
