let getCSRFToken = function (skey) {
  if (skey) {
    for (var t = 5381, n = 0, r = skey.length; n < r; ++n) t += (t << 5) + skey.charAt(n).charCodeAt()
    return 2147483647 & t
  }
}
const SKEY = bot.getSkey()
const PSKEY = JSON.parse(bot.getPSkey())
const BKN = getCSRFToken(SKEY)
export { SKEY, PSKEY, BKN }
