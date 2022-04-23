import { module } from '../plugin.js'

const { Bot } = module
const File = globalThis.File
Bot.cli.command('jrrp', '获取今日人品').action(async () => {
  // 当前消息对象
  let session = Bot.curMsg()

  // 防止初始化前调用
  if (!session) return new Error('请在 Bot 初始化后调用')

  let levels = []
  // 数据文件
  let dataFile = new File('/sdcard/DIC/data/jrrp.json')
  // 如果文件不存在，则创建
  let dataPath = new File(dataFile.getParent())
  if (!dataPath.exists()) dataPath.mkdirs()
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
    compat.writeText('/sdcard/DIC/data/jrrp.json', JSON.stringify(cache))
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
  session.send(`${session.nick} 的今日人品是：${luckValue}，${luckText}`)
})
