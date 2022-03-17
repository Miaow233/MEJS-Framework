import { File } from './java.js'

/** 写入文件 */
export function writeFile(path: string, data: any): void {
  let FileWriter = Java.type('java.io.FileWriter')
  let f = new File(path)
  if (!f.exists()) f.createNewFile()
  let writer = new FileWriter(f)
  writer.write(data)
  writer.flush()
  writer.close()
}

/** 读取文本文件 */
export function readFile(path: string): string {
  // JavaScript读取文本文件
  let FileReader = Java.type('java.io.FileReader')
  let Re = new FileReader(path)
  let D = Re.read()
  let F = ''
  while (D != -1) {
    F += String.fromCharCode(D)
    D = Re.read()
  }
  Re.close()
  return F
}

/** 获取文件夹目录 */
export function getFileList(path: string) {
  //let File = Java.type('java.io.File')
  let fileDir = new File(path)
  let fileList: string[] = []
  fileDir.listFiles().forEach((f) => {
    if (!f.isDirectory()) fileList.push(f.getName())
  })
  return fileList
}

/** 文件或路径是否存在 */
export function exists(path: string | File): boolean {
  //let File = Java.type('java.io.File')
  let f = new File(path.toString())
  return f.exists()
}
