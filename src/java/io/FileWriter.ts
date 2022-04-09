import { File } from './File.js'
import { FileDescriptor } from './FileDescriptor.js'
import { OutputStreamWriter } from './OutputStreamWriter.js'
export class FileWriter extends OutputStreamWriter {
  // Constructors
  public constructor(
    ...args: [File] | [File, boolean] | [FileDescriptor] | [FileDescriptor, boolean] | [string] | [string, boolean]
  ) {
    switch (args.length) {
      case 1:
        super(args[0])
        return new Packages.java.io.FileWriter(args[0])
      case 2:
        super(args[0], args[1])
        return new Packages.java.io.FileWriter(args[0], args[1])
    }
  }
  // Methods
  // Fields
}
