import { URI } from '../net/URI.js'
import { URL } from '../net/URL.js'
import { FileFilter } from './FileFilter.js'
import { FilenameFilter } from './FilenameFilter.js'

export class File {
  // Constructors
  public constructor(...args: [string] | [string, number] | [string, File] | [string, string] | [URI]) {
    if (args.length == 1) {
      return new Packages.java.io.File(args[0])
    } else if (args.length == 2) {
      return new Packages.java.io.File(args[0], args[1])
    }
  }
  // Methods
  public static createTempFile(str: string, str_1: string, file?: File): File {
    if (file) return Packages.java.io.File.createTempFile(str, str_1, file)
    else return Packages.java.io.File.createTempFile(str, str_1)
  }
  private static generateTempFile(str: string, str_1: string, fil: File): File {
    return Packages.java.io.File.generateTempFile(str, str_1, fil)
  }
  public static listRoots(): File[] {
    return Packages.java.io.File.listRoots()
  }
  private static slashify(str: string, boo: boolean): string {
    return Packages.java.io.File.slashify(str, boo)
  }
  public canExecute(): boolean {
    return this.canExecute()
  }
  public canRead(): boolean {
    return this.canRead()
  }
  public canWrite(): boolean {
    return this.canWrite()
  }
  public compareTo(fil: File): number {
    return this.compareTo(fil)
  }
  // public volatile compareTo(obj: Object): number {
  //   return this.compareTo(obj)
  // }
  public createNewFile(): boolean {
    return this.createNewFile()
  }
  public delete(): boolean {
    return this.delete()
  }
  public deleteOnExit(): void {
    this.deleteOnExit()
  }
  public equals(obj: Object): boolean {
    return this.equals(obj)
  }
  public exists(): boolean {
    return this.exists()
  }
  public getAbsoluteFile(): File {
    return this.getAbsoluteFile()
  }
  public getAbsolutePath(): string {
    return this.getAbsolutePath()
  }
  public getCanonicalFile(): File {
    return this.getCanonicalFile()
  }
  public getCanonicalPath(): string {
    return this.getCanonicalPath()
  }
  public getFreeSpace(): number {
    return this.getFreeSpace()
  }
  public getName(): string {
    return this.getName()
  }
  public getParent(): string {
    return this.getParent()
  }
  public getParentFile(): File {
    return this.getParentFile()
  }
  public getPath(): string {
    return this.getPath()
  }
  getPrefixLength(): number {
    return this.getPrefixLength()
  }
  public getTotalSpace(): number {
    return this.getTotalSpace()
  }
  public getUsableSpace(): number {
    return this.getUsableSpace()
  }
  public hashCode(): number {
    return this.hashCode()
  }
  public isAbsolute(): boolean {
    return this.isAbsolute()
  }
  public isDirectory(): boolean {
    return this.isDirectory()
  }
  public isFile(): boolean {
    return this.isFile()
  }
  public isHidden(): boolean {
    return this.isHidden()
  }
  isInvalid(): boolean {
    return this.isInvalid()
  }
  public lastModified(): number {
    return this.lastModified()
  }
  public length(): number {
    return this.length()
  }
  public list(filter?: FilenameFilter): String[] {
    if (filter) return this.list(filter)
    else return this.list()
  }
  public listFiles(filter?: FileFilter | FilenameFilter): File[] {
    if (filter) return this.listFiles(filter)
    else return this.listFiles()
  }
  public mkdir(): boolean {
    return this.mkdir()
  }
  public mkdirs(): boolean {
    return this.mkdirs()
  }
  public renameTo(fil: File): boolean {
    return this.renameTo(fil)
  }
  public setExecutable(boo: boolean): boolean {
    return this.setExecutable(boo)
  }
  // public setExecutable(boo: boolean, boo_1: boolean): boolean {
  //   return this.setExecutable(boo, boo_1)
  // }
  public setLastModified(lon: number): boolean {
    return this.setLastModified(lon)
  }
  public setReadOnly(): boolean {
    return this.setReadOnly()
  }
  public setReadable(boo: boolean): boolean {
    return this.setReadable(boo)
  }
  // public setReadable(boo: boolean, boo_1: boolean): boolean {
  //   return this.setReadable(boo, boo_1)
  // }
  public setWritable(boo: boolean): boolean {
    return this.setWritable(boo)
  }
  // public setWritable(boo: boolean, boo_1: boolean): boolean {
  //   return this.setWritable(boo, boo_1)
  // }
  public toString(): string {
    return this.toString()
  }
  public toURI(): URI {
    return this.toURI()
  }
  public toURL(): URL {
    return this.toURL()
  }
  // Fields
  private path: string
  // private transient prefixLength: number
  // private transient status: File$PathStatus

  // private static fs: FileSystem
  public static pathSeparator: string
  public static pathSeparatorChar: string
  public static separator: string
  public static separatorChar: string
  private static serialVersionUID: number
}
