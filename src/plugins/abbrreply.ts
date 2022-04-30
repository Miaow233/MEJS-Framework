import { module } from '../plugin.js'
/**
 * 缩写查询器
 */
const { Bot, http } = module

async function getSx(word: string): Promise<Array<Data>> {
  const url = 'https://lab.magiconch.com/api/nbnhhsh/guess'

  const headers = {
    origin: 'https://lab.magiconch.com',
    referer: 'https://lab.magiconch.com/nbnhhsh/',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36',
  }
  const data = {
    text: `${word}`,
  }
  const response = await compat.access(url, headers, JSON.stringify(data))
  const result = JSON.parse(response.result.toString())

  return result
}
interface Data {
  name: string
  inputting?: Array<string>
  trans?: Array<string>
}
async function run(msg: string) {
  const session = Bot.curMsg()
  let data: Data = await getSx(msg)[0]
  let result = ''
  if (data) {
    let content = data?.trans
    if (content) result += content.join(' , ')

    let inputs = data?.inputting
    if (inputs) result += inputs.join(' , ')
  }

  if (result) session.send(`${msg} 可能解释为：\nresult)`)
  else session.send(`${msg} 没有找到结果`)
}

Bot.cli.command('sx <msg>', '查询缩写').action(run)

Bot.cli.command('缩写 <msg>', '查询缩写').action(run)
