/**
 * 身份牌类
 */
export class Badge {
  /**
   * 类别：
   * 0：主公
   * 1：忠臣
   * 2：反贼
   * 3：内奸
   */
  category: number
  name: string
  constructor(category: number, name: string) {
    this.category = category
    this.name = name
  }
  toString() {
    return `这是一个身份牌对象\n` + `类别 - ${this.category}\n` + `名称 - ${this.name}\n---`
  }
}

/**
 * 身份牌堆类
 */

export class BadgeDeck {
  badges: Array<Badge>

  constructor(num: number) {
    if (num == 5) {
      this.badges = [
        new Badge(0, '主公'),
        new Badge(1, '忠臣'),
        new Badge(2, '反贼'),
        new Badge(2, '反贼'),
        new Badge(3, '内奸'),
      ]
      this.randBadge()
    } else if ((num = 8)) {
      this.badges = [
        new Badge(0, '主公'),
        new Badge(1, '忠臣'),
        new Badge(1, '忠臣'),
        new Badge(2, '反贼'),
        new Badge(2, '反贼'),
        new Badge(2, '反贼'),
        new Badge(2, '反贼'),
        new Badge(3, '内奸'),
      ]
      this.randBadge()
    } else {
      throw new Error('BadgeDeck参数错误')
    }
  }

  randBadge(): void {
    this.badges = this.shuffle(this.badges)
  }

  shuffle(arr: Array<any>): Array<any> {
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

  toString() {
    return `这是一个身份牌堆对象\n` + `当前牌堆 - ${this.badges}\n---`
  }
}
