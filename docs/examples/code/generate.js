/** 
 * 输出 Java 类中所有的方法和构造器的签名，以及全部实例字段名
 * 可简单修改以生成 TS 注解
 * @param name 类名
 */

/**
 * export class File {
 *   // Fields
 *   // Constructors
 *   constructor(str) {
 *     return new Packages.java.io.File(str);
 *   }
 *   // Methods
 *   static createTempFile(str1, str2) {
 *     return Packages.java.io.File.createTempFile(str1, str2);
 *   }
 *   canExecute() {
 *     return this.canExecute();
 *   }
 * }
 */
 
import { printClass, printConstructors } from 'Reflection.js'

const File = Java.type('java.io.File')
const Class = Java.type('java.lang.Class')
const Modifier = Java.type('java.lang.reflect.Modifier')
const StringBuilder = Java.type('java.lang.StringBuilder')

class Timer {
  constructor(name, times) {
    this.name = name
    this.times = times
    this.cur = 1
  }
  time(){
    console.log(`${this.name}: ${this.cur}/${this.times}`)
    this.cur++
  }
}

class JavaClass {
  constructor(name) {
    this.name = name
    this.class = Class.forName(name)
    this.superclass = this.class.getSuperclass()
    //this.modifiers = Modifier.toString(cl.getModifiers())
    this.methods = this.class.getDeclaredMethods()
  }
  getConstructors() {
    
  }
  getMethods() {
    
  }
  toString() {
    let out = []
    out.push(`class ${cutName(name)}`)
    if (this.superclass.getName() != 'java.lang.Object') out.push(` extends ${this.superclass.getName()}`)
    return out.join('')
  }
}

function getModifiers(o) {
  return Modifier.toString(o.getModifiers()).replace(' final', '')
}

// 构造器
function generateConstructors(cl) {
  let out = []
  let constructor = cl.getDeclaredConstructors()
  let cTimer = new Timer('Generate constructors', constructor.length)
  out.push('// Constructors\n')
  constructor.forEach((c) => {
    cTimer.time()
    let name = c.getName()
    let modifiers = getModifiers(cl)
    if (modifiers.length > 0) out.push(`${modifiers} `)
    out.push(`constructor(`)
    let paramTypes = c.getParameterTypes()
    let params = ''
    let paramsWithoutType = ''
    let nameTime = new Map()
    for (let j = 0; j < paramTypes.length; j++) {
      let param = paramTypes[j].getName()
      let name = subName(param)
      let times = nameTime.get(name) | 0
      let type = switchType(cutName(param))
      if (j > 0) {
        params += ', ' 
        paramsWithoutType += ', '
      }
      if (times == 0) {
        params += `${name}: ${type}`
        paramsWithoutType += name
      } else {
        params += `${name + '_' + times}: ${type}`
        paramsWithoutType += `${name + '_' + times}`
      }
      nameTime.set(name, times + 1)
    }
    out.push(`${params}) {\nreturn new Packages.${name}(${paramsWithoutType})\n}\n`)
  })
  return out.join('')
}

// 方法
function generateMethods(cl) {
  let out = Array()
  let methods = cl.getDeclaredMethods()
  let mTimer = new Timer('Generate methods', methods.length)
  out.push('// Methods\n')
  methods.forEach((m) => {
    mTimer.time()
    let retType = switchType(cutName(m.getReturnType().getName()))
    let name = m.getName()
    let modifiers = getModifiers(m)
    //if (modifiers.startsWith('private')){ return }
    if (modifiers.length > 0) out.push(`${modifiers} `)
    out.push(`${name}(`)
    let paramTypes = m.getParameterTypes()
    let params = ''
    let paramsWithoutType = ''
    let nameTime = new Map()
    for (let j = 0; j < paramTypes.length; j++) {
      let param = paramTypes[j].getName()
      let name = subName(param)
      let times = nameTime.get(name) | 0
      let type = switchType(cutName(param))
      if (j > 0) {
        params += ', ' 
        paramsWithoutType += ', '
      }
      if (times == 0) {
        params += `${name}: ${type}`
        paramsWithoutType += name
      } else {
        params += `${name + '_' + times}: ${type}`
        paramsWithoutType += `${name + '_' + times}`
      }
      nameTime.set(name, times + 1)
    }
    if (retType == 'void') {
      out.push(`${params}): ${retType} {\nthis.${name}(${paramsWithoutType})\n}\n`)
    } else if (modifiers.indexOf('static') > -1) { 
      out.push(`${params}): ${retType} {\nreturn Packages.${cl.getName()}.${name}(${paramsWithoutType})\n}\n`)
    } else if (modifiers.indexOf('abstract') > -1) {
      out.push(`${params}): ${retType} {}\n`)
    } else {
      out.push(`${params}): ${retType} {\nreturn this.${name}(${paramsWithoutType})\n}\n`)
    }
  })
  return out.join('')
}

// 字段
function generateFields(cl) {
  let out = new StringBuilder()
  let fields = cl.getDeclaredFields()
  let fTimer = new Timer('Generate fields', fields.length)
  out.append('// Fields\n')
  fields.forEach((f) => {
    fTimer.time()
    let type = f.getType()
    let name = f.getName()
    //out.append('    ')
    let modifiers = getModifiers(f)
    if (modifiers.length > 0) out.append(`${modifiers} `)
    out.append(`${name}: ${switchType(cutName(type.getName()))}\n`)
  })
  return out.toString()
}

/** 截取类名 */
function cutName(name) {
  if (name.startsWith('[')) {
    name = name.split('.')
    return name[name.length - 1].replace(';', '[]')
  }
  name = name.split('.')
  return name[name.length - 1]
}

/** 截取三个字符 */
function subName(name) {
  return cutName(name.replace('[','').toLowerCase()).slice(0, 3)
}

/** Java类型转换 */
function switchType(type) {
  switch(type) {
    case 'int':
      return 'number'
      break
    case 'long':
      return 'number'
      break
    case 'String':
      return 'string'
      break
    case '[B':
      return 'byte[]'
      break
    case '[I':
      return 'number[]'
      break
    case '[C':
      return 'String[]'
    default:
      return type
  }
}

const name = 'android.graphics.Bitmap'
let classFile = new File('/sdcard/DIC/src/' + name.replace(/\./g, '/') + '.ts')
let classPath = classFile.getParentFile()
try {
  if(!classPath.exists()) {
    classPath.mkdirs()
    console.log(classPath.getAbsolutePath())
  }
  if(!classFile.exists()) {
    classFile.createNewFile()
  }
} catch(e) {
  console.log(e.stack)
}

let cl = new JavaClass(name).class
let supercl = cl.getSuperclass()

//let outString = new StringBuilder()
//outString.append(`class ${name}`)
//if (!!supercl && supercl.getName() != 'java.lang.Object') outString.append(` extends ${supercl.getName()}`)
//outString.append(' {\n')
//let constructors = generateConstructors(cl)
//console.log(constructors)
//outString.append(constructors)
//let methods = generateMethods(cl)
//console.log(methods)
//outString.append(methods)
//let fields = generateFields(cl)
//console.log(fields)
//outString.append(fields)
//outString.append('}')
//compat.writeText(classFile.getAbsolutePath(), outString.toString()).then(() => console.log('Done'))

//let out = printClass(name)
//let className = cutName(name)
//compat.writeText(classFile.getParent() + '/' + className + '.java', out).then(() => console.log('Done'))
console.log(printConstructors(cl))
