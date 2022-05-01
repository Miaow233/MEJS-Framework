import { Player } from './Player'

// 实际距离
function ShijiJuli(player_from: Player, player_to: Player): number {
  // 从上家找距离
  let sumLeft = 1
  let point = player_from.leftPlayer
  while (point.location != player_to.location) {
    point = point.leftPlayer
    sumLeft++
  }
  // 从下家找距离
  let sumRight = 1
  point = player_from.rightPlayer
  while (point.location != player_to.location) {
    point = point.rightPlayer
    sumRight++
  }
  let sum = Math.min(sumLeft, sumRight)
  // 起点-马修正距离
  if (player_from.equipment['horse-'] != '') {
    sum--
  }
  // 终点+马修正距离
  if (player_to.equipment['horse+'] != '') {
    sum++
  }
  return sum
}

// 攻击距离
function GongjiJuli(player_from: Player, player_to: Player): number {
  let sum = ShijiJuli(player_from, player_to)
  // 武器修正距离
  if (player_from.equipment['arms'] != '') {
    sum -= player_from.equipment['arms'].scope - 1
  }
  return sum
}

export { ShijiJuli, GongjiJuli }
