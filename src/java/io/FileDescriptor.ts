export class FileDescriptor {
// Constructors
public constructor() {
return new Packages.java.io.FileDescriptor()
}
// Constructors
public constructor(int: number) {
return new Packages.java.io.FileDescriptor(int)
}
// Methods
private static dupFd(int: number): FileDescriptor {
return Packages.java.io.FileDescriptor.dupFd(int)
}
private static native isSocket(int: number): boolean {
return Packages.java.io.FileDescriptor.isSocket(int)
}
public getInt$(): number {
return this.getInt$()
}
public isSocket$(): boolean {
return this.isSocket$()
}
public setInt$(int: number): void {
this.setInt$(int)
}
public native sync(): void {
this.sync()
}
public valid(): boolean {
return this.valid()
}
// Fields
private descriptor: number
public static err: FileDescriptor
public static in: FileDescriptor
public static out: FileDescriptor
}
