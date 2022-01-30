let getCSRFToken = function (skey) {
  if (skey) {
    for (var t = 5381, n = 0, r = skey.length; n < r; ++n) t += (t << 5) + skey.charAt(n).charCodeAt()
    return 2147483647 & t
  }
}
let MASTER = 123456789 // 主人QQ号
let ADMIN = [123456789, 987654321] // 管理员QQ号
const SKEY = bot.getSkey()
const PSKEY = JSON.parse(bot.getPSkey())
const BKN = getCSRFToken(SKEY)
export { MASTER, ADMIN, SKEY, PSKEY, BKN }
