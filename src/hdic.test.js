// 需要什么功能在这里引入就行了
// 关于 import 用法, 请参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import
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
  //简单测试一下
  //@addAnnounce
  if (message.msg.startWith('addAnnounce')) {
    addAnnounce(message.group, message.msg.spilt(' ').slice(1).join(' '))
  }

  //@getAnnounce
  if (message.msg.startWith('getAnnounce')) {
    let announce = await getAnnounce(message.group)
    console.log(announce)
  }

  //@getEssence
  if (message.msg.startWith('getEssence')) {
    let essence = await getEssence(message.group)
    console.log(essence)
  }

  //@getFriend
  if (message.msg.startWith('getFriend')) {
    let friend = await getFriend(message.group, message.msg.spilt(' ')[1])
    console.log(friend)
  }

  //@getFriendInfo
  if (message.msg.startWith('getFriendInfo')) {
    let friendInfo = await getFriendInfo(message.group, message.msg.spilt(' ')[1])
    console.log(friendInfo)
  }

  //@getFriends
  if (message.msg.startWith('getFriends')) {
    let friends = await getFriends(message.group)
    console.log(friends)
  }

  //@getGroup
  if (message.msg.startWith('getGroup')) {
    let group = await getGroup(message.group)
    console.log(group)
  }

  //@getGroupHonor
  if (message.msg.startWith('getGroupHonor')) {
    let groupHonor = await getGroupHonor(message.group)
    console.log(groupHonor)
  }

  //@getGroupInfo
  if (message.msg.startWith('getGroupInfo')) {
    let groupInfo = await getGroupInfo(message.group)
    console.log(groupInfo)
  }

  //@getGroupJoinUrl
  if (message.msg.startWith('getGroupJoinUrl')) {
    let groupJoinUrl = await getGroupJoinUrl(message.group)
    console.log(groupJoinUrl)
  }

  //@getGroups
  if (message.msg.startWith('getGroups')) {
    let groups = await getGroups(message.group)
    console.log(groups)
  }

  //@getGroupSetting
  if (message.msg.startWith('getGroupSetting')) {
    let groupSetting = await getGroupSetting(message.group)
    console.log(groupSetting)
  }

  //@getMembersInfo
  if (message.msg.startWith('getMembersInfo')) {
    let membersInfo = await getMembersInfo(message.group)
    console.log(membersInfo)
  }

  //@getQQLevelInfo
  if (message.msg.startWith('getQQLevelInfo')) {
    let qqLevelInfo = await getQQLevelInfo(message.group, message.msg.spilt(' ')[1])
    console.log(qqLevelInfo)
  }

  //@getSysMsg
  if (message.msg.startWith('getSysMsg')) {
    let sysMsg = await getSysMsg(message.group)
    console.log(sysMsg)
  }

  //@setAnonySwitch
  if (message.msg.startWith('setAnonySwitch')) {
    let anonySwitch = await setAnonySwitch(message.group, message.msg.spilt(' ')[1])
    console.log(anonySwitch)
  }

  //@setGroupAdmin
  if (message.msg.startWith('setGroupAdmin')) {
    let groupAdmin = await setGroupAdmin(message.group, message.msg.spilt(' ')[1], message.msg.spilt(' ')[2])
    console.log(groupAdmin)
  }
})
