# Java 互操作

你有两种方法来导入 Java 类

* Packages
* Java.type

有什么区别呢？

* Packages 访问的是整个包，而 Java.type 必须是一个类

  > Packages.java.io
  >
  > Java.type('java.io.File')

* Packages 不会检查有效性，如果你导入了一个不存在的类，会在下次调用时报错
* 可以用 Java.has() 检查有效性
* 内部类在Java中的类名其实是`外部类$内部类`，比如：android.graphics.Bitmap$Config

!> 需要注意的是，Java 版本取决于你的设备

!> 安卓 7 之前都是 java 7，没有java.nio，HttpClient等包

下面是一些示例

[Package.js](../examples/code/Package.js ':include :type=code')

[java.js](../examples/code/java.js ':include :type=code')
