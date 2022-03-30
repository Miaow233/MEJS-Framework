const Bitmap = Packages.android.graphics.Bitmap
// const Color = Packages.android.graphics.Color
const File = Packages.java.io.File
const FileOutputStream = Packages.java.io.FileOutputStream
const Paint = Packages.android.graphics.Paint
/** 通过文件创建Bitmap */
function getBitmapFromFile(pathName: string): Packages.android.graphics.Bitmap {
  let BitmapFactory = Java.type('android.graphics.BitmapFactory')
  return BitmapFactory.decodeFile(pathName)
}

export class Canvas {
  drawARGB(a: number, r: number, g: number, b: number) {
    this.drawARGB(a, r, g, b)
  }
  drawLine(ax: number, ay: number, bx: number, by: number, paint: Packages.android.graphics.Paint) {
    this.drawLine(ax, ay, bx, by, paint)
  }
  constructor(bitmap: typeof Bitmap) {
    let Canvas = Java.type('android.graphics.Canvas')
    return new Canvas(bitmap)
  }
}

export class Color {
  static argb(a: number, r: number, g: number, b: number): Color {
    let Color = Java.type('android.graphics.Color')
    return Color.argb(a, r, g, b)
  }
  constructor() {
    let Color = Java.type('android.graphics.Color')
    return new Color()
  }
}

/**
 * 将位图保存成图片文件
 * @param {Bitmap} bitmap
 * @param {string} path
 */
function saveBitmap(bitmap: typeof Bitmap, path: string): void {
  //let FileOutputStream = Java.type('java.io.FileOutputStream')
  let CompressFormat = Java.type('android.graphics.Bitmap$CompressFormat')
  let file = new File(path)
  if (file.exists()) {
    file.delete()
  }
  file.createNewFile()
  let out = new FileOutputStream(file)
  bitmap.compress(CompressFormat.PNG, 80, out)
  out.close()
}

/**
 * 生成画布大小
 * @param {number} x 行数
 * @param {number} y 列数
 * @returns {object}
 */
function getSize(x: number, y: number): { width: number; heidth: number; boder; spacing } {
  let boder = 60 // 外留边距
  let spacing = 80 // 行间距
  return {
    width: boder * 2 + spacing * x,
    heidth: boder * 2 + spacing * y,
    boder: boder,
    spacing: spacing,
  }
}

/** 绘制扫雷 */
function drawPanel(x: number, y: number) {
  let { width, heidth, boder, spacing } = getSize(x, y)

  let img = Bitmap.createBitmap(width, heidth, Bitmap.Config.ARGB_8888) // 图片对象
  let paint = new Paint() // 画笔
  let canva = new Canvas(img) // 画布

  paint.setStrokeWidth(5)
  paint.setColor(Color.argb(255, 255, 153, 204)) // 画笔颜色
  canva.drawARGB(255, 255, 255, 255) // 画布背景色

  // 绘制格子
  for (let i = 1; i < x; i++) {
    canva.drawLine(boder, boder + spacing * i, width - boder, boder + spacing * i, paint) // x
  }
  for (let i = 1; i < y; i++) {
    canva.drawLine(boder + spacing * i, boder, boder + spacing * i, heidth - boder, paint) // y
  }

  // 添加边框
  canva.drawLine(boder, boder, width - boder, boder, paint) // x
  canva.drawLine(boder, boder, boder, heidth - boder, paint) // y
  canva.drawLine(boder, heidth - boder, width - boder, heidth - boder, paint) // x
  canva.drawLine(width - boder, boder, width - boder, heidth - boder, paint) // y
  saveBitmap(img, '/sdcard/DIC/data/cache/temp.png')
}

export class ImageWriter {
  bitmap: typeof Bitmap
  constructor() {}
  drawLine(ax: number, ay: number, bx: number, by: number) {}
  drawCircle(x: number, y: number, r) {}
  drawRect(ax, ay, bx, by) {}
  drawBitmap(bitmap, x, y) {}
  drawText(text, x, y) {}
  drawPoint(x, y) {}
}
export { saveBitmap, drawPanel }
