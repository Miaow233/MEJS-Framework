/*
 * Project: java2typescript - https://github.com/bsorrentino/java2typescript
 *
 * Author: bsorrentino
 *
 * TYPESCRIPT DEFINITIONS
 *
 */

type int = number
type long = number
type float = number
type double = number
type byte = number
type char = string

type chararray = [byte]
type bytearray = [char]

declare namespace java.lang {
  interface Class<T> {}
  interface AutoCloseable {}
  interface Cloneable {}

  type Object = any
}

declare namespace java.util {
  interface RandomAccess {}
}

declare namespace java.io {
  interface Closeable {}
  interface Serializable {}
}

//
// Nashorn
//

declare function print(...args: any[]): void

declare function load(module: string): void

declare namespace Java {
  export function type<T>(t: string): T

  export function from<T>(list: java.util.List<T>): Array<T>
}
declare namespace java.util {
  class Arrays /* extends java.lang.Object*/ {
    equals(arg0: any /*java.lang.Object*/): boolean
    toString(): string
  } // end Arrays
} // end namespace java.util

declare namespace java.nio {
  class FloatBuffer /* extends Buffer implements java.lang.Comparable<any>*/ {
    array(): [float]
    arrayOffset(): int
    asReadOnlyBuffer(): FloatBuffer
    capacity(): int
    clear(): Buffer
    compact(): FloatBuffer
    compareTo(arg0: FloatBuffer): int
    duplicate(): FloatBuffer
    equals(arg0: any /*java.lang.Object*/): boolean
    flip(): Buffer
    get(): float
    get(arg0: [float]): FloatBuffer
    get(arg0: [float], arg1: int, arg2: int): FloatBuffer
    get(arg0: int): float
    hasArray(): boolean
    hasRemaining(): boolean
    isDirect(): boolean
    isReadOnly(): boolean
    limit(): int
    limit(arg0: int): Buffer
    mark(): Buffer
    order(): ByteOrder
    position(): int
    position(arg0: int): Buffer
    put(arg0: FloatBuffer): FloatBuffer
    put(arg0: [float]): FloatBuffer
    put(arg0: [float], arg1: int, arg2: int): FloatBuffer
    put(arg0: float): FloatBuffer
    put(arg0: int, arg1: float): FloatBuffer
    remaining(): int
    reset(): Buffer
    rewind(): Buffer
    slice(): FloatBuffer
    toString(): string
  } // end FloatBuffer
} // end namespace java.nio

declare namespace java.lang {
  class System /* extends Object*/ {
    equals(arg0: any /*java.lang.Object*/): boolean
    toString(): string
  } // end System
} // end namespace java.lang

declare namespace java.lang {
  class ThreadGroup /* extends Object implements Thread$UncaughtExceptionHandler*/ {
    activeCount(): int
    activeGroupCount(): int
    allowThreadSuspension(arg0: boolean): boolean
    checkAccess(): void
    destroy(): void
    enumerate(arg0: [ThreadGroup]): int
    enumerate(arg0: [ThreadGroup], arg1: boolean): int
    enumerate(arg0: [Thread]): int
    enumerate(arg0: [Thread], arg1: boolean): int
    equals(arg0: any /*java.lang.Object*/): boolean
    getMaxPriority(): int
    getName(): string
    getParent(): ThreadGroup
    interrupt(): void
    isDaemon(): boolean
    isDestroyed(): boolean
    list(): void
    parentOf(arg0: ThreadGroup): boolean
    resume(): void
    setDaemon(arg0: boolean): void
    setMaxPriority(arg0: int): void
    stop(): void
    suspend(): void
    toString(): string
    uncaughtException(arg0: Thread, arg1: Throwable): void
  } // end ThreadGroup
} // end namespace java.lang

declare namespace java.nio {
  class ByteBuffer /* extends Buffer implements java.lang.Comparable<any>*/ {
    array(): bytearray
    arrayOffset(): int
    asCharBuffer(): CharBuffer
    asDoubleBuffer(): DoubleBuffer
    asFloatBuffer(): FloatBuffer
    asIntBuffer(): IntBuffer
    asLongBuffer(): LongBuffer
    asReadOnlyBuffer(): ByteBuffer
    asShortBuffer(): ShortBuffer
    capacity(): int
    clear(): Buffer
    compact(): ByteBuffer
    compareTo(arg0: ByteBuffer): int
    duplicate(): ByteBuffer
    equals(arg0: any /*java.lang.Object*/): boolean
    flip(): Buffer
    get(): any /*byte*/
    get(arg0: bytearray): ByteBuffer
    get(arg0: bytearray, arg1: int, arg2: int): ByteBuffer
    get(arg0: int): any /*byte*/
    getChar(): any /*char*/
    getChar(arg0: int): any /*char*/
    getDouble(): double
    getDouble(arg0: int): double
    getFloat(): float
    getFloat(arg0: int): float
    getInt(): int
    getInt(arg0: int): int
    getLong(): long
    getLong(arg0: int): long
    getShort(): any /*short*/
    getShort(arg0: int): any /*short*/
    hasArray(): boolean
    hasRemaining(): boolean
    isDirect(): boolean
    isReadOnly(): boolean
    limit(): int
    limit(arg0: int): Buffer
    mark(): Buffer
    order(): ByteOrder
    order(arg0: ByteOrder): ByteBuffer
    position(): int
    position(arg0: int): Buffer
    put(arg0: ByteBuffer): ByteBuffer
    put(arg0: any /*byte*/): ByteBuffer
    put(arg0: bytearray): ByteBuffer
    put(arg0: bytearray, arg1: int, arg2: int): ByteBuffer
    put(arg0: int, arg1: any /*byte*/): ByteBuffer
    putChar(arg0: any /*char*/): ByteBuffer
    putChar(arg0: int, arg1: any /*char*/): ByteBuffer
    putDouble(arg0: double): ByteBuffer
    putDouble(arg0: int, arg1: double): ByteBuffer
    putFloat(arg0: float): ByteBuffer
    putFloat(arg0: int, arg1: float): ByteBuffer
    putInt(arg0: int): ByteBuffer
    putInt(arg0: int, arg1: int): ByteBuffer
    putLong(arg0: int, arg1: long): ByteBuffer
    putLong(arg0: long): ByteBuffer
    putShort(arg0: any /*short*/): ByteBuffer
    putShort(arg0: int, arg1: any /*short*/): ByteBuffer
    remaining(): int
    reset(): Buffer
    rewind(): Buffer
    slice(): ByteBuffer
    toString(): string
  } // end ByteBuffer
} // end namespace java.nio

declare namespace java.nio {
  class IntBuffer /* extends Buffer implements java.lang.Comparable<any>*/ {
    array(): [int]
    arrayOffset(): int
    asReadOnlyBuffer(): IntBuffer
    capacity(): int
    clear(): Buffer
    compact(): IntBuffer
    compareTo(arg0: IntBuffer): int
    duplicate(): IntBuffer
    equals(arg0: any /*java.lang.Object*/): boolean
    flip(): Buffer
    get(): int
    get(arg0: [int]): IntBuffer
    get(arg0: [int], arg1: int, arg2: int): IntBuffer
    get(arg0: int): int
    hasArray(): boolean
    hasRemaining(): boolean
    isDirect(): boolean
    isReadOnly(): boolean
    limit(): int
    limit(arg0: int): Buffer
    mark(): Buffer
    order(): ByteOrder
    position(): int
    position(arg0: int): Buffer
    put(arg0: IntBuffer): IntBuffer
    put(arg0: [int]): IntBuffer
    put(arg0: [int], arg1: int, arg2: int): IntBuffer
    put(arg0: int): IntBuffer
    put(arg0: int, arg1: int): IntBuffer
    remaining(): int
    reset(): Buffer
    rewind(): Buffer
    slice(): IntBuffer
    toString(): string
  } // end IntBuffer
} // end namespace java.nio

declare namespace java.io {
  class FilePermission /* extends java.security.Permission implements Serializable*/ {
    checkGuard(arg0: any /*java.lang.Object*/): void
    equals(arg0: any /*java.lang.Object*/): boolean
    getActions(): string
    getName(): string
    implies(arg0: any /*java.security.Permission*/): boolean
    newPermissionCollection(): any /*java.security.PermissionCollection*/
    toString(): string
  } // end FilePermission
} // end namespace java.io

declare namespace java.lang {
  class Thread /* extends Object implements Runnable*/ {
    checkAccess(): void
    countStackFrames(): int
    destroy(): void
    equals(arg0: any /*java.lang.Object*/): boolean
    getContextClassLoader(): ClassLoader
    getId(): long
    getName(): string
    getPriority(): int
    getStackTrace(): [any /*java.lang.StackTraceElement*/]
    getState(): any /*java.lang.Thread$State*/
    getThreadGroup(): ThreadGroup
    getUncaughtExceptionHandler(): any /*java.lang.Thread$UncaughtExceptionHandler*/
    interrupt(): void
    isAlive(): boolean
    isDaemon(): boolean
    isInterrupted(): boolean
    join(): void
    join(arg0: long): void
    join(arg0: long, arg1: int): void
    resume(): void
    run(): void
    setContextClassLoader(arg0: ClassLoader): void
    setDaemon(arg0: boolean): void
    setName(arg0: string): void
    setPriority(arg0: int): void
    setUncaughtExceptionHandler(arg0: any /*java.lang.Thread$UncaughtExceptionHandler*/): void
    start(): void
    stop(): void
    stop(arg0: Throwable): void
    suspend(): void
    toString(): string
  } // end Thread
} // end namespace java.lang

declare namespace java.util {
  interface Map<K, V> {
    clear(): void
    compute(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    computeIfAbsent(arg0: K, arg1: any /*java.util.function.Function*/): V
    computeIfPresent(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    containsKey(arg0: any /*java.lang.Object*/): boolean
    containsValue(arg0: any /*java.lang.Object*/): boolean
    entrySet(): Set<any /*java.util.Map$Entry*/>
    equals(arg0: any /*java.lang.Object*/): boolean
    forEach(arg0: any /*java.util.function.BiConsumer*/): void
    get(arg0: any /*java.lang.Object*/): V
    getOrDefault(arg0: any /*java.lang.Object*/, arg1: V): V
    isEmpty(): boolean
    keySet(): Set<K>
    merge(arg0: K, arg1: V, arg2: any /*java.util.function.BiFunction*/): V
    put(arg0: K, arg1: V): V
    putAll(arg0: Map<K, V>): void
    putIfAbsent(arg0: K, arg1: V): V
    remove(arg0: any /*java.lang.Object*/): V
    remove(arg0: any /*java.lang.Object*/, arg1: any /*java.lang.Object*/): boolean
    replace(arg0: K, arg1: V): V
    replace(arg0: K, arg1: V, arg2: V): boolean
    replaceAll(arg0: any /*java.util.function.BiFunction*/): void
    size(): int
    values(): Collection<V>
  } // end Map
} // end namespace java.util

declare namespace java.io {
  class PrintWriter /* extends Writer*/ {
    append(arg0: any /*char*/): PrintWriter
    append(arg0: any /*java.lang.CharSequence*/): PrintWriter
    append(arg0: any /*java.lang.CharSequence*/, arg1: int, arg2: int): PrintWriter
    checkError(): boolean
    close(): void
    equals(arg0: any /*java.lang.Object*/): boolean
    flush(): void
    format(arg0: any /*java.util.Locale*/, arg1: string, ...arg2: any /*java.lang.Object*/[]): PrintWriter
    format(arg0: string, ...arg1: any /*java.lang.Object*/[]): PrintWriter
    print(arg0: any /*char*/): void
    print(arg0: any /*java.lang.Object*/): void
    print(arg0: boolean): void
    print(arg0: chararray): void
    print(arg0: double): void
    print(arg0: float): void
    print(arg0: int): void
    print(arg0: long): void
    print(arg0: string): void
    printf(arg0: any /*java.util.Locale*/, arg1: string, ...arg2: any /*java.lang.Object*/[]): PrintWriter
    printf(arg0: string, ...arg1: any /*java.lang.Object*/[]): PrintWriter
    println(): void
    println(arg0: any /*char*/): void
    println(arg0: any /*java.lang.Object*/): void
    println(arg0: boolean): void
    println(arg0: chararray): void
    println(arg0: double): void
    println(arg0: float): void
    println(arg0: int): void
    println(arg0: long): void
    println(arg0: string): void
    toString(): string
    write(arg0: chararray): void
    write(arg0: chararray, arg1: int, arg2: int): void
    write(arg0: int): void
    write(arg0: string): void
    write(arg0: string, arg1: int, arg2: int): void
  } // end PrintWriter
} // end namespace java.io

declare namespace java.lang {
  class Void /* extends Object*/ {
    equals(arg0: any /*java.lang.Object*/): boolean
    toString(): string
  } // end Void
} // end namespace java.lang

declare namespace java.lang {
  class ThreadLocal<T> /* extends Object*/ {
    equals(arg0: any /*java.lang.Object*/): boolean
    get(): T
    remove(): void
    set(arg0: T): void
    toString(): string
  } // end ThreadLocal
} // end namespace java.lang

declare namespace java.lang {
  class Compiler /* extends Object*/ {
    equals(arg0: any /*java.lang.Object*/): boolean
    toString(): string
  } // end Compiler
} // end namespace java.lang

declare namespace java.nio {
  class CharBuffer /* extends Buffer implements java.lang.Comparable<any>, java.lang.Appendable, java.lang.CharSequence, java.lang.Readable*/ {
    append(arg0: any /*char*/): CharBuffer
    append(arg0: any /*java.lang.CharSequence*/): CharBuffer
    append(arg0: any /*java.lang.CharSequence*/, arg1: int, arg2: int): CharBuffer
    array(): chararray
    arrayOffset(): int
    asReadOnlyBuffer(): CharBuffer
    capacity(): int
    charAt(arg0: int): any /*char*/
    chars(): any /*java.util.stream.IntStream*/
    clear(): Buffer
    codePoints(): any /*java.util.stream.IntStream*/
    compact(): CharBuffer
    compareTo(arg0: CharBuffer): int
    duplicate(): CharBuffer
    equals(arg0: any /*java.lang.Object*/): boolean
    flip(): Buffer
    get(): any /*char*/
    get(arg0: chararray): CharBuffer
    get(arg0: chararray, arg1: int, arg2: int): CharBuffer
    get(arg0: int): any /*char*/
    hasArray(): boolean
    hasRemaining(): boolean
    isDirect(): boolean
    isReadOnly(): boolean
    length(): int
    limit(): int
    limit(arg0: int): Buffer
    mark(): Buffer
    order(): ByteOrder
    position(): int
    position(arg0: int): Buffer
    put(arg0: CharBuffer): CharBuffer
    put(arg0: any /*char*/): CharBuffer
    put(arg0: chararray): CharBuffer
    put(arg0: chararray, arg1: int, arg2: int): CharBuffer
    put(arg0: int, arg1: any /*char*/): CharBuffer
    put(arg0: string): CharBuffer
    put(arg0: string, arg1: int, arg2: int): CharBuffer
    read(arg0: CharBuffer): int
    remaining(): int
    reset(): Buffer
    rewind(): Buffer
    slice(): CharBuffer
    subSequence(arg0: int, arg1: int): CharBuffer
    toString(): string
  } // end CharBuffer
} // end namespace java.nio

declare namespace java.util {
  interface Collection<E> /* extends java.lang.Iterable<E>*/ {
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    clear(): void
    contains(arg0: any /*java.lang.Object*/): boolean
    containsAll(arg0: Collection<any /*java.lang.Object*/>): boolean
    equals(arg0: any /*java.lang.Object*/): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    isEmpty(): boolean
    iterator(): Iterator<E>
    parallelStream(): java.util.stream.Stream<E>
    remove(arg0: any /*java.lang.Object*/): boolean
    removeAll(arg0: Collection<any /*java.lang.Object*/>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    retainAll(arg0: Collection<any /*java.lang.Object*/>): boolean
    size(): int
    spliterator(): any /*java.util.Spliterator*/
    stream(): java.util.stream.Stream<E>
    toArray(): [any /*java.lang.Object*/]
    toArray<T>(arg0: [T]): [T]
  } // end Collection
} // end namespace java.util

declare namespace java.util {
  interface Set<E> /* extends Collection<E>*/ {
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    clear(): void
    contains(arg0: any /*java.lang.Object*/): boolean
    containsAll(arg0: Collection<any /*java.lang.Object*/>): boolean
    equals(arg0: any /*java.lang.Object*/): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    isEmpty(): boolean
    iterator(): Iterator<E>
    parallelStream(): java.util.stream.Stream<E>
    remove(arg0: any /*java.lang.Object*/): boolean
    removeAll(arg0: Collection<any /*java.lang.Object*/>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    retainAll(arg0: Collection<any /*java.lang.Object*/>): boolean
    size(): int
    spliterator(): any /*java.util.Spliterator*/
    stream(): java.util.stream.Stream<E>
    toArray(): [any /*java.lang.Object*/]
    toArray<T>(arg0: [T]): [T]
  } // end Set
} // end namespace java.util

declare namespace java.util.stream {
  class Collectors /* extends java.lang.Object*/ {
    equals(arg0: any /*java.lang.Object*/): boolean
    toString(): string
  } // end Collectors
} // end namespace java.util.stream

declare namespace java.io {
  class FileSystem /* extends java.lang.Object*/ {
    canonicalize(arg0: string): string
    checkAccess(arg0: File, arg1: int): boolean
    compare(arg0: File, arg1: File): int
    createDirectory(arg0: File): boolean
    createFileExclusively(arg0: string): boolean
    delete(arg0: File): boolean
    equals(arg0: any /*java.lang.Object*/): boolean
    fromURIPath(arg0: string): string
    getBooleanAttributes(arg0: File): int
    getDefaultParent(): string
    getLastModifiedTime(arg0: File): long
    getLength(arg0: File): long
    getPathSeparator(): any /*char*/
    getSeparator(): any /*char*/
    getSpace(arg0: File, arg1: int): long
    isAbsolute(arg0: File): boolean
    list(arg0: File): [string]
    listRoots(): [File]
    normalize(arg0: string): string
    prefixLength(arg0: string): int
    rename(arg0: File, arg1: File): boolean
    resolve(arg0: File): string
    resolve(arg0: string, arg1: string): string
    setLastModifiedTime(arg0: File, arg1: long): boolean
    setPermission(arg0: File, arg1: int, arg2: boolean, arg3: boolean): boolean
    setReadOnly(arg0: File): boolean
    toString(): string
  } // end FileSystem
} // end namespace java.io

declare namespace java.nio {
  class ByteOrder /* extends java.lang.Object*/ {
    equals(arg0: any /*java.lang.Object*/): boolean
    toString(): string
  } // end ByteOrder
} // end namespace java.nio

declare namespace java.util {
  interface List<E> /* extends Collection<E>*/ {
    add(arg0: E): boolean
    add(arg0: int, arg1: E): void
    addAll(arg0: Collection<E>): boolean
    addAll(arg0: int, arg1: Collection<E>): boolean
    clear(): void
    contains(arg0: any /*java.lang.Object*/): boolean
    containsAll(arg0: Collection<any /*java.lang.Object*/>): boolean
    equals(arg0: any /*java.lang.Object*/): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    get(arg0: int): E
    indexOf(arg0: any /*java.lang.Object*/): int
    isEmpty(): boolean
    iterator(): Iterator<E>
    lastIndexOf(arg0: any /*java.lang.Object*/): int
    listIterator(): any /*java.util.ListIterator*/
    listIterator(arg0: int): any /*java.util.ListIterator*/
    parallelStream(): java.util.stream.Stream<E>
    remove(arg0: any /*java.lang.Object*/): boolean
    remove(arg0: int): E
    removeAll(arg0: Collection<any /*java.lang.Object*/>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    replaceAll(arg0: any /*java.util.function.UnaryOperator*/): void
    retainAll(arg0: Collection<any /*java.lang.Object*/>): boolean
    set(arg0: int, arg1: E): E
    size(): int
    sort(arg0: any /*java.util.Comparator*/): void
    spliterator(): any /*java.util.Spliterator*/
    stream(): java.util.stream.Stream<E>
    subList(arg0: int, arg1: int): List<E>
    toArray(): [any /*java.lang.Object*/]
    toArray<T>(arg0: [T]): [T]
  } // end List
} // end namespace java.util

declare namespace java.util.stream {
  interface Stream<T> /* extends BaseStream<T, any>*/ {
    allMatch(arg0: any /*java.util.function.Predicate*/): boolean
    anyMatch(arg0: any /*java.util.function.Predicate*/): boolean
    close(): void
    collect<R>(
      arg0: any /*java.util.function.Supplier*/,
      arg1: any /*java.util.function.BiConsumer*/,
      arg2: any /*java.util.function.BiConsumer*/
    ): R
    collect<R>(arg0: any /*java.util.stream.Collector*/): R
    count(): long
    distinct(): Stream<T>
    filter(arg0: any /*java.util.function.Predicate*/): Stream<T>
    findAny(): java.util.Optional<T>
    findFirst(): java.util.Optional<T>
    flatMap<R>(arg0: any /*java.util.function.Function*/): Stream<R>
    flatMapToDouble(arg0: any /*java.util.function.Function*/): any /*java.util.stream.DoubleStream*/
    flatMapToInt(arg0: any /*java.util.function.Function*/): any /*java.util.stream.IntStream*/
    flatMapToLong(arg0: any /*java.util.function.Function*/): any /*java.util.stream.LongStream*/
    forEach(arg0: any /*java.util.function.Consumer*/): void
    forEachOrdered(arg0: any /*java.util.function.Consumer*/): void
    isParallel(): boolean
    iterator(): java.util.Iterator<T>
    limit(arg0: long): Stream<T>
    map<R>(arg0: any /*java.util.function.Function*/): Stream<R>
    mapToDouble(arg0: any /*java.util.function.ToDoubleFunction*/): any /*java.util.stream.DoubleStream*/
    mapToInt(arg0: any /*java.util.function.ToIntFunction*/): any /*java.util.stream.IntStream*/
    mapToLong(arg0: any /*java.util.function.ToLongFunction*/): any /*java.util.stream.LongStream*/
    max(arg0: any /*java.util.Comparator*/): java.util.Optional<T>
    min(arg0: any /*java.util.Comparator*/): java.util.Optional<T>
    noneMatch(arg0: any /*java.util.function.Predicate*/): boolean
    onClose<S>(arg0: any /*java.lang.Runnable*/): S
    parallel<S>(): S
    peek(arg0: any /*java.util.function.Consumer*/): Stream<T>
    reduce(arg0: T, arg1: any /*java.util.function.BinaryOperator*/): T
    reduce(arg0: any /*java.util.function.BinaryOperator*/): java.util.Optional<T>
    reduce<U>(arg0: U, arg1: any /*java.util.function.BiFunction*/, arg2: any /*java.util.function.BinaryOperator*/): U
    sequential<S>(): S
    skip(arg0: long): Stream<T>
    sorted(): Stream<T>
    sorted(arg0: any /*java.util.Comparator*/): Stream<T>
    spliterator(): any /*java.util.Spliterator*/
    toArray(): [any /*java.lang.Object*/]
    toArray<A>(arg0: any /*java.util.function.IntFunction*/): [A]
    unordered<S>(): S
  } // end Stream
} // end namespace java.util.stream

declare namespace java.io {
  class Writer /* extends java.lang.Object implements java.lang.Appendable, Closeable, Flushable*/ {
    append(arg0: any /*char*/): Writer
    append(arg0: any /*java.lang.CharSequence*/): Writer
    append(arg0: any /*java.lang.CharSequence*/, arg1: int, arg2: int): Writer
    close(): void
    equals(arg0: any /*java.lang.Object*/): boolean
    flush(): void
    toString(): string
    write(arg0: chararray): void
    write(arg0: chararray, arg1: int, arg2: int): void
    write(arg0: int): void
    write(arg0: string): void
    write(arg0: string, arg1: int, arg2: int): void
  } // end Writer
} // end namespace java.io

declare namespace java.util {
  class Optional<T> /* extends java.lang.Object*/ {
    equals(arg0: any /*java.lang.Object*/): boolean
    filter(arg0: any /*java.util.function.Predicate*/): Optional<T>
    flatMap<U>(arg0: any /*java.util.function.Function*/): Optional<U>
    get(): T
    ifPresent(arg0: any /*java.util.function.Consumer*/): void
    isPresent(): boolean
    map<U>(arg0: any /*java.util.function.Function*/): Optional<U>
    orElse(arg0: T): T
    orElseGet(arg0: any /*java.util.function.Supplier*/): T
    orElseThrow(arg0: any /*java.util.function.Supplier*/): T
    toString(): string
  } // end Optional
} // end namespace java.util

declare namespace java.lang {
  class StringBuilder /* extends AbstractStringBuilder implements java.io.Serializable, CharSequence*/ {
    append(arg0: StringBuffer): StringBuilder
    append(arg0: any /*char*/): StringBuilder
    append(arg0: any /*java.lang.CharSequence*/): StringBuilder
    append(arg0: any /*java.lang.CharSequence*/, arg1: int, arg2: int): StringBuilder
    append(arg0: any /*java.lang.Object*/): StringBuilder
    append(arg0: boolean): StringBuilder
    append(arg0: chararray): StringBuilder
    append(arg0: chararray, arg1: int, arg2: int): StringBuilder
    append(arg0: double): StringBuilder
    append(arg0: float): StringBuilder
    append(arg0: int): StringBuilder
    append(arg0: long): StringBuilder
    append(arg0: string): StringBuilder
    appendCodePoint(arg0: int): StringBuilder
    chars(): any /*java.util.stream.IntStream*/
    codePoints(): any /*java.util.stream.IntStream*/
    delete(arg0: int, arg1: int): StringBuilder
    deleteCharAt(arg0: int): StringBuilder
    equals(arg0: any /*java.lang.Object*/): boolean
    indexOf(arg0: string): int
    indexOf(arg0: string, arg1: int): int
    insert(arg0: int, arg1: any /*char*/): StringBuilder
    insert(arg0: int, arg1: any /*java.lang.CharSequence*/): StringBuilder
    insert(arg0: int, arg1: any /*java.lang.CharSequence*/, arg2: int, arg3: int): StringBuilder
    insert(arg0: int, arg1: any /*java.lang.Object*/): StringBuilder
    insert(arg0: int, arg1: boolean): StringBuilder
    insert(arg0: int, arg1: chararray): StringBuilder
    insert(arg0: int, arg1: chararray, arg2: int, arg3: int): StringBuilder
    insert(arg0: int, arg1: double): StringBuilder
    insert(arg0: int, arg1: float): StringBuilder
    insert(arg0: int, arg1: int): StringBuilder
    insert(arg0: int, arg1: long): StringBuilder
    insert(arg0: int, arg1: string): StringBuilder
    lastIndexOf(arg0: string): int
    lastIndexOf(arg0: string, arg1: int): int
    replace(arg0: int, arg1: int, arg2: string): StringBuilder
    reverse(): StringBuilder
    toString(): string
  } // end StringBuilder
} // end namespace java.lang

declare namespace java.lang {
  class ClassLoader /* extends Object*/ {
    clearAssertionStatus(): void
    equals(arg0: any /*java.lang.Object*/): boolean
    getParent(): ClassLoader
    getResource(arg0: string): any /*java.net.URL*/
    getResourceAsStream(arg0: string): java.io.InputStream
    getResources(arg0: string): any /*java.util.Enumeration*/
    loadClass(arg0: string): Class<any /*java.lang.Object*/>
    setClassAssertionStatus(arg0: string, arg1: boolean): void
    setDefaultAssertionStatus(arg0: boolean): void
    setPackageAssertionStatus(arg0: string, arg1: boolean): void
    toString(): string
  } // end ClassLoader
} // end namespace java.lang

declare namespace java.lang {
  class Throwable /* extends Object implements java.io.Serializable*/ {
    addSuppressed(arg0: Throwable): void
    equals(arg0: any /*java.lang.Object*/): boolean
    fillInStackTrace(): Throwable
    getCause(): Throwable
    getLocalizedMessage(): string
    getMessage(): string
    getStackTrace(): [any /*java.lang.StackTraceElement*/]
    getSuppressed(): [Throwable]
    initCause(arg0: Throwable): Throwable
    printStackTrace(): void
    printStackTrace(arg0: any /*java.io.PrintStream*/): void
    printStackTrace(arg0: java.io.PrintWriter): void
    setStackTrace(arg0: [any /*java.lang.StackTraceElement*/]): void
    toString(): string
  } // end Throwable
} // end namespace java.lang

declare namespace java.io {
  interface FilenameFilter {
    (arg0: java.io.File, arg1: string): boolean
  } // end FilenameFilter
} // end namespace java.io

declare namespace java.nio {
  class ShortBuffer /* extends Buffer implements java.lang.Comparable<any>*/ {
    array(): [any /*short*/]
    arrayOffset(): int
    asReadOnlyBuffer(): ShortBuffer
    capacity(): int
    clear(): Buffer
    compact(): ShortBuffer
    compareTo(arg0: ShortBuffer): int
    duplicate(): ShortBuffer
    equals(arg0: any /*java.lang.Object*/): boolean
    flip(): Buffer
    get(): any /*short*/
    get(arg0: [any /*short*/]): ShortBuffer
    get(arg0: [any /*short*/], arg1: int, arg2: int): ShortBuffer
    get(arg0: int): any /*short*/
    hasArray(): boolean
    hasRemaining(): boolean
    isDirect(): boolean
    isReadOnly(): boolean
    limit(): int
    limit(arg0: int): Buffer
    mark(): Buffer
    order(): ByteOrder
    position(): int
    position(arg0: int): Buffer
    put(arg0: ShortBuffer): ShortBuffer
    put(arg0: [any /*short*/]): ShortBuffer
    put(arg0: [any /*short*/], arg1: int, arg2: int): ShortBuffer
    put(arg0: any /*short*/): ShortBuffer
    put(arg0: int, arg1: any /*short*/): ShortBuffer
    remaining(): int
    reset(): Buffer
    rewind(): Buffer
    slice(): ShortBuffer
    toString(): string
  } // end ShortBuffer
} // end namespace java.nio

declare namespace java.lang {
  interface Iterable<T> {
    forEach(arg0: any /*java.util.function.Consumer*/): void
    iterator(): java.util.Iterator<T>
    spliterator(): any /*java.util.Spliterator*/
  } // end Iterable
} // end namespace java.lang

declare namespace java.util {
  class Stack<E> /* extends Vector<E>*/ {
    add(arg0: E): boolean
    add(arg0: int, arg1: E): void
    addAll(arg0: Collection<E>): boolean
    addAll(arg0: int, arg1: Collection<E>): boolean
    addElement(arg0: E): void
    capacity(): int
    clear(): void
    clone(): any /*java.lang.Object*/
    contains(arg0: any /*java.lang.Object*/): boolean
    containsAll(arg0: Collection<any /*java.lang.Object*/>): boolean
    copyInto(arg0: [any /*java.lang.Object*/]): void
    elementAt(arg0: int): E
    elements(): any /*java.util.Enumeration*/
    empty(): boolean
    ensureCapacity(arg0: int): void
    equals(arg0: any /*java.lang.Object*/): boolean
    firstElement(): E
    forEach(arg0: any /*java.util.function.Consumer*/): void
    get(arg0: int): E
    indexOf(arg0: any /*java.lang.Object*/): int
    indexOf(arg0: any /*java.lang.Object*/, arg1: int): int
    insertElementAt(arg0: E, arg1: int): void
    isEmpty(): boolean
    iterator(): Iterator<E>
    lastElement(): E
    lastIndexOf(arg0: any /*java.lang.Object*/): int
    lastIndexOf(arg0: any /*java.lang.Object*/, arg1: int): int
    listIterator(): any /*java.util.ListIterator*/
    listIterator(arg0: int): any /*java.util.ListIterator*/
    parallelStream(): java.util.stream.Stream<E>
    peek(): E
    pop(): E
    push(arg0: E): E
    remove(arg0: any /*java.lang.Object*/): boolean
    remove(arg0: int): E
    removeAll(arg0: Collection<any /*java.lang.Object*/>): boolean
    removeAllElements(): void
    removeElement(arg0: any /*java.lang.Object*/): boolean
    removeElementAt(arg0: int): void
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    replaceAll(arg0: any /*java.util.function.UnaryOperator*/): void
    retainAll(arg0: Collection<any /*java.lang.Object*/>): boolean
    search(arg0: any /*java.lang.Object*/): int
    set(arg0: int, arg1: E): E
    setElementAt(arg0: E, arg1: int): void
    setSize(arg0: int): void
    size(): int
    sort(arg0: any /*java.util.Comparator*/): void
    spliterator(): any /*java.util.Spliterator*/
    stream(): java.util.stream.Stream<E>
    subList(arg0: int, arg1: int): List<E>
    toArray(): [any /*java.lang.Object*/]
    toArray<T>(arg0: [T]): [T]
    toString(): string
    trimToSize(): void
  } // end Stack
} // end namespace java.util

declare namespace java.lang {
  class StringBuffer /* extends AbstractStringBuilder implements java.io.Serializable, CharSequence*/ {
    append(arg0: StringBuffer): StringBuffer
    append(arg0: any /*char*/): StringBuffer
    append(arg0: any /*java.lang.CharSequence*/): StringBuffer
    append(arg0: any /*java.lang.CharSequence*/, arg1: int, arg2: int): StringBuffer
    append(arg0: any /*java.lang.Object*/): StringBuffer
    append(arg0: boolean): StringBuffer
    append(arg0: chararray): StringBuffer
    append(arg0: chararray, arg1: int, arg2: int): StringBuffer
    append(arg0: double): StringBuffer
    append(arg0: float): StringBuffer
    append(arg0: int): StringBuffer
    append(arg0: long): StringBuffer
    append(arg0: string): StringBuffer
    appendCodePoint(arg0: int): StringBuffer
    capacity(): int
    charAt(arg0: int): any /*char*/
    chars(): any /*java.util.stream.IntStream*/
    codePointAt(arg0: int): int
    codePointBefore(arg0: int): int
    codePointCount(arg0: int, arg1: int): int
    codePoints(): any /*java.util.stream.IntStream*/
    delete(arg0: int, arg1: int): StringBuffer
    deleteCharAt(arg0: int): StringBuffer
    ensureCapacity(arg0: int): void
    equals(arg0: any /*java.lang.Object*/): boolean
    getChars(arg0: int, arg1: int, arg2: chararray, arg3: int): void
    indexOf(arg0: string): int
    indexOf(arg0: string, arg1: int): int
    insert(arg0: int, arg1: any /*char*/): StringBuffer
    insert(arg0: int, arg1: any /*java.lang.CharSequence*/): StringBuffer
    insert(arg0: int, arg1: any /*java.lang.CharSequence*/, arg2: int, arg3: int): StringBuffer
    insert(arg0: int, arg1: any /*java.lang.Object*/): StringBuffer
    insert(arg0: int, arg1: boolean): StringBuffer
    insert(arg0: int, arg1: chararray): StringBuffer
    insert(arg0: int, arg1: chararray, arg2: int, arg3: int): StringBuffer
    insert(arg0: int, arg1: double): StringBuffer
    insert(arg0: int, arg1: float): StringBuffer
    insert(arg0: int, arg1: int): StringBuffer
    insert(arg0: int, arg1: long): StringBuffer
    insert(arg0: int, arg1: string): StringBuffer
    lastIndexOf(arg0: string): int
    lastIndexOf(arg0: string, arg1: int): int
    length(): int
    offsetByCodePoints(arg0: int, arg1: int): int
    replace(arg0: int, arg1: int, arg2: string): StringBuffer
    reverse(): StringBuffer
    setCharAt(arg0: int, arg1: any /*char*/): void
    setLength(arg0: int): void
    subSequence(arg0: int, arg1: int): any /*java.lang.CharSequence*/
    substring(arg0: int): string
    substring(arg0: int, arg1: int): string
    toString(): string
    trimToSize(): void
  } // end StringBuffer
} // end namespace java.lang

declare namespace java.nio {
  class Buffer /* extends java.lang.Object*/ {
    array(): any /*java.lang.Object*/
    arrayOffset(): int
    capacity(): int
    clear(): Buffer
    equals(arg0: any /*java.lang.Object*/): boolean
    flip(): Buffer
    hasArray(): boolean
    hasRemaining(): boolean
    isDirect(): boolean
    isReadOnly(): boolean
    limit(): int
    limit(arg0: int): Buffer
    mark(): Buffer
    position(): int
    position(arg0: int): Buffer
    remaining(): int
    reset(): Buffer
    rewind(): Buffer
    toString(): string
  } // end Buffer
} // end namespace java.nio

declare namespace java.io {
  class OutputStreamWriter /* extends Writer*/ {
    append(arg0: any /*char*/): Writer
    append(arg0: any /*java.lang.CharSequence*/): Writer
    append(arg0: any /*java.lang.CharSequence*/, arg1: int, arg2: int): Writer
    close(): void
    equals(arg0: any /*java.lang.Object*/): boolean
    flush(): void
    getEncoding(): string
    toString(): string
    write(arg0: chararray): void
    write(arg0: chararray, arg1: int, arg2: int): void
    write(arg0: int): void
    write(arg0: string): void
    write(arg0: string, arg1: int, arg2: int): void
  } // end OutputStreamWriter
} // end namespace java.io

declare namespace java.lang {
  class String /* extends Object implements java.io.Serializable, Comparable<any>, CharSequence*/ {
    charAt(arg0: int): any /*char*/
    chars(): any /*java.util.stream.IntStream*/
    codePointAt(arg0: int): int
    codePointBefore(arg0: int): int
    codePointCount(arg0: int, arg1: int): int
    codePoints(): any /*java.util.stream.IntStream*/
    compareTo(arg0: string): int
    compareToIgnoreCase(arg0: string): int
    concat(arg0: string): string
    contains(arg0: any /*java.lang.CharSequence*/): boolean
    contentEquals(arg0: StringBuffer): boolean
    contentEquals(arg0: any /*java.lang.CharSequence*/): boolean
    endsWith(arg0: string): boolean
    equals(arg0: any /*java.lang.Object*/): boolean
    equalsIgnoreCase(arg0: string): boolean
    getBytes(): bytearray
    getBytes(arg0: any /*java.nio.charset.Charset*/): bytearray
    getBytes(arg0: int, arg1: int, arg2: bytearray, arg3: int): void
    getBytes(arg0: string): bytearray
    getChars(arg0: int, arg1: int, arg2: chararray, arg3: int): void
    indexOf(arg0: int): int
    indexOf(arg0: int, arg1: int): int
    indexOf(arg0: string): int
    indexOf(arg0: string, arg1: int): int
    intern(): string
    isEmpty(): boolean
    lastIndexOf(arg0: int): int
    lastIndexOf(arg0: int, arg1: int): int
    lastIndexOf(arg0: string): int
    lastIndexOf(arg0: string, arg1: int): int
    length(): int
    matches(arg0: string): boolean
    offsetByCodePoints(arg0: int, arg1: int): int
    regionMatches(arg0: boolean, arg1: int, arg2: string, arg3: int, arg4: int): boolean
    regionMatches(arg0: int, arg1: string, arg2: int, arg3: int): boolean
    replace(arg0: any /*char*/, arg1: any /*char*/): string
    replace(arg0: any /*java.lang.CharSequence*/, arg1: any /*java.lang.CharSequence*/): string
    replaceAll(arg0: string, arg1: string): string
    replaceFirst(arg0: string, arg1: string): string
    split(arg0: string): [string]
    split(arg0: string, arg1: int): [string]
    startsWith(arg0: string): boolean
    startsWith(arg0: string, arg1: int): boolean
    subSequence(arg0: int, arg1: int): any /*java.lang.CharSequence*/
    substring(arg0: int): string
    substring(arg0: int, arg1: int): string
    toCharArray(): chararray
    toLowerCase(): string
    toLowerCase(arg0: any /*java.util.Locale*/): string
    toString(): string
    toUpperCase(): string
    toUpperCase(arg0: any /*java.util.Locale*/): string
    trim(): string
  } // end String
} // end namespace java.lang

declare namespace java.io {
  class OutputStream /* extends java.lang.Object implements Closeable, Flushable*/ {
    close(): void
    equals(arg0: any /*java.lang.Object*/): boolean
    flush(): void
    toString(): string
    write(arg0: bytearray): void
    write(arg0: bytearray, arg1: int, arg2: int): void
    write(arg0: int): void
  } // end OutputStream
} // end namespace java.io

declare namespace java.util {
  interface Iterator<E> {
    forEachRemaining(arg0: any /*java.util.function.Consumer*/): void
    hasNext(): boolean
    next(): E
    remove(): void
  } // end Iterator
} // end namespace java.util

declare namespace java.io {
  class BufferedWriter /* extends Writer*/ {
    append(arg0: any /*char*/): Writer
    append(arg0: any /*java.lang.CharSequence*/): Writer
    append(arg0: any /*java.lang.CharSequence*/, arg1: int, arg2: int): Writer
    close(): void
    equals(arg0: any /*java.lang.Object*/): boolean
    flush(): void
    newLine(): void
    toString(): string
    write(arg0: chararray): void
    write(arg0: chararray, arg1: int, arg2: int): void
    write(arg0: int): void
    write(arg0: string): void
    write(arg0: string, arg1: int, arg2: int): void
  } // end BufferedWriter
} // end namespace java.io

declare namespace java.nio {
  class DoubleBuffer /* extends Buffer implements java.lang.Comparable<any>*/ {
    array(): [double]
    arrayOffset(): int
    asReadOnlyBuffer(): DoubleBuffer
    capacity(): int
    clear(): Buffer
    compact(): DoubleBuffer
    compareTo(arg0: DoubleBuffer): int
    duplicate(): DoubleBuffer
    equals(arg0: any /*java.lang.Object*/): boolean
    flip(): Buffer
    get(): double
    get(arg0: [double]): DoubleBuffer
    get(arg0: [double], arg1: int, arg2: int): DoubleBuffer
    get(arg0: int): double
    hasArray(): boolean
    hasRemaining(): boolean
    isDirect(): boolean
    isReadOnly(): boolean
    limit(): int
    limit(arg0: int): Buffer
    mark(): Buffer
    order(): ByteOrder
    position(): int
    position(arg0: int): Buffer
    put(arg0: DoubleBuffer): DoubleBuffer
    put(arg0: [double]): DoubleBuffer
    put(arg0: [double], arg1: int, arg2: int): DoubleBuffer
    put(arg0: double): DoubleBuffer
    put(arg0: int, arg1: double): DoubleBuffer
    remaining(): int
    reset(): Buffer
    rewind(): Buffer
    slice(): DoubleBuffer
    toString(): string
  } // end DoubleBuffer
} // end namespace java.nio

declare namespace java.io {
  class FileWriter /* extends OutputStreamWriter*/ {
    append(arg0: any /*char*/): Writer
    append(arg0: any /*java.lang.CharSequence*/): Writer
    append(arg0: any /*java.lang.CharSequence*/, arg1: int, arg2: int): Writer
    close(): void
    equals(arg0: any /*java.lang.Object*/): boolean
    flush(): void
    getEncoding(): string
    toString(): string
    write(arg0: chararray): void
    write(arg0: chararray, arg1: int, arg2: int): void
    write(arg0: int): void
    write(arg0: string): void
    write(arg0: string, arg1: int, arg2: int): void
  } // end FileWriter
} // end namespace java.io

declare namespace java.io {
  class FileOutputStream /* extends OutputStream*/ {
    close(): void
    equals(arg0: any /*java.lang.Object*/): boolean
    flush(): void
    getChannel(): any /*java.nio.channels.FileChannel*/
    getFD(): FileDescriptor
    toString(): string
    write(arg0: bytearray): void
    write(arg0: bytearray, arg1: int, arg2: int): void
    write(arg0: int): void
  } // end FileOutputStream
} // end namespace java.io

declare namespace java.io {
  class FileInputStream /* extends InputStream*/ {
    available(): int
    close(): void
    equals(arg0: any /*java.lang.Object*/): boolean
    getChannel(): any /*java.nio.channels.FileChannel*/
    getFD(): FileDescriptor
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: bytearray): int
    read(arg0: bytearray, arg1: int, arg2: int): int
    reset(): void
    skip(arg0: long): long
    toString(): string
  } // end FileInputStream
} // end namespace java.io

declare namespace java.io {
  class InputStreamReader /* extends Reader*/ {
    close(): void
    equals(arg0: any /*java.lang.Object*/): boolean
    getEncoding(): string
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: chararray): int
    read(arg0: chararray, arg1: int, arg2: int): int
    read(arg0: java.nio.CharBuffer): int
    ready(): boolean
    reset(): void
    skip(arg0: long): long
    toString(): string
  } // end InputStreamReader
} // end namespace java.io

declare namespace java.io {
  class File /* extends java.lang.Object implements Serializable, java.lang.Comparable<any>*/ {
    canExecute(): boolean
    canRead(): boolean
    canWrite(): boolean
    compareTo(arg0: File): int
    createNewFile(): boolean
    delete(): boolean
    deleteOnExit(): void
    equals(arg0: any /*java.lang.Object*/): boolean
    exists(): boolean
    getAbsoluteFile(): File
    getAbsolutePath(): string
    getCanonicalFile(): File
    getCanonicalPath(): string
    getFreeSpace(): long
    getName(): string
    getParent(): string
    getParentFile(): File
    getPath(): string
    getTotalSpace(): long
    getUsableSpace(): long
    isAbsolute(): boolean
    isDirectory(): boolean
    isFile(): boolean
    isHidden(): boolean
    lastModified(): long
    length(): long
    list(): [string]
    list(arg0: FilenameFilter): [string]
    listFiles(): [File]
    listFiles(arg0: FileFilter): [File]
    listFiles(arg0: FilenameFilter): [File]
    mkdir(): boolean
    mkdirs(): boolean
    renameTo(arg0: File): boolean
    setExecutable(arg0: boolean): boolean
    setExecutable(arg0: boolean, arg1: boolean): boolean
    setLastModified(arg0: long): boolean
    setReadOnly(): boolean
    setReadable(arg0: boolean): boolean
    setReadable(arg0: boolean, arg1: boolean): boolean
    setWritable(arg0: boolean): boolean
    setWritable(arg0: boolean, arg1: boolean): boolean
    toPath(): any /*java.nio.file.Path*/
    toString(): string
    toURI(): any /*java.net.URI*/
    toURL(): any /*java.net.URL*/
  } // end File
} // end namespace java.io

declare namespace java.lang {
  class SecurityManager /* extends Object*/ {
    checkAccept(arg0: string, arg1: int): void
    checkAccess(arg0: Thread): void
    checkAccess(arg0: ThreadGroup): void
    checkAwtEventQueueAccess(): void
    checkConnect(arg0: string, arg1: int): void
    checkConnect(arg0: string, arg1: int, arg2: any /*java.lang.Object*/): void
    checkCreateClassLoader(): void
    checkDelete(arg0: string): void
    checkExec(arg0: string): void
    checkExit(arg0: int): void
    checkLink(arg0: string): void
    checkListen(arg0: int): void
    checkMemberAccess(arg0: Class<any /*java.lang.Object*/>, arg1: int): void
    checkMulticast(arg0: any /*java.net.InetAddress*/): void
    checkMulticast(arg0: any /*java.net.InetAddress*/, arg1: any /*byte*/): void
    checkPackageAccess(arg0: string): void
    checkPackageDefinition(arg0: string): void
    checkPermission(arg0: any /*java.security.Permission*/): void
    checkPermission(arg0: any /*java.security.Permission*/, arg1: any /*java.lang.Object*/): void
    checkPrintJobAccess(): void
    checkPropertiesAccess(): void
    checkPropertyAccess(arg0: string): void
    checkRead(arg0: java.io.FileDescriptor): void
    checkRead(arg0: string): void
    checkRead(arg0: string, arg1: any /*java.lang.Object*/): void
    checkSecurityAccess(arg0: string): void
    checkSetFactory(): void
    checkSystemClipboardAccess(): void
    checkTopLevelWindow(arg0: any /*java.lang.Object*/): boolean
    checkWrite(arg0: java.io.FileDescriptor): void
    checkWrite(arg0: string): void
    equals(arg0: any /*java.lang.Object*/): boolean
    getInCheck(): boolean
    getSecurityContext(): any /*java.lang.Object*/
    getThreadGroup(): ThreadGroup
    toString(): string
  } // end SecurityManager
} // end namespace java.lang

declare namespace java.io {
  interface FileFilter {
    (arg0: java.io.File): boolean
  } // end FileFilter
} // end namespace java.io

declare namespace java.io {
  class FileDescriptor /* extends java.lang.Object*/ {
    equals(arg0: any /*java.lang.Object*/): boolean
    sync(): void
    toString(): string
    valid(): boolean
  } // end FileDescriptor
} // end namespace java.io

declare namespace java.nio {
  class LongBuffer /* extends Buffer implements java.lang.Comparable<any>*/ {
    array(): [long]
    arrayOffset(): int
    asReadOnlyBuffer(): LongBuffer
    capacity(): int
    clear(): Buffer
    compact(): LongBuffer
    compareTo(arg0: LongBuffer): int
    duplicate(): LongBuffer
    equals(arg0: any /*java.lang.Object*/): boolean
    flip(): Buffer
    get(): long
    get(arg0: [long]): LongBuffer
    get(arg0: [long], arg1: int, arg2: int): LongBuffer
    get(arg0: int): long
    hasArray(): boolean
    hasRemaining(): boolean
    isDirect(): boolean
    isReadOnly(): boolean
    limit(): int
    limit(arg0: int): Buffer
    mark(): Buffer
    order(): ByteOrder
    position(): int
    position(arg0: int): Buffer
    put(arg0: LongBuffer): LongBuffer
    put(arg0: [long]): LongBuffer
    put(arg0: [long], arg1: int, arg2: int): LongBuffer
    put(arg0: int, arg1: long): LongBuffer
    put(arg0: long): LongBuffer
    remaining(): int
    reset(): Buffer
    rewind(): Buffer
    slice(): LongBuffer
    toString(): string
  } // end LongBuffer
} // end namespace java.nio

declare namespace java.lang {
  class Class<
    T
  > /* extends Object implements java.io.Serializable, java.lang.reflect.GenericDeclaration, java.lang.reflect.Type, java.lang.reflect.AnnotatedElement*/ {
    asSubclass<U>(arg0: Class<U>): Class<U>
    cast(arg0: any /*java.lang.Object*/): T
    desiredAssertionStatus(): boolean
    equals(arg0: any /*java.lang.Object*/): boolean
    getAnnotatedInterfaces(): [any /*java.lang.reflect.AnnotatedType*/]
    getAnnotatedSuperclass(): any /*java.lang.reflect.AnnotatedType*/
    getAnnotation<A>(arg0: Class<A>): A
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType<A>(arg0: Class<A>): [A]
    getCanonicalName(): string
    getClassLoader(): ClassLoader
    getClasses(): [Class<any /*java.lang.Object*/>]
    getComponentType(): Class<any /*java.lang.Object*/>
    getConstructor(...arg0: Class<any /*java.lang.Object*/>[]): any /*java.lang.reflect.Constructor*/
    getConstructors(): [any /*java.lang.reflect.Constructor*/]
    getDeclaredAnnotation<A>(arg0: Class<A>): A
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType<A>(arg0: Class<A>): [A]
    getDeclaredClasses(): [Class<any /*java.lang.Object*/>]
    getDeclaredConstructor(...arg0: Class<any /*java.lang.Object*/>[]): any /*java.lang.reflect.Constructor*/
    getDeclaredConstructors(): [any /*java.lang.reflect.Constructor*/]
    getDeclaredField(arg0: string): any /*java.lang.reflect.Field*/
    getDeclaredFields(): [any /*java.lang.reflect.Field*/]
    getDeclaredMethod(arg0: string, ...arg1: Class<any /*java.lang.Object*/>[]): any /*java.lang.reflect.Method*/
    getDeclaredMethods(): [any /*java.lang.reflect.Method*/]
    getDeclaringClass(): Class<any /*java.lang.Object*/>
    getEnclosingClass(): Class<any /*java.lang.Object*/>
    getEnclosingConstructor(): any /*java.lang.reflect.Constructor*/
    getEnclosingMethod(): any /*java.lang.reflect.Method*/
    getEnumConstants(): [T]
    getField(arg0: string): any /*java.lang.reflect.Field*/
    getFields(): [any /*java.lang.reflect.Field*/]
    getGenericInterfaces(): [any /*java.lang.reflect.Type*/]
    getGenericSuperclass(): any /*java.lang.reflect.Type*/
    getInterfaces(): [Class<any /*java.lang.Object*/>]
    getMethod(arg0: string, ...arg1: Class<any /*java.lang.Object*/>[]): any /*java.lang.reflect.Method*/
    getMethods(): [any /*java.lang.reflect.Method*/]
    getModifiers(): int
    getName(): string
    getPackage(): any /*java.lang.Package*/
    getProtectionDomain(): any /*java.security.ProtectionDomain*/
    getResource(arg0: string): any /*java.net.URL*/
    getResourceAsStream(arg0: string): java.io.InputStream
    getSigners(): [any /*java.lang.Object*/]
    getSimpleName(): string
    getSuperclass(): Class<T>
    getTypeName(): string
    getTypeParameters(): [any /*java.lang.reflect.TypeVariable*/]
    isAnnotation(): boolean
    isAnnotationPresent(arg0: Class<any /*java.lang.annotation.Annotation*/>): boolean
    isAnonymousClass(): boolean
    isArray(): boolean
    isAssignableFrom(arg0: Class<any /*java.lang.Object*/>): boolean
    isEnum(): boolean
    isInstance(arg0: any /*java.lang.Object*/): boolean
    isInterface(): boolean
    isLocalClass(): boolean
    isMemberClass(): boolean
    isPrimitive(): boolean
    isSynthetic(): boolean
    newInstance(): T
    toGenericString(): string
    toString(): string
  } // end Class
} // end namespace java.lang

declare namespace java.lang {
  interface Comparable<T> {
    compareTo(arg0: T): int
  } // end Comparable
} // end namespace java.lang

declare namespace java.io {
  class BufferedReader /* extends Reader*/ {
    close(): void
    equals(arg0: any /*java.lang.Object*/): boolean
    lines(): java.util.stream.Stream<string>
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: chararray): int
    read(arg0: chararray, arg1: int, arg2: int): int
    read(arg0: java.nio.CharBuffer): int
    readLine(): string
    ready(): boolean
    reset(): void
    skip(arg0: long): long
    toString(): string
  } // end BufferedReader
} // end namespace java.io

declare namespace java.io {
  class FileReader extends InputStreamReader {
    close(): void
    equals(arg0: any /*java.lang.Object*/): boolean
    getEncoding(): string
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: chararray): int
    read(arg0: chararray, arg1: int, arg2: int): int
    read(arg0: java.nio.CharBuffer): int
    ready(): boolean
    reset(): void
    skip(arg0: long): long
    toString(): string
  } // end FileReader
} // end namespace java.io

declare namespace java.util {
  class Collections /* extends java.lang.Object*/ {
    equals(arg0: any /*java.lang.Object*/): boolean
    toString(): string
  } // end Collections
} // end namespace java.util

declare namespace java.io {
  class InputStream /* extends java.lang.Object implements Closeable*/ {
    available(): int
    close(): void
    equals(arg0: any /*java.lang.Object*/): boolean
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: bytearray): int
    read(arg0: bytearray, arg1: int, arg2: int): int
    reset(): void
    skip(arg0: long): long
    toString(): string
  } // end InputStream
} // end namespace java.io

declare namespace java.nio {
  class MappedByteBuffer /* extends ByteBuffer*/ {
    array(): bytearray
    arrayOffset(): int
    asCharBuffer(): CharBuffer
    asDoubleBuffer(): DoubleBuffer
    asFloatBuffer(): FloatBuffer
    asIntBuffer(): IntBuffer
    asLongBuffer(): LongBuffer
    asReadOnlyBuffer(): ByteBuffer
    asShortBuffer(): ShortBuffer
    capacity(): int
    clear(): Buffer
    compact(): ByteBuffer
    compareTo(arg0: ByteBuffer): int
    duplicate(): ByteBuffer
    equals(arg0: any /*java.lang.Object*/): boolean
    flip(): Buffer
    force(): MappedByteBuffer
    get(): any /*byte*/
    get(arg0: bytearray): ByteBuffer
    get(arg0: bytearray, arg1: int, arg2: int): ByteBuffer
    get(arg0: int): any /*byte*/
    getChar(): any /*char*/
    getChar(arg0: int): any /*char*/
    getDouble(): double
    getDouble(arg0: int): double
    getFloat(): float
    getFloat(arg0: int): float
    getInt(): int
    getInt(arg0: int): int
    getLong(): long
    getLong(arg0: int): long
    getShort(): any /*short*/
    getShort(arg0: int): any /*short*/
    hasArray(): boolean
    hasRemaining(): boolean
    isDirect(): boolean
    isLoaded(): boolean
    isReadOnly(): boolean
    limit(): int
    limit(arg0: int): Buffer
    load(): MappedByteBuffer
    mark(): Buffer
    order(): ByteOrder
    order(arg0: ByteOrder): ByteBuffer
    position(): int
    position(arg0: int): Buffer
    put(arg0: ByteBuffer): ByteBuffer
    put(arg0: any /*byte*/): ByteBuffer
    put(arg0: bytearray): ByteBuffer
    put(arg0: bytearray, arg1: int, arg2: int): ByteBuffer
    put(arg0: int, arg1: any /*byte*/): ByteBuffer
    putChar(arg0: any /*char*/): ByteBuffer
    putChar(arg0: int, arg1: any /*char*/): ByteBuffer
    putDouble(arg0: double): ByteBuffer
    putDouble(arg0: int, arg1: double): ByteBuffer
    putFloat(arg0: float): ByteBuffer
    putFloat(arg0: int, arg1: float): ByteBuffer
    putInt(arg0: int): ByteBuffer
    putInt(arg0: int, arg1: int): ByteBuffer
    putLong(arg0: int, arg1: long): ByteBuffer
    putLong(arg0: long): ByteBuffer
    putShort(arg0: any /*short*/): ByteBuffer
    putShort(arg0: int, arg1: any /*short*/): ByteBuffer
    remaining(): int
    reset(): Buffer
    rewind(): Buffer
    slice(): ByteBuffer
    toString(): string
  } // end MappedByteBuffer
} // end namespace java.nio
