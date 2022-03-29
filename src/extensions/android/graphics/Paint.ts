
export default class Paint {
  setColor(color: any) {
    this.setColor(color)
  }
  setStrokeWidth(strokeWidth: number) {
    this.setStrokeWidth(strokeWidth)
  }
  constructor() {
    let Paint = Java.type('android.graphics.Paint')
    return new Paint()
  }
}
