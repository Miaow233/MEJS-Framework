function generateImpoter(pluginNames) {
  let head = `let plugins = []`
  let body = ''
  for (let name of pluginNames) {
    body += `// ${name}\n`
    body += `import ${String(name).replace('-', '_')} from './${name}.js'\n`
  }
  let end = `export default plugins`
  return `${head}\n${body}\n${end}`
}

function getPluginNames() {}
