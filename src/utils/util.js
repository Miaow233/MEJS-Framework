import { SKEY, PSKEY, BKN } from '../config.js'

/**
 * bkn计算方法
 * @param {string} skey
 * @returns {string} bkn
 */
let getCSRFToken = function (skey) {
  if (skey) {
    for (var t = 5381, n = 0, r = skey.length; n < r; ++n) t += (t << 5) + skey.charAt(n).charCodeAt()
    return 2147483647 & t
  }
}

function getCookie(domain) {
  const cookie = `uin=o${bot.uin}; skey=${SKEY};`
  if (!PSKEY[domain]) return cookie
  return `${cookie} p_uin=o${bot.uin}; p_skey=${PSKEY[domain]};`
}

async function fetchApi(method, url, data = '') {
  let domain = url.split('/')[2].split('.')
  domain = domain.slice(-3).join('.')
  console.log(domain)
  let headers = {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
    Referer: 'https://' + domain,
    Cookie: getCookie(domain),
  }
  let response = {}
  if (method.toUpperCase() === 'POST') {
    response = await compat.access(url, headers, data)
  } else {
    response = await compat.access(url, headers)
  }
  if (response.status != 200) throw Error('Network Error: ' + response.status)
  return response.result
}

export { getCSRFToken, fetchApi }
