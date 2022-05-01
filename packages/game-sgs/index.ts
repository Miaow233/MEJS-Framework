// @ts-nocheck
//import { HandCard, Item } from './card'
import { Character } from './character'
/** 游戏状态基类 */
class State {}

/** 玩家 */
class Player {
  /** 身份 */
  identity: string
  /** 武将牌 */
  character: Character
  /** 游戏状态 */
  state: State
  /** 装备 */
  item: Item[]
  /** 伤害来源 */
  culprit?: Player
  /** 手牌 */
  hand_card: HandCard[]
  /** 延迟技能 */
}

/** 牌堆 */
class Deck {}

/** 弃牌堆 */
class TossDeck extends Deck {}

// 期待数据结构
// {
//   "name": "杀",
//   "description": "",
//   "allow": [
//     "黑桃1",
//     "黑桃2",
//     "黑桃3"
//   ],
// }

enum StateName {
  // 回合开始：部分武将发动技能时机
  TurnStart,

  // 判定阶段：对延时锦囊进行判定时机
  Judge,

  // 摸牌阶段：摸两张牌。
  Draw,

  // 出牌阶段：正常情况下每人每回合使用一张杀
  Action,

  // 弃牌阶段：需要将手牌丢弃至等于当前体力
  Discard,

  // 回合结束：部分武将发动技能时机
  TurnEnd,
}

/** 游戏主体类 */
class Game {}
