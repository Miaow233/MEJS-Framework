/**
 *
 * @param {图片本地路径orURL} path
 * @param {布尔值 可忽略} isURl
 * @returns 图片byte[]
 * 默认为本地路径
 * */
function getImage(path, isURl) {
  const URL = Java.type('java.net.URL')
  const BitmapFactory = Java.type('android.graphics.BitmapFactory')
  const ByteArrayOutputStream = Java.type('java.io.ByteArrayOutputStream')
  const Config = Java.type('android.graphics.Bitmap$Config')
  const CompressFormat = Java.type('android.graphics.Bitmap$CompressFormat')
  const File = Java.type('java.io.File')
  let bitmap = null
  let outt = new ByteArrayOutputStream()
  if (isURl) {
    let url = new URL(path)
    let is = url.openStream()
    bitmap = BitmapFactory.decodeStream(is)
    is.close()
  } else {
    let file = new File(path)
    if (file.exists()) {
      bitmap = BitmapFactory.decodeFile(path)
    } else return null
  }
  bitmap.compress(CompressFormat.PNG, 30, outt)
  return outt.toByteArray()
}

if (message.msg === 't2') {
  let client = message.client
  let img = getImage(
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-09-10%2F5f59dace081de.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653956907&t=a23af80eb56bd1588998a1cbd865de74',
    true
  )
  client.addImg(img)
  bot.send(client)
}

if (message.msg === 't3') {
  let client = message.client
  let img = getImage('/storage/emulated/0/DIC/1.png')
  if (img != null) {
    client.addImg(img)
    bot.send(client)
  }
}
