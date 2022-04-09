import { InputStreamReader } from './InputStreamReader.js'

export class FileReader extends InputStreamReader {
  // Constructors
  public constructor(fil: File) {
    return new Packages.java.io.FileReader(fil)
  }
  // Constructors
  public constructor(fil: FileDescriptor) {
    return new Packages.java.io.FileReader(fil)
  }
  // Constructors
  public constructor(str: string) {
    return new Packages.java.io.FileReader(str)
  }
  // Methods
  // Fields
}
