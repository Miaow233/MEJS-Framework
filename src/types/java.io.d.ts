declare namespace java.io {
  class BufferedInputStream /* extends FilterInputStream*/ {
    available(): int
    close(): void
    equals(arg0: java.lang.Object): boolean
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: bytearray): int
    read(arg0: bytearray, arg1: int, arg2: int): int
    readAllBytes(): bytearray
    readNBytes(arg0: bytearray, arg1: int, arg2: int): int
    readNBytes(arg0: int): bytearray
    reset(): void
    skip(arg0: long): long
    static nullInputStream(): InputStream
    toString(): string
    transferTo(arg0: OutputStream): long
  } // end BufferedInputStream
} // end namespace java.io
declare namespace java.io {
  class BufferedOutputStream /* extends FilterOutputStream*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    static nullOutputStream(): OutputStream
    toString(): string
    write(arg0: bytearray): void
    write(arg0: bytearray, arg1: int, arg2: int): void
    write(arg0: int): void
  } // end BufferedOutputStream
} // end namespace java.io
declare namespace java.io {
  class BufferedReader /* extends Reader*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    lines(): java.util.stream.Stream<string>
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: any /*java.nio.CharBuffer*/): int
    read(arg0: chararray): int
    read(arg0: chararray, arg1: int, arg2: int): int
    readLine(): string
    ready(): boolean
    reset(): void
    skip(arg0: long): long
    static nullReader(): Reader
    toString(): string
    transferTo(arg0: Writer): long
  } // end BufferedReader
} // end namespace java.io
declare namespace java.io {
  class BufferedWriter /* extends Writer*/ {
    append(arg0: char): Writer
    append(arg0: java.lang.CharSequence): Writer
    append(arg0: java.lang.CharSequence, arg1: int, arg2: int): Writer
    close(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    newLine(): void
    static nullWriter(): Writer
    toString(): string
    write(arg0: chararray): void
    write(arg0: chararray, arg1: int, arg2: int): void
    write(arg0: int): void
    write(arg0: string): void
    write(arg0: string, arg1: int, arg2: int): void
  } // end BufferedWriter
} // end namespace java.io
declare namespace java.io {
  class ByteArrayInputStream /* extends InputStream*/ {
    available(): int
    close(): void
    equals(arg0: java.lang.Object): boolean
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: bytearray): int
    read(arg0: bytearray, arg1: int, arg2: int): int
    readAllBytes(): bytearray
    readNBytes(arg0: bytearray, arg1: int, arg2: int): int
    readNBytes(arg0: int): bytearray
    reset(): void
    skip(arg0: long): long
    static nullInputStream(): InputStream
    toString(): string
    transferTo(arg0: OutputStream): long
  } // end ByteArrayInputStream
} // end namespace java.io
declare namespace java.io {
  class ByteArrayOutputStream /* extends OutputStream*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    reset(): void
    size(): int
    static nullOutputStream(): OutputStream
    toByteArray(): bytearray
    toString(): string
    toString(arg0: any /*java.nio.charset.Charset*/): string
    toString(arg0: int): string
    toString(arg0: string): string
    write(arg0: bytearray): void
    write(arg0: bytearray, arg1: int, arg2: int): void
    write(arg0: int): void
    writeBytes(arg0: bytearray): void
    writeTo(arg0: OutputStream): void
  } // end ByteArrayOutputStream
} // end namespace java.io
declare namespace java.io {
  class CharArrayReader /* extends Reader*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: any /*java.nio.CharBuffer*/): int
    read(arg0: chararray): int
    read(arg0: chararray, arg1: int, arg2: int): int
    ready(): boolean
    reset(): void
    skip(arg0: long): long
    static nullReader(): Reader
    toString(): string
    transferTo(arg0: Writer): long
  } // end CharArrayReader
} // end namespace java.io
declare namespace java.io {
  class CharArrayWriter /* extends Writer*/ {
    append(arg0: char): CharArrayWriter
    append(arg0: java.lang.CharSequence): CharArrayWriter
    append(arg0: java.lang.CharSequence, arg1: int, arg2: int): CharArrayWriter
    close(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    reset(): void
    size(): int
    static nullWriter(): Writer
    toCharArray(): chararray
    toString(): string
    write(arg0: chararray): void
    write(arg0: chararray, arg1: int, arg2: int): void
    write(arg0: int): void
    write(arg0: string): void
    write(arg0: string, arg1: int, arg2: int): void
    writeTo(arg0: Writer): void
  } // end CharArrayWriter
} // end namespace java.io
declare namespace java.io {
  interface Closeable /* extends java.lang.AutoCloseable*/ {
    close(): void
  } // end Closeable
} // end namespace java.io
declare namespace java.io {
  class Console /* extends java.lang.Object implements Flushable*/ {
    equals(arg0: java.lang.Object): boolean
    flush(): void
    format(arg0: string, ...arg1: java.lang.Object[]): Console
    printf(arg0: string, ...arg1: java.lang.Object[]): Console
    readLine(): string
    readLine(arg0: string, ...arg1: java.lang.Object[]): string
    readPassword(): chararray
    readPassword(arg0: string, ...arg1: java.lang.Object[]): chararray
    reader(): Reader
    toString(): string
    writer(): PrintWriter
  } // end Console
} // end namespace java.io
declare namespace java.io {
  interface DataInput {
    readBoolean(): boolean
    readByte(): byte
    readChar(): char
    readDouble(): double
    readFloat(): float
    readFully(arg0: bytearray): void
    readFully(arg0: bytearray, arg1: int, arg2: int): void
    readInt(): int
    readLine(): string
    readLong(): long
    readShort(): short
    readUTF(): string
    readUnsignedByte(): int
    readUnsignedShort(): int
    skipBytes(arg0: int): int
  } // end DataInput
} // end namespace java.io
declare namespace java.io {
  class DataInputStream /* extends FilterInputStream implements DataInput*/ {
    available(): int
    close(): void
    equals(arg0: java.lang.Object): boolean
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: bytearray): int
    read(arg0: bytearray, arg1: int, arg2: int): int
    readAllBytes(): bytearray
    readBoolean(): boolean
    readByte(): byte
    readChar(): char
    readDouble(): double
    readFloat(): float
    readFully(arg0: bytearray): void
    readFully(arg0: bytearray, arg1: int, arg2: int): void
    readInt(): int
    readLine(): string
    readLong(): long
    readNBytes(arg0: bytearray, arg1: int, arg2: int): int
    readNBytes(arg0: int): bytearray
    readShort(): short
    readUTF(): string
    readUnsignedByte(): int
    readUnsignedShort(): int
    reset(): void
    skip(arg0: long): long
    skipBytes(arg0: int): int
    static nullInputStream(): InputStream
    static readUTF(arg0: DataInput): string
    toString(): string
    transferTo(arg0: OutputStream): long
  } // end DataInputStream
} // end namespace java.io
declare namespace java.io {
  interface DataOutput {
    write(arg0: bytearray): void
    write(arg0: bytearray, arg1: int, arg2: int): void
    write(arg0: int): void
    writeBoolean(arg0: boolean): void
    writeByte(arg0: int): void
    writeBytes(arg0: string): void
    writeChar(arg0: int): void
    writeChars(arg0: string): void
    writeDouble(arg0: double): void
    writeFloat(arg0: float): void
    writeInt(arg0: int): void
    writeLong(arg0: long): void
    writeShort(arg0: int): void
    writeUTF(arg0: string): void
  } // end DataOutput
} // end namespace java.io
declare namespace java.io {
  class DataOutputStream /* extends FilterOutputStream implements DataOutput*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    size(): int
    static nullOutputStream(): OutputStream
    toString(): string
    write(arg0: bytearray): void
    write(arg0: bytearray, arg1: int, arg2: int): void
    write(arg0: int): void
    writeBoolean(arg0: boolean): void
    writeByte(arg0: int): void
    writeBytes(arg0: string): void
    writeChar(arg0: int): void
    writeChars(arg0: string): void
    writeDouble(arg0: double): void
    writeFloat(arg0: float): void
    writeInt(arg0: int): void
    writeLong(arg0: long): void
    writeShort(arg0: int): void
    writeUTF(arg0: string): void
  } // end DataOutputStream
} // end namespace java.io
declare namespace java.io {
  interface Externalizable /* extends Serializable*/ {
    readExternal(arg0: ObjectInput): void
    writeExternal(arg0: ObjectOutput): void
  } // end Externalizable
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
    equals(arg0: java.lang.Object): boolean
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
    static createTempFile(arg0: string, arg1: string): File
    static createTempFile(arg0: string, arg1: string, arg2: File): File
    static listRoots(): [File]
    toPath(): any /*java.nio.file.Path*/
    toString(): string
    toURI(): java.net.URI
    toURL(): java.net.URL
  } // end File
} // end namespace java.io
declare namespace java.io {
  class FileDescriptor /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    sync(): void
    toString(): string
    valid(): boolean
  } // end FileDescriptor
} // end namespace java.io
declare namespace java.io {
  interface FileFilter {
    (arg0: java.io.File): boolean
  } // end FileFilter
} // end namespace java.io
declare namespace java.io {
  class FileInputStream /* extends InputStream*/ {
    available(): int
    close(): void
    equals(arg0: java.lang.Object): boolean
    getChannel(): any /*java.nio.channels.FileChannel*/
    getFD(): FileDescriptor
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: bytearray): int
    read(arg0: bytearray, arg1: int, arg2: int): int
    readAllBytes(): bytearray
    readNBytes(arg0: bytearray, arg1: int, arg2: int): int
    readNBytes(arg0: int): bytearray
    reset(): void
    skip(arg0: long): long
    static nullInputStream(): InputStream
    toString(): string
    transferTo(arg0: OutputStream): long
  } // end FileInputStream
} // end namespace java.io
declare namespace java.io {
  interface FilenameFilter {
    (arg0: java.io.File, arg1: string): boolean
  } // end FilenameFilter
} // end namespace java.io
declare namespace java.io {
  class FileOutputStream /* extends OutputStream*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    getChannel(): any /*java.nio.channels.FileChannel*/
    getFD(): FileDescriptor
    static nullOutputStream(): OutputStream
    toString(): string
    write(arg0: bytearray): void
    write(arg0: bytearray, arg1: int, arg2: int): void
    write(arg0: int): void
  } // end FileOutputStream
} // end namespace java.io
declare namespace java.io {
  class FilePermission /* extends java.security.Permission implements Serializable*/ {
    checkGuard(arg0: java.lang.Object): void
    equals(arg0: java.lang.Object): boolean
    getActions(): string
    getName(): string
    implies(arg0: any /*java.security.Permission*/): boolean
    newPermissionCollection(): any /*java.security.PermissionCollection*/
    toString(): string
  } // end FilePermission
} // end namespace java.io
declare namespace java.io {
  class FileReader /* extends InputStreamReader*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    getEncoding(): string
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: any /*java.nio.CharBuffer*/): int
    read(arg0: chararray): int
    read(arg0: chararray, arg1: int, arg2: int): int
    ready(): boolean
    reset(): void
    skip(arg0: long): long
    static nullReader(): Reader
    toString(): string
    transferTo(arg0: Writer): long
  } // end FileReader
} // end namespace java.io
declare namespace java.io {
  class FileWriter /* extends OutputStreamWriter*/ {
    append(arg0: char): Writer
    append(arg0: java.lang.CharSequence): Writer
    append(arg0: java.lang.CharSequence, arg1: int, arg2: int): Writer
    close(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    getEncoding(): string
    static nullWriter(): Writer
    toString(): string
    write(arg0: chararray): void
    write(arg0: chararray, arg1: int, arg2: int): void
    write(arg0: int): void
    write(arg0: string): void
    write(arg0: string, arg1: int, arg2: int): void
  } // end FileWriter
} // end namespace java.io
declare namespace java.io {
  class FilterInputStream /* extends InputStream*/ {
    available(): int
    close(): void
    equals(arg0: java.lang.Object): boolean
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: bytearray): int
    read(arg0: bytearray, arg1: int, arg2: int): int
    readAllBytes(): bytearray
    readNBytes(arg0: bytearray, arg1: int, arg2: int): int
    readNBytes(arg0: int): bytearray
    reset(): void
    skip(arg0: long): long
    static nullInputStream(): InputStream
    toString(): string
    transferTo(arg0: OutputStream): long
  } // end FilterInputStream
} // end namespace java.io
declare namespace java.io {
  class FilterOutputStream /* extends OutputStream*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    static nullOutputStream(): OutputStream
    toString(): string
    write(arg0: bytearray): void
    write(arg0: bytearray, arg1: int, arg2: int): void
    write(arg0: int): void
  } // end FilterOutputStream
} // end namespace java.io
declare namespace java.io {
  class FilterReader /* extends Reader*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: any /*java.nio.CharBuffer*/): int
    read(arg0: chararray): int
    read(arg0: chararray, arg1: int, arg2: int): int
    ready(): boolean
    reset(): void
    skip(arg0: long): long
    static nullReader(): Reader
    toString(): string
    transferTo(arg0: Writer): long
  } // end FilterReader
} // end namespace java.io
declare namespace java.io {
  class FilterWriter /* extends Writer*/ {
    append(arg0: char): Writer
    append(arg0: java.lang.CharSequence): Writer
    append(arg0: java.lang.CharSequence, arg1: int, arg2: int): Writer
    close(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    static nullWriter(): Writer
    toString(): string
    write(arg0: chararray): void
    write(arg0: chararray, arg1: int, arg2: int): void
    write(arg0: int): void
    write(arg0: string): void
    write(arg0: string, arg1: int, arg2: int): void
  } // end FilterWriter
} // end namespace java.io
declare namespace java.io {
  interface Flushable {
    flush(): void
  } // end Flushable
} // end namespace java.io
declare namespace java.io {
  class InputStream /* extends java.lang.Object implements Closeable*/ {
    available(): int
    close(): void
    equals(arg0: java.lang.Object): boolean
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: bytearray): int
    read(arg0: bytearray, arg1: int, arg2: int): int
    readAllBytes(): bytearray
    readNBytes(arg0: bytearray, arg1: int, arg2: int): int
    readNBytes(arg0: int): bytearray
    reset(): void
    skip(arg0: long): long
    static nullInputStream(): InputStream
    toString(): string
    transferTo(arg0: OutputStream): long
  } // end InputStream
} // end namespace java.io
declare namespace java.io {
  class InputStreamReader /* extends Reader*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    getEncoding(): string
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: any /*java.nio.CharBuffer*/): int
    read(arg0: chararray): int
    read(arg0: chararray, arg1: int, arg2: int): int
    ready(): boolean
    reset(): void
    skip(arg0: long): long
    static nullReader(): Reader
    toString(): string
    transferTo(arg0: Writer): long
  } // end InputStreamReader
} // end namespace java.io
declare namespace java.io {
  class LineNumberInputStream /* extends FilterInputStream*/ {
    available(): int
    close(): void
    equals(arg0: java.lang.Object): boolean
    getLineNumber(): int
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: bytearray): int
    read(arg0: bytearray, arg1: int, arg2: int): int
    readAllBytes(): bytearray
    readNBytes(arg0: bytearray, arg1: int, arg2: int): int
    readNBytes(arg0: int): bytearray
    reset(): void
    setLineNumber(arg0: int): void
    skip(arg0: long): long
    static nullInputStream(): InputStream
    toString(): string
    transferTo(arg0: OutputStream): long
  } // end LineNumberInputStream
} // end namespace java.io
declare namespace java.io {
  class LineNumberReader /* extends BufferedReader*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    getLineNumber(): int
    lines(): java.util.stream.Stream<string>
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: any /*java.nio.CharBuffer*/): int
    read(arg0: chararray): int
    read(arg0: chararray, arg1: int, arg2: int): int
    readLine(): string
    ready(): boolean
    reset(): void
    setLineNumber(arg0: int): void
    skip(arg0: long): long
    static nullReader(): Reader
    toString(): string
    transferTo(arg0: Writer): long
  } // end LineNumberReader
} // end namespace java.io
declare namespace java.io {
  interface ObjectInput /* extends DataInput, java.lang.AutoCloseable*/ {
    available(): int
    close(): void
    read(): int
    read(arg0: bytearray): int
    read(arg0: bytearray, arg1: int, arg2: int): int
    readBoolean(): boolean
    readByte(): byte
    readChar(): char
    readDouble(): double
    readFloat(): float
    readFully(arg0: bytearray): void
    readFully(arg0: bytearray, arg1: int, arg2: int): void
    readInt(): int
    readLine(): string
    readLong(): long
    readObject(): java.lang.Object
    readShort(): short
    readUTF(): string
    readUnsignedByte(): int
    readUnsignedShort(): int
    skip(arg0: long): long
    skipBytes(arg0: int): int
  } // end ObjectInput
} // end namespace java.io
declare namespace java.io {
  class ObjectInputStream /* extends InputStream implements ObjectInput, ObjectStreamConstants*/ {
    available(): int
    close(): void
    defaultReadObject(): void
    equals(arg0: java.lang.Object): boolean
    getObjectInputFilter(): any /*java.io.ObjectInputFilter*/
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: bytearray): int
    read(arg0: bytearray, arg1: int, arg2: int): int
    readAllBytes(): bytearray
    readBoolean(): boolean
    readByte(): byte
    readChar(): char
    readDouble(): double
    readFields(): any /*java.io.ObjectInputStream$GetField*/
    readFloat(): float
    readFully(arg0: bytearray): void
    readFully(arg0: bytearray, arg1: int, arg2: int): void
    readInt(): int
    readLine(): string
    readLong(): long
    readNBytes(arg0: bytearray, arg1: int, arg2: int): int
    readNBytes(arg0: int): bytearray
    readObject(): java.lang.Object
    readShort(): short
    readUTF(): string
    readUnshared(): java.lang.Object
    readUnsignedByte(): int
    readUnsignedShort(): int
    registerValidation(arg0: ObjectInputValidation, arg1: int): void
    reset(): void
    setObjectInputFilter(arg0: any /*java.io.ObjectInputFilter*/): void
    skip(arg0: long): long
    skipBytes(arg0: int): int
    static nullInputStream(): InputStream
    toString(): string
    transferTo(arg0: OutputStream): long
  } // end ObjectInputStream
} // end namespace java.io
declare namespace java.io {
  interface ObjectInputValidation {
    validateObject(): void
  } // end ObjectInputValidation
} // end namespace java.io
declare namespace java.io {
  interface ObjectOutput /* extends DataOutput, java.lang.AutoCloseable*/ {
    close(): void
    flush(): void
    write(arg0: bytearray): void
    write(arg0: bytearray, arg1: int, arg2: int): void
    write(arg0: int): void
    writeBoolean(arg0: boolean): void
    writeByte(arg0: int): void
    writeBytes(arg0: string): void
    writeChar(arg0: int): void
    writeChars(arg0: string): void
    writeDouble(arg0: double): void
    writeFloat(arg0: float): void
    writeInt(arg0: int): void
    writeLong(arg0: long): void
    writeObject(arg0: java.lang.Object): void
    writeShort(arg0: int): void
    writeUTF(arg0: string): void
  } // end ObjectOutput
} // end namespace java.io
declare namespace java.io {
  class ObjectOutputStream /* extends OutputStream implements ObjectOutput, ObjectStreamConstants*/ {
    close(): void
    defaultWriteObject(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    putFields(): any /*java.io.ObjectOutputStream$PutField*/
    reset(): void
    static nullOutputStream(): OutputStream
    toString(): string
    useProtocolVersion(arg0: int): void
    write(arg0: bytearray): void
    write(arg0: bytearray, arg1: int, arg2: int): void
    write(arg0: int): void
    writeBoolean(arg0: boolean): void
    writeByte(arg0: int): void
    writeBytes(arg0: string): void
    writeChar(arg0: int): void
    writeChars(arg0: string): void
    writeDouble(arg0: double): void
    writeFields(): void
    writeFloat(arg0: float): void
    writeInt(arg0: int): void
    writeLong(arg0: long): void
    writeObject(arg0: java.lang.Object): void
    writeShort(arg0: int): void
    writeUTF(arg0: string): void
    writeUnshared(arg0: java.lang.Object): void
  } // end ObjectOutputStream
} // end namespace java.io
declare namespace java.io {
  class ObjectStreamClass /* extends java.lang.Object implements Serializable*/ {
    equals(arg0: java.lang.Object): boolean
    forClass(): java.lang.Class<java.lang.Object>
    getField(arg0: string): ObjectStreamField
    getFields(): [ObjectStreamField]
    getName(): string
    getSerialVersionUID(): long
    static lookup(arg0: java.lang.Class<java.lang.Object>): ObjectStreamClass
    static lookupAny(arg0: java.lang.Class<java.lang.Object>): ObjectStreamClass
    toString(): string
  } // end ObjectStreamClass
} // end namespace java.io
declare namespace java.io {
  interface ObjectStreamConstants {} // end ObjectStreamConstants
} // end namespace java.io
declare namespace java.io {
  class ObjectStreamField /* extends java.lang.Object implements java.lang.Comparable<any>*/ {
    compareTo(arg0: java.lang.Object): int
    equals(arg0: java.lang.Object): boolean
    getName(): string
    getOffset(): int
    getType(): java.lang.Class<java.lang.Object>
    getTypeCode(): char
    getTypeString(): string
    isPrimitive(): boolean
    isUnshared(): boolean
    toString(): string
  } // end ObjectStreamField
} // end namespace java.io
declare namespace java.io {
  class OutputStream /* extends java.lang.Object implements Closeable, Flushable*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    static nullOutputStream(): OutputStream
    toString(): string
    write(arg0: bytearray): void
    write(arg0: bytearray, arg1: int, arg2: int): void
    write(arg0: int): void
  } // end OutputStream
} // end namespace java.io
declare namespace java.io {
  class OutputStreamWriter /* extends Writer*/ {
    append(arg0: char): Writer
    append(arg0: java.lang.CharSequence): Writer
    append(arg0: java.lang.CharSequence, arg1: int, arg2: int): Writer
    close(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    getEncoding(): string
    static nullWriter(): Writer
    toString(): string
    write(arg0: chararray): void
    write(arg0: chararray, arg1: int, arg2: int): void
    write(arg0: int): void
    write(arg0: string): void
    write(arg0: string, arg1: int, arg2: int): void
  } // end OutputStreamWriter
} // end namespace java.io
declare namespace java.io {
  class PipedInputStream /* extends InputStream*/ {
    available(): int
    close(): void
    connect(arg0: PipedOutputStream): void
    equals(arg0: java.lang.Object): boolean
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: bytearray): int
    read(arg0: bytearray, arg1: int, arg2: int): int
    readAllBytes(): bytearray
    readNBytes(arg0: bytearray, arg1: int, arg2: int): int
    readNBytes(arg0: int): bytearray
    reset(): void
    skip(arg0: long): long
    static nullInputStream(): InputStream
    toString(): string
    transferTo(arg0: OutputStream): long
  } // end PipedInputStream
} // end namespace java.io
declare namespace java.io {
  class PipedOutputStream /* extends OutputStream*/ {
    close(): void
    connect(arg0: PipedInputStream): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    static nullOutputStream(): OutputStream
    toString(): string
    write(arg0: bytearray): void
    write(arg0: bytearray, arg1: int, arg2: int): void
    write(arg0: int): void
  } // end PipedOutputStream
} // end namespace java.io
declare namespace java.io {
  class PipedReader /* extends Reader*/ {
    close(): void
    connect(arg0: PipedWriter): void
    equals(arg0: java.lang.Object): boolean
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: any /*java.nio.CharBuffer*/): int
    read(arg0: chararray): int
    read(arg0: chararray, arg1: int, arg2: int): int
    ready(): boolean
    reset(): void
    skip(arg0: long): long
    static nullReader(): Reader
    toString(): string
    transferTo(arg0: Writer): long
  } // end PipedReader
} // end namespace java.io
declare namespace java.io {
  class PipedWriter /* extends Writer*/ {
    append(arg0: char): Writer
    append(arg0: java.lang.CharSequence): Writer
    append(arg0: java.lang.CharSequence, arg1: int, arg2: int): Writer
    close(): void
    connect(arg0: PipedReader): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    static nullWriter(): Writer
    toString(): string
    write(arg0: chararray): void
    write(arg0: chararray, arg1: int, arg2: int): void
    write(arg0: int): void
    write(arg0: string): void
    write(arg0: string, arg1: int, arg2: int): void
  } // end PipedWriter
} // end namespace java.io
declare namespace java.io {
  class PrintStream /* extends FilterOutputStream implements java.lang.Appendable, Closeable*/ {
    append(arg0: char): PrintStream
    append(arg0: java.lang.CharSequence): PrintStream
    append(arg0: java.lang.CharSequence, arg1: int, arg2: int): PrintStream
    checkError(): boolean
    close(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    format(arg0: java.util.Locale, arg1: string, ...arg2: java.lang.Object[]): PrintStream
    format(arg0: string, ...arg1: java.lang.Object[]): PrintStream
    print(arg0: char): void
    print(arg0: java.lang.Object): void
    print(arg0: boolean): void
    print(arg0: chararray): void
    print(arg0: double): void
    print(arg0: float): void
    print(arg0: int): void
    print(arg0: long): void
    print(arg0: string): void
    printf(arg0: java.util.Locale, arg1: string, ...arg2: java.lang.Object[]): PrintStream
    printf(arg0: string, ...arg1: java.lang.Object[]): PrintStream
    println(): void
    println(arg0: char): void
    println(arg0: java.lang.Object): void
    println(arg0: boolean): void
    println(arg0: chararray): void
    println(arg0: double): void
    println(arg0: float): void
    println(arg0: int): void
    println(arg0: long): void
    println(arg0: string): void
    static nullOutputStream(): OutputStream
    toString(): string
    write(arg0: bytearray): void
    write(arg0: bytearray, arg1: int, arg2: int): void
    write(arg0: int): void
  } // end PrintStream
} // end namespace java.io
declare namespace java.io {
  class PrintWriter /* extends Writer*/ {
    append(arg0: char): PrintWriter
    append(arg0: java.lang.CharSequence): PrintWriter
    append(arg0: java.lang.CharSequence, arg1: int, arg2: int): PrintWriter
    checkError(): boolean
    close(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    format(arg0: java.util.Locale, arg1: string, ...arg2: java.lang.Object[]): PrintWriter
    format(arg0: string, ...arg1: java.lang.Object[]): PrintWriter
    print(arg0: char): void
    print(arg0: java.lang.Object): void
    print(arg0: boolean): void
    print(arg0: chararray): void
    print(arg0: double): void
    print(arg0: float): void
    print(arg0: int): void
    print(arg0: long): void
    print(arg0: string): void
    printf(arg0: java.util.Locale, arg1: string, ...arg2: java.lang.Object[]): PrintWriter
    printf(arg0: string, ...arg1: java.lang.Object[]): PrintWriter
    println(): void
    println(arg0: char): void
    println(arg0: java.lang.Object): void
    println(arg0: boolean): void
    println(arg0: chararray): void
    println(arg0: double): void
    println(arg0: float): void
    println(arg0: int): void
    println(arg0: long): void
    println(arg0: string): void
    static nullWriter(): Writer
    toString(): string
    write(arg0: chararray): void
    write(arg0: chararray, arg1: int, arg2: int): void
    write(arg0: int): void
    write(arg0: string): void
    write(arg0: string, arg1: int, arg2: int): void
  } // end PrintWriter
} // end namespace java.io
declare namespace java.io {
  class PushbackInputStream /* extends FilterInputStream*/ {
    available(): int
    close(): void
    equals(arg0: java.lang.Object): boolean
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: bytearray): int
    read(arg0: bytearray, arg1: int, arg2: int): int
    readAllBytes(): bytearray
    readNBytes(arg0: bytearray, arg1: int, arg2: int): int
    readNBytes(arg0: int): bytearray
    reset(): void
    skip(arg0: long): long
    static nullInputStream(): InputStream
    toString(): string
    transferTo(arg0: OutputStream): long
    unread(arg0: bytearray): void
    unread(arg0: bytearray, arg1: int, arg2: int): void
    unread(arg0: int): void
  } // end PushbackInputStream
} // end namespace java.io
declare namespace java.io {
  class PushbackReader /* extends FilterReader*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: any /*java.nio.CharBuffer*/): int
    read(arg0: chararray): int
    read(arg0: chararray, arg1: int, arg2: int): int
    ready(): boolean
    reset(): void
    skip(arg0: long): long
    static nullReader(): Reader
    toString(): string
    transferTo(arg0: Writer): long
    unread(arg0: chararray): void
    unread(arg0: chararray, arg1: int, arg2: int): void
    unread(arg0: int): void
  } // end PushbackReader
} // end namespace java.io
declare namespace java.io {
  class RandomAccessFile /* extends java.lang.Object implements DataOutput, DataInput, Closeable*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    getChannel(): any /*java.nio.channels.FileChannel*/
    getFD(): FileDescriptor
    getFilePointer(): long
    length(): long
    read(): int
    read(arg0: bytearray): int
    read(arg0: bytearray, arg1: int, arg2: int): int
    readBoolean(): boolean
    readByte(): byte
    readChar(): char
    readDouble(): double
    readFloat(): float
    readFully(arg0: bytearray): void
    readFully(arg0: bytearray, arg1: int, arg2: int): void
    readInt(): int
    readLine(): string
    readLong(): long
    readShort(): short
    readUTF(): string
    readUnsignedByte(): int
    readUnsignedShort(): int
    seek(arg0: long): void
    setLength(arg0: long): void
    skipBytes(arg0: int): int
    toString(): string
    write(arg0: bytearray): void
    write(arg0: bytearray, arg1: int, arg2: int): void
    write(arg0: int): void
    writeBoolean(arg0: boolean): void
    writeByte(arg0: int): void
    writeBytes(arg0: string): void
    writeChar(arg0: int): void
    writeChars(arg0: string): void
    writeDouble(arg0: double): void
    writeFloat(arg0: float): void
    writeInt(arg0: int): void
    writeLong(arg0: long): void
    writeShort(arg0: int): void
    writeUTF(arg0: string): void
  } // end RandomAccessFile
} // end namespace java.io
declare namespace java.io {
  class Reader /* extends java.lang.Object implements java.lang.Readable, Closeable*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: any /*java.nio.CharBuffer*/): int
    read(arg0: chararray): int
    read(arg0: chararray, arg1: int, arg2: int): int
    ready(): boolean
    reset(): void
    skip(arg0: long): long
    static nullReader(): Reader
    toString(): string
    transferTo(arg0: Writer): long
  } // end Reader
} // end namespace java.io
declare namespace java.io {
  class SequenceInputStream /* extends InputStream*/ {
    available(): int
    close(): void
    equals(arg0: java.lang.Object): boolean
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: bytearray): int
    read(arg0: bytearray, arg1: int, arg2: int): int
    readAllBytes(): bytearray
    readNBytes(arg0: bytearray, arg1: int, arg2: int): int
    readNBytes(arg0: int): bytearray
    reset(): void
    skip(arg0: long): long
    static nullInputStream(): InputStream
    toString(): string
    transferTo(arg0: OutputStream): long
  } // end SequenceInputStream
} // end namespace java.io
declare namespace java.io {
  interface Serializable {} // end Serializable
} // end namespace java.io
declare namespace java.io {
  class SerializablePermission /* extends java.security.BasicPermission*/ {
    checkGuard(arg0: java.lang.Object): void
    equals(arg0: java.lang.Object): boolean
    getActions(): string
    getName(): string
    implies(arg0: any /*java.security.Permission*/): boolean
    newPermissionCollection(): any /*java.security.PermissionCollection*/
    toString(): string
  } // end SerializablePermission
} // end namespace java.io
declare namespace java.io {
  class StreamTokenizer /* extends java.lang.Object*/ {
    commentChar(arg0: int): void
    eolIsSignificant(arg0: boolean): void
    equals(arg0: java.lang.Object): boolean
    lineno(): int
    lowerCaseMode(arg0: boolean): void
    nextToken(): int
    ordinaryChar(arg0: int): void
    ordinaryChars(arg0: int, arg1: int): void
    parseNumbers(): void
    pushBack(): void
    quoteChar(arg0: int): void
    resetSyntax(): void
    slashSlashComments(arg0: boolean): void
    slashStarComments(arg0: boolean): void
    toString(): string
    whitespaceChars(arg0: int, arg1: int): void
    wordChars(arg0: int, arg1: int): void
  } // end StreamTokenizer
} // end namespace java.io
declare namespace java.io {
  class StringBufferInputStream /* extends InputStream*/ {
    available(): int
    close(): void
    equals(arg0: java.lang.Object): boolean
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: bytearray): int
    read(arg0: bytearray, arg1: int, arg2: int): int
    readAllBytes(): bytearray
    readNBytes(arg0: bytearray, arg1: int, arg2: int): int
    readNBytes(arg0: int): bytearray
    reset(): void
    skip(arg0: long): long
    static nullInputStream(): InputStream
    toString(): string
    transferTo(arg0: OutputStream): long
  } // end StringBufferInputStream
} // end namespace java.io
declare namespace java.io {
  class StringReader /* extends Reader*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    mark(arg0: int): void
    markSupported(): boolean
    read(): int
    read(arg0: any /*java.nio.CharBuffer*/): int
    read(arg0: chararray): int
    read(arg0: chararray, arg1: int, arg2: int): int
    ready(): boolean
    reset(): void
    skip(arg0: long): long
    static nullReader(): Reader
    toString(): string
    transferTo(arg0: Writer): long
  } // end StringReader
} // end namespace java.io
declare namespace java.io {
  class StringWriter /* extends Writer*/ {
    append(arg0: char): StringWriter
    append(arg0: java.lang.CharSequence): StringWriter
    append(arg0: java.lang.CharSequence, arg1: int, arg2: int): StringWriter
    close(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    getBuffer(): java.lang.StringBuffer
    static nullWriter(): Writer
    toString(): string
    write(arg0: chararray): void
    write(arg0: chararray, arg1: int, arg2: int): void
    write(arg0: int): void
    write(arg0: string): void
    write(arg0: string, arg1: int, arg2: int): void
  } // end StringWriter
} // end namespace java.io
declare namespace java.io {
  class Writer /* extends java.lang.Object implements java.lang.Appendable, Closeable, Flushable*/ {
    append(arg0: char): Writer
    append(arg0: java.lang.CharSequence): Writer
    append(arg0: java.lang.CharSequence, arg1: int, arg2: int): Writer
    close(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    static nullWriter(): Writer
    toString(): string
    write(arg0: chararray): void
    write(arg0: chararray, arg1: int, arg2: int): void
    write(arg0: int): void
    write(arg0: string): void
    write(arg0: string, arg1: int, arg2: int): void
  } // end Writer
} // end namespace java.io
