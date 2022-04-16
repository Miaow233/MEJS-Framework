/*
 * Project: java2typescript - https://github.com/bsorrentino/java2typescript
 *
 * Author: bsorrentino
 *
 * TYPESCRIPT EXPORTED DECLARATIONS
 *
 */

interface SocketImplStatic {
  readonly class: any
  new (): java.net.SocketImpl
}

export const SocketImpl: SocketImplStatic = Java.type('java.net.SocketImpl')

interface ArraysStatic {
  readonly class: any
  asList<T>(...arg0: T[]): java.util.List<T>
  binarySearch(arg0: [int], arg1: int): int
  binarySearch(arg0: [int], arg1: int, arg2: int, arg3: int): int
  binarySearch(arg0: [double], arg1: double): int
  binarySearch(arg0: [any /*short*/], arg1: any /*short*/): int
  binarySearch(arg0: [any /*short*/], arg1: int, arg2: int, arg3: any /*short*/): int
  binarySearch(arg0: [long], arg1: int, arg2: int, arg3: long): int
  binarySearch<T>(arg0: [T], arg1: T, arg2: any /*java.util.Comparator*/): int
  binarySearch(arg0: bytearray, arg1: any /*byte*/): int
  binarySearch(arg0: [long], arg1: long): int
  binarySearch(arg0: [java.lang.Object], arg1: java.lang.Object): int
  binarySearch(arg0: [float], arg1: int, arg2: int, arg3: float): int
  binarySearch(arg0: [float], arg1: float): int
  binarySearch(arg0: [double], arg1: int, arg2: int, arg3: double): int
  binarySearch<T>(arg0: [T], arg1: int, arg2: int, arg3: T, arg4: any /*java.util.Comparator*/): int
  binarySearch(arg0: [java.lang.Object], arg1: int, arg2: int, arg3: java.lang.Object): int
  binarySearch(arg0: bytearray, arg1: int, arg2: int, arg3: any /*byte*/): int
  binarySearch(arg0: chararray, arg1: any /*char*/): int
  binarySearch(arg0: chararray, arg1: int, arg2: int, arg3: any /*char*/): int
  copyOf(arg0: chararray, arg1: int): chararray
  copyOf(arg0: [float], arg1: int): [float]
  copyOf(arg0: [long], arg1: int): [long]
  copyOf(arg0: [double], arg1: int): [double]
  copyOf(arg0: [int], arg1: int): [int]
  copyOf(arg0: [boolean], arg1: int): [boolean]
  copyOf<T>(arg0: [T], arg1: int): [T]
  copyOf<T, U>(arg0: [U], arg1: int, arg2: java.lang.Class<[T]>): [T]
  copyOf(arg0: bytearray, arg1: int): bytearray
  copyOf(arg0: [any /*short*/], arg1: int): [any /*short*/]
  copyOfRange<T, U>(arg0: [U], arg1: int, arg2: int, arg3: java.lang.Class<[T]>): [T]
  copyOfRange(arg0: bytearray, arg1: int, arg2: int): bytearray
  copyOfRange(arg0: [any /*short*/], arg1: int, arg2: int): [any /*short*/]
  copyOfRange<T>(arg0: [T], arg1: int, arg2: int): [T]
  copyOfRange(arg0: [boolean], arg1: int, arg2: int): [boolean]
  copyOfRange(arg0: [double], arg1: int, arg2: int): [double]
  copyOfRange(arg0: [float], arg1: int, arg2: int): [float]
  copyOfRange(arg0: chararray, arg1: int, arg2: int): chararray
  copyOfRange(arg0: [int], arg1: int, arg2: int): [int]
  copyOfRange(arg0: [long], arg1: int, arg2: int): [long]
  deepEquals(arg0: [java.lang.Object], arg1: [java.lang.Object]): boolean
  deepHashCode(arg0: [java.lang.Object]): int
  deepToString(arg0: [java.lang.Object]): string
  equals(arg0: bytearray, arg1: bytearray): boolean
  equals(arg0: [boolean], arg1: [boolean]): boolean
  equals(arg0: [double], arg1: [double]): boolean
  equals(arg0: [float], arg1: [float]): boolean
  equals(arg0: [java.lang.Object], arg1: [java.lang.Object]): boolean
  equals(arg0: [any /*short*/], arg1: [any /*short*/]): boolean
  equals(arg0: [int], arg1: [int]): boolean
  equals(arg0: [long], arg1: [long]): boolean
  equals(arg0: chararray, arg1: chararray): boolean
  fill(arg0: [java.lang.Object], arg1: java.lang.Object): void
  fill(arg0: [double], arg1: int, arg2: int, arg3: double): void
  fill(arg0: [boolean], arg1: boolean): void
  fill(arg0: [any /*short*/], arg1: int, arg2: int, arg3: any /*short*/): void
  fill(arg0: [int], arg1: int, arg2: int, arg3: int): void
  fill(arg0: [float], arg1: float): void
  fill(arg0: [long], arg1: int, arg2: int, arg3: long): void
  fill(arg0: [double], arg1: double): void
  fill(arg0: [long], arg1: long): void
  fill(arg0: [boolean], arg1: int, arg2: int, arg3: boolean): void
  fill(arg0: [java.lang.Object], arg1: int, arg2: int, arg3: java.lang.Object): void
  fill(arg0: chararray, arg1: int, arg2: int, arg3: any /*char*/): void
  fill(arg0: bytearray, arg1: int, arg2: int, arg3: any /*byte*/): void
  fill(arg0: [float], arg1: int, arg2: int, arg3: float): void
  fill(arg0: [any /*short*/], arg1: any /*short*/): void
  fill(arg0: chararray, arg1: any /*char*/): void
  fill(arg0: bytearray, arg1: any /*byte*/): void
  fill(arg0: [int], arg1: int): void
  hashCode(arg0: [boolean]): int
  hashCode(arg0: bytearray): int
  hashCode(arg0: [float]): int
  hashCode(arg0: [double]): int
  hashCode(arg0: [long]): int
  hashCode(arg0: [int]): int
  hashCode(arg0: [any /*short*/]): int
  hashCode(arg0: chararray): int
  hashCode(arg0: [java.lang.Object]): int
  parallelPrefix(arg0: [double], arg1: any /*java.util.function.DoubleBinaryOperator*/): void
  parallelPrefix(arg0: [double], arg1: int, arg2: int, arg3: any /*java.util.function.DoubleBinaryOperator*/): void
  parallelPrefix(arg0: [int], arg1: any /*java.util.function.IntBinaryOperator*/): void
  parallelPrefix(arg0: [long], arg1: any /*java.util.function.LongBinaryOperator*/): void
  parallelPrefix(arg0: [long], arg1: int, arg2: int, arg3: any /*java.util.function.LongBinaryOperator*/): void
  parallelPrefix<T>(arg0: [T], arg1: any /*java.util.function.BinaryOperator*/): void
  parallelPrefix<T>(arg0: [T], arg1: int, arg2: int, arg3: any /*java.util.function.BinaryOperator*/): void
  parallelPrefix(arg0: [int], arg1: int, arg2: int, arg3: any /*java.util.function.IntBinaryOperator*/): void
  parallelSetAll(arg0: [double], arg1: any /*java.util.function.IntToDoubleFunction*/): void
  parallelSetAll(arg0: [long], arg1: any /*java.util.function.IntToLongFunction*/): void
  parallelSetAll(arg0: [int], arg1: any /*java.util.function.IntUnaryOperator*/): void
  parallelSetAll<T>(arg0: [T], arg1: any /*java.util.function.IntFunction*/): void
  parallelSort(arg0: [float]): void
  parallelSort(arg0: [long], arg1: int, arg2: int): void
  parallelSort(arg0: [long]): void
  parallelSort<T>(arg0: [T], arg1: any /*java.util.Comparator*/): void
  parallelSort(arg0: bytearray): void
  parallelSort(arg0: [int], arg1: int, arg2: int): void
  parallelSort(arg0: [float], arg1: int, arg2: int): void
  parallelSort(arg0: [double]): void
  parallelSort(arg0: bytearray, arg1: int, arg2: int): void
  parallelSort<T>(arg0: [T]): void
  parallelSort(arg0: [any /*short*/]): void
  parallelSort<T>(arg0: [T], arg1: int, arg2: int, arg3: any /*java.util.Comparator*/): void
  parallelSort(arg0: chararray, arg1: int, arg2: int): void
  parallelSort(arg0: [double], arg1: int, arg2: int): void
  parallelSort(arg0: [any /*short*/], arg1: int, arg2: int): void
  parallelSort<T>(arg0: [T], arg1: int, arg2: int): void
  parallelSort(arg0: [int]): void
  parallelSort(arg0: chararray): void
  setAll(arg0: [double], arg1: any /*java.util.function.IntToDoubleFunction*/): void
  setAll<T>(arg0: [T], arg1: any /*java.util.function.IntFunction*/): void
  setAll(arg0: [long], arg1: any /*java.util.function.IntToLongFunction*/): void
  setAll(arg0: [int], arg1: any /*java.util.function.IntUnaryOperator*/): void
  sort(arg0: [any /*short*/]): void
  sort(arg0: [long]): void
  sort(arg0: [long], arg1: int, arg2: int): void
  sort(arg0: bytearray, arg1: int, arg2: int): void
  sort(arg0: [float]): void
  sort(arg0: [float], arg1: int, arg2: int): void
  sort(arg0: [java.lang.Object], arg1: int, arg2: int): void
  sort(arg0: [java.lang.Object]): void
  sort<T>(arg0: [T], arg1: int, arg2: int, arg3: any /*java.util.Comparator*/): void
  sort(arg0: [double], arg1: int, arg2: int): void
  sort(arg0: chararray): void
  sort(arg0: chararray, arg1: int, arg2: int): void
  sort(arg0: [int], arg1: int, arg2: int): void
  sort(arg0: bytearray): void
  sort(arg0: [any /*short*/], arg1: int, arg2: int): void
  sort(arg0: [double]): void
  sort<T>(arg0: [T], arg1: any /*java.util.Comparator*/): void
  sort(arg0: [int]): void
  spliterator(arg0: [long], arg1: int, arg2: int): any /*java.util.Spliterator$OfLong*/
  spliterator(arg0: [long]): any /*java.util.Spliterator$OfLong*/
  spliterator(arg0: [int], arg1: int, arg2: int): any /*java.util.Spliterator$OfInt*/
  spliterator(arg0: [double]): any /*java.util.Spliterator$OfDouble*/
  spliterator(arg0: [double], arg1: int, arg2: int): any /*java.util.Spliterator$OfDouble*/
  spliterator<T>(arg0: [T]): any /*java.util.Spliterator*/
  spliterator<T>(arg0: [T], arg1: int, arg2: int): any /*java.util.Spliterator*/
  spliterator(arg0: [int]): any /*java.util.Spliterator$OfInt*/
  stream(arg0: [int]): any /*java.util.stream.IntStream*/
  stream<T>(arg0: [T], arg1: int, arg2: int): java.util.stream.Stream<T>
  stream<T>(arg0: [T]): java.util.stream.Stream<T>
  stream(arg0: [double]): any /*java.util.stream.DoubleStream*/
  stream(arg0: [int], arg1: int, arg2: int): any /*java.util.stream.IntStream*/
  stream(arg0: [long]): any /*java.util.stream.LongStream*/
  stream(arg0: [long], arg1: int, arg2: int): any /*java.util.stream.LongStream*/
  stream(arg0: [double], arg1: int, arg2: int): any /*java.util.stream.DoubleStream*/
  toString(arg0: [boolean]): string
  toString(arg0: bytearray): string
  toString(arg0: [float]): string
  toString(arg0: [double]): string
  toString(arg0: [long]): string
  toString(arg0: [int]): string
  toString(arg0: [any /*short*/]): string
  toString(arg0: chararray): string
  toString(arg0: [java.lang.Object]): string
}

export const Arrays: ArraysStatic = Java.type('java.util.Arrays')

interface SocketAddressStatic {
  readonly class: any
  new (): java.net.SocketAddress
}

export const SocketAddress: SocketAddressStatic = Java.type('java.net.SocketAddress')

interface FloatBufferStatic {
  readonly class: any
  allocate(arg0: int): java.nio.FloatBuffer
  wrap(arg0: [float]): java.nio.FloatBuffer
  wrap(arg0: [float], arg1: int, arg2: int): java.nio.FloatBuffer
}

export const FloatBuffer: FloatBufferStatic = Java.type('java.nio.FloatBuffer')

interface SystemStatic {
  readonly class: any
  arraycopy(arg0: java.lang.Object, arg1: int, arg2: java.lang.Object, arg3: int, arg4: int): void
  clearProperty(arg0: string): string
  console(): any /*java.io.Console*/
  currentTimeMillis(): long
  exit(arg0: int): void
  gc(): void
  getProperties(): any /*java.util.Properties*/
  getProperty(arg0: string): string
  getProperty(arg0: string, arg1: string): string
  getSecurityManager(): java.lang.SecurityManager
  getenv(arg0: string): string
  getenv(): java.util.Map<string, string>
  identityHashCode(arg0: java.lang.Object): int
  inheritedChannel(): any /*java.nio.channels.Channel*/
  lineSeparator(): string
  load(arg0: string): void
  loadLibrary(arg0: string): void
  mapLibraryName(arg0: string): string
  nanoTime(): long
  runFinalization(): void
  runFinalizersOnExit(arg0: boolean): void
  setErr(arg0: any /*java.io.PrintStream*/): void
  setIn(arg0: java.io.InputStream): void
  setOut(arg0: any /*java.io.PrintStream*/): void
  setProperties(arg0: any /*java.util.Properties*/): void
  setProperty(arg0: string, arg1: string): string
  setSecurityManager(arg0: java.lang.SecurityManager): void
}

export const System: SystemStatic = Java.type('java.lang.System')

interface URLStatic {
  readonly class: any
  new (arg0: java.net.URL, arg1: string, arg2: java.net.URLStreamHandler): java.net.URL
  new (arg0: java.net.URL, arg1: string): java.net.URL
  new (arg0: string): java.net.URL
  new (arg0: string, arg1: string, arg2: int, arg3: string): java.net.URL
  new (arg0: string, arg1: string, arg2: string): java.net.URL
  new (arg0: string, arg1: string, arg2: int, arg3: string, arg4: java.net.URLStreamHandler): java.net.URL
  setURLStreamHandlerFactory(arg0: java.net.URLStreamHandlerFactory): void
}

export const URL: URLStatic = Java.type('java.net.URL')

interface ThreadGroupStatic {
  readonly class: any
  new (arg0: java.lang.ThreadGroup, arg1: string): java.lang.ThreadGroup
  new (arg0: string): java.lang.ThreadGroup
}

export const ThreadGroup: ThreadGroupStatic = Java.type('java.lang.ThreadGroup')

interface ByteBufferStatic {
  readonly class: any
  allocate(arg0: int): java.nio.ByteBuffer
  allocateDirect(arg0: int): java.nio.ByteBuffer
  wrap(arg0: bytearray): java.nio.ByteBuffer
  wrap(arg0: bytearray, arg1: int, arg2: int): java.nio.ByteBuffer
}

export const ByteBuffer: ByteBufferStatic = Java.type('java.nio.ByteBuffer')

interface InetAddressStatic {
  readonly class: any
  getAllByName(arg0: string): [java.net.InetAddress]
  getByAddress(arg0: string, arg1: bytearray): java.net.InetAddress
  getByAddress(arg0: bytearray): java.net.InetAddress
  getByName(arg0: string): java.net.InetAddress
  getLocalHost(): java.net.InetAddress
  getLoopbackAddress(): java.net.InetAddress
}

export const InetAddress: InetAddressStatic = Java.type('java.net.InetAddress')

interface ProxySelectorStatic {
  readonly class: any
  new (): java.net.ProxySelector
  getDefault(): java.net.ProxySelector
  setDefault(arg0: java.net.ProxySelector): void
}

export const ProxySelector: ProxySelectorStatic = Java.type('java.net.ProxySelector')

interface ServerSocketStatic {
  readonly class: any
  new (arg0: int, arg1: int, arg2: java.net.InetAddress): java.net.ServerSocket
  new (arg0: int, arg1: int): java.net.ServerSocket
  new (arg0: int): java.net.ServerSocket
  new (): java.net.ServerSocket
  setSocketFactory(arg0: java.net.SocketImplFactory): void
}

export const ServerSocket: ServerSocketStatic = Java.type('java.net.ServerSocket')

interface IntBufferStatic {
  readonly class: any
  allocate(arg0: int): java.nio.IntBuffer
  wrap(arg0: [int]): java.nio.IntBuffer
  wrap(arg0: [int], arg1: int, arg2: int): java.nio.IntBuffer
}

export const IntBuffer: IntBufferStatic = Java.type('java.nio.IntBuffer')

interface ProxyStatic {
  readonly class: any
  new (arg0: any /*java.net.Proxy$Type*/, arg1: java.net.SocketAddress): java.net.Proxy
}

export const Proxy: ProxyStatic = Java.type('java.net.Proxy')

interface FilePermissionStatic {
  readonly class: any
  new (arg0: string, arg1: string): java.io.FilePermission
}

export const FilePermission: FilePermissionStatic = Java.type('java.io.FilePermission')

interface ThreadStatic {
  readonly class: any
  new (arg0: any /*java.lang.Runnable*/): java.lang.Thread
  new (): java.lang.Thread
  new (arg0: java.lang.ThreadGroup, arg1: any /*java.lang.Runnable*/, arg2: string): java.lang.Thread
  new (arg0: any /*java.lang.Runnable*/, arg1: string): java.lang.Thread
  new (arg0: java.lang.ThreadGroup, arg1: string): java.lang.Thread
  new (arg0: string): java.lang.Thread
  new (arg0: java.lang.ThreadGroup, arg1: any /*java.lang.Runnable*/): java.lang.Thread
  new (arg0: java.lang.ThreadGroup, arg1: any /*java.lang.Runnable*/, arg2: string, arg3: long): java.lang.Thread
  activeCount(): int
  currentThread(): java.lang.Thread
  dumpStack(): void
  enumerate(arg0: [java.lang.Thread]): int
  getAllStackTraces(): java.util.Map<java.lang.Thread, [any /*java.lang.StackTraceElement*/]>
  getDefaultUncaughtExceptionHandler(): any /*java.lang.Thread$UncaughtExceptionHandler*/
  holdsLock(arg0: java.lang.Object): boolean
  interrupted(): boolean
  setDefaultUncaughtExceptionHandler(arg0: any /*java.lang.Thread$UncaughtExceptionHandler*/): void
  sleep(arg0: long, arg1: int): void
  sleep(arg0: long): void
  yield(): void
}

export const Thread: ThreadStatic = Java.type('java.lang.Thread')

interface MapStatic {
  readonly class: any
}

export const Map: MapStatic = Java.type('java.util.Map')

interface SocketPermissionStatic {
  readonly class: any
  new (arg0: string, arg1: string): java.net.SocketPermission
}

export const SocketPermission: SocketPermissionStatic = Java.type('java.net.SocketPermission')

interface PrintWriterStatic {
  readonly class: any
  new (arg0: java.io.Writer): java.io.PrintWriter
  new (arg0: java.io.File, arg1: string): java.io.PrintWriter
  new (arg0: string): java.io.PrintWriter
  new (arg0: java.io.OutputStream, arg1: boolean): java.io.PrintWriter
  new (arg0: java.io.OutputStream): java.io.PrintWriter
  new (arg0: java.io.Writer, arg1: boolean): java.io.PrintWriter
  new (arg0: java.io.File): java.io.PrintWriter
  new (arg0: string, arg1: string): java.io.PrintWriter
}

export const PrintWriter: PrintWriterStatic = Java.type('java.io.PrintWriter')

interface VoidStatic {
  readonly class: any
}

export const Void: VoidStatic = Java.type('java.lang.Void')

interface ThreadLocalStatic {
  readonly class: any
  new <T>(): java.lang.ThreadLocal<T>
  withInitial<S>(arg0: any /*java.util.function.Supplier*/): java.lang.ThreadLocal<S>
}

export const ThreadLocal: ThreadLocalStatic = Java.type('java.lang.ThreadLocal')

interface CompilerStatic {
  readonly class: any
  command(arg0: java.lang.Object): java.lang.Object
  compileClass(arg0: java.lang.Class<java.lang.Object>): boolean
  compileClasses(arg0: string): boolean
  disable(): void
  enable(): void
}

export const Compiler: CompilerStatic = Java.type('java.lang.Compiler')

interface CharBufferStatic {
  readonly class: any
  allocate(arg0: int): java.nio.CharBuffer
  wrap(arg0: any /*java.lang.CharSequence*/): java.nio.CharBuffer
  wrap(arg0: any /*java.lang.CharSequence*/, arg1: int, arg2: int): java.nio.CharBuffer
  wrap(arg0: chararray, arg1: int, arg2: int): java.nio.CharBuffer
  wrap(arg0: chararray): java.nio.CharBuffer
}

export const CharBuffer: CharBufferStatic = Java.type('java.nio.CharBuffer')

interface AuthenticatorStatic {
  readonly class: any
  new (): java.net.Authenticator
  requestPasswordAuthentication(
    arg0: string,
    arg1: java.net.InetAddress,
    arg2: int,
    arg3: string,
    arg4: string,
    arg5: string,
    arg6: java.net.URL,
    arg7: any /*java.net.Authenticator$RequestorType*/
  ): any /*java.net.PasswordAuthentication*/
  requestPasswordAuthentication(
    arg0: string,
    arg1: java.net.InetAddress,
    arg2: int,
    arg3: string,
    arg4: string,
    arg5: string
  ): any /*java.net.PasswordAuthentication*/
  requestPasswordAuthentication(
    arg0: java.net.InetAddress,
    arg1: int,
    arg2: string,
    arg3: string,
    arg4: string
  ): any /*java.net.PasswordAuthentication*/
  setDefault(arg0: java.net.Authenticator): void
}

export const Authenticator: AuthenticatorStatic = Java.type('java.net.Authenticator')

interface CollectionStatic {
  readonly class: any
}

export const Collection: CollectionStatic = Java.type('java.util.Collection')

interface NetworkInterfaceStatic {
  readonly class: any
  getByIndex(arg0: int): java.net.NetworkInterface
  getByInetAddress(arg0: java.net.InetAddress): java.net.NetworkInterface
  getByName(arg0: string): java.net.NetworkInterface
  getNetworkInterfaces(): any /*java.util.Enumeration*/
}

export const NetworkInterface: NetworkInterfaceStatic = Java.type('java.net.NetworkInterface')

interface SetStatic {
  readonly class: any
}

export const Set: SetStatic = Java.type('java.util.Set')

interface ReaderStatic {
  readonly class: any
}

export const Reader: ReaderStatic = Java.type('java.io.Reader')

interface SocketImplFactoryStatic {
  readonly class: any
}

export const SocketImplFactory: SocketImplFactoryStatic = Java.type('java.net.SocketImplFactory')

interface URLStreamHandlerFactoryStatic {
  readonly class: any
}

export const URLStreamHandlerFactory: URLStreamHandlerFactoryStatic = Java.type('java.net.URLStreamHandlerFactory')

interface InetSocketAddressStatic {
  readonly class: any
  new (arg0: string, arg1: int): java.net.InetSocketAddress
  new (arg0: java.net.InetAddress, arg1: int): java.net.InetSocketAddress
  new (arg0: int): java.net.InetSocketAddress
  createUnresolved(arg0: string, arg1: int): java.net.InetSocketAddress
}

export const InetSocketAddress: InetSocketAddressStatic = Java.type('java.net.InetSocketAddress')

interface CollectorsStatic {
  readonly class: any
  averagingDouble(arg0: any /*java.util.function.ToDoubleFunction*/): any /*java.util.stream.Collector*/
  averagingInt(arg0: any /*java.util.function.ToIntFunction*/): any /*java.util.stream.Collector*/
  averagingLong(arg0: any /*java.util.function.ToLongFunction*/): any /*java.util.stream.Collector*/
  collectingAndThen(
    arg0: any /*java.util.stream.Collector*/,
    arg1: any /*java.util.function.Function*/
  ): any /*java.util.stream.Collector*/
  counting(): any /*java.util.stream.Collector*/
  groupingBy(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Supplier*/,
    arg2: any /*java.util.stream.Collector*/
  ): any /*java.util.stream.Collector*/
  groupingBy(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.stream.Collector*/
  ): any /*java.util.stream.Collector*/
  groupingBy(arg0: any /*java.util.function.Function*/): any /*java.util.stream.Collector*/
  groupingByConcurrent(arg0: any /*java.util.function.Function*/): any /*java.util.stream.Collector*/
  groupingByConcurrent(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.stream.Collector*/
  ): any /*java.util.stream.Collector*/
  groupingByConcurrent(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Supplier*/,
    arg2: any /*java.util.stream.Collector*/
  ): any /*java.util.stream.Collector*/
  joining(arg0: any /*java.lang.CharSequence*/): any /*java.util.stream.Collector*/
  joining(
    arg0: any /*java.lang.CharSequence*/,
    arg1: any /*java.lang.CharSequence*/,
    arg2: any /*java.lang.CharSequence*/
  ): any /*java.util.stream.Collector*/
  joining(): any /*java.util.stream.Collector*/
  mapping(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.stream.Collector*/
  ): any /*java.util.stream.Collector*/
  maxBy(arg0: any /*java.util.Comparator*/): any /*java.util.stream.Collector*/
  minBy(arg0: any /*java.util.Comparator*/): any /*java.util.stream.Collector*/
  partitioningBy(
    arg0: any /*java.util.function.Predicate*/,
    arg1: any /*java.util.stream.Collector*/
  ): any /*java.util.stream.Collector*/
  partitioningBy(arg0: any /*java.util.function.Predicate*/): any /*java.util.stream.Collector*/
  reducing<U>(
    arg0: U,
    arg1: any /*java.util.function.Function*/,
    arg2: any /*java.util.function.BinaryOperator*/
  ): any /*java.util.stream.Collector*/
  reducing(arg0: any /*java.util.function.BinaryOperator*/): any /*java.util.stream.Collector*/
  reducing<T>(arg0: T, arg1: any /*java.util.function.BinaryOperator*/): any /*java.util.stream.Collector*/
  summarizingDouble(arg0: any /*java.util.function.ToDoubleFunction*/): any /*java.util.stream.Collector*/
  summarizingInt(arg0: any /*java.util.function.ToIntFunction*/): any /*java.util.stream.Collector*/
  summarizingLong(arg0: any /*java.util.function.ToLongFunction*/): any /*java.util.stream.Collector*/
  summingDouble(arg0: any /*java.util.function.ToDoubleFunction*/): any /*java.util.stream.Collector*/
  summingInt(arg0: any /*java.util.function.ToIntFunction*/): any /*java.util.stream.Collector*/
  summingLong(arg0: any /*java.util.function.ToLongFunction*/): any /*java.util.stream.Collector*/
  toCollection(arg0: any /*java.util.function.Supplier*/): any /*java.util.stream.Collector*/
  toConcurrentMap(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Function*/,
    arg2: any /*java.util.function.BinaryOperator*/,
    arg3: any /*java.util.function.Supplier*/
  ): any /*java.util.stream.Collector*/
  toConcurrentMap(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Function*/,
    arg2: any /*java.util.function.BinaryOperator*/
  ): any /*java.util.stream.Collector*/
  toConcurrentMap(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Function*/
  ): any /*java.util.stream.Collector*/
  toList(): any /*java.util.stream.Collector*/
  toMap(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Function*/,
    arg2: any /*java.util.function.BinaryOperator*/,
    arg3: any /*java.util.function.Supplier*/
  ): any /*java.util.stream.Collector*/
  toMap(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Function*/
  ): any /*java.util.stream.Collector*/
  toMap(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Function*/,
    arg2: any /*java.util.function.BinaryOperator*/
  ): any /*java.util.stream.Collector*/
  toSet(): any /*java.util.stream.Collector*/
}

export const Collectors: CollectorsStatic = Java.type('java.util.stream.Collectors')

interface FileSystemStatic {
  readonly class: any
}

export const FileSystem: FileSystemStatic = Java.type('java.io.FileSystem')

interface ByteOrderStatic {
  readonly class: any
  nativeOrder(): java.nio.ByteOrder
}

export const ByteOrder: ByteOrderStatic = Java.type('java.nio.ByteOrder')

interface URLStreamHandlerStatic {
  readonly class: any
  new (): java.net.URLStreamHandler
}

export const URLStreamHandler: URLStreamHandlerStatic = Java.type('java.net.URLStreamHandler')

interface ListStatic {
  readonly class: any
}

export const List: ListStatic = Java.type('java.util.List')

interface StreamStatic {
  readonly class: any
  builder(): any /*java.util.stream.Stream$Builder*/
  concat<T>(arg0: java.util.stream.Stream<T>, arg1: java.util.stream.Stream<T>): java.util.stream.Stream<T>
  empty<T>(): java.util.stream.Stream<T>
  generate<T>(arg0: any /*java.util.function.Supplier*/): java.util.stream.Stream<T>
  iterate<T>(arg0: T, arg1: any /*java.util.function.UnaryOperator*/): java.util.stream.Stream<T>
  of<T>(...arg0: T[]): java.util.stream.Stream<T>
  of<T>(arg0: T): java.util.stream.Stream<T>
}

export const Stream: StreamStatic = Java.type('java.util.stream.Stream')

interface CacheRequestStatic {
  readonly class: any
  new (): java.net.CacheRequest
}

export const CacheRequest: CacheRequestStatic = Java.type('java.net.CacheRequest')

interface WriterStatic {
  readonly class: any
}

export const Writer: WriterStatic = Java.type('java.io.Writer')

interface OptionalStatic {
  readonly class: any
  empty<T>(): java.util.Optional<T>
  of<T>(arg0: T): java.util.Optional<T>
  ofNullable<T>(arg0: T): java.util.Optional<T>
}

export const Optional: OptionalStatic = Java.type('java.util.Optional')

interface StringBuilderStatic {
  readonly class: any
  new (arg0: any /*java.lang.CharSequence*/): java.lang.StringBuilder
  new (arg0: string): java.lang.StringBuilder
  new (arg0: int): java.lang.StringBuilder
  new (): java.lang.StringBuilder
}

export const StringBuilder: StringBuilderStatic = Java.type('java.lang.StringBuilder')

interface ClassLoaderStatic {
  readonly class: any
  getSystemClassLoader(): java.lang.ClassLoader
  getSystemResource(arg0: string): java.net.URL
  getSystemResourceAsStream(arg0: string): java.io.InputStream
  getSystemResources(arg0: string): any /*java.util.Enumeration*/
}

export const ClassLoader: ClassLoaderStatic = Java.type('java.lang.ClassLoader')

interface DatagramPacketStatic {
  readonly class: any
  new (arg0: bytearray, arg1: int, arg2: java.net.SocketAddress): java.net.DatagramPacket
  new (arg0: bytearray, arg1: int, arg2: java.net.InetAddress, arg3: int): java.net.DatagramPacket
  new (arg0: bytearray, arg1: int, arg2: int, arg3: java.net.SocketAddress): java.net.DatagramPacket
  new (arg0: bytearray, arg1: int, arg2: int): java.net.DatagramPacket
  new (arg0: bytearray, arg1: int): java.net.DatagramPacket
  new (arg0: bytearray, arg1: int, arg2: int, arg3: java.net.InetAddress, arg4: int): java.net.DatagramPacket
}

export const DatagramPacket: DatagramPacketStatic = Java.type('java.net.DatagramPacket')

interface ThrowableStatic {
  readonly class: any
  new (arg0: java.lang.Throwable): java.lang.Throwable
  new (arg0: string, arg1: java.lang.Throwable): java.lang.Throwable
  new (arg0: string): java.lang.Throwable
  new (): java.lang.Throwable
}

export const Throwable: ThrowableStatic = Java.type('java.lang.Throwable')

interface FilenameFilterStatic {
  readonly class: any
  new (arg0: java.io.FilenameFilter): java.io.FilenameFilter
}

export const FilenameFilter: FilenameFilterStatic = Java.type('java.io.FilenameFilter')

interface SocketOptionsStatic {
  readonly class: any
}

export const SocketOptions: SocketOptionsStatic = Java.type('java.net.SocketOptions')

interface SocketStatic {
  readonly class: any
  new (arg0: java.net.InetAddress, arg1: int): java.net.Socket
  new (arg0: string, arg1: int, arg2: java.net.InetAddress, arg3: int): java.net.Socket
  new (arg0: java.net.InetAddress, arg1: int, arg2: java.net.InetAddress, arg3: int): java.net.Socket
  new (arg0: string, arg1: int, arg2: boolean): java.net.Socket
  new (arg0: java.net.InetAddress, arg1: int, arg2: boolean): java.net.Socket
  new (): java.net.Socket
  new (arg0: java.net.Proxy): java.net.Socket
  new (arg0: string, arg1: int): java.net.Socket
  setSocketImplFactory(arg0: java.net.SocketImplFactory): void
}

export const Socket: SocketStatic = Java.type('java.net.Socket')

interface PlainSocketImplStatic {
  readonly class: any
}

export const PlainSocketImpl: PlainSocketImplStatic = Java.type('java.net.PlainSocketImpl')

interface DatagramSocketImplStatic {
  readonly class: any
  new (): java.net.DatagramSocketImpl
}

export const DatagramSocketImpl: DatagramSocketImplStatic = Java.type('java.net.DatagramSocketImpl')

interface ShortBufferStatic {
  readonly class: any
  allocate(arg0: int): java.nio.ShortBuffer
  wrap(arg0: [any /*short*/]): java.nio.ShortBuffer
  wrap(arg0: [any /*short*/], arg1: int, arg2: int): java.nio.ShortBuffer
}

export const ShortBuffer: ShortBufferStatic = Java.type('java.nio.ShortBuffer')

interface IterableStatic {
  readonly class: any
}

export const Iterable: IterableStatic = Java.type('java.lang.Iterable')

interface StackStatic {
  readonly class: any
  new <E>(): java.util.Stack<E>
}

export const Stack: StackStatic = Java.type('java.util.Stack')

interface DatagramSocketStatic {
  readonly class: any
  new (arg0: int, arg1: java.net.InetAddress): java.net.DatagramSocket
  new (arg0: java.net.SocketAddress): java.net.DatagramSocket
  new (): java.net.DatagramSocket
  new (arg0: int): java.net.DatagramSocket
  setDatagramSocketImplFactory(arg0: any /*java.net.DatagramSocketImplFactory*/): void
}

export const DatagramSocket: DatagramSocketStatic = Java.type('java.net.DatagramSocket')

interface NetPermissionStatic {
  readonly class: any
  new (arg0: string): java.net.NetPermission
  new (arg0: string, arg1: string): java.net.NetPermission
}

export const NetPermission: NetPermissionStatic = Java.type('java.net.NetPermission')

interface StringBufferStatic {
  readonly class: any
  new (arg0: any /*java.lang.CharSequence*/): java.lang.StringBuffer
  new (arg0: string): java.lang.StringBuffer
  new (arg0: int): java.lang.StringBuffer
  new (): java.lang.StringBuffer
}

export const StringBuffer: StringBufferStatic = Java.type('java.lang.StringBuffer')

interface FileNameMapStatic {
  readonly class: any
}

export const FileNameMap: FileNameMapStatic = Java.type('java.net.FileNameMap')

interface URLConnectionStatic {
  readonly class: any
  getDefaultAllowUserInteraction(): boolean
  getDefaultRequestProperty(arg0: string): string
  getFileNameMap(): java.net.FileNameMap
  guessContentTypeFromName(arg0: string): string
  guessContentTypeFromStream(arg0: java.io.InputStream): string
  setContentHandlerFactory(arg0: any /*java.net.ContentHandlerFactory*/): void
  setDefaultAllowUserInteraction(arg0: boolean): void
  setDefaultRequestProperty(arg0: string, arg1: string): void
  setFileNameMap(arg0: java.net.FileNameMap): void
}

export const URLConnection: URLConnectionStatic = Java.type('java.net.URLConnection')

interface BufferStatic {
  readonly class: any
}

export const Buffer: BufferStatic = Java.type('java.nio.Buffer')

interface OutputStreamWriterStatic {
  readonly class: any
  new (arg0: java.io.OutputStream, arg1: string): java.io.OutputStreamWriter
  new (arg0: java.io.OutputStream, arg1: any /*java.nio.charset.CharsetEncoder*/): java.io.OutputStreamWriter
  new (arg0: java.io.OutputStream, arg1: any /*java.nio.charset.Charset*/): java.io.OutputStreamWriter
  new (arg0: java.io.OutputStream): java.io.OutputStreamWriter
}

export const OutputStreamWriter: OutputStreamWriterStatic = Java.type('java.io.OutputStreamWriter')

interface StringStatic {
  readonly class: any
  new (arg0: bytearray, arg1: int, arg2: int): string
  new (arg0: bytearray, arg1: any /*java.nio.charset.Charset*/): string
  new (arg0: bytearray, arg1: string): string
  new (arg0: bytearray, arg1: int, arg2: int, arg3: any /*java.nio.charset.Charset*/): string
  new (arg0: bytearray, arg1: int, arg2: int, arg3: string): string
  new (arg0: java.lang.StringBuilder): string
  new (arg0: java.lang.StringBuffer): string
  new (arg0: bytearray): string
  new (arg0: [int], arg1: int, arg2: int): string
  new (): string
  new (arg0: chararray): string
  new (arg0: string): string
  new (arg0: chararray, arg1: int, arg2: int): string
  new (arg0: bytearray, arg1: int): string
  new (arg0: bytearray, arg1: int, arg2: int, arg3: int): string
  copyValueOf(arg0: chararray, arg1: int, arg2: int): string
  copyValueOf(arg0: chararray): string
  format(arg0: any /*java.util.Locale*/, arg1: string, ...arg2: java.lang.Object[]): string
  format(arg0: string, ...arg1: java.lang.Object[]): string
  join(arg0: any /*java.lang.CharSequence*/, ...arg1: any /*java.lang.CharSequence*/[]): string
  join(arg0: any /*java.lang.CharSequence*/, arg1: java.lang.Iterable<any /*java.lang.CharSequence*/>): string
  valueOf(arg0: any /*char*/): string
  valueOf(arg0: java.lang.Object): string
  valueOf(arg0: boolean): string
  valueOf(arg0: chararray, arg1: int, arg2: int): string
  valueOf(arg0: chararray): string
  valueOf(arg0: double): string
  valueOf(arg0: float): string
  valueOf(arg0: long): string
  valueOf(arg0: int): string
}

export const String: StringStatic = Java.type('java.lang.String')

interface OutputStreamStatic {
  readonly class: any
  new (): java.io.OutputStream
}

export const OutputStream: OutputStreamStatic = Java.type('java.io.OutputStream')

interface IteratorStatic {
  readonly class: any
}

export const Iterator: IteratorStatic = Java.type('java.util.Iterator')

interface BufferedWriterStatic {
  readonly class: any
  new (arg0: java.io.Writer): java.io.BufferedWriter
  new (arg0: java.io.Writer, arg1: int): java.io.BufferedWriter
}

export const BufferedWriter: BufferedWriterStatic = Java.type('java.io.BufferedWriter')

interface DoubleBufferStatic {
  readonly class: any
  allocate(arg0: int): java.nio.DoubleBuffer
  wrap(arg0: [double]): java.nio.DoubleBuffer
  wrap(arg0: [double], arg1: int, arg2: int): java.nio.DoubleBuffer
}

export const DoubleBuffer: DoubleBufferStatic = Java.type('java.nio.DoubleBuffer')

interface FileWriterStatic {
  readonly class: any
  new (arg0: java.io.FileDescriptor): java.io.FileWriter
  new (arg0: java.io.File, arg1: boolean): java.io.FileWriter
  new (arg0: java.io.File): java.io.FileWriter
  new (arg0: string, arg1: boolean): java.io.FileWriter
  new (arg0: string): java.io.FileWriter
}

export const FileWriter: FileWriterStatic = Java.type('java.io.FileWriter')

interface FileOutputStreamStatic {
  readonly class: any
  new (arg0: java.io.FileDescriptor): java.io.FileOutputStream
  new (arg0: java.io.File, arg1: boolean): java.io.FileOutputStream
  new (arg0: java.io.File): java.io.FileOutputStream
  new (arg0: string, arg1: boolean): java.io.FileOutputStream
  new (arg0: string): java.io.FileOutputStream
}

export const FileOutputStream: FileOutputStreamStatic = Java.type('java.io.FileOutputStream')

interface FileInputStreamStatic {
  readonly class: any
  new (arg0: java.io.FileDescriptor): java.io.FileInputStream
  new (arg0: java.io.File): java.io.FileInputStream
  new (arg0: string): java.io.FileInputStream
}

export const FileInputStream: FileInputStreamStatic = Java.type('java.io.FileInputStream')

interface InputStreamReaderStatic {
  readonly class: any
  new (arg0: java.io.InputStream, arg1: any /*java.nio.charset.CharsetDecoder*/): java.io.InputStreamReader
  new (arg0: java.io.InputStream): java.io.InputStreamReader
  new (arg0: java.io.InputStream, arg1: any /*java.nio.charset.Charset*/): java.io.InputStreamReader
  new (arg0: java.io.InputStream, arg1: string): java.io.InputStreamReader
}

export const InputStreamReader: InputStreamReaderStatic = Java.type('java.io.InputStreamReader')

interface Inet4AddressStatic {
  readonly class: any
  getAllByName(arg0: string): [java.net.InetAddress]
  getByAddress(arg0: string, arg1: bytearray): java.net.InetAddress
  getByAddress(arg0: bytearray): java.net.InetAddress
  getByName(arg0: string): java.net.InetAddress
  getLocalHost(): java.net.InetAddress
  getLoopbackAddress(): java.net.InetAddress
}

export const Inet4Address: Inet4AddressStatic = Java.type('java.net.Inet4Address')

interface FileStatic {
  readonly class: any
  new (arg0: string, arg1: string): java.io.File
  new (arg0: string): java.io.File
  new (arg0: java.io.File, arg1: string): java.io.File
  new (arg0: any /*java.net.URI*/): java.io.File
  createTempFile(arg0: string, arg1: string, arg2: java.io.File): java.io.File
  createTempFile(arg0: string, arg1: string): java.io.File
  listRoots(): [java.io.File]
}

export const File: FileStatic = Java.type('java.io.File')

interface SecurityManagerStatic {
  readonly class: any
  new (): java.lang.SecurityManager
}

export const SecurityManager: SecurityManagerStatic = Java.type('java.lang.SecurityManager')

interface ContentHandlerStatic {
  readonly class: any
  new (): java.net.ContentHandler
}

export const ContentHandler: ContentHandlerStatic = Java.type('java.net.ContentHandler')

interface Inet6AddressStatic {
  readonly class: any
  getAllByName(arg0: string): [java.net.InetAddress]
  getByAddress(arg0: string, arg1: bytearray, arg2: java.net.NetworkInterface): java.net.Inet6Address
  getByAddress(arg0: string, arg1: bytearray, arg2: int): java.net.Inet6Address
  getByAddress(arg0: string, arg1: bytearray): java.net.InetAddress
  getByAddress(arg0: bytearray): java.net.InetAddress
  getByName(arg0: string): java.net.InetAddress
  getLocalHost(): java.net.InetAddress
  getLoopbackAddress(): java.net.InetAddress
}

export const Inet6Address: Inet6AddressStatic = Java.type('java.net.Inet6Address')

interface FileFilterStatic {
  readonly class: any
  new (arg0: java.io.FileFilter): java.io.FileFilter
}

export const FileFilter: FileFilterStatic = Java.type('java.io.FileFilter')

interface MulticastSocketStatic {
  readonly class: any
  new (arg0: java.net.SocketAddress): java.net.MulticastSocket
  new (arg0: int): java.net.MulticastSocket
  new (): java.net.MulticastSocket
  setDatagramSocketImplFactory(arg0: any /*java.net.DatagramSocketImplFactory*/): void
}

export const MulticastSocket: MulticastSocketStatic = Java.type('java.net.MulticastSocket')

interface FileDescriptorStatic {
  readonly class: any
  new (): java.io.FileDescriptor
}

export const FileDescriptor: FileDescriptorStatic = Java.type('java.io.FileDescriptor')

interface LongBufferStatic {
  readonly class: any
  allocate(arg0: int): java.nio.LongBuffer
  wrap(arg0: [long]): java.nio.LongBuffer
  wrap(arg0: [long], arg1: int, arg2: int): java.nio.LongBuffer
}

export const LongBuffer: LongBufferStatic = Java.type('java.nio.LongBuffer')

interface ClassStatic {
  readonly class: any
  forName(arg0: string): java.lang.Class<java.lang.Object>
  forName(arg0: string, arg1: boolean, arg2: java.lang.ClassLoader): java.lang.Class<java.lang.Object>
}

export const Class: ClassStatic = Java.type('java.lang.Class')

interface ComparableStatic {
  readonly class: any
}

export const Comparable: ComparableStatic = Java.type('java.lang.Comparable')

interface BufferedReaderStatic {
  readonly class: any
  new (arg0: java.io.Reader, arg1: int): java.io.BufferedReader
  new (arg0: java.io.Reader): java.io.BufferedReader
}

export const BufferedReader: BufferedReaderStatic = Java.type('java.io.BufferedReader')

interface FileReaderStatic {
  readonly class: any
  new (arg0: string): java.io.FileReader
  new (arg0: java.io.File): java.io.FileReader
  new (arg0: java.io.FileDescriptor): java.io.FileReader
}

export const FileReader: FileReaderStatic = Java.type('java.io.FileReader')

interface CollectionsStatic {
  readonly class: any
  addAll<T>(arg0: java.util.Collection<T>, ...arg1: T[]): boolean
  asLifoQueue(arg0: any /*java.util.Deque*/): any /*java.util.Queue*/
  binarySearch<T>(arg0: java.util.List<T>, arg1: T, arg2: any /*java.util.Comparator*/): int
  binarySearch<T>(arg0: java.util.List<java.lang.Comparable<T>>, arg1: T): int
  checkedCollection<E>(arg0: java.util.Collection<E>, arg1: java.lang.Class<E>): java.util.Collection<E>
  checkedList<E>(arg0: java.util.List<E>, arg1: java.lang.Class<E>): java.util.List<E>
  checkedMap<K, V>(arg0: java.util.Map<K, V>, arg1: java.lang.Class<K>, arg2: java.lang.Class<V>): java.util.Map<K, V>
  checkedNavigableMap<K, V>(
    arg0: any /*java.util.NavigableMap*/,
    arg1: java.lang.Class<K>,
    arg2: java.lang.Class<V>
  ): any /*java.util.NavigableMap*/
  checkedNavigableSet<E>(arg0: any /*java.util.NavigableSet*/, arg1: java.lang.Class<E>): any /*java.util.NavigableSet*/
  checkedQueue<E>(arg0: any /*java.util.Queue*/, arg1: java.lang.Class<E>): any /*java.util.Queue*/
  checkedSet<E>(arg0: java.util.Set<E>, arg1: java.lang.Class<E>): java.util.Set<E>
  checkedSortedMap<K, V>(
    arg0: any /*java.util.SortedMap*/,
    arg1: java.lang.Class<K>,
    arg2: java.lang.Class<V>
  ): any /*java.util.SortedMap*/
  checkedSortedSet<E>(arg0: any /*java.util.SortedSet*/, arg1: java.lang.Class<E>): any /*java.util.SortedSet*/
  copy<T>(arg0: java.util.List<T>, arg1: java.util.List<T>): void
  disjoint(arg0: java.util.Collection<java.lang.Object>, arg1: java.util.Collection<java.lang.Object>): boolean
  emptyEnumeration(): any /*java.util.Enumeration*/
  emptyIterator<T>(): java.util.Iterator<T>
  emptyList<T>(): java.util.List<T>
  emptyListIterator(): any /*java.util.ListIterator*/
  emptyMap<K, V>(): java.util.Map<K, V>
  emptyNavigableMap(): any /*java.util.NavigableMap*/
  emptyNavigableSet(): any /*java.util.NavigableSet*/
  emptySet<T>(): java.util.Set<T>
  emptySortedMap(): any /*java.util.SortedMap*/
  emptySortedSet(): any /*java.util.SortedSet*/
  enumeration<T>(arg0: java.util.Collection<T>): any /*java.util.Enumeration*/
  fill<T>(arg0: java.util.List<T>, arg1: T): void
  frequency(arg0: java.util.Collection<java.lang.Object>, arg1: java.lang.Object): int
  indexOfSubList(arg0: java.util.List<java.lang.Object>, arg1: java.util.List<java.lang.Object>): int
  lastIndexOfSubList(arg0: java.util.List<java.lang.Object>, arg1: java.util.List<java.lang.Object>): int
  list(arg0: any /*java.util.Enumeration*/): any /*java.util.ArrayList*/
  max<T>(arg0: java.util.Collection<T>, arg1: any /*java.util.Comparator*/): T
  max<T>(arg0: java.util.Collection<T>): T
  min<T>(arg0: java.util.Collection<T>, arg1: any /*java.util.Comparator*/): T
  min<T>(arg0: java.util.Collection<T>): T
  nCopies<T>(arg0: int, arg1: T): java.util.List<T>
  newSetFromMap<E>(arg0: java.util.Map<E, boolean | null>): java.util.Set<E>
  replaceAll<T>(arg0: java.util.List<T>, arg1: T, arg2: T): boolean
  reverse(arg0: java.util.List<java.lang.Object>): void
  reverseOrder(): any /*java.util.Comparator*/
  reverseOrder(arg0: any /*java.util.Comparator*/): any /*java.util.Comparator*/
  rotate(arg0: java.util.List<java.lang.Object>, arg1: int): void
  shuffle(arg0: java.util.List<java.lang.Object>): void
  shuffle(arg0: java.util.List<java.lang.Object>, arg1: any /*java.util.Random*/): void
  singleton<T>(arg0: T): java.util.Set<T>
  singletonList<T>(arg0: T): java.util.List<T>
  singletonMap<K, V>(arg0: K, arg1: V): java.util.Map<K, V>
  sort<T>(arg0: java.util.List<T>, arg1: any /*java.util.Comparator*/): void
  sort<T>(arg0: java.util.List<T>): void
  swap(arg0: java.util.List<java.lang.Object>, arg1: int, arg2: int): void
  synchronizedCollection<T>(arg0: java.util.Collection<T>): java.util.Collection<T>
  synchronizedList<T>(arg0: java.util.List<T>): java.util.List<T>
  synchronizedMap<K, V>(arg0: java.util.Map<K, V>): java.util.Map<K, V>
  synchronizedNavigableMap(arg0: any /*java.util.NavigableMap*/): any /*java.util.NavigableMap*/
  synchronizedNavigableSet(arg0: any /*java.util.NavigableSet*/): any /*java.util.NavigableSet*/
  synchronizedSet<T>(arg0: java.util.Set<T>): java.util.Set<T>
  synchronizedSortedMap(arg0: any /*java.util.SortedMap*/): any /*java.util.SortedMap*/
  synchronizedSortedSet(arg0: any /*java.util.SortedSet*/): any /*java.util.SortedSet*/
  unmodifiableCollection<T>(arg0: java.util.Collection<T>): java.util.Collection<T>
  unmodifiableList<T>(arg0: java.util.List<T>): java.util.List<T>
  unmodifiableMap<K, V>(arg0: java.util.Map<K, V>): java.util.Map<K, V>
  unmodifiableNavigableMap(arg0: any /*java.util.NavigableMap*/): any /*java.util.NavigableMap*/
  unmodifiableNavigableSet(arg0: any /*java.util.NavigableSet*/): any /*java.util.NavigableSet*/
  unmodifiableSet<T>(arg0: java.util.Set<T>): java.util.Set<T>
  unmodifiableSortedMap(arg0: any /*java.util.SortedMap*/): any /*java.util.SortedMap*/
  unmodifiableSortedSet(arg0: any /*java.util.SortedSet*/): any /*java.util.SortedSet*/
}

export const Collections: CollectionsStatic = Java.type('java.util.Collections')

interface InputStreamStatic {
  readonly class: any
  new (): java.io.InputStream
}

export const InputStream: InputStreamStatic = Java.type('java.io.InputStream')

interface MappedByteBufferStatic {
  readonly class: any
  allocate(arg0: int): java.nio.ByteBuffer
  allocateDirect(arg0: int): java.nio.ByteBuffer
  wrap(arg0: bytearray): java.nio.ByteBuffer
  wrap(arg0: bytearray, arg1: int, arg2: int): java.nio.ByteBuffer
}

export const MappedByteBuffer: MappedByteBufferStatic = Java.type('java.nio.MappedByteBuffer')

interface ByteArrayOutputStreamStatic {
  readonly class: any
  new (): java.io.ByteArrayOutputStream
  new (arg0: int): java.io.ByteArrayOutputStream
  nullOutputStream(): java.io.OutputStream
}

export const ByteArrayOutputStream: ByteArrayOutputStreamStatic = Packages.java.io.ByteArrayOutputStream
