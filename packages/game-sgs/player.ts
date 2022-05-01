import { Card } from './card'
import { Character } from './character'
import { IDENTITY_INDEX_MAPPING } from './data'

/** 玩家 */
export class Player {
  name: string
  /** 身份 */
  identity: string

  /** 武将牌 */
  character: Character

  // 游戏状态
  // state: State

  // 装备
  // item: Item[]

  // 伤害来源
  culprit?: Player

  // 手牌
  handCard: Card[]

  leftPlayer: Player
  rightPlayer: Player
  // 座位编号
  location!: number
  equipment: Object
  isDie: boolean
  marks: any
  constructor(identity: string, character: Character) {
    this.identity = identity
    this.character = character
    this.handCard = []
    this.equipment = {
      arms: '',
      'horse+': '',
      'horse-': '',
      armor: '',
    }
    this.isDie = false
    this.rightPlayer = this
    this.leftPlayer = this
  }
  /** 使用 */
  use(card: string, target: Player) {
    const cardInstance = this.findCard(card)
    if (cardInstance) {
      cardInstance.use(target)
      this.handCard.splice(this.handCard.indexOf(cardInstance), 1)
    }
  }
  /** 打出 */
  play() {}
  /** 丢弃 */
  toss() {}
  /** 视为 */
  as(name) {}
  /** 交给 */
  give(target: Player) {}
  findCard(name: string): Card | undefined {
    return this.handCard.find((card) => card.name === name)
  }
  toString() {
    return `身份：${this.identity}, 武将：${this.character.name}, 手牌：${this.handCard ? this.handCard.length : 0}张`
  }
}
