import { OutputStream } from './OutputStream.js'
import { Writer } from './Writer.js'

export class OutputStreamWriter extends Writer {
  public constructor(out: OutputStream, args?: string | Charset | CharsetEncoder) {
    if (args) {
      super()
      return new Packages.java.io.OutputStreamWriter(out, args)
    } else {
      super()
      return new Packages.java.io.OutputStreamWriter(out)
    }
  }
  // // Constructors
  // public constructor(out: OutputStream) {
  //   return new Packages.java.io.OutputStreamWriter(out)
  // }
  // // Constructors
  // public constructor(out: OutputStream, str: string) {
  //   return new Packages.java.io.OutputStreamWriter(out, str)
  // }
  // // Constructors
  // public constructor(out: OutputStream, cha: Charset) {
  //   return new Packages.java.io.OutputStreamWriter(out, cha)
  // }
  // // Constructors
  // public constructor(out: OutputStream, cha: CharsetEncoder) {
  //   return new Packages.java.io.OutputStreamWriter(out, cha)
  // }
  // Methods
  public close(): void {
    this.close()
  }
  public flush(): void {
    this.flush()
  }
  flushBuffer(): void {
    this.flushBuffer()
  }
  public getEncoding(): string {
    return this.getEncoding()
  }
  public write(int: number): void {
    this.write(int)
  }
  public write(str: string, int: number, int_1: number): void {
    this.write(str, int, int_1)
  }
  public write(c: String[], int: number, int_1: number): void {
    this.write(c, int, int_1)
  }
  // Fields
  private se: StreamEncoder
}
