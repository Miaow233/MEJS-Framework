class java.io.InputStreamReader extends java.io.Reader {
// Constructors
public constructor(inp: InputStream) {
return new Packages.java.io.InputStreamReader(inp)
}
// Constructors
public constructor(inp: InputStream, str: string) {
return new Packages.java.io.InputStreamReader(inp, str)
}
// Constructors
public constructor(inp: InputStream, cha: Charset) {
return new Packages.java.io.InputStreamReader(inp, cha)
}
// Constructors
public constructor(inp: InputStream, cha: CharsetDecoder) {
return new Packages.java.io.InputStreamReader(inp, cha)
}
// Methods
public close(): void {
this.close()
}
public getEncoding(): string {
return this.getEncoding()
}
public read(): number {
return this.read()
}
public read(c: String[], int: number, int_1: number): number {
return this.read(c, int, int_1)
}
public ready(): boolean {
return this.ready()
}
// Fields
private sd: StreamDecoder
}