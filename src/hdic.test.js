// 需要什么功能在这里引入就行了
// 关于 import 用法, 请参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import
import {
  getFriend,
  getFriends,
  getGroup,
  getGroupInfo,
  getGroupJoinUrl,
  getGroups,
  getMembersInfo,
  setGroupAdmin,
} from './utils/api.js'

// let friend = await getFriend(123456789)
// let friends = await getFriends()  // 返回列表
// let group = await getGroup(123456789)
// let groupInfo = await getGroupInfo(123456789)
//let groupJoinUrl = await getGroupJoinUrl(702333934)
// let groups = await getGroups()
//let membersInfo = await getMembersInfo(702333934)
//console.log(JSON.stringify(membersInfo))
//console.log(groupJoinUrl)
// setGroupAdmin(123456789, 123456789, true)
// 注意有些是异步操作, 获取返回值需要用 await
// Nested function

// Pipeline operator
//const result = 1 |> sumTwo |> multiplyTwo |> moduleByTwo;

$.on('message.group', async (message) => {
  console.log(message.group.toString())
  // if (message.msg === '测画图') {
  //   console.log('Draw message') //向主程序打印log
  //   let client = message.client
  //   let Bitmap = Java.type('android.graphics.Bitmap')
  //   let Paint = Java.type('android.graphics.Paint') // 画笔
  //   let Canvas = Java.type('android.graphics.Canvas') // 画布
  //   let Typeface = Java.type('android.graphics.Typeface') // 字体样式
  //   let Color = Java.type('android.graphics.Color')
  //   let Config = Java.type('android.graphics.Bitmap$Config')
  //   let CompressFormat = Java.type('android.graphics.Bitmap$CompressFormat')
  //   let ByteArrayOutputStream = Java.type('java.io.ByteArrayOutputStream')
  //   let img = new Bitmap.createBitmap(500, 500, Config.ARGB_8888)
  //   let canva = new Canvas(img)
  //   let paint = new Paint()
  //   paint.setTypeface(Typeface.createFromFile('/storage/emulated/0/DIC/data/font/Genshin-Abyss.ttf'))
  //   paint.setTextSize(60)
  //   paint.setColor(Color.argb(255, 255, 153, 204))
  //   canva.drawText('*', 50, 50, paint)
  //   let out = new ByteArrayOutputStream()
  //   img.compress(CompressFormat.PNG, 90, out)
  //   client.addImg(out.toByteArray())
  //   bot.send(client)
  // }
})
