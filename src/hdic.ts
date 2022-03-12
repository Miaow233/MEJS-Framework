import * as app from './index.js'

// 消息相关，At Image Text 是消息元素
import { At, Image, Text, createChain, reply, sendGroupMessage } from './message.js'

// 文件扩展
import * as fs from './extensions/fs.js'

// http 扩展
import http from './extensions/http.js'

// 导入插件
import { Plugin } from './types/plugin.js'
import './plugins/jrrp.js'

async function main(session: typeof globalThis.session) {
  let client = session.client
  let group = session.group
  let sender = session.uin
  let msg = session.msg

  // 插件系统
  if (globalThis.plugins && globalThis.plugins.length > 0) {
    globalThis.plugins.forEach((p: Plugin) => {
      if (p.enable) {
        try {
          p.action(session)
        } catch (e) {
          console.log(e)
        }
      }
    })
  }
}

// @ts-ignore
$.on('message.group', async (session: typeof globalThis.session) => {
  globalThis.session = session
  try {
    await main(session)
  } catch (e) {
    console.warn('MEJS运行失败: ' + e)
  }
})

// @ts-ignore
$.on('message.friend', async (session: typeof globalThis.session) => main(session))

// @ts-ignore
$.on('message.temp', async (session: typeof globalThis.session) => main(session))

// @ts-ignore
$.on('online', (bot: typeof globalThis.bot) => {
  console.log(`${bot.uin} 已上线`)
  globalThis.SKEY = bot.getSkey()
  globalThis.PSKEY = bot.getPSkey()
  globalThis.BKN = app.getCSRFToken(globalThis.SKEY)
  console.log('初始化完成')
})

while (true) {
  if (bot.uin) {
    // @ts-ignore
    $.emit('online', bot)
    break
  }
}
