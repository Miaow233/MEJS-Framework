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
