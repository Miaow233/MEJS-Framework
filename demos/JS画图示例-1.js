/**
 * 加载Java类
 * 内部类在Java中的类名其实是`外部类$内部类`，比如：android.graphics.Bitmap$Config
 */
const Bitmap = Java.type('android.graphics.Bitmap')
const Paint = Java.type('android.graphics.Paint')
const BitmapFactory = Java.type('android.graphics.BitmapFactory')
const Canvas = Java.type('android.graphics.Canvas')
const Rect = Java.type('android.graphics.Rect')
const RectF = Java.type('android.graphics.RectF')
const PorterDuffXfermode = Java.type('android.graphics.PorterDuffXfermode')
const Mode = Java.type('android.graphics.PorterDuff$Mode')
const paint = new Paint()
const Color = Java.type('android.graphics.Color')
const Config = Java.type('android.graphics.Bitmap$Config')
const CompressFormat = Java.type('android.graphics.Bitmap$CompressFormat')
const ByteArrayOutputStream = Java.type('java.io.ByteArrayOutputStream')
const Toolkit = Java.type('app.yashiro.medic.app.dic.Toolkit')

//这个是群消息的处理,入口不可修改
Toolkit.download(
  'http://gchat.qpic.cn/gchatpic_new/2326004880/1107245354-2763071124-9256D741CB47F32704D3E9435F10B350/0?term=2',
  '/storage/emulated/0/DIC/绿帽/帽子.png'
)
$.on('message.group', async (message) => {
  //这下面，包裹的内容都可修改
  let client = message.client
  if (/^绿@.*$/.test(message.msg)) {
    if (message.at.length < 1) {
      //||JSON.parse("["+message.at+"]")[0][0]==2326004880){
      return
    }
    let qq = JSON.parse('[' + message.at + ']')[0][0]
    li(client, qq)
  }
  if (/^绿 [0-9]+$/.test(message.msg)) {
    let msg = message.msg.split(' ')
    li(client, msg[1])
  }
  function li(client, qq) {
    let path = '/storage/emulated/0/DIC/绿帽/' + qq + '.png'
    //let big = Toolkit.download('http://q1.qlogo.cn/g?b=qq&nk=' + qq + '&s=640', path)

    let coo = new Bitmap.createBitmap(400, 500, Config.ARGB_8888)
    let context = new Canvas(coo)
    //context.drawColor(Color.argb(255,176,224,230));
    let bit = toRoundBitmap(BitmapFactory.decodeFile(path))
    let c = new Rect(0, 0, 640, 640)
    let s = new Rect(0, 0, 300, 300)
    context.save()
    context.translate(80, 120)
    context.drawBitmap(bit, c, s, paint)
    context.restore()
    let bi = BitmapFactory.decodeFile('/storage/emulated/0/DIC/绿帽/帽子.png')
    let src = new Rect(-100, -100, 539, 389)
    let sr = new Rect(0, 0, 269, 194)
    context.drawBitmap(bi, src, sr, paint)
    let outt = new ByteArrayOutputStream()
    coo.compress(CompressFormat.PNG, 30, outt)
    client.addImg(outt.toByteArray())
    //client.addText(you);
    bot.send(client)
  }
})

function toRoundBitmap(bitmap) {
  //--Bitmap转圆形图片Bitmap
  let width = bitmap.getWidth()
  let height = bitmap.getHeight()
  let roundPx
  let left, top, right, bottom, dst_left, dst_top, dst_right, dst_bottom
  if (width <= height) {
    roundPx = width / 2
    top = 0
    bottom = width
    left = 0
    right = width
    height = width
    dst_left = 0
    dst_top = 0
    dst_right = width
    dst_bottom = width
  } else {
    roundPx = height / 2
    clip = (width - height) / 2
    left = clip
    right = width - clip
    top = 0
    bottom = height
    width = height
    dst_left = 0
    dst_top = 0
    dst_right = height
    dst_bottom = height
  }
  let output = Bitmap.createBitmap(width, height, Config.ARGB_8888)
  let canvas = new Canvas(output)
  let color = 0xff424242
  let paint = new Paint()
  let src = new Rect(left, top, right, bottom)
  let dst = new Rect(dst_left, dst_top, dst_right, dst_bottom)
  let rectF = new RectF(dst)
  paint.setAntiAlias(true)
  canvas.drawARGB(0, 0, 0, 0)
  paint.setColor(color)
  canvas.drawRoundRect(rectF, roundPx, roundPx, paint)
  paint.setXfermode(new PorterDuffXfermode(Mode.SRC_IN))
  canvas.drawBitmap(bitmap, src, dst, paint)
  return output
}
