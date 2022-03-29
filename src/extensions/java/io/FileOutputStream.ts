import File from "./File.js"

export default class FileOutputStream {
  path: string
  constructor(file: File) {
    let FileOutputStream = Java.type('java.io.FileOutputStream')
    return new FileOutputStream(file)
  }
  write(data) {
    this.write(data)
  }
  close() {
    this.close()
  }
}
