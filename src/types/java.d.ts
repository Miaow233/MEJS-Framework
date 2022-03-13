declare namespace Java {
  function type(name: string): any
}

declare class File {
  constructor(path: string)
  getName(): string
  getPath(): string
  getParentFile(): File
  getAbsolutePath(): string
  exists(): boolean
  isDirectory(): boolean
  isFile(): boolean
  delete(): boolean
  list(): string[]
  listFiles(): File[]
  createNewFile(): boolean
  createDirectory(): boolean
  mkdirs(): boolean
  mkdir(): boolean
}
