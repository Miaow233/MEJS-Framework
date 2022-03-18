export class File {
  constructor(path: string) {
    let File = Java.type('java.io.File')
    return new File(path)
  }

  static listRoots(): File[] {
    return Java.type('java.io.File').listRoots()
  }
  /**  */
  getName(): string {
    return this.getName()
  }
  /** 获取父文件夹 */
  getParent(): string {
    return this.getParent()
  }
  getParentFile(): File {
    return this.getParentFile()
  }
  /** 文件或路径是否存在 */
  exists(): boolean {
    return this.exists()
  }
  /** 获取绝对路径 */
  getAbsolutePath(): string {
    return this.getAbsolutePath()
  }
  /** 获取相对路径 */
  getPath(): string {
    return this.getPath()
  }
  /** 创建文件夹 */
  mkdirs(): boolean {
    return this.mkdirs()
  }
  /** 是否是文件 */
  isFile(): boolean {
    return this.isFile()
  }
  /** 是否是文件夹 */
  isDirectory(): boolean {
    return this.isDirectory()
  }
  /** 列出文件夹内容 */
  list(): string[] {
    return this.list()
  }
  /**  */
  listFiles(): File[] {
    return this.listFiles()
  }
  /** 创建文件 */
  createNewFile(): boolean {
    return this.createNewFile()
  }
  /** 创建文件夹 */
  createDirectory(): boolean {
    return this.createDirectory()
  }
  /** 删除文件(夹) */
  delete(): boolean {
    return this.delete()
  }
  /** 上次修改时间 */
  lastModified(): number {
    return this.lastModified()
  }
  /**  */
  toString(): string {
    return this.getAbsolutePath()
  }
}
