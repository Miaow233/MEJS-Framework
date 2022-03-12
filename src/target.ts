export const Friend = (target: number) => {
  return { type: 'friend', target: target }
}

export interface Friend {
  type: 'friend'
  target: number
  sendMsg(): void
  getInfo(): Object
  getAvatar(): string
}

export const Group = (target: number) => {
  return { type: 'group', target: target }
}

export interface Group {
  type: 'group'
  target: number
  sendMsg(): void
  getInfo(): Object
  getMembers(): Array<number>
}

export const Temp = (target: number) => {
  return { type: 'temp', target: target }
}

export interface Temp {
  type: 'temp'
  target: number
  sendMsg(): void
  getInfo(): Object
  getAvatar(): string
}
