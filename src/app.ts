import {
  addAnnounce,
  getAnnounce,
  getEssence,
  getFriendInfo,
  getFriends,
  getGroupHonor,
  getGroupInfo,
  getGroupJoinUrl,
  getGroups,
  getGroupSetting,
  getMembersInfo,
  getQQLevelInfo,
  setAnonySwitch,
  setGroupAdmin,
} from './utils/api'

import MineSweeper from './plugins/minesweeper.js'
// 关于本框架的用法请参考 hdic.test.js
// 阅读 README.txt 可以看到所有接口的说明
let minesweeper = new MineSweeper(8, 8, 32)

console.log(minesweeper)
minesweeper.draw_panel()
