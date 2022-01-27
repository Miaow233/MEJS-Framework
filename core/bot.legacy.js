/**
 * 重载词库
 * @returns {void}
 */
function reload() {}

// batteryStatus
// 获取电池状态

// batteryLevel
// 获取电池电量

function send(client) {
  // 发送消息，参数就是message.client
}

// uin()
// 获取机器人账号

function getSkey() {
  // 获取skey
}

function getPSkey() {
  // 获取pskey
}

function getClientKey() {
  // 获取clientkey
}

function setAdmin(uin, boolean) {
  // 设置主人，参数为：QQ号和布尔值
}

function checkAdmin(uin) {
  // 检查主人状态，返回布尔值
}

function shutup(group, uin, time) {
  // 禁言群员，参数为：群号，Q号，时间
}

function shutupAll(group, boolean) {
  // 群禁言，参数为：群号，布尔值
}

function setTroopSwicth(group, boolean) {
  // 设置群开关，参数为：群号，布尔值
}

function getTroopSwicth(group) {
  // 获取群开关，参数为：群号，，返回布尔值
}

function withDrawMsg(group, mark) {
  // 撤回消息，参数为：群号和消息标记
}

function setMemberCard(group, uin, card) {
  // 设置群名片，参数为：群号，QQ，新名片
}

function pokeAvatar(group, uin) {
  // 戳一戳，参数为：群号，QQ
}

async function getTroopList() {
  // 获取群列表，返回json字符串，需自行解析
}

async function getTroopMemberList(group, ...groups) {
  // 获取群成员，参数为：group（可以多个群号）
}

function deleteMember(group, uin) {
  // 踢出群员，参数为：群号，QQ
}

async function sendRedPacket(group, title, howmuch, ...uins) {
  // 发送红包，参数为：群号，红包标题，总金额（单位：分），QQ（可以传递最多五个QQ号）,返回结果
}
// machineCode
// 获取设备信息，返回json字符串，需自行解析

export {
  checkAdmin,
  deleteMember,
  getSkey,
  getPSkey,
  getClientKey,
  getTroopList,
  getTroopSwicth,
  pokeAvatar,
  reload,
  send,
  sendRedPacket,
  setAdmin,
  setMemberCard,
  setTroopSwicth,
  shutup,
  shutupAll,
  withDrawMsg,
}
