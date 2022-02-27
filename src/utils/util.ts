/** bkn计算方法 */
export function getCSRFToken(skey: any): number {
  let bkn = 5381
  for (let v of skey) bkn = bkn + (bkn << 5) + v
  bkn &= 2147483647
  return bkn
}

const SKEY = bot.getSkey()
const PSKEY = bot.getPSkey()
const BKN = getCSRFToken(SKEY)
export { SKEY, PSKEY, BKN }

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
    response = await compat.access(url, headers, data)
  } else {
    response = await compat.access(url, headers)
  }
  if (response.status != 200) throw Error('Network Error: ' + response.status)
  return response.result
}

/** xml转义 */
export function escapeXml(str: string) {
  return str.replace(/[&"><]/g, function (s: string) {
    if (s === '&') return '&amp;'
    if (s === '<') return '&lt;'
    if (s === '>') return '&gt;'
    if (s === '"') return '&quot;'
    return ''
  })
}

export function getGroupImageUrl(md5: string) {
  return `https://gchat.qpic.cn/gchatpic_new/0/0-0-${md5.toUpperCase()}/0`
}
