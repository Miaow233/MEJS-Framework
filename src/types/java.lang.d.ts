declare type int = number
declare type long = number
declare type float = number
declare type double = number
declare type byte = number
declare type char = string
declare type short = number

declare type chararray = [byte]
declare type bytearray = [char]

declare const Packages: any
declare namespace Java {
  function type(name: string): any
}

declare namespace java.lang {
  interface Appendable {
    append(arg0: CharSequence): Appendable
    append(arg0: CharSequence, arg1: int, arg2: int): Appendable
    append(arg0: char): Appendable
  } // end Appendable

  class Object {
    clone(): Object
    to<T>(type: Class<T>): T
    equals(obj: Object): boolean
    toString(): string
  }
} // end namespace java.lang
declare namespace java.lang {
  interface AutoCloseable {
    close(): void
  } // end AutoCloseable
} // end namespace java.lang
declare namespace java.lang {
  class Boolean /* extends Object implements java.io.Serializable, Comparable<any>*/ {
    booleanValue(): boolean
    compareTo(arg0: boolean | null): int
    equals(arg0: java.lang.Object): boolean
    static compare(arg0: boolean, arg1: boolean): int
    static getBoolean(arg0: string): boolean
    static logicalAnd(arg0: boolean, arg1: boolean): boolean
    static logicalOr(arg0: boolean, arg1: boolean): boolean
    static logicalXor(arg0: boolean, arg1: boolean): boolean
    static parseBoolean(arg0: string): boolean
    static toString(arg0: boolean): string
    static valueOf(arg0: boolean): boolean | null
    static valueOf(arg0: string): boolean | null
    toString(): string
  } // end Boolean
} // end namespace java.lang
declare namespace java.lang {
  class Byte /* extends Number implements Comparable<any>*/ {
    byteValue(): byte
    compareTo(arg0: Byte): int
    doubleValue(): double
    equals(arg0: java.lang.Object): boolean
    floatValue(): float
    intValue(): int
    longValue(): long
    shortValue(): short
    static compare(arg0: byte, arg1: byte): int
    static compareUnsigned(arg0: byte, arg1: byte): int
    static decode(arg0: string): Byte
    static parseByte(arg0: string): byte
    static parseByte(arg0: string, arg1: int): byte
    static toString(arg0: byte): string
    static toUnsignedInt(arg0: byte): int
    static toUnsignedLong(arg0: byte): long
    static valueOf(arg0: byte): Byte
    static valueOf(arg0: string): Byte
    static valueOf(arg0: string, arg1: int): Byte
    toString(): string
  } // end Byte
} // end namespace java.lang
declare namespace java.lang {
  class Character extends Object implements java.io.Serializable, Comparable<any> {
    charValue(): char
    compareTo(arg0: Character): int
    equals(arg0: java.lang.Object): boolean
    static charCount(arg0: int): int
    static codePointAt(arg0: CharSequence, arg1: int): int
    static codePointAt(arg0: chararray, arg1: int): int
    static codePointAt(arg0: chararray, arg1: int, arg2: int): int
    static codePointBefore(arg0: CharSequence, arg1: int): int
    static codePointBefore(arg0: chararray, arg1: int): int
    static codePointBefore(arg0: chararray, arg1: int, arg2: int): int
    static codePointCount(arg0: CharSequence, arg1: int, arg2: int): int
    static codePointCount(arg0: chararray, arg1: int, arg2: int): int
    static codePointOf(arg0: string): int
    static compare(arg0: char, arg1: char): int
    static digit(arg0: char, arg1: int): int
    static digit(arg0: int, arg1: int): int
    static forDigit(arg0: int, arg1: int): char
    static getDirectionality(arg0: char): byte
    static getDirectionality(arg0: int): byte
    static getName(arg0: int): string
    static getNumericValue(arg0: char): int
    static getNumericValue(arg0: int): int
    static getType(arg0: char): int
    static getType(arg0: int): int
    static highSurrogate(arg0: int): char
    static isAlphabetic(arg0: int): boolean
    static isBmpCodePoint(arg0: int): boolean
    static isDefined(arg0: char): boolean
    static isDefined(arg0: int): boolean
    static isDigit(arg0: char): boolean
    static isDigit(arg0: int): boolean
    static isHighSurrogate(arg0: char): boolean
    static isISOControl(arg0: char): boolean
    static isISOControl(arg0: int): boolean
    static isIdentifierIgnorable(arg0: char): boolean
    static isIdentifierIgnorable(arg0: int): boolean
    static isIdeographic(arg0: int): boolean
    static isJavaIdentifierPart(arg0: char): boolean
    static isJavaIdentifierPart(arg0: int): boolean
    static isJavaIdentifierStart(arg0: char): boolean
    static isJavaIdentifierStart(arg0: int): boolean
    static isJavaLetter(arg0: char): boolean
    static isJavaLetterOrDigit(arg0: char): boolean
    static isLetter(arg0: char): boolean
    static isLetter(arg0: int): boolean
    static isLetterOrDigit(arg0: char): boolean
    static isLetterOrDigit(arg0: int): boolean
    static isLowSurrogate(arg0: char): boolean
    static isLowerCase(arg0: char): boolean
    static isLowerCase(arg0: int): boolean
    static isMirrored(arg0: char): boolean
    static isMirrored(arg0: int): boolean
    static isSpace(arg0: char): boolean
    static isSpaceChar(arg0: char): boolean
    static isSpaceChar(arg0: int): boolean
    static isSupplementaryCodePoint(arg0: int): boolean
    static isSurrogate(arg0: char): boolean
    static isSurrogatePair(arg0: char, arg1: char): boolean
    static isTitleCase(arg0: char): boolean
    static isTitleCase(arg0: int): boolean
    static isUnicodeIdentifierPart(arg0: char): boolean
    static isUnicodeIdentifierPart(arg0: int): boolean
    static isUnicodeIdentifierStart(arg0: char): boolean
    static isUnicodeIdentifierStart(arg0: int): boolean
    static isUpperCase(arg0: char): boolean
    static isUpperCase(arg0: int): boolean
    static isValidCodePoint(arg0: int): boolean
    static isWhitespace(arg0: char): boolean
    static isWhitespace(arg0: int): boolean
    static lowSurrogate(arg0: int): char
    static offsetByCodePoints(arg0: CharSequence, arg1: int, arg2: int): int
    static offsetByCodePoints(arg0: chararray, arg1: int, arg2: int, arg3: int, arg4: int): int
    static reverseBytes(arg0: char): char
    static toChars(arg0: int): chararray
    static toChars(arg0: int, arg1: chararray, arg2: int): int
    static toCodePoint(arg0: char, arg1: char): int
    static toLowerCase(arg0: char): char
    static toLowerCase(arg0: int): int
    static toString(arg0: char): string
    static toString(arg0: int): string
    static toTitleCase(arg0: char): char
    static toTitleCase(arg0: int): int
    static toUpperCase(arg0: char): char
    static toUpperCase(arg0: int): int
    static valueOf(arg0: char): Character
    toString(): string
  } // end Character
} // end namespace java.lang
declare namespace java.lang {
  interface CharSequence {
    // static compare( arg0:CharSequence, arg1:CharSequence ):int;
    charAt(arg0: int): char
    chars(): java.util.stream.IntStream
    codePoints(): java.util.stream.IntStream
    length(): int
    subSequence(arg0: int, arg1: int): CharSequence
    toString(): string
  } // end CharSequence
} // end namespace java.lang
declare namespace java.lang {
  class Class<T>
    extends Object
    implements
      java.io.Serializable,
      java.lang.reflect.GenericDeclaration,
      java.lang.reflect.Type,
      java.lang.reflect.AnnotatedElement
  {
    asSubclass<U>(arg0: Class<U>): Class<U>
    cast(arg0: java.lang.Object): T
    desiredAssertionStatus(): boolean
    equals(arg0: java.lang.Object): boolean
    getAnnotatedInterfaces(): [java.lang.reflect.AnnotatedType]
    getAnnotatedSuperclass(): java.lang.reflect.AnnotatedType
    getAnnotation<A>(arg0: Class<A>): A
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType<A>(arg0: Class<A>): [A]
    getCanonicalName(): string
    getClassLoader(): ClassLoader
    getClasses(): [Class<java.lang.Object>]
    getComponentType(): Class<java.lang.Object>
    getConstructor(...arg0: Class<java.lang.Object>[]): java.lang.reflect.Constructor<T>
    getConstructors(): [java.lang.reflect.Constructor<java.lang.Object>]
    getDeclaredAnnotation<A>(arg0: Class<A>): A
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType<A>(arg0: Class<A>): [A]
    getDeclaredClasses(): [Class<java.lang.Object>]
    getDeclaredConstructor(...arg0: Class<java.lang.Object>[]): java.lang.reflect.Constructor<T>
    getDeclaredConstructors(): [java.lang.reflect.Constructor<java.lang.Object>]
    getDeclaredField(arg0: string): java.lang.reflect.Field
    getDeclaredFields(): [java.lang.reflect.Field]
    getDeclaredMethod(arg0: string, ...arg1: Class<java.lang.Object>[]): java.lang.reflect.Method
    getDeclaredMethods(): [java.lang.reflect.Method]
    getDeclaringClass(): Class<java.lang.Object>
    getEnclosingClass(): Class<java.lang.Object>
    getEnclosingConstructor(): java.lang.reflect.Constructor<java.lang.Object>
    getEnclosingMethod(): java.lang.reflect.Method
    getEnumConstants(): [T]
    getField(arg0: string): java.lang.reflect.Field
    getFields(): [java.lang.reflect.Field]
    getGenericInterfaces(): [java.lang.reflect.Type]
    getGenericSuperclass(): java.lang.reflect.Type
    getInterfaces(): [Class<java.lang.Object>]
    getMethod(arg0: string, ...arg1: Class<java.lang.Object>[]): java.lang.reflect.Method
    getMethods(): [java.lang.reflect.Method]
    getModifiers(): int
    getModule(): any /*java.lang.Module*/
    getName(): string
    getNestHost(): Class<java.lang.Object>
    getNestMembers(): [Class<java.lang.Object>]
    getPackage(): Package
    getPackageName(): string
    getProtectionDomain(): any /*java.security.ProtectionDomain*/
    getResource(arg0: string): java.net.URL
    getResourceAsStream(arg0: string): java.io.InputStream
    getSigners(): [java.lang.Object]
    getSimpleName(): string
    getSuperclass(): Class<T>
    getTypeName(): string
    getTypeParameters(): [java.lang.reflect.TypeVariable<Class<T>>]
    isAnnotation(): boolean
    isAnnotationPresent(arg0: Class<any /*java.lang.annotation.Annotation*/>): boolean
    isAnonymousClass(): boolean
    isArray(): boolean
    isAssignableFrom(arg0: Class<java.lang.Object>): boolean
    isEnum(): boolean
    isInstance(arg0: java.lang.Object): boolean
    isInterface(): boolean
    isLocalClass(): boolean
    isMemberClass(): boolean
    isNestmateOf(arg0: Class<java.lang.Object>): boolean
    isPrimitive(): boolean
    isSynthetic(): boolean
    newInstance(): T
    static forName(arg0: any /*java.lang.Module*/, arg1: string): Class<java.lang.Object>
    static forName(arg0: string): Class<java.lang.Object>
    static forName(arg0: string, arg1: boolean, arg2: ClassLoader): Class<java.lang.Object>
    toGenericString(): string
    toString(): string
  } // end Class
} // end namespace java.lang
declare namespace java.lang {
  class ClassLoader extends java.lang.Object {
    clearAssertionStatus(): void
    equals(arg0: java.lang.Object): boolean
    getDefinedPackage(arg0: string): Package
    getDefinedPackages(): [Package]
    getName(): string
    getParent(): ClassLoader
    getResource(arg0: string): java.net.URL
    getResourceAsStream(arg0: string): java.io.InputStream
    getResources(arg0: string): java.util.Enumeration<java.net.URL>
    getUnnamedModule(): any /*java.lang.Module*/
    isRegisteredAsParallelCapable(): boolean
    loadClass(arg0: string): Class<java.lang.Object>
    resources(arg0: string): java.util.stream.Stream<java.net.URL>
    setClassAssertionStatus(arg0: string, arg1: boolean): void
    setDefaultAssertionStatus(arg0: boolean): void
    setPackageAssertionStatus(arg0: string, arg1: boolean): void
    static getPlatformClassLoader(): ClassLoader
    static getSystemClassLoader(): ClassLoader
    static getSystemResource(arg0: string): java.net.URL
    static getSystemResourceAsStream(arg0: string): java.io.InputStream
    static getSystemResources(arg0: string): java.util.Enumeration<java.net.URL>
    toString(): string
  } // end ClassLoader
} // end namespace java.lang
declare namespace java.lang {
  class ClassValue<T> extends java.lang.Object {
    equals(arg0: java.lang.Object): boolean
    get(arg0: Class<java.lang.Object>): T
    remove(arg0: Class<java.lang.Object>): void
    toString(): string
  } // end ClassValue
} // end namespace java.lang
declare namespace java.lang {
  interface Cloneable {} // end Cloneable
} // end namespace java.lang
declare namespace java.lang {
  interface Comparable<T> {
    compareTo(arg0: T): int
  } // end Comparable
} // end namespace java.lang
declare namespace java.lang {
  class Compiler extends java.lang.Object {
    equals(arg0: java.lang.Object): boolean
    static command(arg0: java.lang.Object): java.lang.Object
    static compileClass(arg0: Class<java.lang.Object>): boolean
    static compileClasses(arg0: string): boolean
    static disable(): void
    static enable(): void
    toString(): string
  } // end Compiler
} // end namespace java.lang
declare namespace java.lang {
  class Double extends Number implements Comparable<any> {
    byteValue(): byte
    compareTo(arg0: double | null): int
    doubleValue(): double
    equals(arg0: java.lang.Object): boolean
    floatValue(): float
    intValue(): int
    isInfinite(): boolean
    isNaN(): boolean
    longValue(): long
    shortValue(): short
    static compare(arg0: double, arg1: double): int
    static doubleToLongBits(arg0: double): long
    static doubleToRawLongBits(arg0: double): long
    static isFinite(arg0: double): boolean
    static isInfinite(arg0: double): boolean
    static isNaN(arg0: double): boolean
    static longBitsToDouble(arg0: long): double
    static max(arg0: double, arg1: double): double
    static min(arg0: double, arg1: double): double
    static parseDouble(arg0: string): double
    static sum(arg0: double, arg1: double): double
    static toHexString(arg0: double): string
    static toString(arg0: double): string
    static valueOf(arg0: double): double | null
    static valueOf(arg0: string): double | null
    toString(): string
  } // end Double
} // end namespace java.lang
declare namespace java.lang {
  class Enum<E> /* extends Object implements Comparable<E>, java.io.Serializable*/ {
    compareTo(arg0: E): int
    equals(arg0: java.lang.Object): boolean
    getDeclaringClass(): Class<E>
    name(): string
    ordinal(): int
    static valueOf<T>(arg0: Class<T>, arg1: string): T
    toString(): string
  } // end Enum
} // end namespace java.lang
declare namespace java.lang {
  class Float /* extends Number implements Comparable<any>*/ {
    byteValue(): byte
    compareTo(arg0: float | null): int
    doubleValue(): double
    equals(arg0: java.lang.Object): boolean
    floatValue(): float
    intValue(): int
    isInfinite(): boolean
    isNaN(): boolean
    longValue(): long
    shortValue(): short
    static compare(arg0: float, arg1: float): int
    static floatToIntBits(arg0: float): int
    static floatToRawIntBits(arg0: float): int
    static intBitsToFloat(arg0: int): float
    static isFinite(arg0: float): boolean
    static isInfinite(arg0: float): boolean
    static isNaN(arg0: float): boolean
    static max(arg0: float, arg1: float): float
    static min(arg0: float, arg1: float): float
    static parseFloat(arg0: string): float
    static sum(arg0: float, arg1: float): float
    static toHexString(arg0: float): string
    static toString(arg0: float): string
    static valueOf(arg0: float): float | null
    static valueOf(arg0: string): float | null
    toString(): string
  } // end Float
} // end namespace java.lang
declare namespace java.lang {
  class InheritableThreadLocal<T> /* extends ThreadLocal<T>*/ {
    equals(arg0: java.lang.Object): boolean
    get(): T
    remove(): void
    set(arg0: T): void
    static withInitial<S>(arg0: any /*java.util.function.Supplier*/): ThreadLocal<S>
    toString(): string
  } // end InheritableThreadLocal
} // end namespace java.lang
declare namespace java.lang {
  class Integer /* extends Number implements Comparable<any>*/ {
    byteValue(): byte
    compareTo(arg0: int | null): int
    doubleValue(): double
    equals(arg0: java.lang.Object): boolean
    floatValue(): float
    intValue(): int
    longValue(): long
    shortValue(): short
    static bitCount(arg0: int): int
    static compare(arg0: int, arg1: int): int
    static compareUnsigned(arg0: int, arg1: int): int
    static decode(arg0: string): int | null
    static divideUnsigned(arg0: int, arg1: int): int
    static getInteger(arg0: string): int | null
    static getInteger(arg0: string, arg1: int): int | null
    static getInteger(arg0: string, arg1: int | null): int | null
    static highestOneBit(arg0: int): int
    static lowestOneBit(arg0: int): int
    static max(arg0: int, arg1: int): int
    static min(arg0: int, arg1: int): int
    static numberOfLeadingZeros(arg0: int): int
    static numberOfTrailingZeros(arg0: int): int
    static parseInt(arg0: CharSequence, arg1: int, arg2: int, arg3: int): int
    static parseInt(arg0: string): int
    static parseInt(arg0: string, arg1: int): int
    static parseUnsignedInt(arg0: CharSequence, arg1: int, arg2: int, arg3: int): int
    static parseUnsignedInt(arg0: string): int
    static parseUnsignedInt(arg0: string, arg1: int): int
    static remainderUnsigned(arg0: int, arg1: int): int
    static reverse(arg0: int): int
    static reverseBytes(arg0: int): int
    static rotateLeft(arg0: int, arg1: int): int
    static rotateRight(arg0: int, arg1: int): int
    static signum(arg0: int): int
    static sum(arg0: int, arg1: int): int
    static toBinaryString(arg0: int): string
    static toHexString(arg0: int): string
    static toOctalString(arg0: int): string
    static toString(arg0: int): string
    static toString(arg0: int, arg1: int): string
    static toUnsignedLong(arg0: int): long
    static toUnsignedString(arg0: int): string
    static toUnsignedString(arg0: int, arg1: int): string
    static valueOf(arg0: int): int | null
    static valueOf(arg0: string): int | null
    static valueOf(arg0: string, arg1: int): int | null
    toString(): string
  } // end Integer
} // end namespace java.lang
declare namespace java.lang {
  interface Iterable<T> {
    forEach(arg0: any /*java.util.function.Consumer*/): void
    iterator(): java.util.Iterator<T>
    spliterator(): java.util.Spliterator<T>
  } // end Iterable
} // end namespace java.lang
declare namespace java.lang {
  class Long /* extends Number implements Comparable<any>*/ {
    byteValue(): byte
    compareTo(arg0: long | null): int
    doubleValue(): double
    equals(arg0: java.lang.Object): boolean
    floatValue(): float
    intValue(): int
    longValue(): long
    shortValue(): short
    static bitCount(arg0: long): int
    static compare(arg0: long, arg1: long): int
    static compareUnsigned(arg0: long, arg1: long): int
    static decode(arg0: string): long | null
    static divideUnsigned(arg0: long, arg1: long): long
    static getLong(arg0: string): long | null
    static getLong(arg0: string, arg1: long): long | null
    static getLong(arg0: string, arg1: long | null): long | null
    static highestOneBit(arg0: long): long
    static lowestOneBit(arg0: long): long
    static max(arg0: long, arg1: long): long
    static min(arg0: long, arg1: long): long
    static numberOfLeadingZeros(arg0: long): int
    static numberOfTrailingZeros(arg0: long): int
    static parseLong(arg0: CharSequence, arg1: int, arg2: int, arg3: int): long
    static parseLong(arg0: string): long
    static parseLong(arg0: string, arg1: int): long
    static parseUnsignedLong(arg0: CharSequence, arg1: int, arg2: int, arg3: int): long
    static parseUnsignedLong(arg0: string): long
    static parseUnsignedLong(arg0: string, arg1: int): long
    static remainderUnsigned(arg0: long, arg1: long): long
    static reverse(arg0: long): long
    static reverseBytes(arg0: long): long
    static rotateLeft(arg0: long, arg1: int): long
    static rotateRight(arg0: long, arg1: int): long
    static signum(arg0: long): int
    static sum(arg0: long, arg1: long): long
    static toBinaryString(arg0: long): string
    static toHexString(arg0: long): string
    static toOctalString(arg0: long): string
    static toString(arg0: long): string
    static toString(arg0: long, arg1: int): string
    static toUnsignedString(arg0: long): string
    static toUnsignedString(arg0: long, arg1: int): string
    static valueOf(arg0: long): long | null
    static valueOf(arg0: string): long | null
    static valueOf(arg0: string, arg1: int): long | null
    toString(): string
  } // end Long
} // end namespace java.lang
declare namespace java.lang {
  class Math extends java.lang.Object {
    equals(arg0: java.lang.Object): boolean
    static IEEEremainder(arg0: double, arg1: double): double
    static abs(arg0: double): double
    static abs(arg0: float): float
    static abs(arg0: int): int
    static abs(arg0: long): long
    static acos(arg0: double): double
    static addExact(arg0: int, arg1: int): int
    static addExact(arg0: long, arg1: long): long
    static asin(arg0: double): double
    static atan(arg0: double): double
    static atan2(arg0: double, arg1: double): double
    static cbrt(arg0: double): double
    static ceil(arg0: double): double
    static copySign(arg0: double, arg1: double): double
    static copySign(arg0: float, arg1: float): float
    static cos(arg0: double): double
    static cosh(arg0: double): double
    static decrementExact(arg0: int): int
    static decrementExact(arg0: long): long
    static exp(arg0: double): double
    static expm1(arg0: double): double
    static floor(arg0: double): double
    static floorDiv(arg0: int, arg1: int): int
    static floorDiv(arg0: long, arg1: int): long
    static floorDiv(arg0: long, arg1: long): long
    static floorMod(arg0: int, arg1: int): int
    static floorMod(arg0: long, arg1: int): int
    static floorMod(arg0: long, arg1: long): long
    static fma(arg0: double, arg1: double, arg2: double): double
    static fma(arg0: float, arg1: float, arg2: float): float
    static getExponent(arg0: double): int
    static getExponent(arg0: float): int
    static hypot(arg0: double, arg1: double): double
    static incrementExact(arg0: int): int
    static incrementExact(arg0: long): long
    static log(arg0: double): double
    static log10(arg0: double): double
    static log1p(arg0: double): double
    static max(arg0: double, arg1: double): double
    static max(arg0: float, arg1: float): float
    static max(arg0: int, arg1: int): int
    static max(arg0: long, arg1: long): long
    static min(arg0: double, arg1: double): double
    static min(arg0: float, arg1: float): float
    static min(arg0: int, arg1: int): int
    static min(arg0: long, arg1: long): long
    static multiplyExact(arg0: int, arg1: int): int
    static multiplyExact(arg0: long, arg1: int): long
    static multiplyExact(arg0: long, arg1: long): long
    static multiplyFull(arg0: int, arg1: int): long
    static multiplyHigh(arg0: long, arg1: long): long
    static negateExact(arg0: int): int
    static negateExact(arg0: long): long
    static nextAfter(arg0: double, arg1: double): double
    static nextAfter(arg0: float, arg1: double): float
    static nextDown(arg0: double): double
    static nextDown(arg0: float): float
    static nextUp(arg0: double): double
    static nextUp(arg0: float): float
    static pow(arg0: double, arg1: double): double
    static random(): double
    static rint(arg0: double): double
    static round(arg0: double): long
    static round(arg0: float): int
    static scalb(arg0: double, arg1: int): double
    static scalb(arg0: float, arg1: int): float
    static signum(arg0: double): double
    static signum(arg0: float): float
    static sin(arg0: double): double
    static sinh(arg0: double): double
    static sqrt(arg0: double): double
    static subtractExact(arg0: int, arg1: int): int
    static subtractExact(arg0: long, arg1: long): long
    static tan(arg0: double): double
    static tanh(arg0: double): double
    static toDegrees(arg0: double): double
    static toIntExact(arg0: long): int
    static toRadians(arg0: double): double
    static ulp(arg0: double): double
    static ulp(arg0: float): float
    toString(): string
  } // end Math
} // end namespace java.lang
declare namespace java.lang {
  class Number /* extends Object implements java.io.Serializable*/ {
    byteValue(): byte
    doubleValue(): double
    equals(arg0: java.lang.Object): boolean
    floatValue(): float
    intValue(): int
    longValue(): long
    shortValue(): short
    toString(): string
  } // end Number
} // end namespace java.lang
declare namespace java.lang {
  class Package /* extends NamedPackage implements java.lang.reflect.AnnotatedElement*/ {
    equals(arg0: java.lang.Object): boolean
    getAnnotation<A>(arg0: Class<A>): A
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType<A>(arg0: Class<A>): [A]
    getDeclaredAnnotation<A>(arg0: Class<A>): A
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType<A>(arg0: Class<A>): [A]
    getImplementationTitle(): string
    getImplementationVendor(): string
    getImplementationVersion(): string
    getName(): string
    getSpecificationTitle(): string
    getSpecificationVendor(): string
    getSpecificationVersion(): string
    isAnnotationPresent(arg0: Class<any /*java.lang.annotation.Annotation*/>): boolean
    isCompatibleWith(arg0: string): boolean
    isSealed(): boolean
    isSealed(arg0: java.net.URL): boolean
    static getPackage(arg0: string): Package
    static getPackages(): [Package]
    toString(): string
  } // end Package
} // end namespace java.lang
declare namespace java.lang {
  class Process extends java.lang.Object {
    children(): java.util.stream.Stream<any /*java.lang.ProcessHandle*/>
    descendants(): java.util.stream.Stream<any /*java.lang.ProcessHandle*/>
    destroy(): void
    destroyForcibly(): Process
    equals(arg0: java.lang.Object): boolean
    exitValue(): int
    getErrorStream(): java.io.InputStream
    getInputStream(): java.io.InputStream
    getOutputStream(): java.io.OutputStream
    info(): any /*java.lang.ProcessHandle$Info*/
    isAlive(): boolean
    onExit(): any /*java.util.concurrent.CompletableFuture*/
    pid(): long
    supportsNormalTermination(): boolean
    toHandle(): any /*java.lang.ProcessHandle*/
    toString(): string
    waitFor(): int
    waitFor(arg0: long, arg1: any /*java.util.concurrent.TimeUnit*/): boolean
  } // end Process
} // end namespace java.lang
declare namespace java.lang {
  class ProcessBuilder extends java.lang.Object {
    command(): java.util.List<string>
    command(...arg0: string[]): ProcessBuilder
    command(arg0: java.util.List<string>): ProcessBuilder
    directory(): java.io.File
    directory(arg0: java.io.File): ProcessBuilder
    environment(): java.util.Map<string, string>
    equals(arg0: java.lang.Object): boolean
    inheritIO(): ProcessBuilder
    redirectError(): any /*java.lang.ProcessBuilder$Redirect*/
    redirectError(arg0: any /*java.lang.ProcessBuilder$Redirect*/): ProcessBuilder
    redirectError(arg0: java.io.File): ProcessBuilder
    redirectErrorStream(): boolean
    redirectErrorStream(arg0: boolean): ProcessBuilder
    redirectInput(): any /*java.lang.ProcessBuilder$Redirect*/
    redirectInput(arg0: any /*java.lang.ProcessBuilder$Redirect*/): ProcessBuilder
    redirectInput(arg0: java.io.File): ProcessBuilder
    redirectOutput(): any /*java.lang.ProcessBuilder$Redirect*/
    redirectOutput(arg0: any /*java.lang.ProcessBuilder$Redirect*/): ProcessBuilder
    redirectOutput(arg0: java.io.File): ProcessBuilder
    start(): Process
    static startPipeline(arg0: java.util.List<ProcessBuilder>): java.util.List<Process>
    toString(): string
  } // end ProcessBuilder
} // end namespace java.lang
declare namespace java.lang {
  interface Readable {
    read(arg0: any /*java.nio.CharBuffer*/): int
  } // end Readable
} // end namespace java.lang
declare namespace java.lang {
  interface Runnable {
    (): void
  } // end Runnable
} // end namespace java.lang
declare namespace java.lang {
  class Runtime extends java.lang.Object {
    addShutdownHook(arg0: Thread): void
    availableProcessors(): int
    equals(arg0: java.lang.Object): boolean
    exec(arg0: [string]): Process
    exec(arg0: [string], arg1: [string]): Process
    exec(arg0: [string], arg1: [string], arg2: java.io.File): Process
    exec(arg0: string): Process
    exec(arg0: string, arg1: [string]): Process
    exec(arg0: string, arg1: [string], arg2: java.io.File): Process
    exit(arg0: int): void
    freeMemory(): long
    gc(): void
    halt(arg0: int): void
    load(arg0: string): void
    loadLibrary(arg0: string): void
    maxMemory(): long
    removeShutdownHook(arg0: Thread): boolean
    runFinalization(): void
    static getRuntime(): Runtime
    static version(): any /*java.lang.Runtime$Version*/
    toString(): string
    totalMemory(): long
    traceInstructions(arg0: boolean): void
    traceMethodCalls(arg0: boolean): void
  } // end Runtime
} // end namespace java.lang
declare namespace java.lang {
  class RuntimePermission /* extends java.security.BasicPermission*/ {
    checkGuard(arg0: java.lang.Object): void
    equals(arg0: java.lang.Object): boolean
    getActions(): string
    getName(): string
    implies(arg0: any /*java.security.Permission*/): boolean
    newPermissionCollection(): any /*java.security.PermissionCollection*/
    toString(): string
  } // end RuntimePermission
} // end namespace java.lang
declare namespace java.lang {
  class SecurityManager extends java.lang.Object {
    checkAccept(arg0: string, arg1: int): void
    checkAccess(arg0: Thread): void
    checkAccess(arg0: ThreadGroup): void
    checkConnect(arg0: string, arg1: int): void
    checkConnect(arg0: string, arg1: int, arg2: java.lang.Object): void
    checkCreateClassLoader(): void
    checkDelete(arg0: string): void
    checkExec(arg0: string): void
    checkExit(arg0: int): void
    checkLink(arg0: string): void
    checkListen(arg0: int): void
    checkMulticast(arg0: java.net.InetAddress): void
    checkMulticast(arg0: java.net.InetAddress, arg1: byte): void
    checkPackageAccess(arg0: string): void
    checkPackageDefinition(arg0: string): void
    checkPermission(arg0: any /*java.security.Permission*/): void
    checkPermission(arg0: any /*java.security.Permission*/, arg1: java.lang.Object): void
    checkPrintJobAccess(): void
    checkPropertiesAccess(): void
    checkPropertyAccess(arg0: string): void
    checkRead(arg0: java.io.FileDescriptor): void
    checkRead(arg0: string): void
    checkRead(arg0: string, arg1: java.lang.Object): void
    checkSecurityAccess(arg0: string): void
    checkSetFactory(): void
    checkWrite(arg0: java.io.FileDescriptor): void
    checkWrite(arg0: string): void
    equals(arg0: java.lang.Object): boolean
    getSecurityContext(): java.lang.Object
    getThreadGroup(): ThreadGroup
    toString(): string
  } // end SecurityManager
} // end namespace java.lang
declare namespace java.lang {
  class Short /* extends Number implements Comparable<any>*/ {
    byteValue(): byte
    compareTo(arg0: Short): int
    doubleValue(): double
    equals(arg0: java.lang.Object): boolean
    floatValue(): float
    intValue(): int
    longValue(): long
    shortValue(): short
    static compare(arg0: short, arg1: short): int
    static compareUnsigned(arg0: short, arg1: short): int
    static decode(arg0: string): Short
    static parseShort(arg0: string): short
    static parseShort(arg0: string, arg1: int): short
    static reverseBytes(arg0: short): short
    static toString(arg0: short): string
    static toUnsignedInt(arg0: short): int
    static toUnsignedLong(arg0: short): long
    static valueOf(arg0: short): Short
    static valueOf(arg0: string): Short
    static valueOf(arg0: string, arg1: int): Short
    toString(): string
  } // end Short
} // end namespace java.lang
declare namespace java.lang {
  class StackTraceElement /* extends Object implements java.io.Serializable*/ {
    equals(arg0: java.lang.Object): boolean
    getClassLoaderName(): string
    getClassName(): string
    getFileName(): string
    getLineNumber(): int
    getMethodName(): string
    getModuleName(): string
    getModuleVersion(): string
    isNativeMethod(): boolean
    toString(): string
  } // end StackTraceElement
} // end namespace java.lang
declare namespace java.lang {
  class StrictMath extends java.lang.Object {
    equals(arg0: java.lang.Object): boolean
    static IEEEremainder(arg0: double, arg1: double): double
    static abs(arg0: double): double
    static abs(arg0: float): float
    static abs(arg0: int): int
    static abs(arg0: long): long
    static acos(arg0: double): double
    static addExact(arg0: int, arg1: int): int
    static addExact(arg0: long, arg1: long): long
    static asin(arg0: double): double
    static atan(arg0: double): double
    static atan2(arg0: double, arg1: double): double
    static cbrt(arg0: double): double
    static ceil(arg0: double): double
    static copySign(arg0: double, arg1: double): double
    static copySign(arg0: float, arg1: float): float
    static cos(arg0: double): double
    static cosh(arg0: double): double
    static exp(arg0: double): double
    static expm1(arg0: double): double
    static floor(arg0: double): double
    static floorDiv(arg0: int, arg1: int): int
    static floorDiv(arg0: long, arg1: int): long
    static floorDiv(arg0: long, arg1: long): long
    static floorMod(arg0: int, arg1: int): int
    static floorMod(arg0: long, arg1: int): int
    static floorMod(arg0: long, arg1: long): long
    static fma(arg0: double, arg1: double, arg2: double): double
    static fma(arg0: float, arg1: float, arg2: float): float
    static getExponent(arg0: double): int
    static getExponent(arg0: float): int
    static hypot(arg0: double, arg1: double): double
    static log(arg0: double): double
    static log10(arg0: double): double
    static log1p(arg0: double): double
    static max(arg0: double, arg1: double): double
    static max(arg0: float, arg1: float): float
    static max(arg0: int, arg1: int): int
    static max(arg0: long, arg1: long): long
    static min(arg0: double, arg1: double): double
    static min(arg0: float, arg1: float): float
    static min(arg0: int, arg1: int): int
    static min(arg0: long, arg1: long): long
    static multiplyExact(arg0: int, arg1: int): int
    static multiplyExact(arg0: long, arg1: int): long
    static multiplyExact(arg0: long, arg1: long): long
    static multiplyFull(arg0: int, arg1: int): long
    static multiplyHigh(arg0: long, arg1: long): long
    static nextAfter(arg0: double, arg1: double): double
    static nextAfter(arg0: float, arg1: double): float
    static nextDown(arg0: double): double
    static nextDown(arg0: float): float
    static nextUp(arg0: double): double
    static nextUp(arg0: float): float
    static pow(arg0: double, arg1: double): double
    static random(): double
    static rint(arg0: double): double
    static round(arg0: double): long
    static round(arg0: float): int
    static scalb(arg0: double, arg1: int): double
    static scalb(arg0: float, arg1: int): float
    static signum(arg0: double): double
    static signum(arg0: float): float
    static sin(arg0: double): double
    static sinh(arg0: double): double
    static sqrt(arg0: double): double
    static subtractExact(arg0: int, arg1: int): int
    static subtractExact(arg0: long, arg1: long): long
    static tan(arg0: double): double
    static tanh(arg0: double): double
    static toDegrees(arg0: double): double
    static toIntExact(arg0: long): int
    static toRadians(arg0: double): double
    static ulp(arg0: double): double
    static ulp(arg0: float): float
    toString(): string
  } // end StrictMath
} // end namespace java.lang
declare namespace java.lang {
  class String /* extends Object implements java.io.Serializable, Comparable<any>, CharSequence*/ {
    charAt(arg0: int): char
    chars(): java.util.stream.IntStream
    codePointAt(arg0: int): int
    codePointBefore(arg0: int): int
    codePointCount(arg0: int, arg1: int): int
    codePoints(): java.util.stream.IntStream
    compareTo(arg0: string): int
    compareToIgnoreCase(arg0: string): int
    concat(arg0: string): string
    contains(arg0: CharSequence): boolean
    contentEquals(arg0: CharSequence): boolean
    contentEquals(arg0: StringBuffer): boolean
    endsWith(arg0: string): boolean
    equals(arg0: java.lang.Object): boolean
    equalsIgnoreCase(arg0: string): boolean
    getBytes(): bytearray
    getBytes(arg0: any /*java.nio.charset.Charset*/): bytearray
    getBytes(arg0: int, arg1: int, arg2: bytearray, arg3: int): void
    getBytes(arg0: string): bytearray
    getChars(arg0: int, arg1: int, arg2: chararray, arg3: int): void
    indexOf(arg0: int): int
    indexOf(arg0: int, arg1: int): int
    indexOf(arg0: string): int
    indexOf(arg0: string, arg1: int): int
    intern(): string
    isBlank(): boolean
    isEmpty(): boolean
    lastIndexOf(arg0: int): int
    lastIndexOf(arg0: int, arg1: int): int
    lastIndexOf(arg0: string): int
    lastIndexOf(arg0: string, arg1: int): int
    length(): int
    lines(): java.util.stream.Stream<string>
    matches(arg0: string): boolean
    offsetByCodePoints(arg0: int, arg1: int): int
    regionMatches(arg0: boolean, arg1: int, arg2: string, arg3: int, arg4: int): boolean
    regionMatches(arg0: int, arg1: string, arg2: int, arg3: int): boolean
    repeat(arg0: int): string
    replace(arg0: CharSequence, arg1: CharSequence): string
    replace(arg0: char, arg1: char): string
    replaceAll(arg0: string, arg1: string): string
    replaceFirst(arg0: string, arg1: string): string
    split(arg0: string): [string]
    split(arg0: string, arg1: int): [string]
    startsWith(arg0: string): boolean
    startsWith(arg0: string, arg1: int): boolean
    static copyValueOf(arg0: chararray): string
    static copyValueOf(arg0: chararray, arg1: int, arg2: int): string
    static format(arg0: java.util.Locale, arg1: string, ...arg2: java.lang.Object[]): string
    static format(arg0: string, ...arg1: java.lang.Object[]): string
    static join(arg0: CharSequence, ...arg1: CharSequence[]): string
    static join(arg0: CharSequence, arg1: Iterable<CharSequence>): string
    static valueOf(arg0: char): string
    static valueOf(arg0: java.lang.Object): string
    static valueOf(arg0: boolean): string
    static valueOf(arg0: chararray): string
    static valueOf(arg0: chararray, arg1: int, arg2: int): string
    static valueOf(arg0: double): string
    static valueOf(arg0: float): string
    static valueOf(arg0: int): string
    static valueOf(arg0: long): string
    strip(): string
    stripLeading(): string
    stripTrailing(): string
    subSequence(arg0: int, arg1: int): CharSequence
    substring(arg0: int): string
    substring(arg0: int, arg1: int): string
    toCharArray(): chararray
    toLowerCase(): string
    toLowerCase(arg0: java.util.Locale): string
    toString(): string
    toUpperCase(): string
    toUpperCase(arg0: java.util.Locale): string
    trim(): string
  } // end String
} // end namespace java.lang
declare namespace java.lang {
  class StringBuffer /* extends AbstractStringBuilder implements java.io.Serializable, Comparable<any>, CharSequence*/ {
    append(arg0: CharSequence): StringBuffer
    append(arg0: CharSequence, arg1: int, arg2: int): StringBuffer
    append(arg0: StringBuffer): StringBuffer
    append(arg0: char): StringBuffer
    append(arg0: java.lang.Object): StringBuffer
    append(arg0: boolean): StringBuffer
    append(arg0: chararray): StringBuffer
    append(arg0: chararray, arg1: int, arg2: int): StringBuffer
    append(arg0: double): StringBuffer
    append(arg0: float): StringBuffer
    append(arg0: int): StringBuffer
    append(arg0: long): StringBuffer
    append(arg0: string): StringBuffer
    appendCodePoint(arg0: int): StringBuffer
    capacity(): int
    charAt(arg0: int): char
    codePointAt(arg0: int): int
    codePointBefore(arg0: int): int
    codePointCount(arg0: int, arg1: int): int
    compareTo(arg0: StringBuffer): int
    delete(arg0: int, arg1: int): StringBuffer
    deleteCharAt(arg0: int): StringBuffer
    ensureCapacity(arg0: int): void
    equals(arg0: java.lang.Object): boolean
    getChars(arg0: int, arg1: int, arg2: chararray, arg3: int): void
    indexOf(arg0: string): int
    indexOf(arg0: string, arg1: int): int
    insert(arg0: int, arg1: CharSequence): StringBuffer
    insert(arg0: int, arg1: CharSequence, arg2: int, arg3: int): StringBuffer
    insert(arg0: int, arg1: char): StringBuffer
    insert(arg0: int, arg1: java.lang.Object): StringBuffer
    insert(arg0: int, arg1: boolean): StringBuffer
    insert(arg0: int, arg1: chararray): StringBuffer
    insert(arg0: int, arg1: chararray, arg2: int, arg3: int): StringBuffer
    insert(arg0: int, arg1: double): StringBuffer
    insert(arg0: int, arg1: float): StringBuffer
    insert(arg0: int, arg1: int): StringBuffer
    insert(arg0: int, arg1: long): StringBuffer
    insert(arg0: int, arg1: string): StringBuffer
    lastIndexOf(arg0: string): int
    lastIndexOf(arg0: string, arg1: int): int
    length(): int
    offsetByCodePoints(arg0: int, arg1: int): int
    replace(arg0: int, arg1: int, arg2: string): StringBuffer
    reverse(): StringBuffer
    setCharAt(arg0: int, arg1: char): void
    setLength(arg0: int): void
    subSequence(arg0: int, arg1: int): CharSequence
    substring(arg0: int): string
    substring(arg0: int, arg1: int): string
    toString(): string
    trimToSize(): void
  } // end StringBuffer
} // end namespace java.lang
declare namespace java.lang {
  class StringBuilder /* extends AbstractStringBuilder implements java.io.Serializable, Comparable<any>, CharSequence*/ {
    append(arg0: CharSequence): StringBuilder
    append(arg0: CharSequence, arg1: int, arg2: int): StringBuilder
    append(arg0: StringBuffer): StringBuilder
    append(arg0: char): StringBuilder
    append(arg0: java.lang.Object): StringBuilder
    append(arg0: boolean): StringBuilder
    append(arg0: chararray): StringBuilder
    append(arg0: chararray, arg1: int, arg2: int): StringBuilder
    append(arg0: double): StringBuilder
    append(arg0: float): StringBuilder
    append(arg0: int): StringBuilder
    append(arg0: long): StringBuilder
    append(arg0: string): StringBuilder
    appendCodePoint(arg0: int): StringBuilder
    compareTo(arg0: StringBuilder): int
    delete(arg0: int, arg1: int): StringBuilder
    deleteCharAt(arg0: int): StringBuilder
    equals(arg0: java.lang.Object): boolean
    indexOf(arg0: string): int
    indexOf(arg0: string, arg1: int): int
    insert(arg0: int, arg1: CharSequence): StringBuilder
    insert(arg0: int, arg1: CharSequence, arg2: int, arg3: int): StringBuilder
    insert(arg0: int, arg1: char): StringBuilder
    insert(arg0: int, arg1: java.lang.Object): StringBuilder
    insert(arg0: int, arg1: boolean): StringBuilder
    insert(arg0: int, arg1: chararray): StringBuilder
    insert(arg0: int, arg1: chararray, arg2: int, arg3: int): StringBuilder
    insert(arg0: int, arg1: double): StringBuilder
    insert(arg0: int, arg1: float): StringBuilder
    insert(arg0: int, arg1: int): StringBuilder
    insert(arg0: int, arg1: long): StringBuilder
    insert(arg0: int, arg1: string): StringBuilder
    lastIndexOf(arg0: string): int
    lastIndexOf(arg0: string, arg1: int): int
    replace(arg0: int, arg1: int, arg2: string): StringBuilder
    reverse(): StringBuilder
    toString(): string
  } // end StringBuilder
} // end namespace java.lang
declare namespace java.lang {
  class System extends java.lang.Object {
    equals(arg0: java.lang.Object): boolean
    static arraycopy(arg0: java.lang.Object, arg1: int, arg2: java.lang.Object, arg3: int, arg4: int): void
    static clearProperty(arg0: string): string
    static console(): java.io.Console
    static currentTimeMillis(): long
    static exit(arg0: int): void
    static gc(): void
    static getLogger(arg0: string): any /*java.lang.System$Logger*/
    static getLogger(arg0: string, arg1: java.util.ResourceBundle): any /*java.lang.System$Logger*/
    static getProperties(): java.util.Properties
    static getProperty(arg0: string): string
    static getProperty(arg0: string, arg1: string): string
    static getSecurityManager(): SecurityManager
    static getenv(): java.util.Map<string, string>
    static getenv(arg0: string): string
    static identityHashCode(arg0: java.lang.Object): int
    static inheritedChannel(): any /*java.nio.channels.Channel*/
    static lineSeparator(): string
    static load(arg0: string): void
    static loadLibrary(arg0: string): void
    static mapLibraryName(arg0: string): string
    static nanoTime(): long
    static runFinalization(): void
    static setErr(arg0: java.io.PrintStream): void
    static setIn(arg0: java.io.InputStream): void
    static setOut(arg0: java.io.PrintStream): void
    static setProperties(arg0: java.util.Properties): void
    static setProperty(arg0: string, arg1: string): string
    static setSecurityManager(arg0: SecurityManager): void
    toString(): string
  } // end System
} // end namespace java.lang
declare namespace java.lang {
  class Thread /* extends java.lang.Object implements Runnable */ {
    checkAccess(): void
    countStackFrames(): int
    equals(arg0: java.lang.Object): boolean
    getContextClassLoader(): ClassLoader
    getId(): long
    getName(): string
    getPriority(): int
    getStackTrace(): [StackTraceElement]
    getState(): any /*java.lang.Thread$State*/
    getThreadGroup(): ThreadGroup
    getUncaughtExceptionHandler(): any /*java.lang.Thread$UncaughtExceptionHandler*/
    interrupt(): void
    isAlive(): boolean
    isDaemon(): boolean
    isInterrupted(): boolean
    join(): void
    join(arg0: long): void
    join(arg0: long, arg1: int): void
    resume(): void
    run(): void
    setContextClassLoader(arg0: ClassLoader): void
    setDaemon(arg0: boolean): void
    setName(arg0: string): void
    setPriority(arg0: int): void
    setUncaughtExceptionHandler(arg0: any /*java.lang.Thread$UncaughtExceptionHandler*/): void
    start(): void
    static activeCount(): int
    static currentThread(): Thread
    static dumpStack(): void
    static enumerate(arg0: [Thread]): int
    static getAllStackTraces(): java.util.Map<Thread, [StackTraceElement]>
    static getDefaultUncaughtExceptionHandler(): any /*java.lang.Thread$UncaughtExceptionHandler*/
    static holdsLock(arg0: java.lang.Object): boolean
    static interrupted(): boolean
    static onSpinWait(): void
    static setDefaultUncaughtExceptionHandler(arg0: any /*java.lang.Thread$UncaughtExceptionHandler*/): void
    static sleep(arg0: long): void
    static sleep(arg0: long, arg1: int): void
    static yield(): void
    stop(): void
    suspend(): void
    toString(): string
  } // end Thread
} // end namespace java.lang
declare namespace java.lang {
  class ThreadGroup /* extends Object implements Thread$UncaughtExceptionHandler*/ {
    activeCount(): int
    activeGroupCount(): int
    allowThreadSuspension(arg0: boolean): boolean
    checkAccess(): void
    destroy(): void
    enumerate(arg0: [ThreadGroup]): int
    enumerate(arg0: [ThreadGroup], arg1: boolean): int
    enumerate(arg0: [Thread]): int
    enumerate(arg0: [Thread], arg1: boolean): int
    equals(arg0: java.lang.Object): boolean
    getMaxPriority(): int
    getName(): string
    getParent(): ThreadGroup
    interrupt(): void
    isDaemon(): boolean
    isDestroyed(): boolean
    list(): void
    parentOf(arg0: ThreadGroup): boolean
    resume(): void
    setDaemon(arg0: boolean): void
    setMaxPriority(arg0: int): void
    stop(): void
    suspend(): void
    toString(): string
    uncaughtException(arg0: Thread, arg1: Throwable): void
  } // end ThreadGroup
} // end namespace java.lang
declare namespace java.lang {
  class ThreadLocal<T> extends java.lang.Object {
    equals(arg0: java.lang.Object): boolean
    get(): T
    remove(): void
    set(arg0: T): void
    static withInitial<S>(arg0: any /*java.util.function.Supplier*/): ThreadLocal<S>
    toString(): string
  } // end ThreadLocal
} // end namespace java.lang
declare namespace java.lang {
  class Throwable extends Object implements java.io.Serializable {
    addSuppressed(arg0: Throwable): void
    equals(arg0: java.lang.Object): boolean
    fillInStackTrace(): Throwable
    getCause(): Throwable
    getLocalizedMessage(): string
    getMessage(): string
    getStackTrace(): [StackTraceElement]
    getSuppressed(): [Throwable]
    initCause(arg0: Throwable): Throwable
    printStackTrace(): void
    printStackTrace(arg0: java.io.PrintStream): void
    printStackTrace(arg0: java.io.PrintWriter): void
    setStackTrace(arg0: [StackTraceElement]): void
    toString(): string
  } // end Throwable
} // end namespace java.lang
