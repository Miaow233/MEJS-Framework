/*
 ** message的所有方法如下：
 *
 * message.msg 获取消息
 * message.img 获取图片，注意是个数组哦
 * message.xml 获取xml 没有则为空
 * message.json 获取json，没有则为空
 * message.at 获取被艾特人，是数组哦（仅限群聊）
 * message.reply 获取被回复的消息文本，没有则为空（私聊消息没有该参数）
 * message.code 获取群code（好友消息没有该参数）
 * message.mark 获取消息标记（仅限群聊）
 * message.title 获取发送者群头衔（仅限群聊）
 * message.group 获取群号（好友消息没有该参数）
 * message.groupName 获取群名（好友消息没有该参数）
 * message.uin 获取发送者QQ
 * message.nick 获取发送者昵称
 * message.time 获取这条消息的时间戳
 * message.client 用于发送消息的接口
 * */

/*
 ** message.client 的所有方法如下：
 *
 * client.addText(text) 添加文本，参数为文本
 * client.addImg(img) 添加图片，参数为本地路径或网址；还可以是字节组
 * client.addAt(uin,nick) 添加艾特，参数为QQ号和昵称
 * client.setReply() 添加回复，无参数
 *  */

/*
 ** bot的所有参数如下：
 *
 * bot.reload() 重载词库
 * bot.batteryStatus 获取电池状态
 * bot.batteryLevel 获取电池电量
 * bot.send(client) 发送消息，参数就是message.client
 * bot.uin 获取机器人账号
 * bot.getSkey() 获取skey
 * bot.getPSkey() 获取pskey
 * bot.getClientKey() 获取clientkey
 * bot.setAdmin(uin,boolean) 设置主人，参数为：QQ号和布尔值
 * bot.checkAdmin(long uin) 检查主人状态，返回布尔值
 * bot.shutup(group,uin,time) 禁言群员，参数为：群号，Q号，时间
 * bot.shutupAll(group,boolean) 群禁言，参数为：群号，布尔值
 * bot.setTroopSwicth(group,boolean) 设置群开关，参数为：群号，布尔值
 * bot.getTroopSwicth(group) 获取群开关，参数为：群号，，返回布尔值
 * bot.withDrawMsg(group,mark) 撤回消息，参数为：群号和消息标记
 * bot.setMemberCard(group,uin,card) 设置群名片，参数为：群号，QQ，新名片
 * bot.pokeAvatar(group,uin) 戳一戳，参数为：群号，QQ
 * bot.deleteMember(group,uin) 踢出群员，参数为：群号，QQ
 * await bot.sendRedPacket(group,title,howmuch,uin...) 发送红包，参数为：群号，红包标题，总金额（单位：分），QQ（可以传递最多五个QQ号）,返回结果
 * await bot.getTroopList() 获取群列表，返回json字符串，需自行解析
 * await bot.getTroopMemberList(group...) 获取群成员，参数为：group（可以多个群号）
 * bot.machineCode 获取设备信息，返回json字符串，需自行解析
 * */

/*
 ** compat 的所有方法如下：
 *
 *  compat.path 获取手机存储根目录
 *
 *  下面所有方法加上 await 才会有返回值（不需要返回值的可以不写，不影响使用）
 *
 * compat.writeConfig(path,key,val) 写入键值对，参数为：本地全路径，键，值；无返回
 * compat.writeData(path,byte[]) 写入字节数据，参数为：本地全路径，字节组；返回布尔值
 * compat.writeText(path,text) 写入文本数据，参数为：本地全路径，文本；返回布尔值
 * compat.readConfig(path,key,val) 读取键值对，参数为：本地全路径，键，默认值；返回字符串
 * compat.readData(path) 读取字节数据，参数为：本地全路径；返回字节组
 * compat.readText(path) 读取文本数据，参数为：本地全路径；返回字符串
 * compat.access(url) GET访问网络，参数为：网址，返回键值对的数组
 * compat.access(url, head) GET访问网络，参数为：网址,请求头（js中键值对的数组），返回键值对的数组
 * compat.access(url，param) POST访问网络，参数为：网址，post内容(字符串或字节组)，返回键值对的数组
 * compat.access(url, head，param) POST访问网络，参数为：网址, 请求头（js中键值对的数组），post内容(字符串或字节组)，返回键值对的数组
 *
 *  */

/**
 * 加载Java类
 * 内部类在Java中的类名其实是`外部类$内部类`，比如：android.graphics.Bitmap$Config
 */
const Thread = Java.type('java.lang.Thread')
const io = Packages.java.io

/**
 * 加载外部js，支持本地导入
 * 这种import的写法只支持es6 module，然而先在有些库没有以es6的方式导出，那怎么办呢？
 * 可以在URL的尾部加上#xxx，比如这里的#default QRCode就相当于export default QRCode;
 * 本地导入路径为相对路径（相对于DIC文件夹下）
 */
import qr from 'https://cdn.jsdelivr.net/npm/qrcode@1.5.0/build/qrcode.js#default QRCode'

//这个是群消息的处理,入口不可修改
$.on('message.group', async (message) => {
  //这下面，包裹的内容都可修改
  if (message.msg === 'test') {
    console.log('other message') // 向主程序打印log
    // 别用var！！！
    let client = message.client
    client.addText('来自JS2')
    bot.send(client)
  }
  if (message.msg === 'delay') {
    // 想延迟怎么办呢？如下：
    await delay(1000) // 延迟1000毫秒，即1秒。
    let client = message.client
    client.addText('延迟消息')
    bot.send(client)
  }
  //这上面，包裹的内容都可修改
})

//这个是私聊消息的处理,入口不可修改
$.on('message.temp', async (message) => {
  //同上
})

//这个是好友消息的处理,入口不可修改
$.on('message.friend', async (message) => {
  //同上
})
