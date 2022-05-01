import { BadgeDeck } from './Badge'
import * as Card from './Card'
import { ShijiJuli, GongjiJuli } from './CkeckJuli'
import { Commander } from './Commander'
import { Player } from './Player'
import { User } from './User'
// ########## 初始化身份牌堆
let badgeDeck = new BadgeDeck(5)

// 打印身份牌堆
console.log(badgeDeck.toString())
console.log('身份牌堆初始化完成')

// ########## 初始化摸牌堆
let cardDeck = new Card.CardDeck()

// 打印摸牌堆
// console.log(cardDeck)
console.log('卡牌堆初始化完成')

// ########## 初始化出牌堆
let discardDeck = new Card.DiscardDeck()
console.log(discardDeck.toString())
console.log('弃牌堆初始化完成')

// ########## 初始化用户
// 手动创建5个用户
let user01 = new User('01', 'zhangsan', '张三', '男', 99)
let user02 = new User('02', 'lisi', '李四', '女', 99)
let user03 = new User('03', 'wangwu', '王五', '男', 99)
let user04 = new User('04', 'zhaoliu', '赵六', '男', 99)
let user05 = new User('05', 'sunqi', '孙七', '女', 99)

// 打印用户
// console.log(user01.toString())
// console.log(user02)
// console.log(user03)
// console.log(user04)
// console.log(user05.toString())

console.log('用户初始化完成')

// ########## 初始化武将牌堆
// 创建1个无技能武将
let commander01 = new Commander('01', '0', '武将', 4, [])

console.log(commander01.toString())

// ########## 初始化玩家
// 创建5个玩家
let player01 = new Player(user01, badgeDeck.badges[0], commander01)
let player02 = new Player(user02, badgeDeck.badges[1], commander01)
let player03 = new Player(user03, badgeDeck.badges[2], commander01)
let player04 = new Player(user04, badgeDeck.badges[3], commander01)
let player05 = new Player(user05, badgeDeck.badges[4], commander01)

let players = [player01, player02, player03, player04, player05]

// 创建每个身份存活玩家对应的列表
let zhu_gong: Player[] = []
let zhong_chen: Player[] = []
let fan_zei: Player[] = []
let nei_jian: Player[] = []

// 遍历所有玩家，把玩家放入对应身份的列表中
for (const player of players) {
  switch (player.badge.category) {
    case 0:
      zhu_gong.push(player)
      break
    case 1:
      zhong_chen.push(player)
      break
    case 2:
      fan_zei.push(player)
      break
    case 3:
      nei_jian.push(player)
      break
    default:
      break
  }
}

// 为每名玩家初始化位置，从主公开始
for (const player of players) {
  // 首先找到主公
  if (player.badge.category === 0) {
    // 找到主公在完结列表的下标
    let index = players.indexOf(player)
    // 位置计数器，从1开始
    let local = 1
    // 循环总玩家数次
    for (let i = 0; i < players.length; i++) {
      // 把位置计数器赋值给当前下标玩家的位置
      players[index].location = local
      local++
      // 判断当前下标值是否超出列表长度
      if (index + 1 < players.length) {
        index++
      } else {
        index = 0
      }
      // 找到主公后，不需要继续循环，直接跳出
      break
    }
  }
}

// 重新根据座位号排序玩家在玩家列表的下标位置
// 一直遍历，直到列表第一个玩家为主公
while (players[0].location != 1) {
  // 每次如果列表第一位不是主公，就将列表第一位挪到列表最后一位
  let temp = players[0]
  players.splice(0, 1)
  players.push(temp)
}

// 初始化每个人的上家和下家
let index = 0
while (index < players.length) {
  // 初始化下家
  if (index == players.length - 1) {
    players[index].rightPlayer = players[0]
  } else {
    players[index].rightPlayer = players[index + 1]
  }
  // 初始化上家
  if (index == 0) {
    players[index].leftPlayer = players[players.length - 1]
  }
  index++
}

console.log('玩家初始化完成')

// ########## 分发起始手牌
for (const p of players) {
  for (let num = 0; num < 4; num++) {
    let card = cardDeck.cards.pop()
    if (card) {
      p.cards.push(card)
    } else {
      console.log('牌堆已空')
    }
  }
}

console.log('起始手牌分发完成')
