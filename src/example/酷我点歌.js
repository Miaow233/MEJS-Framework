// -- LuaMiraiScript --
// -- name: 酷我点歌
// -- version: 1.0
// -- description: 能听vip的歌
// -- author: chorblack
// -- /LuaMiraiScript --
// --[[
//     说明：酷我点歌指令默认输出第一首搜索到的歌曲；
//         #酷我点歌指令输出一个列表的歌单，需要自己再次选择才能生效；
//         list_length为输出的歌单数量，可以自行修改

//     end
// ]]
let list_length = 30
let music_data = ''
let cookie
$.on('message', async (session) => {
  let msg = session.msg
  //     local sender = event.sender
  //     local group = event.group
  let music_url, music_artist, music_picurl, music_rid, music_name, total_music

  function get_music_url(cookie, rid) {
    let base_url = 'http://www.kuwo.cn/url?'
    let params = {
      format: 'mp3',
      rid: rid,
      //           ['response']= 'url',
      //           ['type']= 'convert_url3',
      //           ['br']= '320kmp3',  -- 320K 代表是无陨音质。
      //           ['from']= 'web',
      //           ['t']= os.time(),
      //           ['httpsStatus']= '1'
    }
    for (let [i, v] of Object.entries(params)) {
      base_url = base_url + i + '=' + v + '&'
    }
    base_url = base_url.slice(1, -2)
    //       let res,data = Http.get(base_url, nil,{
    //             headers = {
    //                 ['Connection']= 'keep-alive',
    //                 ['Host']= 'www.kuwo.cn',
    //                 ['Referer']= 'http://www.kuwo.cn/search/list',
    //                 ['Cookie']= cookie,
    //                 ['User-Agent']= 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
    //             }
    //         })
    let data = JSON.parse(res)
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

  //     function get_cookie()
  //         local res,data = Http.get("http://www.kuwo.cn/", nil,{
  //             headers = {
  //                 ['Connection']= 'keep-alive',
  //                 ['Host']= 'www.kuwo.cn',
  //                 ['Referer']= 'http://www.kuwo.cn/',
  //                 ['User-Agent']= 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
  //             }
  //         })
  //         local cookie = split(tostring(data.headers["Set-Cookie"]) ,";")[1]
  //         return cookie
  //     end

  function rename_use(file_name) {
    //  let file_name = file_name.gsub("\\", '').gsub("/", '').gsub(":", '').gsub("*", '').gsub("?",''):gsub('"', ''):gsub("<", ''):gsub(">", ''):gsub("|", ''):gsub("&nbsp;", "")
    return file_name
  }
  //     end

  function get_music_list(cookie, key, pn, length) {
    let base_url = 'http://www.kuwo.cn/api/www/search/searchMusicBykeyWord?'
    let params = {
      //             ['key']= key,
      //             ['pn']= pn,
      //             ['rn']= length,
      //             ['httpsStatus']= '1'
    }
    let csrf = cookie.gsub('kw_token=', '')
    //         for i,v in pairs(params) do
    //             base_url= base_url .. i .. "=" .. v .. "&"
    //         end
    base_url = string.sub(base_url, 1, -2)
    //         local res,data = Http.get(base_url, nil,{
    //             headers = {
    //                 ['Connection']= 'keep-alive',
    //                 ['Cookie']= cookie,
    //                 ['csrf']= csrf,  -- 这个值是cookie 里面的 kw_token值
    //                 ['Host']= 'www.kuwo.cn',
    //                 ['Referer']= 'http://www.kuwo.cn/search/list',
    //                 ['User-Agent']= 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
    //             }
    //         })
    let music_list = Json.parseJson(res)
    let music_data = {}
    if (string.len(res) > 88) {
      music_list = music_list['data']['list']
      //             for i,v in pairs(music_list) do
      //                 local artist = v['artist']  -- 歌曲演唱者
      //                 artist = rename_use(artist)
      //                 local name = v['name']
      //                 name = rename_use(name)
      //                 local rid = v['rid']  -- 歌曲 rid
      //                 local pic = v['pic']
      //                 local data = string.format('{"name": "%s", "artist": "%s", "rid": %d ,"pic":"%s"}',name,artist,rid,pic)
      //                 table.insert(music_data,data)
      //             end
      return music_data
    } else {
      print('数据获取失败，请重试。')
    }
  }

  if (msg.find('#酷我点歌')) {
    music_name = msg.gsub('#酷我点歌', '').match('^[%s]*(.-)[%s]*$')
    //         if music_name == "" then
    //             return
    //         end
    cookie = get_cookie()
    music_data = get_music_list(cookie, music_name, 1, list_length)
    total_music = ''
    //         for i=1,list_length do
    //             local data = Json.parseJson(music_data[i])
    //             total_music = total_music .. i .. ":" .. data.name .. "-" .. data.artist .. "\n"
    //         end
    total_music = total_music + '--输入#num选择歌曲'
    group.sendMessage(total_music)
  }

  //     if msg:find("#%d+") then
  //         music_num = msg:gsub("#","")
  //         if music_num == "" or string.len(music_num)>3 then
  //             return
  //         end
  //         music_num = tonumber(music_num)
  //         local data = music_data[music_num]
  //         data = Json.parseJson(data)
  //         music_rid = data.rid
  //         music_artist = data.artist
  //         music_name = data.name
  //         music_picurl = data.pic
  //         music_url = get_music_url(cookie,music_rid)
  //         local __format__ = [[<?xml version="1.0"?><msg serviceID="2" templateID="1" action="web" brief="[分享]%s" sourceMsgId="0" url="%s" flag="0" adverSign="0" multiMsgFlag="0"><item layout="2"><audio cover="%s" src="%s"/><title>%s</title><summary>%s</summary></item></msg>]]
  //         __format__ = string.format(__format__, music_name, music_url, music_picurl, music_url, music_name, music_artist)
  //         group:sendMessage(Service(60, __format__))
  //     end

  //     if msg:find("酷我点歌") then
  //         music_name = msg:gsub("酷我点歌",""):match("^[%s]*(.-)[%s]*$")
  //         if music_name == "" or music_name:find("#") then
  //             return
  //         end
  //         cookie = get_cookie()
  //         music_data = get_music_list(cookie, music_name, 1,list_length)
  //         local data = Json.parseJson(music_data[1])
  //         music_rid = data.rid
  //         music_artist = data.artist
  //         music_name = data.name
  //         music_picurl = data.pic
  //         music_url = get_music_url(cookie,music_rid)
  //         local __format__ = [[<?xml version="1.0"?><msg serviceID="2" templateID="1" action="web" brief="[分享]%s" sourceMsgId="0" url="%s" flag="0" adverSign="0" multiMsgFlag="0"><item layout="2"><audio cover="%s" src="%s"/><title>%s</title><summary>%s</summary></item></msg>]]
  //         __format__ = string.format(__format__, music_name, music_url, music_picurl, music_url, music_name, music_artist)
  //         group:sendMessage(Service(60, __format__))
  //     end
  // end)
})
