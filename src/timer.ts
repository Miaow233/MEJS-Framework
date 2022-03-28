import { Logger } from './logger.js'
import { Bot } from './medic.js'
export async function setTimeout(callback: Function, ms: number) {
  await delay(ms), callback()
}

export function clearInterval(id?: number) {
  let timerId = id || getTimerId()
  timerQueue.set(id, false)
  Logger.log(`清除定时器 ${timerId}`)
}

let timerQueue: Map<number, boolean> = new Map()
export async function setInterval(callback: Function, ms: number) {
  let timerId = timerQueue.size + 1
  timerQueue.set(timerId, true)
  while (timerQueue.get(timerId)) {
    callback(), await delay(ms)
  }
  return timerId
}

export function getTimerId() {
  let timerId = timerQueue.size + 1
  return timerId
}