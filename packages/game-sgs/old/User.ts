/**
 * 用户基本信息
 */
export class User {
  id = ''
  username = ''
  nickname = ''
  sex = ''
  level = ''
  constructor(id, username, nickname, sex, level) {
    this.id = id
    this.username = username
    this.nickname = nickname
    this.sex = sex
    this.level = level
  }
  toString() {
    return `---\n\n` + `编号 - ${this.id}`
  }
}
