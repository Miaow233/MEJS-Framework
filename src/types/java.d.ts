declare namespace Java {
  function type(name: string): any
}

declare namespace Packages {
  /** 试图补全Java api */
  namespace java {
    namespace lang {
      /** 可附加char序列和值的对象。 */
      interface Appendable {
        append(char: string): Appendable
      }
      /** 可以保存资源的对象（如文件或套接字句柄），直到它关闭 */
      interface AutoCloseable {
        close(): void
      }
      /**  A CharSequence是 char值的可读序列 */
      interface CharSequence {}
      /**  一个类实现 Cloneable接口，以指示 Object.clone()方法，该方法对于该类的实例进行字段 - 字段的复制是合法的 */
      interface Cloneable {}
      /**  该接口对实现它的每个类的对象强加一个整体排序 */
      interface Comparable<T> {}
      /**  实现此接口允许对象成为“for-each loop”语句的目标 */
      interface Iterable<T> {}
      /**  A Readable是一个 字符的来源 */
      interface Readable {}
      /**  Runnable接口应由实例由线程执行的任何类实现 */
      interface Runnable {}
      // interface Thread.UncaughtExceptionHandler {}
      /** 布尔类将对象中的基元类型 boolean的值包 boolean  */
      class Boolean {}
      /** Byte类在一个对象中包含一个原始类型 byte的值 */
      class Byte {}
      /** Character类包装一个对象中的基本类型 char的值 */
      class Character {}
      /** 该类的实例表示Unicode字符集的特定子集 */
      // class Character.Subset {}
      /** 一系列字符子集，表示Unicode规范中的字符块 */
      // class Character.UnicodeBlock {}
      /** Class类的 类表示正在运行的Java应用程序中的类和接口 */
      class Class<T> {}
      /** 类加载器是负责加载类的对象 */
      class ClassLoader {}
      /** 将计算的值与（潜在地）每种类型相关联 */
      class ClassValue<T> {}
      /** 提供 Compiler类来支持Java到本地代码编译器和相关服务 */
      class Compiler {}
      /** Double类包装一个对象中的基本类型 double的值 */
      class Double {}
      /** extends Enum> 这是所有Java语言枚举类型的公共基类 */
      class Enum<E extends Enum<E>> {}
      /** Float类在一个对象中包含一个基本类型 float的值 */
      class Float {}
      /** 该类扩展了 ThreadLocal以提供从父线程到子线程的值的继承：当子线程被创建时，子接收到父值具有值的所有可继承的线程局部变量的初始值 */
      class InheritableThreadLocal {}
      /** Integer类包装一个对象中的原始类型 int的值 */
      class Integer {}
      /** Long类包装一个对象中的基本类型 long的值 */
      class Long {}
      /** Math类包含执行基本数字运算的方法，如基本指数，对数，平方根和三角函数 */
      class Math {}
      /** 抽象类 Number是表示数字值可转换为基本数据类型平台类的超类 byte ， double ， float ， int ， long和 short  */
      class Number {}
      /** Class Object是类 Object结构的根 */
      class Object {
        constructor()
        protected clone(): Object
        protected finalize(): void
        public equals(obj: Object): boolean
        public getClass(): Class<Object>
        public hashCode(): number
        public notify(): void
        public notifyAll(): void
        public toString(): string
        public wait(timeout: number, nanos: number): void
        public wait(timeout: number): void
      }
      /** 软件包对象包含有关Java包的实现和规范的版本信息 */
      class Package {}
      /** ProcessBuilder.start()和 Runtime.exec方法创建一个本机进程并返回一个 Process子类的 Process ，可以用来控制进程并获取有关该进程的信息 */
      class Process {}
      /** 此类用于创建操作系统进程 */
      class ProcessBuilder {}
      /** 表示子进程输入的源或子进程输出的目的地 */
      // class ProcessBuilder.Redirect {}
      /** 每个Java应用程序都有一个 Runtime类的 Runtime ，允许应用程序与运行应用程序的环境进行接口 */
      class Runtime {}
      /** 此类用于运行时权限 */
      class RuntimePermission {}
      /** 安全管理器是允许应用程序实施安全策略的类 */
      class SecurityManager {}
      /** Short类在一个对象中包含一个基本类型 short的值 */
      class Short {}
      /** 堆栈跟踪中的一个元素，如 Throwable.getStackTrace()所示  */
      class StackTraceElement {}
      /** StrictMath类包含执行基本数字运算的方法，如基本指数，对数，平方根和三角函数 */
      class StrictMath {}
      /** String类代表字符串 */
      class String {}
      /** 线程安全，可变的字符序列 */
      class StringBuffer {}
      /** 一个可变的字符序列 */
      class StringBuilder {}
      /** System类包含几个有用的类字段和方法 */
      class System {}
      /** 线程是程序中执行的线程 */
      class Thread {}
      /** 线程组代表一组线程 */
      class ThreadGroup {}
      /** 这个类提供线程局部变量 */
      class ThreadLocal<T> {}
      /** Throwable类是Java语言中所有错误和异常的 Throwable类 */
      class Throwable {}
      /** Void类是一个不可抗拒的占位符类，用于保存对表示Java关键字void的 类对象的引用。 */
      class Void {}
    }

    namespace System {}

    namespace io {
      /** Closeable是可以关闭的数据的源或目的地。 */
      interface Closeable {
        close(): void
      }
      /** DataInput接口提供从二进制流读取字节，并从其中重建任何Java基元类型的数据。 */
      interface DataInput {}
      /** DataOutput接口提供将数据从任何Java基本类型转换为一系列字节，并将这些字节写入二进制流。 */
      interface DataOutput {}
      /** 只有Externalizable实例的类的身份才能写入序列化流中，并且该类负责保存和恢复其实例的内容。 */
      interface Externalizable {}
      /** 抽象路径名的过滤器。 */
      interface FileFilter {}
      /** 用于实现此接口的类的实例用于过滤文件名。 */
      interface FilenameFilter {}
      /** AFlushable是可以刷新的数据的目的地。 */
      interface Flushable {
        flush(): void
      }
      /** ObjectInput扩展了DataInput接口以包含对象的读取。 */
      interface ObjectInput {}
      /** 回调界面允许验证图中的对象。 */
      interface ObjectInputValidation {}
      /** ObjectOutput扩展了DataOutput接口，包括写入对象。 */
      interface ObjectOutput {}
      /** 写入对象序列化流的常量。 */
      interface ObjectStreamConstants {}
      /** 类的序列化由实现java.io.Serializable接口的类启用。 */
      interface Serializable {}

      /** ABufferedInputStream为另一个输入流添加了功能，即缓冲输入和支持mark和reset方法的功能。 */
      class BufferedInputStream {}
      /** 该类实现缓冲输出流。 */
      class BufferedOutputStream {}
      /** 从字符输入流读取文本，缓冲字符，以提供字符，数组和行的高效读取。 */
      class BufferedReader extends java.io.Reader {
        constructor(input: java.io.Reader)
        public close(): void
        public mark(readlimit: number): void
        public markSupported(): boolean
        public read(): number
        public read(cbuf: number[]): number
        public read(cbuf: number[], off: number, len: number): number
        public readLine(): string
        public reset(): void
        public skip(n: number): number
      }
      /** 将文本写入字符输出流，缓冲字符，以提供单个字符，数组和字符串的高效写入。 */
      class BufferedWriter extends java.io.Writer {
        constructor(out: java.io.Writer, size: number)
        constructor(out: java.io.Writer)
        public close(): void
        public flush(): void
      }
      /** AByteArrayInputStream包含一个内部缓冲区，其中包含可以从流中读取的字节。 */
      class ByteArrayInputStream {}
      /** 该类实现了将数据写入字节数组的输出流。 */
      class ByteArrayOutputStream {}
      /** 该类实现了一个字符缓冲区，可以用作字符输入流。 */
      class CharArrayReader {}
      /** 该类实现了可以用作Writer的字符缓冲区。 */
      class CharArrayWriter {}
      /** 访问与当前Java虚拟机关联的基于字符的控制台设备（如果有的话）的方法。 */
      class Console {}
      /** 数据输入流允许应用程序以独立于机器的方式从底层输入流读取原始Java数据类型。 */
      class DataInputStream {}
      /** 数据输出流使应用程序以便携式方式将原始Java数据类型写入输出流。 */
      class DataOutputStream {}
      /** 文件和目录路径名的抽象表示。 */
      class File {
        constructor(path: string)
        public createDirectory(): boolean
        public createNewFile(): boolean
        public delete()
        public exists(): boolean
        public getAbsolutePath(): string
        public getName(): string
        public getParent(): string
        public getParentFile(): File
        public getPath(): string
        public isDirectory(): boolean
        public isFile(): boolean
        public list(): string[]
        public listFiles(): File[]
        public mkdirs(): boolean
        public static createTempFile(prefix: string, suffix: string): File
        public static listRoots(): File[]
      }
      /** 文件描述符类的实例用作表示打开文件，开放套接字或其他字节源或信宿的底层机器特定结构的不透明句柄。 */
      class FileDescriptor {}
      /** AFileInputStream从文件系统中的文件获取输入字节。 */
      class FileInputStream extends InputStream {
        constructor(file: File)
        constructor(name: string)
        public read(): any
        public avilable(): any
        public close(): void
      }
      /** 文件输出流是用于将数据写入到输出流File或一个FileDescriptor。 */
      class FileOutputStream extends OutputStream {
        constructor(file: File)
        constructor(name: string)
        public write(b: number | number[]): void
        public close(): void
      }
      /** 此类表示访问文件或目录。 */
      class FilePermission {}
      /** 阅读字符文件的便利课。 */
      class FileReader extends InputStreamReader {
        constructor(file: File)
        constructor(name: string)
        public read(): any
        public close(): void
      }
      /** 方便课写字符文件。 */
      class FileWriter {}
      /** AFilterInputStream包含一些其他输入流，它用作其基本的数据源，可能会沿着路径转换数据或提供附加功能。 */
      class FilterInputStream {}
      /** 这个类是过滤输出流的所有类的超类。 */
      class FilterOutputStream {}
      /** 用于读取过滤后的字符流的抽象类。 */
      class FilterReader {}
      /** 用于编写过滤后的字符流的抽象类。 */
      class FilterWriter {}
      /** 这个抽象类是表示输入字节流的所有类的超类。 */
      abstract class InputStream extends java.lang.Object {
        constructor()
        public close(): void
        public readAllBytes(): number[]
      }
      /** InputStreamReader是从字节流到字符流的桥梁：它读取字节，并使用指定的charset将其解码为字符。 */
      class InputStreamReader extends Reader {
        constructor(stream: InputStream)
        public read(): any
        public close(): void
      }
      /** Deprecated该类错误地假定字节充分表示字符。 */
      class LineNumberInputStream {}
      /** 缓冲字符输入流，跟踪行号。 */
      class LineNumberReader {}
      /** ObjectInputStream反序列化先前使用ObjectOutputStream编写的原始数据和对象。 */
      class ObjectInputStream {}
      /** 提供对从输入流读取的持久性字段的访问。 */
      // class ObjectInputStream.GetField {}
      /** ObjectOutputStream将Java对象的原始数据类型和图形写入OutputStream。 */
      class ObjectOutputStream {}
      /** 提供对要写入ObjectOutput的持久字段的编程访问。 */
      // class ObjectOutputStream.PutField {}
      /** 序列化的类的描述符。 */
      class ObjectStreamClass {}
      /** Serializable类的Serializable字段的描述。 */
      class ObjectStreamField {}
      /** 这个抽象类是表示字节输出流的所有类的超类。 */
      abstract class OutputStream extends java.lang.Object {
        constructor()
        flush(): void
        close(): void
        write(b: number | number[]): void
      }
      /** OutputStreamWriter是字符的桥梁流以字节流：向其写入的字符编码成使用指定的字节charset。 */
      class OutputStreamWriter extends java.io.Writer {
        constructor(out: java.io.OutputStream, charset: java.nio.charset.Charset)
        constructor(out: java.io.OutputStream)
        public close(): void
        public flush(): void
      }
      /** 管道输入流应连接到管道输出流;管道输入流然后提供写入管道输出流的任何数据字节。 */
      class PipedInputStream {}
      /** 管道输出流可以连接到管道输入流以创建通信管道。 */
      class PipedOutputStream {}
      /** 流水字符输入流。 */
      class PipedReader {}
      /** 流水字符输出流。 */
      class PipedWriter {}
      /** APrintStream将功能添加到另一个输出流，即能够方便地打印各种数据值的表示。 */
      class PrintStream {}
      /** 将对象的格式表示打印到文本输出流。 */
      class PrintWriter {}
      /** APushbackInputStream将功能添加到另一个输入流，即可以“推回”或“未读”一个字节。 */
      class PushbackInputStream {}
      /** 一个字符流读取器，允许将字符推回到流中。 */
      class PushbackReader {}
      /** 该类的实例支持读取和写入随机访问文件。 */
      class RandomAccessFile {}
      /** 用于读取字符流的抽象类。 */
      abstract class Reader extends java.lang.Object {
        close(): void
        read(): number
        read(b: number[]): number
        read(b: number[], off: number, len: number): number
        skip(n: number): number
        ready(): boolean
      }
      /** ASequenceInputStream表示其他输入流的逻辑级联。 */
      class SequenceInputStream {}
      /** 这个类用于Serializable权限。 */
      class SerializablePermission {}
      /** StreamTokenizer类接收输入流并将其解析为“令牌”，允许一次读取一个令牌。 */
      class StreamTokenizer {}
      /** Deprecated此类不会将字符正确转换为字节。 */
      class StringBufferInputStream {}
      /** 一个字符流，其源是一个字符串。 */
      class StringReader {}
      /** 在字符串缓冲区中收集其输出的字符流，然后可以用于构造字符串。 */
      class StringWriter {}
      /** 用于写入字符流的抽象类。 */
      abstract class Writer extends java.lang.Object {
        abstract close(): void
        abstract flush(): void
        protected constructor()
        protected constructor(lock: java.lang.Object)
        protected lock(): java.lang.Object
        public append(csq: string): java.io.Writer
        public write(c: number): void
        public write(cbuf: string[], off: number, len: number): void
        public write(cbuf: string[]): void
        public write(str: number, off: number, len: number): void
        public write(str: string): void
      }
    }

    namespace net {
      /** 该界面为内容处理程序定义了一个工厂。 */
      interface ContentHandlerFactory {}
      /** CookiePolicy实现决定哪些Cookie应该被接受，哪些应该被拒绝。 */
      interface CookiePolicy {}
      /** CookieStore对象表示Cookie的存储。 */
      interface CookieStore {}
      /** 该接口为数据报套接字实现定义了一个工厂。 */
      interface DatagramSocketImplFactory {}
      /** 一个简单的界面，提供了一种在文件名和MIME类型字符串之间映射的机制。 */
      interface FileNameMap {}
      /** 代表一系列通信协议。 */
      interface ProtocolFamily {}
      /** 该接口定义了一个用于套接字实现的工厂。 */
      interface SocketImplFactory {}
      /** 与套接字关联的套接字选项。 */
      interface SocketOption<T> {}
      /** 获取/设置套接字选项的方法的接口。 */
      interface SocketOptions {}
      /** 该接口为URL流协议处理程序定义了一个工厂。 */
      interface URLStreamHandlerFactory {}
      /** Authenticator类代表一个知道如何获取网络连接认证的对象。 */
      class Authenticator {}
      /** 表示在ResponseCache中存储资源的通道。 */
      class CacheRequest {}
      /** 代表从ResponseCache中检索资源的通道。 */
      class CacheResponse {}
      /** 抽象类ContentHandler是读取所有类的超Object从URLConnection。 */
      class ContentHandler {}
      /** CookieHandler对象提供一个回调机制，将HTTP状态管理策略实现连接到HTTP协议处理程序中。 */
      class CookieHandler {}
      /** CookieManager提供了一个具体的CookieHandler实现，它将cookie的存储与接受和拒绝cookie的策略分开。 */
      class CookieManager {}
      /** 该类表示数据报包。 */
      class DatagramPacket {}
      /** 此类表示用于发送和接收数据报数据包的套接字。 */
      class DatagramSocket {}
      /** 抽象数据报和组播套接字实现基类。 */
      class DatagramSocketImpl {}
      /** HttpCookie对象表示HTTPcookie，它承载服务器和用户代理之间的状态信息。 */
      class HttpCookie {}
      /** 支持HTTP特定功能的URLConnection。 */
      class HttpURLConnection {}
      /** 提供在正常Unicode表示和ASCII兼容编码（ACE）表示之间转换国际化域名（IDN）的方法。 */
      class IDN {}
      /** 该类表示Internet协议版本4（IPv4）地址。 */
      class Inet4Address {}
      /** 该类表示Internet协议版本6（IPv6）地址。 */
      class Inet6Address {}
      /** 此类表示Internet协议（IP）地址。 */
      class InetAddress {}
      /** 该类实现IP套接字地址（IP地址+端口号）它也可以是一对（主机名+端口号），在这种情况下将尝试解析主机名。 */
      class InetSocketAddress {}
      /** 此类表示网络接口地址。 */
      class InterfaceAddress {}
      /** 与JavaARchive（JAR）文件或JAR文件中的条目的URL连接。 */
      class JarURLConnection {}
      /** 组播数据报套接字类对发送和接收IP组播数据包很有用。 */
      class MulticastSocket {}
      /** 此类用于各种网络权限。 */
      class NetPermission {}
      /** 此类表示由名称组成的网络接口和分配给此接口的IP地址列表。 */
      class NetworkInterface {}
      /** PasswordAuthentication类是Authenticator使用的数据持有者。 */
      class PasswordAuthentication {}
      /** 此类表示代理设置，通常是类型（http，socks）和套接字地址。 */
      class Proxy {}
      /** 选择在连接到URL引用的网络资源时使用的代理服务器（如果有）。 */
      class ProxySelector {}
      /** 表示URLConnection缓存的实现。 */
      class ResponseCache {}
      /** 表示最初通过安全手段（例如TLS）检索的缓存响应。 */
      class SecureCacheResponse {}
      /** 这个类实现了服务器套接字。 */
      class ServerSocket {}
      /** 该类实现客户端套接字（也称为“套接字”）。 */
      class Socket {}
      /** 这个类代表一个没有协议附件的Socket地址。 */
      class SocketAddress {}
      /** 抽象类SocketImpl是实际实现套接字的所有类的公共超类。 */
      class SocketImpl {}
      /** 此类表示通过套接字访问网络。 */
      class SocketPermission {}
      /** 定义标准套接字选项。 */
      class StandardSocketOptions {}
      /** 表示统一资源标识符（URI）参考。 */
      class URI {}
      /** URL类URL统一资源定位器，指向万维网上的“资源”的指针。 */
      class URL extends java.lang.Object implements java.io.Serializable {
        /** 从String表示形成一个URL对象 */
        constructor(spec: string)
        /** 创建URL从指定对象protocol，host，port数，和file */
        constructor(protocol: string, host: string, port: number, file: string)
        /** 创建URL从指定对象protocol，host，port数，file和handler */
        constructor(protocol: string, host: string, port: number, file: string, handler: URLStreamHandler)
        /** 从指定的protocol名称，host名称和file名称创建一个URL */
        constructor(protocol: string, host: string, file: string)
        /** 通过在指定的上下文中解析给定的规范来创建一个URL */
        constructor(context: URL, spec: string)
        /** 通过在指定上下文中使用指定的处理程序解析给定规范来创建URL */
        constructor(context: URL, spec: string, handler: URLStreamHandler)
        /** 将此URL与其他对象进行比较 */
        equals(obj: Object): boolean
        /** 获取此的授权部分URL */
        getAuthority(): string
        /** 获取此URL的内容 */
        getContent(): Object
        /** 获取此URL的内容 */
        // getContent(classes: java.lang.Class[]): Object
        /** 获取与此URL的协议的默认端口号 */
        getDefaultPort(): number
        /** 获取此URL的文件名 */
        getFile(): string
        /** 获取此URL的主机名（如适用） */
        getHost(): string
        /** 获取此URL的路径部分 */
        getPath(): string
        /** 获取此URL的端口号 */
        getPort(): number
        /** 获取此URL的协议名称 */
        getProtocol(): string
        /** 获取此URL的查询部分 */
        getQuery(): string
        /** 获取此的锚定（也称为“参考”）URL */
        getRef(): string
        /** 获取该URL的userInfo部分 */
        getUserInfo(): string
        /** 创建适合哈希表索引的整数 */
        hashCode(): number
        /** 返回一个URLConnection实例，表示与URL引用的远程对象的URL */
        openConnection(): URLConnection
        /** 与openConnection()相同，但连接将通过指定的代理进行;不支持代理的协议处理程序将忽略代理参数并进行正常连接 */
        openConnection(proxy: Proxy): URLConnection
        /** 打开与此URL，并返回一个InputStream，以便从该连接读取 */
        openStream(): java.io.InputStream
        /** 比较两个URL，不包括片段组件 */
        sameFile(other: URL): boolean
        /** 设置应用程序的URLStreamHandlerFactory */
        static setURLStreamHandlerFactory(fac: URLStreamHandlerFactory): void
        /** 构造这个URL的字符串URL */
        toExternalForm(): string
        /** 构造此URL的字符串表示URL */
        toString(): string
        /** 返回相当于此URL的URI */
        toURI(): URI
      }
      /** 此类加载器用于从引用JAR文件和目录的URL的搜索路径加载类和资源。 */
      class URLClassLoader {}
      /** 抽象类URLConnection是表示应用程序和URL之间的通信链接的所有类的超类。 */
      abstract class URLConnection {
        /** 添加由键值对指定的一般请求属性 */
        addRequestProperty(value: string): void
        /** 打开与此URL引用的资源的通信链接，如果此类连接尚未建立 */
        abstract connect(): void
        /** 返回此对象的allowUserInteraction字段的值 */
        getAllowUserInteraction(): boolean
        /** 返回连接超时的设置 */
        getConnectTimeout(): number
        /** 检索此URL连接的内容 */
        getContent(): Object
        /** 检索此URL连接的内容 */
        // getContent(classes: 类[]): Object
        /** 返回content-encoding标题字段的值 */
        getContentEncoding(): string
        /** 返回content-length标题字段的值 */
        getContentLength(): number
        /** 返回content-length标头字段的值为long */
        getContentLengthLong(): number
        /** 返回content-type标题字段的值 */
        getContentType(): string
        /** 返回date标题字段的值 */
        getDate(): number
        /** 返回allowUserInteraction字段的默认值 */
        static getDefaultAllowUserInteraction(): boolean
        /** 已弃用在获得适当的URLConnection实例之后，应该使用实例特定的getRequestProperty方法 */
        static getDefaultRequestProperty(key: string): string
        /** 在获得适当的URLConnection实例之后，应该使用实例特定的getRequestProperty方法 */
        getDefaultUseCaches(): boolean
        /** 返回默认值为URLConnection的useCaches标志 */
        getDoInput(): boolean
        /** 返回此URLConnection的doInput标志的值 */
        getDoOutput(): boolean
        /** 返回此URLConnection的doOutput标志的值 */
        getExpiration(): number
        /** 返回expires标题字段的值 */
        static getFileNameMap(): FileNameMap
        /** 从数据文件加载文件名映射（模拟） */
        getHeaderField(n: number): string
        /** 返回的值nth头字段 */
        getHeaderField(name: string): string
        /** 返回命名头字段的值 */
        getHeaderFieldDate(Default: string): number
        /** 返回以日期解析的命名字段的值 */
        getHeaderFieldInt(Default: string): number
        /** 返回被解析为命名字段的值 */
        getHeaderFieldKey(n: number): string
        /** 返回的关键nth头字段 */
        getHeaderFieldLong(Default: string): number
        /** 返回被解析为命名字段的值 */
        getHeaderFields(): Map<string, Array<string>>
        /** 返回不可修改的标题字段的映射 */
        getIfModifiedSince(): number
        /** 返回此对象的ifModifiedSince字段的值 */
        getInputStream(): java.io.InputStream
        /** 返回从此打开的连接读取的输入流 */
        getLastModified(): number
        /** 返回last-modified标题字段的值 */
        getOutputStream(): java.io.OutputStream
        /** 返回写入此连接的输出流 */
        // getPermission(): Permission
        /** 返回一个权限对象，该对象表示创建此对象所表示的连接所需的权限 */
        getReadTimeout(): number
        /** 返回读取超时的设置 */
        getRequestProperties(): Map<string, Array<string>>
        /** 返回此连接的一般请求属性的不可修改映射 */
        getRequestProperty(key: string): string
        /** 返回此连接的命名的常规请求属性的值 */
        getURL(): URL
        /** 返回此URLConnection的URL字段的值 */
        getUseCaches(): boolean
        /** 返回此URLConnection的useCaches字段的值 */
        static guessContentTypeFromName(fname: string): string
        /** 根据URL的指定“文件”组件，尝试确定对象的内容类型 */
        static guessContentTypeFromStream(is: java.io.InputStream): string
        /** 根据输入流开头的字符，尝试确定输入流的类型 */
        setAllowUserInteraction(allowuserinteraction: boolean): void
        /** 设置这个URLConnection的allowUserInteraction字段的值 */
        setConnectTimeout(timeout: number): void
        /** 设置打开与此URLConnection引用的资源的通信链接时使用的指定超时值（以毫秒为单位） */
        static setContentHandlerFactory(fac: ContentHandlerFactory): void
        /** 设置应用ContentHandlerFactory的ContentHandlerFactory */
        static setDefaultAllowUserInteraction(defaultallowuserinteraction: boolean): void
        /** 将所有将来的URLConnection对象的allowUserInteraction字段的默认值设置为指定的值 */
        static setDefaultRequestProperty(value: string): void
        /** 已弃用在获得适当的URLConnection实例之后，应该使用实例特定的setRequestProperty方法调用此方法将不起作用 */
        setDefaultUseCaches(defaultusecaches: boolean): void
        /** 在获得适当的URLConnection实例之后，应该使用实例特定的setRequestProperty方法调用此方法将不起作用 */
        setDoInput(doinput: boolean): void
        /** 将useCaches字段的默认值设置为指定值 */
        setDoOutput(dooutput: boolean): void
        /** 设置的值doInput领域本URLConnection指定值 */
        static setFileNameMap(map: FileNameMap): void
        /** 设置的值doOutput领域本URLConnection指定值 */
        setIfModifiedSince(ifmodifiedsince: number): void
        /** 设置FileNameMap */
        setReadTimeout(timeout: number): void
        /** 设置的值ifModifiedSince这个领域URLConnection到指定值 */
        setRequestProperty(value: string): void
        /** 将读取超时设置为指定的超时时间，以毫秒为单位 */
        setUseCaches(usecaches: boolean): void
        /** 设置一般请求属性 */
        toString(): string
      }
      /** HTML表单解码的实用类。 */
      class URLDecoder {}
      /** HTML表单编码的实用类。 */
      class URLEncoder {}
      /** 表示访问由给定网址定义的资源或资源集的权限，以及给定的用户可设置请求方法和请求标头集合的权限。 */
      class URLPermission {}
      /** 抽象类URLStreamHandler是所有流协议处理程序的通用超类。 */
      class URLStreamHandler {}
    }
    namespace nio {
      namespace charset {
        class Charset {}
      }
      namespace file {
        /**  配置如何复制或移动文件的对象 */
        interface CopyOption {}
        /**  一个对象来迭代目录中的条目 */
        interface DirectoryStream<T> {}
        /**  由对象执行的接口，用于确定是否应接受或过滤目录条目 */
        // interface DirectoryStream.Filter<T> {}
        /**  文件访问者 */
        interface FileVisitor<T> {}
        /**  配置如何打开或创建文件的对象 */
        interface OpenOption {}
        /**  可用于在文件系统中定位文件的对象 */
        interface Path {}
        /**  由对路径执行匹配操作的对象实现的接口 */
        interface PathMatcher {}
        /**  A DirectoryStream ，它定义了相对于打开目录定位的文件的操作 */
        interface SecureDirectoryStream<T> {}
        /**  可以注册到手表服务的对象，以便可以 观看更改和事件 */
        interface Watchable {}
        /**  一个事件或一个重复的事件，一个对象注册了一个WatchService */
        interface WatchEvent<T> {}
        /**  一种事件类型，用于识别 */
        // interface WatchEvent.Kind<T> {}
        /**  事件修饰符，用于量化如何Watchable与注册WatchService */
        // interface WatchEvent.Modifier {}
        /**  表示的登记令牌watchable对象与WatchService */
        interface WatchKey {}
        /**  监视注册对象进行更改和事件的监视服务 */
        interface WatchService {}
        /**  该类只包含对文件，目录或其他类型文件进行操作的静态方法 */
        class Files {
          /** 将输入流中的所有字节复制到文件 */
          static copy(input: Packages.java.io.InputStream, target: Path, options: CopyOption[]): number
          /** 将文件中的所有字节复制到输出流 */
          static copy(source: Path, out: Packages.java.io.OutputStream): number
          /** 将文件复制到目标文件 */
          static copy(source: Path, target: Path, options: CopyOption[]): Path
          /** 首先创建所有不存在的父目录来创建目录 */
          static createDirectories(dir: Path): Path
          /** 创建一个新的目录 */
          static createDirectory(dir: Path): Path
          /** 创建一个新的和空的文件，如果该文件已存在失败 */
          static createFile(path: Path): Path
          /** 为现有文件创建新的链接（目录条目） （可选操作） */
          static createLink(link: Path, existing: Path): Path
          /** 创建到目标的符号链接 （可选操作） */
          static createSymbolicLink(link: Path, target: Path): Path
          /** 在指定的目录中创建一个新目录，使用给定的前缀生成其名称 */
          static createTempDirectory(dir: Path, prefix: String): Path
          /** 在默认临时文件目录中创建一个新目录，使用给定的前缀生成其名称 */
          static createTempDirectory(prefix: String): Path
          /** 在指定的目录中创建一个新的空文件，使用给定的前缀和后缀字符串生成其名称 */
          static createTempFile(dir: Path, prefix: String, suffix: String): Path
          /** 在默认临时文件目录中创建一个空文件，使用给定的前缀和后缀生成其名称 */
          static createTempFile(prefix: String, suffix: String): Path
          /** 删除文件 */
          static delete(path: Path): void
          /** 删除文件（如果存在） */
          static deleteIfExists(path: Path): boolean
          /** 测试文件是否存在 */
          // static exists(path: Path, options: LinkOption[]): boolean
          /** 返回一个 Stream ，它通过搜索基于给定起始文件的文件树中的文件来懒惰地填充 Path */
          // static find(start: Path, maxDepth: number, undefined: BiPredicate<Path, matcher: BasicFileAttributes>, options: FileVisitOption[]): Stream<Path>
          /** 读取文件属性的值 */
          // static getAttribute(path: Path, attribute: String, options: LinkOption[]): Object
          /** 返回给定类型的文件属性视图 */
          // static getFileAttributeView(path:java.io.Path, type:java.lang.Class<V>, options: LinkOption[]): <V extends FileAttributeView>V
          /** 返回表示文件所在文件存储区的 FileStore */
          static getFileStore(path: Path): FileStore
          /** 返回文件的上次修改时间 */
          // static getLastModifiedTime(path: Path, options: LinkOption[]): FileTime
          /** 返回文件的所有者 */
          // static getOwner(path: Path, options: LinkOption[]): UserPrincipal
          /** 返回文件的POSIX文件权限 */
          // static getPosixFilePermissions(path: Path, options: LinkOption[]): Set<PosixFilePermission>
          /** 测试文件是否是目录 */
          static isDirectory(path: Path, options: LinkOption[]): boolean
          /** 测试文件是否可执行 */
          static isExecutable(path: Path): boolean
          /** 告知文件是否被 隐藏 */
          static isHidden(path: Path): boolean
          /** 测试文件是否可读 */
          static isReadable(path: Path): boolean
          /** 测试文件是否是具有不透明内容的常规文件 */
          static isRegularFile(path: Path, options: LinkOption[]): boolean
          /** 测试两个路径是否找到相同的文件 */
          static isSameFile(path: Path, path2: Path): boolean
          /** 测试文件是否是符号链接 */
          static isSymbolicLink(path: Path): boolean
          /** 测试文件是否可写 */
          static isWritable(path: Path): boolean
          /** 从 Stream读取文件中的所有行 */
          // static lines(path: Path): Stream<String>
          /** 从文件中读取所有行作为 Stream */
          // static lines(path: Path, cs: Charset): Stream<String>
          /** 返回一个懒惰的填充 Stream ，其元素是 Stream中的条目 */
          // static list(dir: Path): Stream<Path>
          /** 将文件移动或重命名为目标文件 */
          static move(source: Path, target: Path, options: CopyOption[]): Path
          /** 打开一个文件进行阅读，返回一个 BufferedReader以高效的方式从文件读取文本 */
          static newBufferedReader(path: Path): java.io.BufferedReader
          /** 打开一个文件进行阅读，返回一个 BufferedReader ，可以用来以有效的方式从文件读取文本 */
          static newBufferedReader(path: Path, cs: java.nio.charset.Charset): java.io.BufferedReader
          /** 打开或创建一个写入文件，返回一个 BufferedWriter ，可以用来以有效的方式将文本写入文件 */
          static newBufferedWriter(
            path: Path,
            cs: java.nio.charset.Charset,
            options: OpenOption[]
          ): java.io.BufferedWriter
          /** 打开或创建一个写入文件，返回一个 BufferedWriter以高效的方式写入文件 */
          static newBufferedWriter(path: Path, options: OpenOption[]): java.io.BufferedWriter
          /** 打开或创建文件，返回可访问的字节通道以访问该文件 */
          // static newByteChannel(path: Path, options: OpenOption[]): SeekableByteChannel
          /** 打开或创建文件，返回可访问的字节通道以访问该文件 */
          // static newByteChannel(path: Path, extends: Set<?, attrs: FileAttribute<?>[]): SeekableByteChannel
          /** 打开一个目录，返回一个DirectoryStream以遍历目录中的所有条目 */
          static newDirectoryStream(dir: Path): DirectoryStream<Path>
          /** 打开一个目录，返回一个DirectoryStream来迭代目录中的条目 */
          // static newDirectoryStream(dir: Path, super: DirectoryStream.Filter<?): DirectoryStream<Path>
          /** 打开一个目录，返回一个DirectoryStream来迭代目录中的条目 */
          static newDirectoryStream(dir: Path, glob: String): DirectoryStream<Path>
          /** 打开一个文件，返回输入流以从文件中读取 */
          static newInputStream(path: Path, options: OpenOption[]): java.io.InputStream
          /** 打开或创建文件，返回可用于向文件写入字节的输出流 */
          static newOutputStream(path: Path, options: OpenOption[]): java.io.OutputStream
          /** 测试此路径所在的文件是否不存在 */
          static notExists(path: Path, options: LinkOption[]): boolean
          /** 探测文件的内容类型 */
          static probeContentType(path: Path): String
          /** 读取文件中的所有字节 */
          static readAllBytes(path: Path): java.lang.Byte[]
          /** 从文件中读取所有行 */
          // static readAllLines(path: Path): List<String>
          /** 从文件中读取所有行 */
          // static readAllLines(path: Path, cs: java.nio.charset.Charset): java.lang.List<String>
          /** 读取文件的属性作为批量操作 */
          // static readAttributes(path: Path, type: java.lang.Class<>, options: LinkOption[]): <A extends BasicFileAttributes>A
          /** 读取一组文件属性作为批量操作 */
          static readAttributes(path: Path, attributes: String, options: LinkOption[]): Map<String, Object>
          /** 读取符号链接的目标 （可选操作） */
          static readSymbolicLink(link: Path): Path
          /** 设置文件属性的值 */
          static setAttribute(path: Path, attribute: String, value: Object, options: LinkOption[]): Path
          /** 更新文件上次修改的时间属性 */
          // static setLastModifiedTime(path: Path, time: FileTime): Path
          /** 更新文件所有者 */
          // static setOwner(path: Path, owner: UserPrincipal): Path
          /** 设置文件的POSIX权限 */
          // static setPosixFilePermissions(path: Path, perms: Set<PosixFilePermission>): Path
          /** 返回文件的大小（以字节为单位） */
          static size(path: Path): number
          /** 返回一个 Stream ，它通过 Path根据给定的起始文件的文件树懒惰地填充 Path */
          // static walk(start: Path, options: FileVisitOption[]): Stream<Path>
          /** 返回一个 Stream ，它是通过走根据给定的起始文件的文件树懒惰地填充 Path */
          // static walk(start: Path, maxDepth: number, options: FileVisitOption[]): Stream<Path>
          /** 走一个文件树 */
          // static walkFileTree(start: Path, super: FileVisitor<?): Path
          /** 走一个文件树 */
          // static walkFileTree(start: Path, options: Set<FileVisitOption>, maxDepth: number, super: FileVisitor<?): Path
          /** 将字节写入文件 */
          static write(path: Path, bytes: java.lang.Byte[], options: OpenOption[]): Path
          /** 将文本行写入文件 */
          // static write(path: Path, lines: java.lang.Iterable<?, cs: Charset, options: OpenOption[]): Path
          /** 将文本行写入文件 */
          // static write(path: Path, lines: java.lang.Iterable<? extends CharSequence>, options: OpenOption[]): Path
        }
        /**  文件存储 */
        class FileStore {}
        /**  提供文件系统的接口，并且是工厂用于访问文件系统中的文件和其他对象的对象 */
        class FileSystem {}
        /**  文件系统的工厂方法 */
        class FileSystems {}
        /**  用于链接创建操作的 Permission类 */
        class LinkPermission {}
        /**  该类完全由返回一个静态方法Path通过转换路径字符串或URI */
        class Paths {}
        /**  具有默认行为的简单文件访问者访问所有文件并重新抛出I / O错误 */
        class SimpleFileVisitor<T> {}
        /**  定义标准事件种类 */
        class StandardWatchEventKinds {}
        enum FileVisitOption {}
        enum LinkOption {}
      }
      class CharsetEncoder {}
    }
  }
  namespace android {
    namespace graphics {
      /**  */
      class Bitmap {
        constructor()
        static compress(PNG: any, arg1: number, out: java.io.FileOutputStream): void
        static createBitmap(width: number, heidth: number, ARGB_8888: any): Bitmap
        static Config: any
        static createScaledBitmap(bitmap: Bitmap, width: number, height: number, filter: boolean): Bitmap
      }
      /** 从各种来源创建位图对象，包括文件，流和字节数组。  */
      class BitmapFactory {}
      /**  */
      // class BitmapFactory.Options {}
      /** BitmapRegionDecoder可用于从图像中解码矩形区域。  */
      class BitmapRegionDecoder {}
      /** 着色器用于将位图绘制为纹理。  */
      class BitmapShader {}
      /** 这需要一个蒙版，并以指定的半径模糊其边缘。  */
      class BlurMaskFilter {}
      /** 相机实例可用于计算3D变换并生成可应用于例如 Canvas 。  */
      class Camera {}
      /** Canvas类包含“draw”调用。  */
      class Canvas {
        public static getWidth(canvas: Canvas): number
        public static getHeight(canvas: Canvas): number
        public static drawBitmap(canvas: Canvas, bitmap: Bitmap, x: number, y: number, paint: Paint): void
      }
      /** Color类定义了用于创建和转换颜色整数的方法。  */
      class Color {}
      /** 彩色滤镜可以与 Paint一起使用，以修改使用该颜料绘制的每个像素的颜色。  */
      class ColorFilter {}
      /** 4x5矩阵，用于转换位图的颜色和alpha分量。  */
      class ColorMatrix {}
      /** 通过4x5颜色矩阵转换颜色的滤色器。  */
      class ColorMatrixColorFilter {}
      /**  */
      class ComposePathEffect {}
      /** 着色器的一个子类，它返回两个其他着色器的组合，并由 Xfermode子类组合。  */
      class ComposeShader {}
      /**  */
      class CornerPathEffect {}
      /**  */
      class DashPathEffect {}
      /**  */
      class DiscretePathEffect {}
      /** DrawFilter子类可以安装在Canvas中。  */
      class DrawFilter {}
      /**  */
      class EmbossMaskFilter {}
      /**  */
      class ImageFormat {}
      /**  */
      class Interpolator {}
      /**  */
      class LayerRasterizer {}
      /** 可用于模拟简单照明效果的滤色器。  */
      class LightingColorFilter {}
      /**  */
      class LinearGradient {}
      /** MaskFilter是在绘制Alpha通道遮罩之前对其执行转换的对象的基类。  */
      class MaskFilter {}
      /** Matrix类拥有一个3x3矩阵来转换坐标。  */
      class Matrix {}
      /**  */
      class Movie {}
      /** NinePatch类允许在九个或更多节中绘制位图。  */
      class NinePatch {}
      /** 定义一个简单的形状，用于边界图形区域。  */
      class Outline {}
      /** Paint类保存关于如何绘制几何图形，文本和位图的样式和颜色信息。  */
      class Paint {
        setStrokeWidth(arg0: number): void
        setColor(arg0: any): void
        public static create(style: number): Paint
      }
      /** 描述给定文本大小的字体的各种度量的类。  */
      // class Paint.FontMetrics {}
      /** 调用者需要将FontMetrics值设置为整数的便捷方法。  */
      // class Paint.FontMetricsInt {}
      /**  */
      class PaintFlagsDrawFilter {}
      /** Path类封装了由直线段，二次曲线和三次曲线组成的复合（多轮廓）几何路径。  */
      class Path {}
      /**  */
      class PathDashPathEffect {}
      /** PathEffect是Paint中对象的基类，它在被绘制矩阵转换并绘制之前影响绘制基元的几何图形。  */
      class PathEffect {}
      /**  */
      class PathMeasure {}
      /** 一张图片记录绘画调用（通过beginRecording返回的画布），然后可以将它们回放到画布中（通过 draw(Canvas)或 drawPicture(Picture) ）。对于大多数内容（例如  */
      class Picture {}
      /**  */
      class PixelFormat {}
      /** 点保存两个整数坐标  */
      class Point {}
      /** PointF保存两个浮点坐标  */
      class PointF {}
      /**  */
      class PorterDuff {}
      /** 一种颜色过滤器，可用于使用单一颜色和特定颜色为源像素着色 Porter-Duff composite mode 。  */
      class PorterDuffColorFilter {}
      /**  */
      class PorterDuffXfermode {}
      /**  */
      class RadialGradient {}
      /**  */
      class Rasterizer {}
      /** Rect包含四个矩形的整数坐标。  */
      class Rect {}
      /** RectF为矩形保存四个浮点坐标。  */
      class RectF {}
      /**  */
      class Region {}
      /**  */
      class RegionIterator {}
      /** 着色器是绘制过程中返回水平跨度颜色的对象的基础类。  */
      class Shader {}
      /**  */
      class SumPathEffect {}
      /** 从图像流中捕获帧作为OpenGL ES纹理。  */
      class SurfaceTexture {}
      /**  */
      class SweepGradient {}
      /** 字体类指定字体的字体和内在样式。  */
      class Typeface {}
      /** Xfermode是被调用来在绘图管道中实现自定义“传输模式”的对象的基类。  */
      class Xfermode {}
      /** YuvImage包含YUV数据并提供了一种将YUV数据的区域压缩为Jpeg的方法。  */
      class YuvImage {}
    }
    namespace database {
      abstract class Cursor {
        public getColumnIndex(columnName: string): number
        public getColumnNames(): string[]
        public getString(columnName: any): string
        public getInt(columnName: string): number
        public getDouble(columnName: string): number
        public getBlob(columnName: string): number[]
        public moveToNext(): boolean
        public close(): void
      }
      namespace sqlite {
        class SQLiteCursor extends Cursor {
          public getDatabase(): SQLiteDatabase
        }
        interface CursorFactory {
          // newCursor(db: SQLiteDatabase, masterQuery: SQLiteCursorDriver, editTable: string, query: SQLiteQuery): Cursor
        }
        interface SQLiteCursorDriver {
          query(
            db: SQLiteDatabase,
            projectionIn: string[],
            selection: string,
            selectionArgs: string[],
            groupBy: string,
            having: string,
            sortOrder: string,
            limit: string
          ): Cursor
        }
        class SQLiteDatabase {
          constructor(context: string, name: string, factory: CursorFactory, version: number)
          create(): SQLiteDatabase
          createInMemory(): SQLiteDatabase
          delete(table: string, whereClause: string, whereArgs: Array<string>): number
          deleteDatabase(file: java.io.File): boolean
          execSQL(sql: string): void
          execSQL(sql: string, bindArgs: Object): void
          getPath(): string
          getVersion(): number
          insert(table: string, nullColumnHack: string | null, content: Map<string, any>): number
          static openOrCreateDatabase(file: java.io.File, factory?: CursorFactory): SQLiteDatabase
          static openOrCreateDatabase(path: string, factory?: CursorFactory): SQLiteDatabase
          // query(
          //   table: string,
          //   columns: Array<string> | null,
          //   selection: string | null,
          //   selectionArgs: Array<string>,
          //   groupBy: string | null,
          //   having: string | null,
          //   orderBy: string | null,
          //   limit: string | null
          // ): Cursor
          rawQuery(sql: string, selectionArgs: Array<string>, cancellationSignal?: string): Cursor
          update(table: string, values: Map<string, any>, whereClause: string | null, whereArgs: Array<string>): number
        }
      }
    }
  }
}
