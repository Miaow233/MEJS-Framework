export abstract class Reader {
  // Constructors
  public abstract constructor() {
    return new Packages.java.io.Reader()
  }
  // Constructors
  public abstract constructor(obj: Object) {
    return new Packages.java.io.Reader(obj)
  }
  // Methods
  public abstract close(): void {
    this.close()
  }
  public mark(int: number): void {
    this.mark(int)
  }
  public markSupported(): boolean {
    return this.markSupported()
  }
  public read(): number {
    return this.read()
  }
  public read(cha: CharBuffer): number {
    return this.read(cha)
  }
  public read(c: String[]): number {
    return this.read(c)
  }
  public abstract read(c: String[], int: number, int_1: number): number {
    return this.read(c, int, int_1)
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
  protected lock: Object
  private skipBuffer: String[]
  private static maxSkipBufferSize: number
}
