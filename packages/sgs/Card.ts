/**
 * 卡牌类
 */
class Card {
  category: number = 0
  color: string = ''
  name: string = ''
  point: string = ''
  pointWeight: number = 0
  scope?: number = 0

  constructor() {
    const colors = ['红桃♥', '方片♦', '黑桃♠', '梅花♣']
    const points = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    // 花色
    this.color = colors[Math.floor(Math.random() * colors.length)]
    // 点数
    this.point = points[Math.floor(Math.random() * points.length)]
    // 权值
    this.weight()
  }
  // 根据点数赋值权值
  weight() {
    switch (this.point) {
      case 'A':
        this.pointWeight = 1
        break
      case '2':
        this.pointWeight = 2
        break
      case '3':
        this.pointWeight = 3
        break
      case '4':
        this.pointWeight = 4
        break
      case '5':
        this.pointWeight = 5
        break
      case '6':
        this.pointWeight = 6
        break
      case '7':
        this.pointWeight = 7
        break
      case '8':
        this.pointWeight = 8
        break
      case '9':
        this.pointWeight = 9
        break
      case '10':
        this.pointWeight = 10
        break
      case 'J':
        this.pointWeight = 11
        break
      case 'Q':
        this.pointWeight = 12
        break
      case 'K':
        this.pointWeight = 13
        break
    }
  }
  toString() {
    return (
      `这是一个卡牌对象\n` +
      `类别 - ${this.category}\n` +
      `名称 - ${this.name}\n` +
      `花色 - ${this.color}\n` +
      `点数 - ${this.point}\n` +
      `点数权值 - ${this.pointWeight}\n` +
      `武器的攻击范围 - ${this.scope}\n` +
      `---`
    )
  }
}

class Sha extends Card {
  constructor() {
    super()
    this.category = 101
    this.name = '杀'
  }
}

class Shan extends Card {
  constructor() {
    super()
    this.category = 102
    this.name = '闪'
  }
}

class Tao extends Card {
  constructor() {
    super()
    this.category = 103
    this.name = '桃'
  }
}

class Jiu extends Card {
  constructor() {
    super()
    this.category = 104
    this.name = '酒'
  }
}

class HuoSha extends Card {
  constructor() {
    super()
    this.category = 105
    this.name = '火杀'
  }
}

class LeiSha extends Card {
  constructor() {
    super()
    this.category = 106
    this.name = '雷杀'
  }
}

class JueDou extends Card {
  constructor() {
    super()
    this.category = 201
    this.name = '决斗'
  }
}

class GuoHeChaiQiao extends Card {
  constructor() {
    super()
    this.category = 202
    this.name = '过河拆桥'
  }
}

class ShunShouQianYang extends Card {
  constructor() {
    super()
    this.category = 203
    this.name = '顺手牵羊'
  }
}

class WuZhongShengYou extends Card {
  constructor() {
    super()
    this.category = 204
    this.name = '无中生有'
  }
}

class JieDaoShaRen extends Card {
  constructor() {
    super()
    this.category = 205
    this.name = '节刀杀人'
  }
}

class WuXieKeJi extends Card {
  constructor() {
    super()
    this.category = 206
    this.name = '无懈可击'
  }
}

class NanManRuQin extends Card {
  constructor() {
    super()
    this.category = 207
    this.name = '南蛮入侵'
  }
}

class WanJianQiFa extends Card {
  constructor() {
    super()
    this.category = 208
    this.name = '万箭齐发'
  }
}

class TaoYuanJieYi extends Card {
  constructor() {
    super()
    this.category = 209
    this.name = '桃园结义'
  }
}

class WuGuFengDeng extends Card {
  constructor() {
    super()
    this.category = 210
    this.name = '五谷丰登'
  }
}

class HuoGong extends Card {
  constructor() {
    super()
    this.category = 211
    this.name = '火攻'
  }
}
class TieSuoLianHuan extends Card {
  constructor() {
    super()
    this.category = 212
    this.name = '铁索连环'
  }
}
class LeBuSiShu extends Card {
  constructor() {
    super()
    this.category = 301
    this.name = '乐不思蜀'
  }
}
class ShanDian extends Card {
  constructor() {
    super()
    this.category = 302
    this.name = '闪电'
  }
}

// """
// 兵粮寸断303
// """
class BingLiangCunDuan extends Card {
  constructor() {
    super()
    this.category = 303
    this.name = '兵粮寸断'
  }
}

// """
// 诸葛连弩401
// """
class ZhuGeLianNu extends Card {
  constructor() {
    super()
    this.category = 401
    this.name = '诸葛连弩'
    this.scope = 1
  }
}

// """
// 青釭剑402
// """
class QingGangJian extends Card {
  constructor() {
    super()
    this.category = 402
    this.name = '青釭剑'
    this.scope = 2
  }
}

// """
// 雌雄双股剑403
// """
class CiXiongShuangGuJian extends Card {
  constructor() {
    super()
    this.category = 403
    this.name = '雌雄双股剑'
    this.scope = 2
  }
}

// """
// 贯石斧404
// """
class GuanShiFu extends Card {
  constructor() {
    super()
    this.category = 404
    this.name = '贯石斧'
    this.scope = 3
  }
}

// """
// 青龙偃月刀405
// """
class QingLongYanYueDao extends Card {
  constructor() {
    super()
    this.category = 405
    this.name = '青龙偃月刀'
    this.scope = 3
  }
}

// """
// 丈八蛇矛406
// """
class ZhangBaSheMao extends Card {
  constructor() {
    super()
    this.category = 406
    this.name = '丈八蛇矛'
    this.scope = 3
  }
}

// """
// 方天画戟407
// """
class FangTianHuaJi extends Card {
  constructor() {
    super()
    this.category = 407
    this.name = '方天画戟'
    this.scope = 4
  }
}

// """
// 麒麟弓408
// """
class QiLinGong extends Card {
  constructor() {
    super()
    this.category = 408
    this.name = '麒麟弓'
    this.scope = 5
  }
}

// """
// 古锭刀409
// """
class GuDingDao extends Card {
  constructor() {
    super()
    this.category = 409
    this.name = '古锭刀'
    this.scope = 2
  }
}

// """
// 朱雀羽扇410
// """
class ZhuQueYuShan extends Card {
  constructor() {
    super()
    this.category = 410
    this.name = '朱雀羽扇'
    this.scope = 4
  }
}

// """
// 寒冰剑411
// """
class HanBingJian extends Card {
  constructor() {
    super()
    this.category = 411
    this.name = '寒冰剑'
    this.scope = 2
  }
}

// """
// 八卦阵501
// """
class BaGuaZhen extends Card {
  constructor() {
    super()
    this.category = 501
    this.name = '八卦阵'
  }
}

// """
// 白银狮子502
// """
class BaiYinShiZi extends Card {
  constructor() {
    super()
    this.category = 502
    this.name = '白银狮子'
  }
}

// """
// 藤甲503
// """
class TengJia extends Card {
  constructor() {
    super()
    this.category = 503
    this.name = '藤甲'
  }
}

// """
// 仁王盾504
// """
class RenWangDun extends Card {
  constructor() {
    super()
    this.category = 504
    this.name = '仁王盾'
  }
}

// """
// 爪黄飞电601
// """
class ZhuaHuangFeiDian extends Card {
  constructor() {
    super()
    this.category = 601
    this.name = '爪黄飞电'
  }
}

// """
// 的卢602
// """
class DiLu extends Card {
  constructor() {
    super()
    this.category = 602
    this.name = '的卢'
  }
}

// """
// 绝影603
// """
class JueYing extends Card {
  constructor() {
    super()
    this.category = 603
    this.name = '绝影'
  }
}

// """
// 骅骝604
// """
class HuaLiu extends Card {
  constructor() {
    super()
    this.category = 604
    this.name = '骅骝'
  }
}

// """
// 赤兔701
// """
class ChiTu extends Card {
  constructor() {
    super()
    this.category = 701
    this.name = '赤兔'
  }
}

// """
// 紫骍702
// """
class ZiXing extends Card {
  constructor() {
    super()
    this.category = 702
    this.name = '紫骍'
  }
}

// """
// 大宛703
// """
class DaWan extends Card {
  constructor() {
    super()
    this.category = 703
    this.name = '大宛'
  }
}

/**
 * 摸牌堆类
 */
class CardDeck {
  cards: Card[]
  constructor() {
    this.cards = []

    // 基本牌100
    for (let i = 0; i < 20; i++) {
      this.cards.push(new Sha())
      this.cards.push(new Shan())
      this.cards.push(new Tao())
      this.cards.push(new Jiu())
      this.cards.push(new HuoSha())
      this.cards.push(new LeiSha())
    }

    // 非延时锦囊200
    for (let i = 0; i < 10; i++) {
      this.cards.push(new JueDou())
      this.cards.push(new GuoHeChaiQiao())
      this.cards.push(new ShunShouQianYang())
      this.cards.push(new WuZhongShengYou())
      this.cards.push(new JieDaoShaRen())
      this.cards.push(new WuXieKeJi())
      this.cards.push(new NanManRuQin())
      this.cards.push(new WanJianQiFa())
      this.cards.push(new TaoYuanJieYi())
      this.cards.push(new WuGuFengDeng())
    }

    // 延时锦囊300
    for (let i = 0; i < 5; i++) {
      this.cards.push(new LeBuSiShu())
      this.cards.push(new ShanDian())
      this.cards.push(new BingLiangCunDuan())
    }

    // 武器牌400
    for (let i = 0; i < 2; i++) {
      this.cards.push(new ZhuGeLianNu())
      this.cards.push(new QingGangJian())
      this.cards.push(new CiXiongShuangGuJian())
      this.cards.push(new GuanShiFu())
      this.cards.push(new QingLongYanYueDao())
      this.cards.push(new ZhangBaSheMao())
      this.cards.push(new FangTianHuaJi())
      this.cards.push(new QiLinGong())
      this.cards.push(new GuDingDao())
      this.cards.push(new ZhuQueYuShan())
      this.cards.push(new HanBingJian())
    }

    // 防具牌500
    for (let i = 0; i < 3; i++) {
      this.cards.push(new BaGuaZhen())
      this.cards.push(new BaiYinShiZi())
      this.cards.push(new TengJia())
      this.cards.push(new RenWangDun())
    }

    // +马600
    for (let i = 0; i < 5; i++) {
      this.cards.push(new ZhuaHuangFeiDian())
      this.cards.push(new DiLu())
      this.cards.push(new JueYing())
      this.cards.push(new HuaLiu())
    }

    // -马700
    for (let i = 0; i < 5; i++) {
      this.cards.push(new ChiTu())
      this.cards.push(new ZiXing())
      this.cards.push(new DaWan())
    }

    // 洗牌
    this.randCard()
  }

  toString() {
    this.cards.forEach((card) => {
      console.log(card)
    })
    return `这是一个摸牌堆对象\n当前牌堆 - ${this.cards}\n当前牌堆卡牌总数 - ${this.cards.length}\n---`
  }
  randCard() {
    // 创建一个缓存，用于临时存放打乱顺序的牌堆
    let cardCache = Array<Card>()
    // 遍历以前的卡牌列表
    while (this.cards.length > 0) {
      // 随机抽取一张牌
      let randIndex = Math.floor(Math.random() * this.cards.length)
      // 抽取的牌放入缓存
      cardCache.push(this.cards[randIndex])
      // 删除抽取的牌
      this.cards.splice(randIndex, 1)
    }
    this.cards = cardCache
  }
}

/**
 * 弃牌堆类
 */

class DiscardDeck {
  cards: Card[]
  constructor() {
    this.cards = []
  }
  toString() {
    return `这是一个出牌堆对象\n当前牌堆 - ${this.cards}\n当前牌堆卡牌总数 - ${this.cards.length}\n---`
  }
}

export {
  Card,
  CardDeck,
  DiscardDeck,
  Sha,
  Shan,
  Tao,
  Jiu,
  HuoSha,
  LeiSha,
  JueDou,
  GuoHeChaiQiao,
  ShunShouQianYang,
  WuZhongShengYou,
  JieDaoShaRen,
  WuXieKeJi,
  NanManRuQin,
  WanJianQiFa,
  TaoYuanJieYi,
  WuGuFengDeng,
  LeBuSiShu,
  ShanDian,
  BingLiangCunDuan,
  ZhuGeLianNu,
  QingGangJian,
  CiXiongShuangGuJian,
  GuanShiFu,
  QingLongYanYueDao,
  ZhangBaSheMao,
  FangTianHuaJi,
  QiLinGong,
  GuDingDao,
  ZhuQueYuShan,
  HanBingJian,
  BaGuaZhen,
  BaiYinShiZi,
  TengJia,
  RenWangDun,
  ZhuaHuangFeiDian,
  DiLu,
  JueYing,
  HuaLiu,
  ChiTu,
  ZiXing,
  DaWan,
}
