function example() {
  const bkn = getCSRFToken()
  const skey = bot.getSkey()
  const p_skey = JSON.parse(bot.getPSkey())['qun.qq.com']
  // 这里获取所有的pskey，返回JSON，但我们只需要其中"qun.qq.com"的值
  // 一般来说，接口域名是什么这里就填什么
  console.log(`uin=o${bot.uin}; skey=${skey}; p_uin=o${bot.uin}; p_skey=${p_skey};`)
  let headers = {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
    Cookie: `uin=o${bot.uin}; skey=${skey}; p_uin=o${bot.uin}; p_skey=${p_skey};`, //注意这里使用字符字面量格式，不是引号
  }

  // GET提交
  compat
    .access(`https://qun.qq.com/cgi-bin/qun_mgr/get_friend_list?&bkn=${bkn}`, headers)
    .then((response) => console.log(JSON.stringify(JSON.parse(response.result))))
  // 两次转义是便于阅读，如要使用的话转成JSON就够了
}
export {}
