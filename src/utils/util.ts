// @ts-nocheck
import * as http from '../extension/http.js'

/** bkn计算方法 */
export function getCSRFToken(str) {
  let hash = 5381
  for (let i = 0, len = str.length; i < len; ++i) {
    hash += (hash << 5) + str.charAt(i).charCodeAt()
  }
  return hash & 0x7fffffff
}

export function getCookie(domain: string) {
  const cookie = `uin=o${bot.uin}; skey=${SKEY};`
  if (!PSKEY[domain]) return cookie
  return `${cookie} p_uin=o${bot.uin}; p_skey=${PSKEY[domain]};`
}

/** 获取api数据 */
export async function fetchApi(method: string, url: string, data = '') {
  let domain = url.split('/')[2].split('.').slice(-3).join('.')
  let headers = {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
    Referer: 'https://' + domain,
    Cookie: getCookie(domain),
  }
  let response: any
  if (method.toUpperCase() === 'POST') {
    response = await http.post(url, data, headers)
  } else {
    response = await http.get(url, headers)
  }
  if (response.status != 200) throw Error('Network Error: ' + response.status)
  return response.result
}
