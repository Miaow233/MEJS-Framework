// @ts-nocheck
import * as http from '../extension/http.js'
import { fetchApi } from './util.js'

/**
 * 获取好友列表
 * @returns {Array}
 */
async function getFriends(): Promise<any[]> {
  let result = (await http.get(`https://qun.qq.com/cgi-bin/qun_mgr/get_friend_list?&bkn=${BKN}`)).json()
  let friends = []
  for (let tag in result) {
    friends = friends.concat(temp[tag]['mems'])
  }
  return friends
}

/**
 * 获取群组列表
 */
async function getGroups() {
  let { result } = await http.get(`https://qun.qq.com/cgi-bin/qun_mgr/get_group_list?&bkn=${BKN}`)
  let temp = JSON.parse(result.toString().replace('"gc"', '"id"'))
  let groups = []
  for (let tag in temp) {
    if (!temp[tag]) continue
    groups = groups.concat(temp[tag])
  }
  return groups
}

/**
 * 取 QQ 等级, VIP 信息
 * @param {number} id  QQ 号
 * @returns {object}   数据对象
 * sNickName           昵称
 * sFaceUrl            头像链接
 * QzoneVisitor        空间访客
 * iBaseDays           成长加速等级
 * iQQLevel            QQ 等级
 * iVip                VIP 等级
 * iSVip               是否是 VIP
 * iYearVip            是否是年费 VIP
 * iVipLevel           VIP 等级
 * iMobileQQOnline     是否在手机 QQ 上线
 * iMobileQQOnlineTime 手机 QQ 上线时间
 * iPCQQOnline         PC QQ 在线状态
 * iPCQQOnlineTime     PC QQ 在线时长
 * iTotalActiveDay     总活跃天数
 */
async function getQQLevelInfo(id: number): Promise<object> {
  let res = await fetchApi('GET', `https://club.vip.qq.com/api/vip/getQQLevelInfo?requestBody={"iUin":${id}}`)
  let qqLevelInfo = JSON.parse(res)['data']?.mRes
  return qqLevelInfo
}

/**
 * 获取群设置, 必须是群员
 * @param {number} id
 * @returns {object} 数据对象
 * search         是否可以被搜索到
 * share          是否可以邀请入群
 * file           是否可以发送文件
 * album          是否可以发送相册?相册数
 * anony          是否可以匿名聊天
 * invite_friend  ?未知
 * forbid_chat    ?未知
 * forbid_discuss ?未知
 * levelname      <Array>  群等级名称列表
 * admin_auth     <Array>  管理员权限列表
 * shutup         <object> 群禁言状态
 *                  all_shutup 是否全员禁言
 *                  me_shutup  自己是否被禁言
 */
async function getGroupSetting(id: number): Promise<object> {
  let res = await fetchApi('GET', `https://qinfo.clt.qq.com/cgi-bin/qun_info/get_group_setting_v2?gc=${id}&bkn=${BKN}`)
  return JSON.parse(res)
}

/**
 * 取群操作记录, 必须是管理员
 * @param {number} id
 * @returns
 */
// async function getSysMsg(id) {
//   return fetchApi('GET', `https://qinfo.clt.qq.com/cgi-bin/qun_info/get_sys_msg?gc=${id}&bkn=${BKN}`)
// }

/**
 * 开关匿名
 * @param {number} id
 * @param {boolean} isAnony 是否开启匿名
 * @returns
 */
async function setAnonySwitch(id: number, isAnony: boolean) {
  let res = fetchApi(
    'GET',
    `https://qqweb.qq.com/c/anonymoustalk/set_anony_switch?bkn=${BKN}&value=${isAnony ? 1 : 0}&group_code=${id}`
  )
}

/**
 * 获取 QQ 资料
 * @param {number} id
 * @returns
 */
async function getFriendInfo(id: number) {
  let res = await fetchApi('GET', `https://cgi.find.qq.com/qqfind/buddy/search_v3?keyword=${id}`)
  return JSON.parse(res)
}

/**
 * 获取群荣誉
 * @param {*} id
 * @returns
 */
function getGroupHonor(id: any) {
  let res = fetchApi('GET', `https://qun.qq.com/interactive/qunhonor?gc=${id}`)
  return res
}

/**
 * 获取精华消息
 * @param {*} id
 * @returns
 */
function getEssence(id: any) {
  let res = fetchApi('GET', `https://qun.qq.com/essence/index?gc=${id}`)
  return res
}

/**
 * 获取群公告
 * @param {*} id
 * @returns
 */
function getAnnounce(id: any) {
  let res = fetchApi('GET', `https://web.qun.qq.com/cgi-bin/announce/get_t_list?bkn=${BKN}&qid=${id}&ft=23&s=-1&n=20`)
  return res
}

/**
 * 发群公告
 * @param {number} id
 * @param {*} content
 */
function addAnnounce(id: number, content: string) {
  // pinned       为 0 时不置顶
  // type         为 1 时为群公告(未知)
  // is_edit_card 为 1 时引导成员编辑昵称
  // tip_type     是否弹窗通知(未知)
  // confirm      为 1 时需要确认收到
  let pinned = 0
  let type = 1
  let show_edit_card = 1
  let tip_type = 1
  let confirm = 1
  let data = `qid=${id}&bkn=${BKN}&text=${content}&pinned=${pinned}&type=${type}&settings={"is_show_edit_card":${show_edit_card},"tip_window_type":${tip_type},"confirm_required":${confirm}}`
  let res = fetchApi('POST', `https://web.qun.qq.com/cgi-bin/announce/add_qun_notice?bkn=${BKN}`, data)
  return
}

/**
 * 获取指定群组信息
 * @param {number} id
 * @returns {object}
 * group_id
 * group_name
 * group_memo
 * group_create_time
 * group_owner
 * group_level
 * member_count
 * max_member_count
 */
async function getGroupInfo(id: number): Promise<object> {
  let res = await fetchApi('POST', `https://qinfo.clt.qq.com/cgi-bin/qun_info/get_group_info_all?gc=${id}&bkn=${BKN}`)
  let temp = JSON.parse(res)
  let groupInfo = []
  groupInfo['id'] = id // 群号
  groupInfo['owner'] = temp['gOwner'] // 群主
  groupInfo['name'] = temp['gName'] // 群名
  groupInfo['admin'] = temp['gAdmins'] // 管理员
  groupInfo['members'] = []
  groupInfo['members'].push(temp['gMembers'])
  groupInfo['members'].push(temp['gOwner']) // 成员
  return groupInfo
}

/**
 * 设置管理员
 * @param {number} group_id
 * @param {number} qq_id
 * @param {boolean} is_admin
 * @returns {boolean} 是否成功
 */
async function setGroupAdmin(group_id: number, qq_id: number, is_admin: boolean): Promise<boolean> {
  // conver boolean to 1 or 0
  let res = await fetchApi(
    'GET',
    `https://qun.qq.com/cgi-bin/qun_mgr/set_group_admin`,
    `gc=${group_id}&qq=${qq_id}&op=${is_admin ? 1 : 0}&bkn=${BKN}`
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
 * 获取指定QQ群加群链接
 * @param {number} id
 * @returns {string}
 */
async function getGroupJoinUrl(id: number): Promise<string> {
  let joinK = await getJoink(id)
  return `https://qm.qq.com/cgi-bin/qm/qr?k=${joinK}&jump_from=webapi`
}

export {
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
}
