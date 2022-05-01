/**
 * 武将类
 */

class Commander {
  id = ''
  nation = ''
  name = ''
  blood = 0
  skills = []

  constructor(id, nation, name, blood, skills) {
    this.id = id
    this.nation = nation
    this.name = name
    this.blood = blood
    this.skills = skills
  }

  toString() {
    return (
      `这是一个武将对类\n` +
      `编号 - ${this.id}\n` +
      `国家 - ${this.nation}\n` +
      `武将名 - ${this.name}\n` +
      `血量上限 - ${this.blood}\n` +
      `技能列表 - ${this.skills}\n---`
    )
  }
}

export { Commander }
