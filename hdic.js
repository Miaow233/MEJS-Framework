/**
 * 说明：[酷我点歌]指令默认输出第一首搜索到的歌曲
 *      [#酷我点歌]指令输出一个列表的歌单，需要自己再次选择才能生效
 *      list_length 为输出的歌单数量，可以自行修改
 */

import * as http from './mejs/utils/http.js'
let list_length = 30
let music_data = ''
let cookie

const parseParams = (url, params) => {
  const paramsArray = []
  Object.keys(params).forEach((key) => params[key] && paramsArray.push(`${key}=${params[key]}`))
  if (url.search(/\?/) === -1) {
    url += `?${paramsArray.join('&')}`
  } else {
    url += `&${paramsArray.join('&')}`
  }
  return url
}
let base_url = 'http://www.kuwo.cn/url?'
let params = {
  format: 'mp3',

  response: 'url',
  type: 'convert_url3',
  br: '320kmp3', //320K 代表是无损音质。
  from: 'web',
  t: new Date().getTime(),
  httpsStatus: '1',
}
console.log(parseParams(base_url, params))
$.on('message', async (session) => {
  let msg = session.msg
  let music_url, music_artist, music_picurl, music_rid, music_name, total_music

  function get_music_url(cookie, rid) {
    let base_url = 'http://www.kuwo.cn/url?'
    let params = {
      format: 'mp3',
      rid: rid,
      response: 'url',
      type: 'convert_url3',
      br: '320kmp3', //320K 代表是无损音质。
      from: 'web',
      t: new Date().getTime(),
      httpsStatus: '1',
    }
    base_url = parseParams(base_url, params)
    let { result, status } = http.get(
      base_url,
      (headers = {
        Connection: 'keep-alive',
        Host: 'www.kuwo.cn',
        Referer: 'http://www.kuwo.cn/search/list',
        Cookie: cookie,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
      })
    )
    data = JSON.parse(result)
    let music_url = data.url
    return music_url
  }
  //     function split(str,delimiter){
  //   let dLen = #delimiter
  //   newDeli = ''
  //    for (i=1;i < dLen;i++){
  //              newDeli = newDeli +"["+string.sub(delimiter,i,i)+"]"
  //     }
  //          let locaStart,locaEnd = string.find(str,newDeli)
  //   let arr = {}
  // let n = 1
  //       while (!locaStart){

  //               if (locaStart>0){
  //                   arr[n] = string.sub(str,1,locaStart-1)
  //                   n = n + 1

  //       }
  //                str = string.sub(str,locaEnd+1,string.len(str))
  //                locaStart,locaEnd = string.find(str,newDeli)

  //       }
  //           if (!str){
  //             arr[n] = str}

  //          return arr
  //   }

  function get_cookie() {
    let { result, status } = http.get(
      'http://www.kuwo.cn/',
      (headers = {
        Connection: 'keep-alive',
        Host: 'www.kuwo.cn',
        Referer: 'http://www.kuwo.cn/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
      })
    )
    let cookie = split(tostring(data.headers['Set-Cookie']), ';')[1]
    return cookie
  }

  function rename_use(file_name) {
    return file_name
      .replace('\\', '')
      .replace('/', '')
      .replace(':', '')
      .replace('*', '')
      .replace('?', '')
      .replace('"', '')
      .replace('<', '')
      .replace('>', '')
      .replace('|', '')
      .replace('&nbsp;', '')
  }

  function get_music_list(cookie, key, pn, length) {
    let base_url = 'http://www.kuwo.cn/api/www/search/searchMusicBykeyWord?'
    let params = {
      key: key,
      pn: pn,
      rn: length,
      httpsStatus: '1',
    }
    let csrf = cookie.replace('kw_token=', '')
    base_url = parseParams(base_url, params)
    let { result, status } = http.get(
      base_url,
      (headers = {
        Connection: 'keep-alive',
        Cookie: cookie,
        csrf: csrf, //这个值是cookie 里面的 kw_token值
        Host: 'www.kuwo.cn',
        Referer: 'http://www.kuwo.cn/search/list',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
      })
    )
    let music_list = Json.parseJson(res)
    let music_data = {}
    if (string.len(res) > 88) {
      music_list = music_list['data']['list']
      for (let [i, v] in Object.entries(music_list)) {
        let artist = v['artist'] // 歌曲演唱者
        artist = rename_use(artist)
        let name = v['name']
        name = rename_use(name)
        let rid = v['rid'] // 歌曲 rid
        let pic = v['pic']
        let data = `{"name": "${name}", "artist": "${artist}", "rid": ${rid} ,"pic":"${pic}"}`
        music_data.push(data)
      }
      return music_data
    } else {
      console.log('数据获取失败，请重试。')
    }
  }

  if (msg.find('#酷我点歌')) {
    music_name = msg.replace('#酷我点歌', '').match('^[%s]*(.-)[%s]*$')
    if (music_name == '') {
      return
    }
    cookie = get_cookie()
    music_data = get_music_list(cookie, music_name, 1, list_length)
    total_music = ''
    //         for i=1,list_length do
    //             let data = Json.parseJson(music_data[i])
    //             total_music = total_music .. i .. ":" .. data.name .. "-" .. data.artist .. "\n"
    //         end
    total_music = total_music + '--输入#num选择歌曲'
    group.sendMessage(total_music)
  }

  //     if msg:find("#%d+") then
  //         music_num = msg.replace("#","")
  //         if music_num == "" or string.len(music_num)>3 then
  //             return
  //         end
  //         music_num = tonumber(music_num)
  //         let data = music_data[music_num]
  //         data = Json.parseJson(data)
  //         music_rid = data.rid
  //         music_artist = data.artist
  //         music_name = data.name
  //         music_picurl = data.pic
  //         music_url = get_music_url(cookie,music_rid)
  //         let __format__ = [[<?xml version="1.0"?><msg serviceID="2" templateID="1" action="web" brief="[分享]%s" sourceMsgId="0" url="%s" flag="0" adverSign="0" multiMsgFlag="0"><item layout="2"><audio cover="%s" src="%s"/><title>%s</title><summary>%s</summary></item></msg>]]
  //         __format__ = string.format(__format__, music_name, music_url, music_picurl, music_url, music_name, music_artist)
  //         group:sendMessage(Service(60, __format__))
  //     end

  if (msg.startWith('酷我点歌')) {
    music_name = msg.replace('酷我点歌', '').match('^[%s]*(.-)[%s]*$')
    if (music_name == '' || music_name.indexOf('#')) {
      return
    }
    cookie = get_cookie()
    music_data = get_music_list(cookie, music_name, 1, list_length)
    data = Json.parseJson(music_data[1])
    music_rid = data.rid
    music_artist = data.artist
    music_name = data.name
    music_picurl = data.pic
    music_url = get_music_url(cookie, music_rid)
    let __format__ = `<?xml version="1.0"?><msg serviceID="2" templateID="1" action="web" brief="[分享]${music_name}" sourceMsgId="0" url="${music_url}" flag="0" adverSign="0" multiMsgFlag="0"><item layout="2"><audio cover="${music_picurl}" src="${music_url}"/><title>${music_name}</title><summary>${music_artist}</summary></item></msg>`
    group: sendMessage(Service(60, __format__))
  }
  // end)
})
