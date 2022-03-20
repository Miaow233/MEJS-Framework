import cli from '../extensions/commander.js'
import { File } from '../extensions/java.js'
import * as fs from '../extensions/fs.js'
import { Session } from '../medic.js'
// 插件信息
const jrrp = {
  info: {
    name: 'jrrp',
    version: '0.1',
    description: '获取今日人品',
    author: 'Miaow',
    help: 'jrrp',
  },
  // 是否启用
  enable: true,
  // 插件主函数
}
globalThis.Event.on('message.group', async (session: Session) => {
  // 命令解析
  let argv = cli(session.msg)
  if (argv['_'][0] === 'jrrp') {
    let levels = []
    let dataFile = new File('/sdcard/DIC/data/jrrp.json')
    if (!dataFile.exists()) dataFile.createNewFile()
    let cache = (await compat.readText(dataFile.getAbsolutePath())) || '{}'
    if (!(cache.length > 2)) cache = '{}'
    let jrrp = JSON.parse(cache)[String(session.sender)] || {
      luck: 0,
      date: '',
    }
    cache = JSON.parse(cache)
    let date = new Date().getDate()
    let luckValue = Math.floor(Math.random() * 100)
    if (!jrrp.date || jrrp.date !== date) {
      jrrp.date = date
      jrrp.luck = luckValue
      cache[String(session.sender)] = jrrp
      fs.writeFile('/sdcard/DIC/data/jrrp.json', JSON.stringify(cache))
    } else {
      luckValue = jrrp.luck
    }
    // 自定义提示文字
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
    session.reply(`${session.nick} 的今日人品是：${luckValue}，${luckText}`)
  }
})
