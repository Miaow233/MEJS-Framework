import { setTimeout, setInterval, getTimerId, clearInterval } from '../timer.js'
let task = getTimerId()
let times = 0
setInterval(() => {
  times += 1
  console.log('setInterval' + times)
}, 1000)

setTimeout(() => {
  clearInterval(task)
}, 5000)
