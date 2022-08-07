let Runtime = Packages.java.lang.Runtime

let version = Runtime.version()
let out = Runtime.getRuntime().exec('/data/data/app.yashiro.medic/app_HOME/toybox help').getInputStream().readAllBytes()
console.log(out)
console.log(version)
