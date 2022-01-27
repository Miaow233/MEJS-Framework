import { fetchApi } from './util.js'
import { BKN } from '../config.js'

/**
 * 获取一个好友实例
 * @param {*} id
 * @returns
 */
async function getFriend(id) {
  let res = await fetchApi('GET', `https://cgi.find.qq.com/qqfind/buddy/search_v3?keyword=${id}`)
  return JSON.parse(res)
}

/**
 * 获取一个群组实例
 * @param {*} id
 */
async function getGroup(id) {
  let groupInfo = await getGroupInfo(id)
  let group = {}
  group.id = id
  group.name = groupInfo.name
  group.owner = groupInfo.owner
  group.admin = groupInfo.at
  group.members = []
  group.members.push(group.owner)
  group.members = group.members.concat(group.admin)
  return group
}

/**
 * 获取好友列表
 */
async function getFriends() {
  let res = await fetchApi('GET', `https://qun.qq.com/cgi-bin/qun_mgr/get_friend_list?&bkn=${BKN}`)
  let temp = JSON.parse(res)['result']
  let friends = []
  for (let tag in temp) {
    friends = friends.concat(temp[tag]['mems'])
  }
  return friends
}

/**
 * 获取群组列表
 */
async function getGroups() {
  let res = await fetchApi('GET', `https://qun.qq.com/cgi-bin/qun_mgr/get_group_list?&bkn=${BKN}`)
  let temp = JSON.parse(res.replace('"gc"', '"id"'))
  let groups = []
  for (let tag in temp) {
    if (!temp[tag]) continue
    groups = groups.concat(temp[tag])
  }
  return groups
}

/**
 * 获取指定群组信息
 */
async function getGroupInfo(id) {
  let res = await fetchApi('POST', `https://qinfo.clt.qq.com/cgi-bin/qun_info/get_group_info_all?gc=${id}&bkn=${BKN}`)
  let temp = JSON.parse(res)
  let groupInfo = []
  groupInfo.id = id // 群号
  groupInfo.owner = temp['gOwner'] // 群主
  groupInfo.name = temp['gName'] // 群名
  groupInfo.admin = temp['gAdmins'] // 管理员
  return groupInfo
}

/**
 * 设置管理员
 * @param {number} group_id
 * @param {number} qq_id
 * @param {boolean} is_admin
 * @returns {boolean} 是否成功
 */
async function setGroupAdmin(group_id, qq_id, is_admin) {
  // conver boolean to 1 or 0
  is_admin = is_admin ? 1 : 0
  let res = await fetchApi(
    'GET',
    `https://qun.qq.com/cgi-bin/qun_mgr/set_group_admin`,
    `gc=${group_id}&qq=${qq_id}&op=${is_admin}&bkn=${BKN}`
  )
  return JSON.parse(res)['ec'] === 0
}

/**
 * 获取群成员群 `操作时间` 等配置
 *
 * 先不封装了, 主要是 `members` 的值
 *
 * `lst` 最后一次在群里发言时间(该使用了标准10位时间戳,转换时间需要乘以1000)
 *
 * `jt `入群的时间(该使用了标准10位时间戳,转换时间需要乘以1000)
 *
 * 剩下其余参数不清楚, 后期补全
 */
async function getMembersInfo(id) {
  let res = await fetchApi('GET', `https://qinfo.clt.qq.com/cgi-bin/qun_info/get_members_info_v1?gc=${id}&bkn=${BKN}`)
  return JSON.parse(res)
}

/**
 * 获取get_join_k的值
 */
async function getJoink(id) {
  let res = await fetchApi(
    'POST',
    `https://qun.qq.com/proxy/domain/admin.qun.qq.com/cgi-bin/qun_admin/get_join_k`,
    `gc=${id}&bkn=${BKN}`
  )
  return JSON.parse(res)[`k`]
}

/**
 * 获取<strong>指定QQ群</strong>加群链接
 * @param {number} id
 * @returns {string}
 */
async function getGroupJoinUrl(id) {
  let joinK = await getJoink(id)
  return `https://qm.qq.com/cgi-bin/qm/qr?k=${joinK}&jump_from=webapi`
}
export { getFriend, getFriends, getGroup, getGroupInfo, getGroupJoinUrl, getGroups, getMembersInfo, setGroupAdmin }
