function test(message) {
  //JavaScript写入txt文本
  var str = '自定义字符串'
  var File = Java.type('java.io.File')
  var FileWriter = Java.type('java.io.FileWriter')
  var f = new File('/storage/emulated/0/dic/foo.txt')
  if (!f.exists()) {
    f.createNewFile()
  }
  var writer = new FileWriter(f)
  writer.write(str)
  writer.flush()
  writer.close()
  //JavaScript读取文本文件
  var File = Java.type('java.io.File')
  var FileReader = Java.type('java.io.FileReader')
  var Re = new FileReader('/storage/emulated/0/DIC/foo.txt')
  var D = Re.read()
  var F = ''
  while (D != -1) {
    F += String.fromCharCode(D)
    D = Re.read()
  }
  Re.close()
  if (message.msg == '测p') {
    // 调用ToolKit.class
    var ToolKit = Java.type('app.yashiro.medic.app.dic.Toolkit')
    // 调用静态方法
    var a = ToolKit.randomText('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k')
    ToolKit.log('e', '测试')
    var c = message.client
    c.addText('test' + F + a)
    bot.send(c)
    draw(message)
  }
}

function draw(message) {
  var Canvas = Java.type('android.graphics.Canvas')
  var Color = Java.type('android.graphics.Color')
  var Bitmap = Java.type('android.graphics.Bitmap')
  var BitmapFactory = Java.type('android.graphics.BitmapFactory')
  //var canvas = new Canvas;
  var bitmap = openImage('/storage/emulated/0/DIC/img/衰.jpg')
  var ToolKit = Java.type('app.yashiro.medic.app.dic.Toolkit')
  ToolKit.log('e', 'test Draw1')
  saveBitmap(bitmap, '/storage/emulated/0/DIC/a.png')
  ToolKit.log('e', 'test Draw2')
}

// 将指定路径的图片加载为位图
function openImage(path) {
  var Bitmap = Java.type('android.graphics.Bitmap')
  var BitmapFactory = Java.type('android.graphics.BitmapFactory')
  var bitmap = BitmapFactory.decodeFile(path)
  return bitmap
}

// 将位图保存成图片文件
function saveBitmap(bitmap, path) {
  var Bitmap = Java.type('android.graphics.Bitmap')
  //var BitmapFactory=Java.type('android.graphics.BitmapFactory');
  var File = Java.type('java.io.File')
  var FileOutputStream = Java.type('java.io.FileOutputStream')
  var file = new File(path)
  if (file.exists()) {
    file.delete()
  }
  if (!file.exists()) {
    file.createNewFile()
  }
  var out = new FileOutputStream(file)
  bitmap.compress(Bitmap.CompressFormat.PNG, 80, out)

  // out.flush();
  out.close()
}


