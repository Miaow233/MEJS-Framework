export async function setTimeout(callback: (...args: any) => void, ms: number) {
  await delay(ms), callback()
}

export function clearInterval(id?: number) {
  let timerId = id || getTimerId()
  timerQueue.set(timerId, false)
}

let timerQueue: Map<number, boolean> = new Map()
export async function setInterval(callback: (...args: any) => void, ms: number) {
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
