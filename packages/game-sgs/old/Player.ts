import { Badge } from './Badge'
import { Card } from './Card'
import { Commander } from './Commander'
import { User } from './User'

/**
 * 玩家类
 */
export class Player {
  leftPlayer: Player
  rightPlayer: Player
  // 座位编号
  location!: number
  equipment: Object
  user: User
  badge: Badge
  commander: Commander
  blood: number
  cards: Card[]
  markSkilBag: {
    // 乐不思蜀
    lebusishu: string
    // 闪电
    shandian: string
    // 兵粮寸断
    bingliangcunduan: string
  }
  markBout: { sha: boolean; jiu: boolean }
  isDie: boolean
  constructor(user: User, badge: Badge, commander: Commander) {
    this.user = user

    this.badge = badge
    // 武将信息
    this.commander = commander
    this.blood = this.commander.blood
    this.cards = []
    this.equipment = {
      arms: '',
      'horse+': '',
      'horse-': '',
      armor: '',
    }
    this.markSkilBag = {
      // 乐不思蜀
      lebusishu: '',
      // 闪电
      shandian: '',
      // 兵粮寸断
      bingliangcunduan: '',
    }

    this.isDie = false
    this.markBout = {
      sha: false,
      jiu: false,
    }
    this.rightPlayer = this
    this.leftPlayer = this
  }
}
