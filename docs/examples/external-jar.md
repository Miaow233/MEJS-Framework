# 外部 JAR

```js
const ClassLoader = Packages.java.lang.ClassLoader
const DexClassLoader = Packages.dalvik.system.DexClassLoader
let parent = ClassLoader.getSystemClassLoader()
let cache = '/data/user/0/app.yashiro.medic/cache/'

let classLoader = new DexClassLoader('/data/user/0/app.yashiro.medic/cache/hutool-all-5.8.5.dex', cache, null, parent)

const TimeInterval = classLoader.loadClass('cn.hutool.core.date.TimeInterval')

let timer = new TimeInterval();

// 分组1
timer.start("1");
await delay(2000)

// 分组2
timer.start("2");


console.log("Timer 1 took {} ms" + timer.intervalMs("1"));
console.log("Timer 2 took {} ms" + timer.intervalMs("2"));
```

我们使用 DexClassLoader 来导入外部 JAR

导入成功后，使用 classLoader.loadClass 访问Java类

!> 由于安卓安全性问题，JAR 必须放在内部路径，自己想办法复制到 `/data/user/0/app.yashiro.medic/cache`，软件对于这个目录是有读写权限的
