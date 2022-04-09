import { File } from './File.js'

export abstract class FileFilter {
  public abstract accept(file: File): boolean
}
