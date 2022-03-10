import { writeFile } from '../extensions/fs.js'
function generateImpoter(pluginList) {
  let head = `let plugins = []\n\nglobalThis.plugins = []`
  let body = ''
  for (let plugin of pluginList) {
    let name = plugin.getName().replace('.js', '')
    let path = plugin.getAbsolutePath()
    body += `// ${name}\n`
    body += `import '${path}'\n`
    // body += `import ${name.replace('-', '_')} from '${path}'\n`
    // body += `globalThis.plugins.push(${name.replace('-', '_')})\n\n`
  }
  let end = `export default plugins`
  return `${head}\n${body}`
}

function getPluginList(path) {
  let File = Java.type('java.io.File')
  let fileDir = new File(path)
  let fileList = []
  fileDir.listFiles().forEach((f) => {
    if (!f.isDirectory()) fileList.push(f)
  })
  return fileList
}
let pluginList = getPluginList('/storage/emulated/0/DIC/mejs/plugins')
let importer = generateImpoter(pluginList)
writeFile('/storage/emulated/0/DIC/mejs/plugin-importer.js', importer)
import './plugin-importer.js'
