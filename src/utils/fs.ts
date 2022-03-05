/** 写入文件 */
async function writeFile(path: string, data: any): Promise<void> {
  let File = Java.type('java.io.File')
  let FileWriter = Java.type('java.io.FileWriter')
  let f: File = new File(path)
  if (!f.exists()) {
    f.createNewFile()
  }
  let writer = new FileWriter(f)
  writer.write(data)
  writer.flush()
  writer.close()
}

/** 读取文本文件 */
async function readFile(path: string): Promise<string> {
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
  let File = Java.type('java.io.File')
  let fileDir: File = new File(path)
  let fileList: string[] = []
  fileDir.listFiles().forEach((f) => {
    if (!f.isDirectory()) fileList.push(f.getName())
  })
  return fileList
}

export { writeFile, readFile }
