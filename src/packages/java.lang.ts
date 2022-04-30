interface AppendableStatic {
  readonly class: any
}

export const Appendable: AppendableStatic = Packages.java.lang.Appendable

interface AutoCloseableStatic {
  readonly class: any
}

export const AutoCloseable: AutoCloseableStatic = Packages.java.lang.AutoCloseable

interface BooleanStatic {
  readonly class: any
  new (arg0: boolean): boolean | null
  new (arg0: string): boolean | null
  getBoolean(arg0: string): boolean
  logicalAnd(arg0: boolean, arg1: boolean): boolean
  logicalOr(arg0: boolean, arg1: boolean): boolean
  logicalXor(arg0: boolean, arg1: boolean): boolean
  parseBoolean(arg0: string): boolean
  compare(arg0: boolean, arg1: boolean): int
  hashCode(arg0: boolean): int
  valueOf(arg0: boolean): boolean | null
  valueOf(arg0: string): boolean | null
  toString(arg0: boolean): string
}

export const Boolean: BooleanStatic = Packages.java.lang.Boolean

interface ByteStatic {
  readonly class: any
  new (arg0: byte): java.lang.Byte
  new (arg0: string): java.lang.Byte
  parseByte(arg0: string): byte
  parseByte(arg0: string, arg1: int): byte
  compare(arg0: byte, arg1: byte): int
  compareUnsigned(arg0: byte, arg1: byte): int
  hashCode(arg0: byte): int
  toUnsignedInt(arg0: byte): int
  decode(arg0: string): java.lang.Byte
  valueOf(arg0: byte): java.lang.Byte
  valueOf(arg0: string): java.lang.Byte
  valueOf(arg0: string, arg1: int): java.lang.Byte
  toString(arg0: byte): string
  toUnsignedLong(arg0: byte): long
}

export const Byte: ByteStatic = Packages.java.lang.Byte

interface CharacterStatic {
  readonly class: any
  new (arg0: char): java.lang.Character
  isAlphabetic(arg0: int): boolean
  isBmpCodePoint(arg0: int): boolean
  isDefined(arg0: char): boolean
  isDefined(arg0: int): boolean
  isDigit(arg0: char): boolean
  isDigit(arg0: int): boolean
  isHighSurrogate(arg0: char): boolean
  isISOControl(arg0: char): boolean
  isISOControl(arg0: int): boolean
  isIdentifierIgnorable(arg0: char): boolean
  isIdentifierIgnorable(arg0: int): boolean
  isIdeographic(arg0: int): boolean
  isJavaIdentifierPart(arg0: char): boolean
  isJavaIdentifierPart(arg0: int): boolean
  isJavaIdentifierStart(arg0: char): boolean
  isJavaIdentifierStart(arg0: int): boolean
  isJavaLetter(arg0: char): boolean
  isJavaLetterOrDigit(arg0: char): boolean
  isLetter(arg0: char): boolean
  isLetter(arg0: int): boolean
  isLetterOrDigit(arg0: char): boolean
  isLetterOrDigit(arg0: int): boolean
  isLowSurrogate(arg0: char): boolean
  isLowerCase(arg0: char): boolean
  isLowerCase(arg0: int): boolean
  isMirrored(arg0: char): boolean
  isMirrored(arg0: int): boolean
  isSpace(arg0: char): boolean
  isSpaceChar(arg0: char): boolean
  isSpaceChar(arg0: int): boolean
  isSupplementaryCodePoint(arg0: int): boolean
  isSurrogate(arg0: char): boolean
  isSurrogatePair(arg0: char, arg1: char): boolean
  isTitleCase(arg0: char): boolean
  isTitleCase(arg0: int): boolean
  isUnicodeIdentifierPart(arg0: char): boolean
  isUnicodeIdentifierPart(arg0: int): boolean
  isUnicodeIdentifierStart(arg0: char): boolean
  isUnicodeIdentifierStart(arg0: int): boolean
  isUpperCase(arg0: char): boolean
  isUpperCase(arg0: int): boolean
  isValidCodePoint(arg0: int): boolean
  isWhitespace(arg0: char): boolean
  isWhitespace(arg0: int): boolean
  getDirectionality(arg0: char): byte
  getDirectionality(arg0: int): byte
  forDigit(arg0: int, arg1: int): char
  highSurrogate(arg0: int): char
  lowSurrogate(arg0: int): char
  reverseBytes(arg0: char): char
  toLowerCase(arg0: char): char
  toTitleCase(arg0: char): char
  toUpperCase(arg0: char): char
  toChars(arg0: int): chararray
  charCount(arg0: int): int
  codePointAt(arg0: chararray, arg1: int): int
  codePointAt(arg0: chararray, arg1: int, arg2: int): int
  codePointAt(arg0: java.lang.CharSequence, arg1: int): int
  codePointBefore(arg0: chararray, arg1: int): int
  codePointBefore(arg0: chararray, arg1: int, arg2: int): int
  codePointBefore(arg0: java.lang.CharSequence, arg1: int): int
  codePointCount(arg0: chararray, arg1: int, arg2: int): int
  codePointCount(arg0: java.lang.CharSequence, arg1: int, arg2: int): int
  codePointOf(arg0: string): int
  compare(arg0: char, arg1: char): int
  digit(arg0: char, arg1: int): int
  digit(arg0: int, arg1: int): int
  getNumericValue(arg0: char): int
  getNumericValue(arg0: int): int
  getType(arg0: char): int
  getType(arg0: int): int
  hashCode(arg0: char): int
  offsetByCodePoints(arg0: chararray, arg1: int, arg2: int, arg3: int, arg4: int): int
  offsetByCodePoints(arg0: java.lang.CharSequence, arg1: int, arg2: int): int
  toChars(arg0: int, arg1: chararray, arg2: int): int
  toCodePoint(arg0: char, arg1: char): int
  toLowerCase(arg0: int): int
  toTitleCase(arg0: int): int
  toUpperCase(arg0: int): int
  valueOf(arg0: char): java.lang.Character
  getName(arg0: int): string
  toString(arg0: char): string
  toString(arg0: int): string
}

export const Character: CharacterStatic = Packages.java.lang.Character

interface CharSequenceStatic {
  readonly class: any
  compare(arg0: java.lang.CharSequence, arg1: java.lang.CharSequence): int
}

export const CharSequence: CharSequenceStatic = Packages.java.lang.CharSequence

interface ClassStatic {
  readonly class: any
  forName(arg0: any /*java.lang.Module*/, arg1: string): java.lang.Class<java.lang.Object>
  forName(arg0: string): java.lang.Class<java.lang.Object>
  forName(arg0: string, arg1: boolean, arg2: java.lang.ClassLoader): java.lang.Class<java.lang.Object>
}

export const Class: ClassStatic = Packages.java.lang.Class

interface ClassLoaderStatic {
  readonly class: any
  getSystemResourceAsStream(arg0: string): java.io.InputStream
  getPlatformClassLoader(): java.lang.ClassLoader
  getSystemClassLoader(): java.lang.ClassLoader
  getSystemResource(arg0: string): java.net.URL
  getSystemResources(arg0: string): java.util.Enumeration<java.net.URL>
}

export const ClassLoader: ClassLoaderStatic = Packages.java.lang.ClassLoader

interface ClassValueStatic {
  readonly class: any
}

export const ClassValue: ClassValueStatic = Packages.java.lang.ClassValue

interface CloneableStatic {
  readonly class: any
}

export const Cloneable: CloneableStatic = Packages.java.lang.Cloneable

interface ComparableStatic {
  readonly class: any
}

export const Comparable: ComparableStatic = Packages.java.lang.Comparable

interface CompilerStatic {
  readonly class: any
  compileClass(arg0: java.lang.Class<java.lang.Object>): boolean
  compileClasses(arg0: string): boolean
  command(arg0: java.lang.Object): java.lang.Object
  disable(): void
  enable(): void
}

export const Compiler: CompilerStatic = Packages.java.lang.Compiler

interface DoubleStatic {
  readonly class: any
  new (arg0: double): double | null
  new (arg0: string): double | null
  isFinite(arg0: double): boolean
  isInfinite(arg0: double): boolean
  isNaN(arg0: double): boolean
  max(arg0: double, arg1: double): double
  min(arg0: double, arg1: double): double
  parseDouble(arg0: string): double
  sum(arg0: double, arg1: double): double
  compare(arg0: double, arg1: double): int
  hashCode(arg0: double): int
  valueOf(arg0: double): double | null
  valueOf(arg0: string): double | null
  toHexString(arg0: double): string
  toString(arg0: double): string
  doubleToLongBits(arg0: double): long
  longBitsToDouble(arg0: long): double
  doubleToRawLongBits(arg0: double): long
}

export const Double: DoubleStatic = Packages.java.lang.Double

interface EnumStatic {
  readonly class: any
  valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T
}

export const Enum: EnumStatic = Packages.java.lang.Enum

interface FloatStatic {
  readonly class: any
  new (arg0: string): float | null
  new (arg0: double): float | null
  new (arg0: float): float | null
  isFinite(arg0: float): boolean
  isInfinite(arg0: float): boolean
  isNaN(arg0: float): boolean
  max(arg0: float, arg1: float): float
  min(arg0: float, arg1: float): float
  parseFloat(arg0: string): float
  sum(arg0: float, arg1: float): float
  compare(arg0: float, arg1: float): int
  floatToIntBits(arg0: float): int
  hashCode(arg0: float): int
  valueOf(arg0: float): float | null
  valueOf(arg0: string): float | null
  toHexString(arg0: float): string
  toString(arg0: float): string
  intBitsToFloat(arg0: int): float
  floatToRawIntBits(arg0: float): int
}

export const Float: FloatStatic = Packages.java.lang.Float

interface InheritableThreadLocalStatic {
  readonly class: any
  new <T>(): java.lang.InheritableThreadLocal<T>
  withInitial<S>(arg0: any /*java.util.function.Supplier*/): java.lang.ThreadLocal<S>
}

export const InheritableThreadLocal: InheritableThreadLocalStatic = Packages.java.lang.InheritableThreadLocal

interface IntegerStatic {
  readonly class: any
  new (arg0: string): int | null
  new (arg0: int): int | null
  bitCount(arg0: int): int
  compare(arg0: int, arg1: int): int
  compareUnsigned(arg0: int, arg1: int): int
  divideUnsigned(arg0: int, arg1: int): int
  hashCode(arg0: int): int
  highestOneBit(arg0: int): int
  lowestOneBit(arg0: int): int
  max(arg0: int, arg1: int): int
  min(arg0: int, arg1: int): int
  numberOfLeadingZeros(arg0: int): int
  numberOfTrailingZeros(arg0: int): int
  parseInt(arg0: java.lang.CharSequence, arg1: int, arg2: int, arg3: int): int
  parseInt(arg0: string): int
  parseInt(arg0: string, arg1: int): int
  parseUnsignedInt(arg0: java.lang.CharSequence, arg1: int, arg2: int, arg3: int): int
  parseUnsignedInt(arg0: string): int
  parseUnsignedInt(arg0: string, arg1: int): int
  remainderUnsigned(arg0: int, arg1: int): int
  reverse(arg0: int): int
  reverseBytes(arg0: int): int
  rotateLeft(arg0: int, arg1: int): int
  rotateRight(arg0: int, arg1: int): int
  signum(arg0: int): int
  sum(arg0: int, arg1: int): int
  decode(arg0: string): int | null
  getInteger(arg0: string): int | null
  getInteger(arg0: string, arg1: int): int | null
  getInteger(arg0: string, arg1: int | null): int | null
  valueOf(arg0: int): int | null
  valueOf(arg0: string): int | null
  valueOf(arg0: string, arg1: int): int | null
  toBinaryString(arg0: int): string
  toHexString(arg0: int): string
  toOctalString(arg0: int): string
  toString(arg0: int): string
  toString(arg0: int, arg1: int): string
  toUnsignedString(arg0: int): string
  toUnsignedString(arg0: int, arg1: int): string
  toUnsignedLong(arg0: int): long
}

export const Integer: IntegerStatic = Packages.java.lang.Integer

interface IterableStatic {
  readonly class: any
}

export const Iterable: IterableStatic = Packages.java.lang.Iterable

interface LongStatic {
  readonly class: any
  new (arg0: string): long | null
  new (arg0: long): long | null
  bitCount(arg0: long): int
  compare(arg0: long, arg1: long): int
  compareUnsigned(arg0: long, arg1: long): int
  hashCode(arg0: long): int
  numberOfLeadingZeros(arg0: long): int
  numberOfTrailingZeros(arg0: long): int
  signum(arg0: long): int
  decode(arg0: string): long | null
  getLong(arg0: string): long | null
  getLong(arg0: string, arg1: long | null): long | null
  getLong(arg0: string, arg1: long): long | null
  valueOf(arg0: string): long | null
  valueOf(arg0: string, arg1: int): long | null
  valueOf(arg0: long): long | null
  toBinaryString(arg0: long): string
  toHexString(arg0: long): string
  toOctalString(arg0: long): string
  toString(arg0: long): string
  toString(arg0: long, arg1: int): string
  toUnsignedString(arg0: long): string
  toUnsignedString(arg0: long, arg1: int): string
  divideUnsigned(arg0: long, arg1: long): long
  highestOneBit(arg0: long): long
  lowestOneBit(arg0: long): long
  max(arg0: long, arg1: long): long
  min(arg0: long, arg1: long): long
  parseLong(arg0: java.lang.CharSequence, arg1: int, arg2: int, arg3: int): long
  parseLong(arg0: string): long
  parseLong(arg0: string, arg1: int): long
  parseUnsignedLong(arg0: java.lang.CharSequence, arg1: int, arg2: int, arg3: int): long
  parseUnsignedLong(arg0: string): long
  parseUnsignedLong(arg0: string, arg1: int): long
  remainderUnsigned(arg0: long, arg1: long): long
  reverse(arg0: long): long
  reverseBytes(arg0: long): long
  rotateLeft(arg0: long, arg1: int): long
  rotateRight(arg0: long, arg1: int): long
  sum(arg0: long, arg1: long): long
}

export const Long: LongStatic = Packages.java.lang.Long

interface MathStatic {
  readonly class: any
  IEEEremainder(arg0: double, arg1: double): double
  abs(arg0: double): double
  acos(arg0: double): double
  asin(arg0: double): double
  atan(arg0: double): double
  atan2(arg0: double, arg1: double): double
  cbrt(arg0: double): double
  ceil(arg0: double): double
  copySign(arg0: double, arg1: double): double
  cos(arg0: double): double
  cosh(arg0: double): double
  exp(arg0: double): double
  expm1(arg0: double): double
  floor(arg0: double): double
  fma(arg0: double, arg1: double, arg2: double): double
  hypot(arg0: double, arg1: double): double
  log(arg0: double): double
  log10(arg0: double): double
  log1p(arg0: double): double
  max(arg0: double, arg1: double): double
  min(arg0: double, arg1: double): double
  nextAfter(arg0: double, arg1: double): double
  nextDown(arg0: double): double
  nextUp(arg0: double): double
  pow(arg0: double, arg1: double): double
  random(): double
  rint(arg0: double): double
  scalb(arg0: double, arg1: int): double
  signum(arg0: double): double
  sin(arg0: double): double
  sinh(arg0: double): double
  sqrt(arg0: double): double
  tan(arg0: double): double
  tanh(arg0: double): double
  toDegrees(arg0: double): double
  toRadians(arg0: double): double
  ulp(arg0: double): double
  abs(arg0: float): float
  copySign(arg0: float, arg1: float): float
  fma(arg0: float, arg1: float, arg2: float): float
  max(arg0: float, arg1: float): float
  min(arg0: float, arg1: float): float
  nextAfter(arg0: float, arg1: double): float
  nextDown(arg0: float): float
  nextUp(arg0: float): float
  scalb(arg0: float, arg1: int): float
  signum(arg0: float): float
  ulp(arg0: float): float
  abs(arg0: int): int
  addExact(arg0: int, arg1: int): int
  decrementExact(arg0: int): int
  floorDiv(arg0: int, arg1: int): int
  floorMod(arg0: int, arg1: int): int
  floorMod(arg0: long, arg1: int): int
  getExponent(arg0: double): int
  getExponent(arg0: float): int
  incrementExact(arg0: int): int
  max(arg0: int, arg1: int): int
  min(arg0: int, arg1: int): int
  multiplyExact(arg0: int, arg1: int): int
  negateExact(arg0: int): int
  round(arg0: float): int
  subtractExact(arg0: int, arg1: int): int
  toIntExact(arg0: long): int
  abs(arg0: long): long
  addExact(arg0: long, arg1: long): long
  decrementExact(arg0: long): long
  floorDiv(arg0: long, arg1: int): long
  floorDiv(arg0: long, arg1: long): long
  floorMod(arg0: long, arg1: long): long
  incrementExact(arg0: long): long
  max(arg0: long, arg1: long): long
  min(arg0: long, arg1: long): long
  multiplyExact(arg0: long, arg1: int): long
  multiplyExact(arg0: long, arg1: long): long
  multiplyFull(arg0: int, arg1: int): long
  multiplyHigh(arg0: long, arg1: long): long
  negateExact(arg0: long): long
  round(arg0: double): long
  subtractExact(arg0: long, arg1: long): long
}

export const Math: MathStatic = Packages.java.lang.Math

interface NumberStatic {
  readonly class: any
  new (): java.lang.Number
}

export const Number: NumberStatic = Packages.java.lang.Number

interface PackageStatic {
  readonly class: any
  getPackage(arg0: string): java.lang.Package
  getPackages(): [java.lang.Package]
}

export const Package: PackageStatic = Packages.java.lang.Package

interface ProcessStatic {
  readonly class: any
  new (): java.lang.Process
}

export const Process: ProcessStatic = Packages.java.lang.Process

interface ProcessBuilderStatic {
  readonly class: any
  new (arg0: java.util.List<string>): java.lang.ProcessBuilder
  new (...arg0: string[]): java.lang.ProcessBuilder
  startPipeline(arg0: java.util.List<java.lang.ProcessBuilder>): java.util.List<java.lang.Process>
}

export const ProcessBuilder: ProcessBuilderStatic = Packages.java.lang.ProcessBuilder

interface ReadableStatic {
  readonly class: any
}

export const Readable: ReadableStatic = Packages.java.lang.Readable

interface RunnableStatic {
  readonly class: any
  new (arg0: java.lang.Runnable): java.lang.Runnable
}

export const Runnable: RunnableStatic = Packages.java.lang.Runnable

interface RuntimeStatic {
  readonly class: any
  getRuntime(): java.lang.Runtime
  version(): any /*java.lang.Runtime$Version*/
}

export const Runtime: RuntimeStatic = Packages.java.lang.Runtime

interface RuntimePermissionStatic {
  readonly class: any
  new (arg0: string): java.lang.RuntimePermission
  new (arg0: string, arg1: string): java.lang.RuntimePermission
}

export const RuntimePermission: RuntimePermissionStatic = Packages.java.lang.RuntimePermission

interface SecurityManagerStatic {
  readonly class: any
  new (): java.lang.SecurityManager
}

export const SecurityManager: SecurityManagerStatic = Packages.java.lang.SecurityManager

interface ShortStatic {
  readonly class: any
  new (arg0: short): java.lang.Short
  new (arg0: string): java.lang.Short
  compare(arg0: short, arg1: short): int
  compareUnsigned(arg0: short, arg1: short): int
  hashCode(arg0: short): int
  toUnsignedInt(arg0: short): int
  decode(arg0: string): java.lang.Short
  valueOf(arg0: string): java.lang.Short
  valueOf(arg0: string, arg1: int): java.lang.Short
  valueOf(arg0: short): java.lang.Short
  toString(arg0: short): string
  toUnsignedLong(arg0: short): long
  parseShort(arg0: string): short
  parseShort(arg0: string, arg1: int): short
  reverseBytes(arg0: short): short
}

export const Short: ShortStatic = Packages.java.lang.Short

interface StackTraceElementStatic {
  readonly class: any
  new (
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: string,
    arg5: string,
    arg6: int
  ): java.lang.StackTraceElement
  new (arg0: string, arg1: string, arg2: string, arg3: int): java.lang.StackTraceElement
}

export const StackTraceElement: StackTraceElementStatic = Packages.java.lang.StackTraceElement

interface StrictMathStatic {
  readonly class: any
  abs(arg0: double): double
  cbrt(arg0: double): double
  ceil(arg0: double): double
  copySign(arg0: double, arg1: double): double
  exp(arg0: double): double
  floor(arg0: double): double
  fma(arg0: double, arg1: double, arg2: double): double
  hypot(arg0: double, arg1: double): double
  max(arg0: double, arg1: double): double
  min(arg0: double, arg1: double): double
  nextAfter(arg0: double, arg1: double): double
  nextDown(arg0: double): double
  nextUp(arg0: double): double
  pow(arg0: double, arg1: double): double
  random(): double
  rint(arg0: double): double
  scalb(arg0: double, arg1: int): double
  signum(arg0: double): double
  ulp(arg0: double): double
  abs(arg0: float): float
  copySign(arg0: float, arg1: float): float
  fma(arg0: float, arg1: float, arg2: float): float
  max(arg0: float, arg1: float): float
  min(arg0: float, arg1: float): float
  nextAfter(arg0: float, arg1: double): float
  nextDown(arg0: float): float
  nextUp(arg0: float): float
  scalb(arg0: float, arg1: int): float
  signum(arg0: float): float
  ulp(arg0: float): float
  abs(arg0: int): int
  addExact(arg0: int, arg1: int): int
  floorDiv(arg0: int, arg1: int): int
  floorMod(arg0: int, arg1: int): int
  floorMod(arg0: long, arg1: int): int
  getExponent(arg0: double): int
  getExponent(arg0: float): int
  max(arg0: int, arg1: int): int
  min(arg0: int, arg1: int): int
  multiplyExact(arg0: int, arg1: int): int
  round(arg0: float): int
  subtractExact(arg0: int, arg1: int): int
  toIntExact(arg0: long): int
  abs(arg0: long): long
  addExact(arg0: long, arg1: long): long
  floorDiv(arg0: long, arg1: int): long
  floorDiv(arg0: long, arg1: long): long
  floorMod(arg0: long, arg1: long): long
  max(arg0: long, arg1: long): long
  min(arg0: long, arg1: long): long
  multiplyExact(arg0: long, arg1: int): long
  multiplyExact(arg0: long, arg1: long): long
  multiplyFull(arg0: int, arg1: int): long
  multiplyHigh(arg0: long, arg1: long): long
  round(arg0: double): long
  subtractExact(arg0: long, arg1: long): long
  IEEEremainder(arg0: double, arg1: double): double
  acos(arg0: double): double
  asin(arg0: double): double
  atan(arg0: double): double
  atan2(arg0: double, arg1: double): double
  cos(arg0: double): double
  cosh(arg0: double): double
  expm1(arg0: double): double
  log(arg0: double): double
  log10(arg0: double): double
  log1p(arg0: double): double
  sin(arg0: double): double
  sinh(arg0: double): double
  sqrt(arg0: double): double
  tan(arg0: double): double
  tanh(arg0: double): double
  toDegrees(arg0: double): double
  toRadians(arg0: double): double
}

export const StrictMath: StrictMathStatic = Packages.java.lang.StrictMath

interface StringStatic {
  readonly class: any
  new (arg0: bytearray): string
  new (arg0: bytearray, arg1: int, arg2: int): string
  new (arg0: bytearray, arg1: any /*java.nio.charset.Charset*/): string
  new (arg0: bytearray, arg1: string): string
  new (arg0: bytearray, arg1: int, arg2: int, arg3: any /*java.nio.charset.Charset*/): string
  new (arg0: java.lang.StringBuilder): string
  new (arg0: java.lang.StringBuffer): string
  new (arg0: chararray, arg1: int, arg2: int): string
  new (arg0: chararray): string
  new (arg0: string): string
  new (): string
  new (arg0: bytearray, arg1: int, arg2: int, arg3: string): string
  new (arg0: bytearray, arg1: int): string
  new (arg0: bytearray, arg1: int, arg2: int, arg3: int): string
  new (arg0: [int], arg1: int, arg2: int): string
  copyValueOf(arg0: chararray): string
  copyValueOf(arg0: chararray, arg1: int, arg2: int): string
  format(arg0: string, ...arg1: java.lang.Object[]): string
  format(arg0: java.util.Locale, arg1: string, ...arg2: java.lang.Object[]): string
  join(arg0: java.lang.CharSequence, ...arg1: java.lang.CharSequence[]): string
  join(arg0: java.lang.CharSequence, arg1: java.lang.Iterable<java.lang.CharSequence>): string
  valueOf(arg0: boolean): string
  valueOf(arg0: char): string
  valueOf(arg0: chararray): string
  valueOf(arg0: chararray, arg1: int, arg2: int): string
  valueOf(arg0: double): string
  valueOf(arg0: float): string
  valueOf(arg0: int): string
  valueOf(arg0: java.lang.Object): string
  valueOf(arg0: long): string
}

export const String: StringStatic = Packages.java.lang.String

interface StringBufferStatic {
  readonly class: any
  new (arg0: java.lang.CharSequence): java.lang.StringBuffer
  new (arg0: string): java.lang.StringBuffer
  new (arg0: int): java.lang.StringBuffer
  new (): java.lang.StringBuffer
}

export const StringBuffer: StringBufferStatic = Packages.java.lang.StringBuffer

interface StringBuilderStatic {
  readonly class: any
  new (arg0: java.lang.CharSequence): java.lang.StringBuilder
  new (arg0: string): java.lang.StringBuilder
  new (arg0: int): java.lang.StringBuilder
  new (): java.lang.StringBuilder
}

export const StringBuilder: StringBuilderStatic = Packages.java.lang.StringBuilder

interface SystemStatic {
  readonly class: any
  console(): java.io.Console
  getSecurityManager(): java.lang.SecurityManager
  clearProperty(arg0: string): string
  getProperty(arg0: string): string
  getProperty(arg0: string, arg1: string): string
  getenv(arg0: string): string
  lineSeparator(): string
  setProperty(arg0: string, arg1: string): string
  getLogger(arg0: string): any /*java.lang.System$Logger*/
  getLogger(arg0: string, arg1: java.util.ResourceBundle): any /*java.lang.System$Logger*/
  inheritedChannel(): any /*java.nio.channels.Channel*/
  getenv(): java.util.Map<string, string>
  getProperties(): java.util.Properties
  identityHashCode(arg0: java.lang.Object): int
  mapLibraryName(arg0: string): string
  currentTimeMillis(): long
  nanoTime(): long
  arraycopy(arg0: java.lang.Object, arg1: int, arg2: java.lang.Object, arg3: int, arg4: int): void
  exit(arg0: int): void
  gc(): void
  load(arg0: string): void
  loadLibrary(arg0: string): void
  runFinalization(): void
  setErr(arg0: java.io.PrintStream): void
  setIn(arg0: java.io.InputStream): void
  setOut(arg0: java.io.PrintStream): void
  setProperties(arg0: java.util.Properties): void
  setSecurityManager(arg0: java.lang.SecurityManager): void
}

export const System: SystemStatic = Packages.java.lang.System

interface ThreadStatic {
  readonly class: any
  new (arg0: java.lang.ThreadGroup, arg1: string): java.lang.Thread
  new (arg0: string): java.lang.Thread
  new (arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable): java.lang.Thread
  new (arg0: java.lang.Runnable): java.lang.Thread
  new (): java.lang.Thread
  new (arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable, arg2: string, arg3: long, arg4: boolean): java.lang.Thread
  new (arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable, arg2: string, arg3: long): java.lang.Thread
  new (arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable, arg2: string): java.lang.Thread
  new (arg0: java.lang.Runnable, arg1: string): java.lang.Thread
  interrupted(): boolean
  activeCount(): int
  enumerate(arg0: [java.lang.Thread]): int
  getDefaultUncaughtExceptionHandler(): any /*java.lang.Thread$UncaughtExceptionHandler*/
  getAllStackTraces(): java.util.Map<java.lang.Thread, [java.lang.StackTraceElement]>
  holdsLock(arg0: java.lang.Object): boolean
  currentThread(): java.lang.Thread
  sleep(arg0: long): void
  yield(): void
  dumpStack(): void
  onSpinWait(): void
  setDefaultUncaughtExceptionHandler(arg0: any /*java.lang.Thread$UncaughtExceptionHandler*/): void
  sleep(arg0: long, arg1: int): void
}

export const Thread: ThreadStatic = Packages.java.lang.Thread

interface ThreadGroupStatic {
  readonly class: any
  new (arg0: java.lang.ThreadGroup, arg1: string): java.lang.ThreadGroup
  new (arg0: string): java.lang.ThreadGroup
}

export const ThreadGroup: ThreadGroupStatic = Packages.java.lang.ThreadGroup

interface ThreadLocalStatic {
  readonly class: any
  new <T>(): java.lang.ThreadLocal<T>
  withInitial<S>(arg0: any /*java.util.function.Supplier*/): java.lang.ThreadLocal<S>
}

export const ThreadLocal: ThreadLocalStatic = Packages.java.lang.ThreadLocal

interface ThrowableStatic {
  readonly class: any
  new (arg0: java.lang.Throwable): java.lang.Throwable
  new (arg0: string, arg1: java.lang.Throwable): java.lang.Throwable
  new (arg0: string): java.lang.Throwable
  new (): java.lang.Throwable
}

export const Throwable: ThrowableStatic = Packages.java.lang.Throwable
