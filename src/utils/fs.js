async function writeFile(path, data) {
  // JavaScript写入文本文件
  let File = Java.type('java.io.File')
  let FileWriter = Java.type('java.io.FileWriter')
  let f = new File(path)
  if (!f.exists()) {
    f.createNewFile()
  }
  let writer = new FileWriter(f)
  writer.write(data)
  writer.flush()
  writer.close()
}

async function readFile(path) {
  // JavaScript读取文本文件
  var File = Java.type('java.io.File')
  var FileReader = Java.type('java.io.FileReader')
  var Re = new FileReader(path)
  var D = Re.read()
  var F = ''
  while (D != -1) {
    F += String.fromCharCode(D)
    D = Re.read()
  }
  Re.close()
}

export function getFileList(path) {
  let File = Java.type('java.io.File')
  let fileDir = new File(path)
  let fileList = []
  fileDir.listFiles().forEach((f) => {
    if (!f.isDirectory()) fileList.push(f.getName())
  })
  return fileList
}

export { writeFile, readFile }
