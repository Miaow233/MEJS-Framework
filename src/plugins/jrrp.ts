import cli from '../extension/commander.js'
import { reply, sendGroupMessage } from '../message.js'
let example_plugin = {
  info: {
    name: 'jrrp',
    version: '0.1',
    description: 'jrrp',
    author: 'Miaow',
    help: 'jrrp',
  },
  enable: true,
  action: function (session: typeof globalThis.session) {
    let argv = cli(session.msg)
    if (argv['_'][0] === 'jrrp') {
      let levels = []
      let luckValue = Math.floor(Math.random() * 100)
      let desc = {
        '100': '买彩票可能会中大奖哦！',
        '80': '出门可能捡到 1 块钱。',
        '60': '太阳当头照，花儿对你笑。',
        '40': '还行，还行。',
        '20': '多扶一扶老奶奶吧。',
        '0': '推荐闷头睡大觉。',
      }
      levels = Object.keys(desc).map((level) => parseInt(level))
      levels = levels.sort((a, b) => a - b)
      let descKey = 0
      for (const level of levels) {
        if (luckValue >= level) descKey = level
        else break
      }
      const luckText = desc[descKey]
      reply(`${session.nick} 的今日人品是：${luckValue}，${luckText}`)
    }
  },
}
globalThis.plugins = globalThis.plugins || []
globalThis.plugins.push(example_plugin)
