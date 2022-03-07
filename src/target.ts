export const Friend = (target: number) => {
  return { type: 'friend', target: target }
}
export interface Friend {
  type: 'friend'
  target: number
  sendMsg(): void
  getInfo(): Object
}
export const Group = (target: number) => {
  return { type: 'group', target: target }
}
export interface Group {
  type: 'group'
  target: number
  sendMsg(): void
}
export const Temp = (target: number) => {
  return { type: 'temp', target: target }
}
