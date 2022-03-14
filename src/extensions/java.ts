export class File {
  constructor(path: string) {
    let File = Java.type('java.io.File')
    return new File(path)
  }

  static mkdirs(path: string): boolean {
    let File = Java.type('java.io.File')
    let f: File = new File(path)
    return f.mkdirs()
  }

  static listRoots(): File[] {
    return Java.type('java.io.File').listRoots()
  }

  getName(): string {
    return this.getName()
  }

  getParentFile(): File {
    return this.getParentFile()
  }

  exists(): boolean {
    return this.exists()
  }

  getAbsolutePath(): string {
    return this.getAbsolutePath()
  }

  getPath(): string {
    return this.getPath()
  }

  mkdirs(): boolean {
    return this.mkdirs()
  }

  isFile(): boolean {
    return this.isFile()
  }

  isDirectory(): boolean {
    return this.isDirectory()
  }

  list(): string[] {
    return this.list()
  }

  listFiles(): File[] {
    return this.listFiles()
  }

  createNewFile(): boolean {
    return this.createNewFile()
  }

  createDirectory(): boolean {
    return this.createDirectory()
  }

  delete(): boolean {
    return this.delete()
  }

  lastModified(): number {
    return this.lastModified()
  }

  toString(): string {
    return this.getAbsolutePath()
  }
}
