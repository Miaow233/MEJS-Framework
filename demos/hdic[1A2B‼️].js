'use strict'
// 初始化数据记录
let 数据记录 = {},
  次数记录 = {}

// 是否开启1A2B
function isEnabled(group) {
  return isNum(Number.parseInt(数据记录[group]))
}

// 生成1A2B
function createNum() {
  let 数字 = ''
  while (数字.length < 4) {
    let tmp = Math.floor(Math.random() * 10).toString()
    if (tmp != 0 && !数字.includes(tmp)) {
      数字 = 数字 + tmp
    }
  }
  return 数字
}

// 是否是数字
function isNum(num) {
  return num + 0 === num
  // return true
}

// 是否是四位
function is4(num) {
  return num.toString().length === 4
}

// 判断1A2B
function isTrue(group, 提交内容) {
  let A = 0
  let B = 0
  let 提交数组 = 提交内容.split('')
  let 答案数组 = 数据记录[group].split('')
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (答案数组[i] == 提交数组[j]) {
        if (i === j) {
          A++
        } else {
          B++
        }
      }
    }
  }
  return A + 'A' + B + 'B'
}

// console.log(createNum())

console.log(isNum(Number.parseInt('8277')))
$.on('message.group', async (message) => {
  let msg = message.msg
  let group = message.group.toString()
  console.log('Receive: Message')
  if (message.msg === 'test') {
    let client = message.client
    client.addAt(message.uin, message.nick)
    client.addText(' 来自JS2')
    bot.send(client)
  }

  if (msg === '关闭1A2B') {
    delete 数据记录[group]
    次数记录[group] = 0
    let client = message.client
    client.addAt(message.uin, message.nick)
    client.addText(' 1A2B已关闭。')
    bot.send(client)
    // delete client
  } else if (msg === '1A2B') {
    if (isEnabled(group)) {
      let client = message.client
      client.addAt(message.uin, message.nick)
      client.addText(' 1A2B已经开始了，不用重复发送哦。')
      bot.send(client)
      // delete client
    } else {
      let num = createNum()
      数据记录[group] = num
      次数记录[group] = 0
      console.log(num)
      console.log(JSON.stringify(数据记录))
      let client = message.client
      client.addAt(message.uin, message.nick)
      client.addText(' 1A2B开始了，发送4位数字吧！')
      bot.send(client)
      // delete client
    }
  } else if (isNum(Number.parseInt(msg)) && is4(msg)) {
    if (isEnabled(group)) {
      if (msg == 数据记录[group]) {
        let client = message.client
        client.addAt(message.uin, message.nick)
        client.addText(
          ' 答对啦！答案是：' + 数据记录[group] + '\n一共猜了：' + 次数记录[group] + '次\n发送「1A2B」再来一局吧！'
        )
        bot.send(client)
        // delete client
        delete 数据记录[group]
        次数记录[group] = 0
      } else {
        次数记录[group]++
        let client = message.client
        client.addAt(message.uin, message.nick)
        client.addText(msg + ' | ' + isTrue(group, msg))
        bot.send(client)
        // delete client
      }
    }
  }
})
