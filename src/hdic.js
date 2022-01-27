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
// let qqLevelInfo = await getQQLevelInfo(1293865264)
// console.log(qqLevelInfo)

// let sysMsg = await getSysMsg(702333934)
// console.log(sysMsg)
// let groupSetting = await getGroupSetting(702333934)
// console.log(groupSetting)
let friendInfo = await getFriendInfo(1293865264)
console.log(friendInfo)
