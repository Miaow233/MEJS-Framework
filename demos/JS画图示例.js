
  if (message.msg === '测画图') {
    console.log('Draw message') //向主程序打印log
    let client = message.client
    let Bitmap = Java.type('android.graphics.Bitmap')

    let Paint = Java.type('android.graphics.Paint')
    let Canvas = Java.type('android.graphics.Canvas')
    let paint = new Paint()
    let Color = Java.type('android.graphics.Color')
    let Config = Java.type('android.graphics.Bitmap$Config')
    let CompressFormat = Java.type('android.graphics.Bitmap$CompressFormat')
    let ByteArrayOutputStream = Java.type('java.io.ByteArrayOutputStream')
    let img = new Bitmap.createBitmap(500, 600, Config.ARGB_8888)
    let can = new Canvas(img)
    paint.setTextSize(30)
    paint.setColor(Color.argb(255, 255, 153, 204))
    can.drawText(message.nick, 50, 50, paint)
    client.addText('JS2画图' + message.nick)
    let out = new ByteArrayOutputStream()
    img.compress(CompressFormat.PNG, 30, out)
    client.addImg(out.toByteArray())
    bot.send(client)
  }