// 需要什么功能在这里引入就行了
// 部分支持的方法在 README.txt 中有说明
// 关于 import 用法, 请参考: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import
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
} from './mejs/index.js'

// let friend = await getFriend(123456789)
// let friends = await getFriends()  // 返回列表
// let group = await getGroup(123456789)
// let groupInfo = await getGroupInfo(123456789)
// let groupJoinUrl = await getGroupJoinUrl(702333934)
// let groups = await getGroups()
// let membersInfo = await getMembersInfo(702333934)
// console.log(JSON.stringify(membersInfo))
// console.log(groupJoinUrl)
// setGroupAdmin(123456789, 123456789, true)
// 注意有些是异步操作, 获取返回值需要用 await

$.on('message.group', async (message) => {
  let msg = message.message
  //简单测试一下
  //@addAnnounce
  if (msg.startsWith('addAnnounce')) {
    addAnnounce(message.group, msg.split(' ').slice(1).join(' '))
  }

  //@getAnnounce
  if (msg.startsWith('getAnnounce')) {
    let announce = await getAnnounce(message.group)
    console.log(announce)
  }

  //@getEssence
  if (msg.startsWith('getEssence')) {
    let essence = await getEssence(message.group)
    console.log(essence)
  }

  //@getFriend
  if (msg.startsWith('getFriend')) {
    let friend = await getFriend(message.group, msg.split(' ')[1])
    console.log(friend)
  }

  //@getFriendInfo
  if (msg.startsWith('getFriendInfo')) {
    let friendInfo = await getFriendInfo(message.group, msg.split(' ')[1])
    console.log(friendInfo)
  }

  //@getFriends
  if (msg.startsWith('getFriends')) {
    let friends = await getFriends(message.group)
    console.log(friends)
  }

  //@getGroup
  if (msg.startsWith('getGroup')) {
    let group = await getGroup(message.group)
    console.log(group)
  }

  //@getGroupHonor
  if (msg.startsWith('getGroupHonor')) {
    let groupHonor = await getGroupHonor(message.group)
    console.log(groupHonor)
  }

  //@getGroupInfo
  if (msg.startsWith('getGroupInfo')) {
    let groupInfo = await getGroupInfo(message.group)
    console.log(groupInfo)
  }

  //@getGroupJoinUrl
  if (msg.startsWith('getGroupJoinUrl')) {
    let groupJoinUrl = await getGroupJoinUrl(message.group)
    console.log(groupJoinUrl)
  }

  //@getGroups
  if (msg.startsWith('getGroups')) {
    let groups = await getGroups(message.group)
    console.log(groups)
  }

  //@getGroupSetting
  if (msg.startsWith('getGroupSetting')) {
    let groupSetting = await getGroupSetting(message.group)
    console.log(groupSetting)
  }

  //@getMembersInfo
  if (msg.startsWith('getMembersInfo')) {
    let membersInfo = await getMembersInfo(message.group)
    console.log(membersInfo)
  }

  //@getQQLevelInfo
  if (msg.startsWith('getQQLevelInfo')) {
    let qqLevelInfo = await getQQLevelInfo(message.group, msg.split(' ')[1])
    console.log(qqLevelInfo)
  }

  //@getSysMsg
  if (msg.startsWith('getSysMsg')) {
    let sysMsg = await getSysMsg(message.group)
    console.log(sysMsg)
  }

  //@setAnonySwitch
  if (msg.startsWith('setAnonySwitch')) {
    let anonySwitch = await setAnonySwitch(message.group, msg.split(' ')[1])
    console.log(anonySwitch)
  }

  //@setGroupAdmin
  if (msg.startsWith('setGroupAdmin')) {
    let groupAdmin = await setGroupAdmin(message.group, msg.split(' ')[1], msg.split(' ')[2])
    console.log(groupAdmin)
  }
})
