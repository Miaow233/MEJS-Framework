export class Plain {
  text: string
  /**
   * 文字消息
   * @param text 文字消息
   */
  constructor(text) {
    this.text = text
  }
  __str__() {
    return `Plain(${this.text})`
  }
}

export class Image {
  url: string
  /**
   * 图片消息
   * @param url 图片链接
   */
  constructor(url) {
    this.url = url
  }
  __str__() {
    return `Image(${this.url})`
  }
}
