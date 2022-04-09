export abstract class Writer {
// Constructors
public abstract constructor() {
return new Packages.java.io.Writer()
}
// Constructors
public abstract constructor(obj: Object) {
return new Packages.java.io.Writer(obj)
}
// Methods
public append(cha: char): Writer {
return this.append(cha)
}
public append(cha: CharSequence): Writer {
return this.append(cha)
}
public append(cha: CharSequence, int: number, int_1: number): Writer {
return this.append(cha, int, int_1)
}
public volatile append(cha: char): Appendable {
return this.append(cha)
}
public volatile append(cha: CharSequence): Appendable {
return this.append(cha)
}
public volatile append(cha: CharSequence, int: number, int_1: number): Appendable {
return this.append(cha, int, int_1)
}
public abstract close(): void {
this.close()
}
public abstract flush(): void {
this.flush()
}
public write(int: number): void {
this.write(int)
}
public write(str: string): void {
this.write(str)
}
public write(str: string, int: number, int_1: number): void {
this.write(str, int, int_1)
}
public write(c: String[]): void {
this.write(c)
}
public abstract write(c: String[], int: number, int_1: number): void {
this.write(c, int, int_1)
}
// Fields
protected lock: Object
private writeBuffer: String[]
private writeBufferSize: number
}
