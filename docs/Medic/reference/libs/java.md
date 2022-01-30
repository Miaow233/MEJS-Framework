# 自定义 Dex 库函数
自定义库是使用 Java 代码编写自己的扩展工具，将 Java 的二进制 .class 文件转为 Android 虚拟机可以识别的 dex 文件.

最终由词库通过 `Lib->路径|完整类名|方法名(参数)` 来调用.

## Java 代码编写规则
```java title="Tool.java"
package lib.yashiro
public class Tool{
    /*实例储存函数，非必要可以不写*/
    public static Object saveInstance(Object obj){
    /*是否储存了对象*/
    if(null == obj){
        /*创建对象*/
        obj = new ..........
    }
    /*将OBJ强制转*/
    a = (A)obj;
    return obj;/*必要时通过返回null释放保存的资源*/
    }
    /*API函数，非必要可以不写*/
    public static void apiSet(Object api){
        /*该对象用于反射调用API函数  除去没有参数的函数外 api函数参数类型一致为`String[].class`*/
        Method m = api.getClass().getMethod("sendMsg",String[].class);
        m.invoke(api,new String[]{"发送消息"})
    }
    public static void methodName(String ...param){
    }
}
```

方法必须由 static 修饰为静态，可以是任何类型的返回值，但必须重写 toString 方法，参数使用 String 类型的[可变参数](https://www.runoob.com/java/method-varargs.html)

将文件编译为 `myTool.dex` 放入 `DIC/libs` 目录

 - 例：Lib->myTool.dex|lib.yashiro.Tool|methodName(自定义库测试)

反射使用 Toolkit 的 log 方法输出日志

```java
Class clazz = Class.forName("app.yashiro.medic.app.dic.Toolkit");
Method methodLog = clazz.getMethod("log", String[].class);
methodLog.invoke(null, new Object[]{new String[]{log}});
```