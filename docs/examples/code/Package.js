let modules = [
  //'org.apache.http.URL',
  'java.io.File',
  'java.lang.String',
  'java.net.URI',
  'java.net.URL',
  'java.net.HttpURLConnection',
  'java.lang.reflect.Method',
  'java.lang.Class',
]
modules.forEach((p) => {
  try {
    console.log(`${p}`)
    Java.type(p)
  } catch (error) {
    console.log(error)
  }
})
let Class = Java.type('java.lang.Class')
let cl = Class.forName('java.lang.String')
console.log(cl.getName())
