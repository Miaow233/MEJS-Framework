/**
 * 输出 Java 类中所有的方法和构造器的签名，以及全部实例字段名
 * 可简单修改以生成 TS 注解
 * @param name 类名
 */
const Class = Java.type('java.lang.Class')
const Modifier = Java.type('java.lang.reflect.Modifier')
const StringBuilder = Java.type('java.lang.StringBuilder')
let outString = new StringBuilder()
export function printClass(name) {
  let cl = Class.forName(name)
  let supercl = cl.getSuperclass()
  let modifiers = Modifier.toString(cl.getModifiers())
  if (modifiers.length > 0) outString.append(`${modifiers} `)
  outString.append(`class ${name}`)
  if (!!supercl && supercl.getName() != 'java.lang.Object') outString.append(` extends ${supercl.getName()}`)
  outString.append('\n{\n    // Constructors\n')
  printConstructors(cl)
  outString.append('    // Methods\n')
  printMethods(cl)
  outString.append('    // Fields\n')
  printFields(cl)
  outString.append('}')
  return outString.toString()
}

// 构造器
function printConstructors(cl) {
  let constructor = cl.getDeclaredConstructors()
  constructor.forEach((c) => {
    let name = c.getName()
    outString.append('    ')
    let modifiers = Modifier.toString(cl.getModifiers())
    if (modifiers.length > 0) outString.append(`${modifiers} `)
    outString.append(`${name}(`)
    let paramTypes = c.getParameterTypes()
    for (let j = 0; j < paramTypes.length; j++) {
      if (j > 0) outString.append(', ')
      outString.append(`${paramTypes[j].getName()}`)
    }
    outString.append(');\n')
  })
}

// 方法
function printMethods(cl) {
  let methods = cl.getDeclaredMethods()
  methods.forEach((m) => {
    let retType = m.getReturnType()
    let name = m.getName()
    outString.append('    ')
    let modifiers = Modifier.toString(m.getModifiers())
    if (modifiers.length > 0) outString.append(`${modifiers} `)
    outString.append(`${retType.getName()} ${name}(`)
    let paramTypes = m.getParameterTypes()
    for (let j = 0; j < paramTypes.length; j++) {
      if (j > 0) outString.append(', ')
      outString.append(`${paramTypes[j].getName()}`)
    }
    outString.append(');\n')
  })
}

// 字段
function printFields(cl) {
  let fields = cl.getDeclaredFields()
  fields.forEach((f) => {
    let type = f.getType()
    let name = f.getName()
    outString.append('    ')
    let modifiers = Modifier.toString(f.getModifiers())
    if (modifiers.length > 0) outString.append(`${modifiers} `)
    outString.append(`${type.getName()} ${name};\n`)
  })
}
