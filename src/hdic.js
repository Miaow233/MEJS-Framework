import {
  addAnnounce,
  getAnnounce,
  getEssence,
  getFriend,
  getFriendInfo,
  getFriends,
  getGroup,
  getGroupHonor,
  getGroupInfo,
  getGroupJoinUrl,
  getGroups,
  getGroupSetting,
  getMembersInfo,
  getQQLevelInfo,
  getSysMsg,
  setAnonySwitch,
  setGroupAdmin,
} from './utils/api.js'

import MineSweeper from './minesweeper.js'
// 关于本框架的用法请参考 hdic.test.js
// 阅读 README.txt 可以看到所有接口的说明
let minesweeper = new MineSweeper(8, 8, 32)

console.log(minesweeper)
minesweeper.draw_panel()
