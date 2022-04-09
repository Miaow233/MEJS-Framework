import { File } from './File.js'
import { FileDescriptor } from './FileDescriptor.js'
import { OutputStream } from './OutputStream.js'

export class FileOutputStream extends OutputStream {
  // Constructors
  public constructor(
    ...args: [File] | [File, boolean] | [FileDescriptor] | [FileDescriptor, boolean] | [string] | [string, boolean]
  ) {
    super()
    if (args.length == 1) {
      // file: File
      // str: string
      // fileDescriptor: FileDescriptor
      return new Packages.java.io.FileOutputStream(args[0])
    } else if (args.length == 2) {
      // file: File, boolean: boolean
      // str: string, boolean: boolean
      // fileDescriptor: FileDescriptor, boolean: boolean
      return new Packages.java.io.FileOutputStream(args[0], args[1])
    }
  }
  // Methods
  private open(str: string, boo: boolean): void {
    this.open(str, boo)
  }
  public close(): void {
    this.close()
  }
  protected finalize(): void {
    this.finalize()
  }
  // public getChannel(): FileChannel {
  //   return this.getChannel()
  // }
  // public getFD(): FileDescriptor {
  //   return this.getFD()
  // }
  public write(int: number): void {
    this.write(int)
  }
  // public write(b: byte[]): void {
  //   this.write(b)
  // }
  // public write(b: byte[], int: number, int_1: number): void {
  //   this.write(b, int, int_1)
  // }
  // Fields
  private append: boolean
  // private channel: FileChannel
  private closeLock: Object
  private closed: boolean
  // private fd: FileDescriptor
  // private guard: CloseGuard
  private isFdOwner: boolean
  private path: string
}
