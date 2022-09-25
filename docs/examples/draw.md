# 画图

```js
function draw(message){
    var Canvas=Java.type('android.graphics.Canvas');
    var Color=Java.type('android.graphics.Color');
    var Bitmap=Java.type('android.graphics.Bitmap');
    var BitmapFactory=Java.type('android.graphics.BitmapFactory');
    //var canvas = new Canvas;
    var bitmap=openImage("/storage/emulated/0/DIC/img/衰.jpg");
    var ToolKit = Java.type('app.yashiro.medic.app.dic.Toolkit');
    ToolKit.log('e','test Draw1');
    saveBitmap(bitmap,"/storage/emulated/0/DIC/a.png");
    ToolKit.log('e','test Draw2');
}

//将指定路径的图片加载为位图
function openImage(path){
    var Bitmap=Java.type('android.graphics.Bitmap');
    var BitmapFactory=Java.type('android.graphics.BitmapFactory');
    var bitmap = BitmapFactory.decodeFile(path);
    return bitmap;
}
//将位图保存成图片文件
function saveBitmap(bitmap,path){
    var Bitmap=Java.type('android.graphics.Bitmap');
    //var BitmapFactory=Java.type('android.graphics.BitmapFactory');
    var File =Java.type('java.io.File');
    var FileOutputStream=Java.type('java.io.FileOutputStream');
    var file=new File(path);
    if(file.exists()){file.delete();}
    if(!file.exists()){file.createNewFile();}
    var out = new FileOutputStream(file);
    bitmap.compress(Bitmap.CompressFormat.PNG, 80, out);
    
    //out.flush();
    out.close();
}
```