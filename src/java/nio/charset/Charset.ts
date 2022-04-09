class java.nio.charset.Charset {
// Constructors
public abstract constructor(str: string, str_1: String[]) {
return new Packages.java.nio.charset.Charset(str, str_1)
}
// Methods
static -wrap0(): Iterator {
return Packages.java.nio.charset.Charset.-wrap0()
}
static -wrap1(ite: Iterator, map: Map): void {
this.-wrap1(ite, map)
}
static atBugLevel(str: string): boolean {
return Packages.java.nio.charset.Charset.atBugLevel(str)
}
public static availableCharsets(): SortedMap {
return Packages.java.nio.charset.Charset.availableCharsets()
}
private static cache(str: string, cha: Charset): void {
this.cache(str, cha)
}
private static checkName(str: string): void {
this.checkName(str)
}
public static defaultCharset(): Charset {
return Packages.java.nio.charset.Charset.defaultCharset()
}
public static forName(str: string): Charset {
return Packages.java.nio.charset.Charset.forName(str)
}
public static forNameUEE(str: string): Charset {
return Packages.java.nio.charset.Charset.forNameUEE(str)
}
public static isSupported(str: string): boolean {
return Packages.java.nio.charset.Charset.isSupported(str)
}
private static lookup(str: string): Charset {
return Packages.java.nio.charset.Charset.lookup(str)
}
private static lookup2(str: string): Charset {
return Packages.java.nio.charset.Charset.lookup2(str)
}
private static lookupViaProviders(str: string): Charset {
return Packages.java.nio.charset.Charset.lookupViaProviders(str)
}
private static providers(): Iterator {
return Packages.java.nio.charset.Charset.providers()
}
private static put(ite: Iterator, map: Map): void {
this.put(ite, map)
}
public aliases(): Set {
return this.aliases()
}
public canEncode(): boolean {
return this.canEncode()
}
public volatile compareTo(obj: Object): number {
return this.compareTo(obj)
}
public compareTo(cha: Charset): number {
return this.compareTo(cha)
}
public abstract contains(cha: Charset): boolean {
return this.contains(cha)
}
public decode(byt: ByteBuffer): CharBuffer {
return this.decode(byt)
}
public displayName(): string {
return this.displayName()
}
public displayName(loc: Locale): string {
return this.displayName(loc)
}
public encode(str: string): ByteBuffer {
return this.encode(str)
}
public encode(cha: CharBuffer): ByteBuffer {
return this.encode(cha)
}
public equals(obj: Object): boolean {
return this.equals(obj)
}
public hashCode(): number {
return this.hashCode()
}
public isRegistered(): boolean {
return this.isRegistered()
}
public name(): string {
return this.name()
}
public abstract newDecoder(): CharsetDecoder {
return this.newDecoder()
}
public abstract newEncoder(): CharsetEncoder {
return this.newEncoder()
}
public toString(): string {
return this.toString()
}
// Fields
private aliasSet: Set
private aliases: String[]
private name: string
private static volatile bugLevel: string
private static volatile cache1: Map$Entry
private static cache2: HashMap
private static defaultCharset: Charset
private static gate: ThreadLocal
}