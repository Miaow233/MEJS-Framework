import { CARD } from './data'
import { Player } from './player'

export const enum CardType {
  Basic,
  Equip,
  Weapon,
  Shield,
  OffenseRide,
  DefenseRide,
  Precious,
  Trick,
  DelayedTrick,
}
export abstract class AbstractDeck<T extends AbstractCard> {
  cards = Array<T>()

  draw(): T {
    let card = this.cards.pop()
    if (!card) throw new Error('牌库已空')
    return card
  }

  /** 洗牌 */
  shuffle(arr: Array<T>): Array<T> {
    var l = arr.length
    var index, temp
    while (l > 0) {
      index = Math.floor(Math.random() * l)
      temp = arr[l - 1]
      arr[l - 1] = arr[index]
      arr[index] = temp
      l--
    }
    return arr
  }

  toString(): string {
    return `牌库数量: ${this.cards.length}`
  }
}
/** 游戏牌组 */
export class CardDeck extends AbstractDeck<Card> {
  constructor() {
    super()
    this.cards = []
    CARD.forEach((c) => {
      let suit = c.color
      let suitName: string
      // 'color' : 方块: 0, 红桃: 1, 梅花: 2, 黑桃: 3
      switch (suit) {
        case 0:
          suitName = '方块'
          break
        case 1:
          suitName = '红桃'
          break
        case 2:
          suitName = '梅花'
          break
        case 3:
          suitName = '黑桃'
          break
        default:
          throw new Error('不存在的花色')
      }
      let TCard: Card
      switch (c.name) {
        case '杀':
          this.cards.push(new Sha(c.name, suitName, Number(c.digit)))
          break
        case '闪':
          this.cards.push(new Shan(c.name, suitName, Number(c.digit)))
          break
        case '桃':
          this.cards.push(new Tao(c.name, suitName, Number(c.digit)))
      }
      this.cards.push(new Card(c.name, suitName, Number(c.digit)))
    })

    this.cards = this.shuffle(this.cards)
  }
}

export class DiscardDeck extends AbstractDeck<Card> {
  constructor() {
    super()
    this.cards = []
  }
}

/** 卡牌基类 */
export abstract class AbstractCard {
  name: string = ''
  description: string = ''
  type?: CardType
  constructor(name: string, description?: string) {
    // 从数据文件中找到这张牌
    // 生成对应牌面
    // 根据限制随机生成花色点数
    // 即：读取牌库中这种卡牌可用花色及点数，随机生成一张牌并更新牌库
    // 牌库数据通过读取保存，不会改变源文件
    this.name = name
  }
  toString(): string {
    return `卡牌名称: ${this.name}\n卡牌描述: ${this.description}`
  }
}

/** 手牌
 * 类型：基本牌 锦囊牌 装备牌
 * 花色
 * 点数
 */
export class Card extends AbstractCard {
  suit: 'SPADE' | 'CLUB' | 'HEART' | 'DIAMOND'
  color: 'RED' | 'BLACK'
  point: number
  constructor(name: string, suit, point: number) {
    super(name)
    this.suit = suit
    this.color = this.getColor()
    this.point = point
  }
  getColor(): 'RED' | 'BLACK' {
    switch (this.suit) {
      case 'HEART':
        return 'RED'
      case 'DIAMOND':
        return 'RED'
      case 'SPADE':
        return 'BLACK'
      case 'CLUB':
        return 'BLACK'
    }
  }
  toString(): string {
    return `卡牌名称: ${this.name}\n卡牌描述: ${this.description}\n卡牌花色: ${this.suit}\n卡牌点数: ${this.point}`
  }
  use(player: Player): void {
    // 执行效果
    // 删除手牌
  }
}

class Sha extends Card {
  constructor(name: string, suit: string, point: number) {
    super(name, suit, point)
  }
  use(player: Player): void {
    player.marks.neadShan = true
  }
}

class Shan extends Card {
  use(player: Player): void {
    player.marks.neadShan = true
  }
}

class Tao extends Card {
  use(player: Player): void {
    player.marks.neadTao = true
  }
}

// /** 基本牌 */
// class BasicCard extends Card {
//   constructor(name) {
//     super(name)
//     this.type = CardType.Basic
//   }
// }

// /** 锦囊牌 */
// abstract class Strategic extends Card {
//   constructor(name) {
//     super(name)
//   }
// }

// /** 普通锦囊牌 */
// class RegularStrategic extends Strategic {
//   constructor(name) {
//     super(name)
//   }
// }

// /** 延时锦囊牌 */
// class DelayedStrategic extends Strategic {
//   constructor(name) {
//     super(name)
//   }
// }

// /** 装备牌 */
// export class Item extends Card {
//   constructor(name) {
//     super(name)
//   }
// }
