import { File } from './File.js'

export abstract class FilenameFilter {
  public abstract accept(file: File, str: String): boolean
}
