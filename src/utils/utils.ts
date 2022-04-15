import http from '../extensions/http.js'
import { Config } from '../../.hdic.config.js'
import { getBaseURL } from './index.js'
import { File } from '../extensions/java.js'

const SKEY = globalThis.bot.skey
const PSKEY = globalThis.bot.pskey

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

/** bkn计算方法 */
export function getCSRFToken(str) {
  if (!str) return 0
  let hash = 5381
  for (let i = 0, len = str.length; i < len; ++i) {
    hash += (hash << 5) + str.charAt(i).charCodeAt()
  }
  return hash & 0x7fffffff
}

/** 构造接口所需cookie */
export function getCookie(domain: string) {
  const cookie = `uin=o${bot.uin}; skey=${SKEY};`
  if (!PSKEY[domain]) return cookie
  return `${cookie} p_uin=o${bot.uin}; p_skey=${PSKEY[domain]};`
}

/** 获取api数据 */
export async function fetchApi(method: string, url: string, data = '') {
  //let domain = url.split('/')[2].split('.').slice(-3).join('.')
  let domain = getBaseURL(url)
  let headers = {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
    Referer: 'https://' + domain,
    Cookie: getCookie(domain),
  }
  let response: Response
  if (method.toUpperCase() === 'POST') {
    response = await http.post(url, data, headers)
  } else {
    response = await http.get(url, headers)
  }
  if (response.status != 200) throw Error('Network Error: ' + response.status)
  return response.result
}

/**
 * Get the sum of the given array of numbers
 *
 * @param array
 * @return sum
 */
export function sum(array: number[]): number {
  return array.reduce((a, b) => a + b)
}

/**
 * Read JSON configuration file
 * <br>
 * 读取JSON配置文件
 *
 * @param file
 * @return configuration
 */
export async function readConfig(file: string): Promise<Config> {
  return Object.assign(new Config(), (await compat.readText(file)) as string)
}

/**
 * Write JSON configuration file
 * <br>
 * 写入JSON配置文件
 *
 * @param file
 * @param config
 */
export function writeConfig(file: string, config: Config): void {
  compat.writeText(file, JSON.stringify(config, null, 4))
  //fs.writeJSONSync(file, config, { spaces: 4 })
}

/**
 * Check and make directory
 *
 * @param dir
 */
export function checkAndMakeDir(dir: string): void {
  let path = new File(dir)
  if (!path.exists) {
    path.mkdirs()
  }
}
