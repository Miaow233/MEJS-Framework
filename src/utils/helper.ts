import { Session } from '../core/medic.js'
/**
 * 判断是否为 URL 链接
 * @param url
 */
export function isUrl(url: string) {
  return /^https?:\/\/.+/.test(url)
}

/**
 * 内部模式
 */
export class InnerMode {
  msg: Session | undefined
  friendSet = new Set()
  groupSet = new Set()
  constructor(msg?: Session) {
    if (msg) this.msg = msg
  }

  setMsg(msg: Session) {
    this.msg = msg
  }

  /**
   * 进入
   */
  enter() {
    const msg = this.msg
    if (!msg) return
    if (msg.type === 'FriendMessage') this.friendSet.add(msg.sender)
    else if (msg.type === 'GroupMessage') this.groupSet.add(msg.group)
  }

  /**
   * 当前状态
   * 是否已进入内部
   */
  getStatus() {
    const msg = this.msg
    if (!msg) return
    if (msg.type === 'FriendMessage') return this.friendSet.has(msg.sender)
    else if (msg.type === 'GroupMessage') return this.groupSet.has(msg.group)
  }

  /**
   * 退出
   */
  exit() {
    const msg = this.msg
    if (!msg) return
    if (msg.type === 'FriendMessage') this.friendSet.delete(msg.sender)
    else if (msg.type === 'GroupMessage') this.groupSet.delete(msg.group)
  }
}
