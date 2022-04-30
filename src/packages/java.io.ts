interface BufferedInputStreamStatic {
  readonly class: any
  new (arg0: java.io.InputStream, arg1: int): java.io.BufferedInputStream
  new (arg0: java.io.InputStream): java.io.BufferedInputStream
  nullInputStream(): java.io.InputStream
}

export const BufferedInputStream: BufferedInputStreamStatic = Packages.java.io.BufferedInputStream

interface BufferedOutputStreamStatic {
  readonly class: any
  new (arg0: java.io.OutputStream): java.io.BufferedOutputStream
  new (arg0: java.io.OutputStream, arg1: int): java.io.BufferedOutputStream
  nullOutputStream(): java.io.OutputStream
}

export const BufferedOutputStream: BufferedOutputStreamStatic = Packages.java.io.BufferedOutputStream

interface BufferedReaderStatic {
  readonly class: any
  new (arg0: java.io.Reader, arg1: int): java.io.BufferedReader
  new (arg0: java.io.Reader): java.io.BufferedReader
  nullReader(): java.io.Reader
}

export const BufferedReader: BufferedReaderStatic = Packages.java.io.BufferedReader

interface BufferedWriterStatic {
  readonly class: any
  new (arg0: java.io.Writer): java.io.BufferedWriter
  new (arg0: java.io.Writer, arg1: int): java.io.BufferedWriter
  nullWriter(): java.io.Writer
}

export const BufferedWriter: BufferedWriterStatic = Packages.java.io.BufferedWriter

interface ByteArrayInputStreamStatic {
  readonly class: any
  new (arg0: bytearray): java.io.ByteArrayInputStream
  new (arg0: bytearray, arg1: int, arg2: int): java.io.ByteArrayInputStream
  nullInputStream(): java.io.InputStream
}

export const ByteArrayInputStream: ByteArrayInputStreamStatic = Packages.java.io.ByteArrayInputStream

interface ByteArrayOutputStreamStatic {
  readonly class: any
  new (): java.io.ByteArrayOutputStream
  new (arg0: int): java.io.ByteArrayOutputStream
  nullOutputStream(): java.io.OutputStream
}

export const ByteArrayOutputStream: ByteArrayOutputStreamStatic = Packages.java.io.ByteArrayOutputStream

interface CharArrayReaderStatic {
  readonly class: any
  new (arg0: chararray): java.io.CharArrayReader
  new (arg0: chararray, arg1: int, arg2: int): java.io.CharArrayReader
  nullReader(): java.io.Reader
}

export const CharArrayReader: CharArrayReaderStatic = Packages.java.io.CharArrayReader

interface CharArrayWriterStatic {
  readonly class: any
  new (): java.io.CharArrayWriter
  new (arg0: int): java.io.CharArrayWriter
  nullWriter(): java.io.Writer
}

export const CharArrayWriter: CharArrayWriterStatic = Packages.java.io.CharArrayWriter

interface CloseableStatic {
  readonly class: any
}

export const Closeable: CloseableStatic = Packages.java.io.Closeable

interface ConsoleStatic {
  readonly class: any
}

export const Console: ConsoleStatic = Packages.java.io.Console

interface DataInputStatic {
  readonly class: any
}

export const DataInput: DataInputStatic = Packages.java.io.DataInput

interface DataInputStreamStatic {
  readonly class: any
  new (arg0: java.io.InputStream): java.io.DataInputStream
  readUTF(arg0: java.io.DataInput): string
  nullInputStream(): java.io.InputStream
}

export const DataInputStream: DataInputStreamStatic = Packages.java.io.DataInputStream

interface DataOutputStatic {
  readonly class: any
}

export const DataOutput: DataOutputStatic = Packages.java.io.DataOutput

interface DataOutputStreamStatic {
  readonly class: any
  new (arg0: java.io.OutputStream): java.io.DataOutputStream
  nullOutputStream(): java.io.OutputStream
}

export const DataOutputStream: DataOutputStreamStatic = Packages.java.io.DataOutputStream

interface ExternalizableStatic {
  readonly class: any
}

export const Externalizable: ExternalizableStatic = Packages.java.io.Externalizable

interface FileStatic {
  readonly class: any
  new (arg0: string, arg1: string): java.io.File
  new (arg0: java.io.File, arg1: string): java.io.File
  new (arg0: java.net.URI): java.io.File
  new (arg0: string): java.io.File
  createTempFile(arg0: string, arg1: string): java.io.File
  createTempFile(arg0: string, arg1: string, arg2: java.io.File): java.io.File
  listRoots(): [java.io.File]
}

export const File: FileStatic = Packages.java.io.File

interface FileDescriptorStatic {
  readonly class: any
  new (): java.io.FileDescriptor
}

export const FileDescriptor: FileDescriptorStatic = Packages.java.io.FileDescriptor

interface FileFilterStatic {
  readonly class: any
  new (arg0: java.io.FileFilter): java.io.FileFilter
}

export const FileFilter: FileFilterStatic = Packages.java.io.FileFilter

interface FileInputStreamStatic {
  readonly class: any
  new (arg0: java.io.FileDescriptor): java.io.FileInputStream
  new (arg0: java.io.File): java.io.FileInputStream
  new (arg0: string): java.io.FileInputStream
  nullInputStream(): java.io.InputStream
}

export const FileInputStream: FileInputStreamStatic = Packages.java.io.FileInputStream

interface FilenameFilterStatic {
  readonly class: any
  new (arg0: java.io.FilenameFilter): java.io.FilenameFilter
}

export const FilenameFilter: FilenameFilterStatic = Packages.java.io.FilenameFilter

interface FileOutputStreamStatic {
  readonly class: any
  new (arg0: java.io.FileDescriptor): java.io.FileOutputStream
  new (arg0: java.io.File, arg1: boolean): java.io.FileOutputStream
  new (arg0: java.io.File): java.io.FileOutputStream
  new (arg0: string, arg1: boolean): java.io.FileOutputStream
  new (arg0: string): java.io.FileOutputStream
  nullOutputStream(): java.io.OutputStream
}

export const FileOutputStream: FileOutputStreamStatic = Packages.java.io.FileOutputStream

interface FilePermissionStatic {
  readonly class: any
  new (arg0: string, arg1: string): java.io.FilePermission
}

export const FilePermission: FilePermissionStatic = Packages.java.io.FilePermission

interface FileReaderStatic {
  readonly class: any
  new (arg0: java.io.File, arg1: any /*java.nio.charset.Charset*/): java.io.FileReader
  new (arg0: string, arg1: any /*java.nio.charset.Charset*/): java.io.FileReader
  new (arg0: java.io.FileDescriptor): java.io.FileReader
  new (arg0: java.io.File): java.io.FileReader
  new (arg0: string): java.io.FileReader
  nullReader(): java.io.Reader
}

export const FileReader: FileReaderStatic = Packages.java.io.FileReader

interface FileWriterStatic {
  readonly class: any
  new (arg0: java.io.FileDescriptor): java.io.FileWriter
  new (arg0: string, arg1: any /*java.nio.charset.Charset*/): java.io.FileWriter
  new (arg0: string, arg1: any /*java.nio.charset.Charset*/, arg2: boolean): java.io.FileWriter
  new (arg0: java.io.File, arg1: any /*java.nio.charset.Charset*/): java.io.FileWriter
  new (arg0: java.io.File, arg1: any /*java.nio.charset.Charset*/, arg2: boolean): java.io.FileWriter
  new (arg0: string): java.io.FileWriter
  new (arg0: string, arg1: boolean): java.io.FileWriter
  new (arg0: java.io.File): java.io.FileWriter
  new (arg0: java.io.File, arg1: boolean): java.io.FileWriter
  nullWriter(): java.io.Writer
}

export const FileWriter: FileWriterStatic = Packages.java.io.FileWriter

interface FilterInputStreamStatic {
  readonly class: any
  nullInputStream(): java.io.InputStream
}

export const FilterInputStream: FilterInputStreamStatic = Packages.java.io.FilterInputStream

interface FilterOutputStreamStatic {
  readonly class: any
  new (arg0: java.io.OutputStream): java.io.FilterOutputStream
  nullOutputStream(): java.io.OutputStream
}

export const FilterOutputStream: FilterOutputStreamStatic = Packages.java.io.FilterOutputStream

interface FilterReaderStatic {
  readonly class: any
  nullReader(): java.io.Reader
}

export const FilterReader: FilterReaderStatic = Packages.java.io.FilterReader

interface FilterWriterStatic {
  readonly class: any
  nullWriter(): java.io.Writer
}

export const FilterWriter: FilterWriterStatic = Packages.java.io.FilterWriter

interface FlushableStatic {
  readonly class: any
}

export const Flushable: FlushableStatic = Packages.java.io.Flushable

interface InputStreamStatic {
  readonly class: any
  new (): java.io.InputStream
  nullInputStream(): java.io.InputStream
}

export const InputStream: InputStreamStatic = Packages.java.io.InputStream

interface InputStreamReaderStatic {
  readonly class: any
  new (arg0: java.io.InputStream, arg1: any /*java.nio.charset.CharsetDecoder*/): java.io.InputStreamReader
  new (arg0: java.io.InputStream, arg1: any /*java.nio.charset.Charset*/): java.io.InputStreamReader
  new (arg0: java.io.InputStream, arg1: string): java.io.InputStreamReader
  new (arg0: java.io.InputStream): java.io.InputStreamReader
  nullReader(): java.io.Reader
}

export const InputStreamReader: InputStreamReaderStatic = Packages.java.io.InputStreamReader

interface LineNumberInputStreamStatic {
  readonly class: any
  new (arg0: java.io.InputStream): java.io.LineNumberInputStream
  nullInputStream(): java.io.InputStream
}

export const LineNumberInputStream: LineNumberInputStreamStatic = Packages.java.io.LineNumberInputStream

interface LineNumberReaderStatic {
  readonly class: any
  new (arg0: java.io.Reader): java.io.LineNumberReader
  new (arg0: java.io.Reader, arg1: int): java.io.LineNumberReader
  nullReader(): java.io.Reader
}

export const LineNumberReader: LineNumberReaderStatic = Packages.java.io.LineNumberReader

interface ObjectInputStatic {
  readonly class: any
}

export const ObjectInput: ObjectInputStatic = Packages.java.io.ObjectInput

interface ObjectInputStreamStatic {
  readonly class: any
  new (arg0: java.io.InputStream): java.io.ObjectInputStream
  nullInputStream(): java.io.InputStream
}

export const ObjectInputStream: ObjectInputStreamStatic = Packages.java.io.ObjectInputStream

interface ObjectInputValidationStatic {
  readonly class: any
}

export const ObjectInputValidation: ObjectInputValidationStatic = Packages.java.io.ObjectInputValidation

interface ObjectOutputStatic {
  readonly class: any
}

export const ObjectOutput: ObjectOutputStatic = Packages.java.io.ObjectOutput

interface ObjectOutputStreamStatic {
  readonly class: any
  new (arg0: java.io.OutputStream): java.io.ObjectOutputStream
  nullOutputStream(): java.io.OutputStream
}

export const ObjectOutputStream: ObjectOutputStreamStatic = Packages.java.io.ObjectOutputStream

interface ObjectStreamClassStatic {
  readonly class: any
  lookup(arg0: java.lang.Class<java.lang.Object>): java.io.ObjectStreamClass
  lookupAny(arg0: java.lang.Class<java.lang.Object>): java.io.ObjectStreamClass
}

export const ObjectStreamClass: ObjectStreamClassStatic = Packages.java.io.ObjectStreamClass

interface ObjectStreamConstantsStatic {
  readonly class: any
}

export const ObjectStreamConstants: ObjectStreamConstantsStatic = Packages.java.io.ObjectStreamConstants

interface ObjectStreamFieldStatic {
  readonly class: any
  new (arg0: string, arg1: java.lang.Class<java.lang.Object>, arg2: boolean): java.io.ObjectStreamField
  new (arg0: string, arg1: java.lang.Class<java.lang.Object>): java.io.ObjectStreamField
}

export const ObjectStreamField: ObjectStreamFieldStatic = Packages.java.io.ObjectStreamField

interface OutputStreamStatic {
  readonly class: any
  new (): java.io.OutputStream
  nullOutputStream(): java.io.OutputStream
}

export const OutputStream: OutputStreamStatic = Packages.java.io.OutputStream

interface OutputStreamWriterStatic {
  readonly class: any
  new (arg0: java.io.OutputStream, arg1: any /*java.nio.charset.CharsetEncoder*/): java.io.OutputStreamWriter
  new (arg0: java.io.OutputStream, arg1: any /*java.nio.charset.Charset*/): java.io.OutputStreamWriter
  new (arg0: java.io.OutputStream): java.io.OutputStreamWriter
  new (arg0: java.io.OutputStream, arg1: string): java.io.OutputStreamWriter
  nullWriter(): java.io.Writer
}

export const OutputStreamWriter: OutputStreamWriterStatic = Packages.java.io.OutputStreamWriter

interface PipedInputStreamStatic {
  readonly class: any
  new (arg0: int): java.io.PipedInputStream
  new (): java.io.PipedInputStream
  new (arg0: java.io.PipedOutputStream, arg1: int): java.io.PipedInputStream
  new (arg0: java.io.PipedOutputStream): java.io.PipedInputStream
  nullInputStream(): java.io.InputStream
}

export const PipedInputStream: PipedInputStreamStatic = Packages.java.io.PipedInputStream

interface PipedOutputStreamStatic {
  readonly class: any
  new (arg0: java.io.PipedInputStream): java.io.PipedOutputStream
  new (): java.io.PipedOutputStream
  nullOutputStream(): java.io.OutputStream
}

export const PipedOutputStream: PipedOutputStreamStatic = Packages.java.io.PipedOutputStream

interface PipedReaderStatic {
  readonly class: any
  new (arg0: int): java.io.PipedReader
  new (): java.io.PipedReader
  new (arg0: java.io.PipedWriter, arg1: int): java.io.PipedReader
  new (arg0: java.io.PipedWriter): java.io.PipedReader
  nullReader(): java.io.Reader
}

export const PipedReader: PipedReaderStatic = Packages.java.io.PipedReader

interface PipedWriterStatic {
  readonly class: any
  new (arg0: java.io.PipedReader): java.io.PipedWriter
  new (): java.io.PipedWriter
  nullWriter(): java.io.Writer
}

export const PipedWriter: PipedWriterStatic = Packages.java.io.PipedWriter

interface PrintStreamStatic {
  readonly class: any
  new (arg0: string, arg1: string): java.io.PrintStream
  new (arg0: string): java.io.PrintStream
  new (arg0: java.io.OutputStream, arg1: boolean, arg2: any /*java.nio.charset.Charset*/): java.io.PrintStream
  new (arg0: java.io.OutputStream, arg1: boolean, arg2: string): java.io.PrintStream
  new (arg0: string, arg1: any /*java.nio.charset.Charset*/): java.io.PrintStream
  new (arg0: java.io.File, arg1: string): java.io.PrintStream
  new (arg0: java.io.File, arg1: any /*java.nio.charset.Charset*/): java.io.PrintStream
  new (arg0: java.io.File): java.io.PrintStream
  new (arg0: java.io.OutputStream): java.io.PrintStream
  new (arg0: java.io.OutputStream, arg1: boolean): java.io.PrintStream
  nullOutputStream(): java.io.OutputStream
}

export const PrintStream: PrintStreamStatic = Packages.java.io.PrintStream

interface PrintWriterStatic {
  readonly class: any
  new (arg0: string): java.io.PrintWriter
  new (arg0: string, arg1: string): java.io.PrintWriter
  new (arg0: string, arg1: any /*java.nio.charset.Charset*/): java.io.PrintWriter
  new (arg0: java.io.File): java.io.PrintWriter
  new (arg0: java.io.File, arg1: string): java.io.PrintWriter
  new (arg0: java.io.File, arg1: any /*java.nio.charset.Charset*/): java.io.PrintWriter
  new (arg0: java.io.Writer): java.io.PrintWriter
  new (arg0: java.io.Writer, arg1: boolean): java.io.PrintWriter
  new (arg0: java.io.OutputStream, arg1: boolean, arg2: any /*java.nio.charset.Charset*/): java.io.PrintWriter
  new (arg0: java.io.OutputStream, arg1: boolean): java.io.PrintWriter
  new (arg0: java.io.OutputStream): java.io.PrintWriter
  nullWriter(): java.io.Writer
}

export const PrintWriter: PrintWriterStatic = Packages.java.io.PrintWriter

interface PushbackInputStreamStatic {
  readonly class: any
  new (arg0: java.io.InputStream): java.io.PushbackInputStream
  new (arg0: java.io.InputStream, arg1: int): java.io.PushbackInputStream
  nullInputStream(): java.io.InputStream
}

export const PushbackInputStream: PushbackInputStreamStatic = Packages.java.io.PushbackInputStream

interface PushbackReaderStatic {
  readonly class: any
  new (arg0: java.io.Reader, arg1: int): java.io.PushbackReader
  new (arg0: java.io.Reader): java.io.PushbackReader
  nullReader(): java.io.Reader
}

export const PushbackReader: PushbackReaderStatic = Packages.java.io.PushbackReader

interface RandomAccessFileStatic {
  readonly class: any
  new (arg0: java.io.File, arg1: string): java.io.RandomAccessFile
  new (arg0: string, arg1: string): java.io.RandomAccessFile
}

export const RandomAccessFile: RandomAccessFileStatic = Packages.java.io.RandomAccessFile

interface ReaderStatic {
  readonly class: any
  nullReader(): java.io.Reader
}

export const Reader: ReaderStatic = Packages.java.io.Reader

interface SequenceInputStreamStatic {
  readonly class: any
  new (arg0: java.util.Enumeration<java.io.InputStream>): java.io.SequenceInputStream
  new (arg0: java.io.InputStream, arg1: java.io.InputStream): java.io.SequenceInputStream
  nullInputStream(): java.io.InputStream
}

export const SequenceInputStream: SequenceInputStreamStatic = Packages.java.io.SequenceInputStream

interface SerializableStatic {
  readonly class: any
}

export const Serializable: SerializableStatic = Packages.java.io.Serializable

interface SerializablePermissionStatic {
  readonly class: any
  new (arg0: string): java.io.SerializablePermission
  new (arg0: string, arg1: string): java.io.SerializablePermission
}

export const SerializablePermission: SerializablePermissionStatic = Packages.java.io.SerializablePermission

interface StreamTokenizerStatic {
  readonly class: any
  new (arg0: java.io.Reader): java.io.StreamTokenizer
  new (arg0: java.io.InputStream): java.io.StreamTokenizer
}

export const StreamTokenizer: StreamTokenizerStatic = Packages.java.io.StreamTokenizer

interface StringBufferInputStreamStatic {
  readonly class: any
  new (arg0: string): java.io.StringBufferInputStream
  nullInputStream(): java.io.InputStream
}

export const StringBufferInputStream: StringBufferInputStreamStatic = Packages.java.io.StringBufferInputStream

interface StringReaderStatic {
  readonly class: any
  new (arg0: string): java.io.StringReader
  nullReader(): java.io.Reader
}

export const StringReader: StringReaderStatic = Packages.java.io.StringReader

interface StringWriterStatic {
  readonly class: any
  new (): java.io.StringWriter
  new (arg0: int): java.io.StringWriter
  nullWriter(): java.io.Writer
}

export const StringWriter: StringWriterStatic = Packages.java.io.StringWriter

interface WriterStatic {
  readonly class: any
  nullWriter(): java.io.Writer
}

export const Writer: WriterStatic = Packages.java.io.Writer
