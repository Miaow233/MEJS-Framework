import { Stream } from '../util/stream/Stream.js'
import { Reader } from './Reader.js'

export class BufferedReader extends Reader {
  // Constructors
  public constructor(...args: [Reader] | [Reader, number]) {
    super()
    // reader: Reader
    if (args.length == 1) {
      return new Packages.java.io.BufferedReader(args[0])
    } else {
      // reader: Reader, int: number
      return new Packages.java.io.BufferedReader(args[0], args[1])
    }
  }
  // Methods
  private ensureOpen(): void {
    this.ensureOpen()
  }
  private fill(): void {
    this.fill()
  }
  private read1(c: String[], int: number, int_1: number): number {
    return this.read1(c, int, int_1)
  }
  public close(): void {
    this.close()
  }
  public lines(): Stream {
    return this.lines()
  }
  public mark(int: number): void {
    this.mark(int)
  }
  public markSupported(): boolean {
    return this.markSupported()
  }
  public read(...args: [] | [String[], number, number]): number {
    if (args.length == 0) {
      return this.read()
    } else {
      return this.read(args[0], args[1], args[2])
    }
  }
  public readLine(...args: [] | [boolean]): string {
    if (args.length == 0) {
      return this.readLine()
    } else {
      return this.readLine(args[0])
    }
  }
  public ready(): boolean {
    return this.ready()
  }
  public reset(): void {
    this.reset()
  }
  public skip(lon: number): number {
    return this.skip(lon)
  }
  // Fields
  private cb: String[]
  private in: Reader
  private markedChar: number
  private markedSkipLF: boolean
  private nChars: number
  private nextChar: number
  private readAheadLimit: number
  private skipLF: boolean
  private static INVALIDATED: number
  private static UNMARKED: number
  private static defaultCharBufferSize: number
  private static defaultExpectedLineLength: number
}
