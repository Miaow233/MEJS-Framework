// @ts-ignore
import { Bitmap, BitmapFactory, Canvas, Color, Paint, Rect, RectF } from '../packages/android.js'
// @ts-ignore
import { File, FileOutputStream } from '../packages/java.io.js'

/** 通过文件创建Bitmap */
function getBitmapFromFile(pathName: string): android.graphics.Bitmap {
  return BitmapFactory.decodeFile(pathName)
}

/**
 * 将位图保存成图片文件
 * @param {Bitmap} bitmap
 * @param {string} path
 */
function saveBitmap(bitmap: android.graphics.Bitmap, path: string): void {
  let CompressFormat = Java.type('android.graphics.Bitmap$CompressFormat')
  let file = new File(path)
  if (file.exists()) {
    file.delete()
  }
  file.createNewFile()
  let out = new FileOutputStream(file)
  // @ts-ignore
  bitmap.compress(CompressFormat.PNG, 80, out)
  out.close()
}

/** Bitmap转圆形图片Bitmap */
function toRoundBitmap(bitmap: android.graphics.Bitmap) {
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
    let clip = (width - height) / 2
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
  // @ts-ignore
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
  // @ts-ignore
  paint.setXfermode(new PorterDuffXfermode(Mode.SRC_IN))
  canvas.drawBitmap(bitmap, src, dst, paint)
  return output
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
  // @ts-ignore
  let img = Bitmap.createBitmap(width, heidth, Bitmap.Config.ARGB_8888) // 图片对象
  let paint = new Paint() // 画笔
  // @ts-ignore
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
  // @ts-ignore
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
