class java.nio.ByteBuffer extends java.nio.Buffer {
// Constructors
public abstract constructor(int: number, int_1: number, int_2: number, int_3: number) {
return new Packages.java.nio.ByteBuffer(int, int_1, int_2, int_3)
}
// Constructors
public abstract constructor(int: number, int_1: number, int_2: number, int_3: number, b: byte[], int_4: number) {
return new Packages.java.nio.ByteBuffer(int, int_1, int_2, int_3, b, int_4)
}
// Methods
public static allocate(int: number): ByteBuffer {
return Packages.java.nio.ByteBuffer.allocate(int)
}
public static allocateDirect(int: number): ByteBuffer {
return Packages.java.nio.ByteBuffer.allocateDirect(int)
}
private static compare(byt: byte, byt_1: byte): number {
return Packages.java.nio.ByteBuffer.compare(byt, byt_1)
}
private static equals(byt: byte, byt_1: byte): boolean {
return Packages.java.nio.ByteBuffer.equals(byt, byt_1)
}
public static wrap(b: byte[]): ByteBuffer {
return Packages.java.nio.ByteBuffer.wrap(b)
}
public static wrap(b: byte[], int: number, int_1: number): ByteBuffer {
return Packages.java.nio.ByteBuffer.wrap(b, int, int_1)
}
abstract _get(int: number): byte {
return this._get(int)
}
abstract _put(int: number, byt: byte): void {
this._put(int, byt)
}
public volatile array(): Object {
return this.array()
}
public array(): byte[] {
return this.array()
}
public arrayOffset(): number {
return this.arrayOffset()
}
public abstract asCharBuffer(): CharBuffer {
return this.asCharBuffer()
}
public abstract asDoubleBuffer(): DoubleBuffer {
return this.asDoubleBuffer()
}
public abstract asFloatBuffer(): FloatBuffer {
return this.asFloatBuffer()
}
public abstract asIntBuffer(): IntBuffer {
return this.asIntBuffer()
}
public abstract asLongBuffer(): LongBuffer {
return this.asLongBuffer()
}
public abstract asReadOnlyBuffer(): ByteBuffer {
return this.asReadOnlyBuffer()
}
public abstract asShortBuffer(): ShortBuffer {
return this.asShortBuffer()
}
public abstract compact(): ByteBuffer {
return this.compact()
}
public volatile compareTo(obj: Object): number {
return this.compareTo(obj)
}
public compareTo(byt: ByteBuffer): number {
return this.compareTo(byt)
}
public abstract duplicate(): ByteBuffer {
return this.duplicate()
}
public equals(obj: Object): boolean {
return this.equals(obj)
}
public abstract get(): byte {
return this.get()
}
public abstract get(int: number): byte {
return this.get(int)
}
public get(b: byte[]): ByteBuffer {
return this.get(b)
}
public get(b: byte[], int: number, int_1: number): ByteBuffer {
return this.get(b, int, int_1)
}
public abstract getChar(): char {
return this.getChar()
}
public abstract getChar(int: number): char {
return this.getChar(int)
}
getCharUnchecked(int: number): char {
return this.getCharUnchecked(int)
}
public abstract getDouble(): double {
return this.getDouble()
}
public abstract getDouble(int: number): double {
return this.getDouble(int)
}
getDoubleUnchecked(int: number): double {
return this.getDoubleUnchecked(int)
}
public abstract getFloat(): float {
return this.getFloat()
}
public abstract getFloat(int: number): float {
return this.getFloat(int)
}
getFloatUnchecked(int: number): float {
return this.getFloatUnchecked(int)
}
public abstract getInt(): number {
return this.getInt()
}
public abstract getInt(int: number): number {
return this.getInt(int)
}
getIntUnchecked(int: number): number {
return this.getIntUnchecked(int)
}
public abstract getLong(): number {
return this.getLong()
}
public abstract getLong(int: number): number {
return this.getLong(int)
}
getLongUnchecked(int: number): number {
return this.getLongUnchecked(int)
}
public abstract getShort(): short {
return this.getShort()
}
public abstract getShort(int: number): short {
return this.getShort(int)
}
getShortUnchecked(int: number): short {
return this.getShortUnchecked(int)
}
getUnchecked(int: number, c: String[], int_1: number, int_2: number): void {
this.getUnchecked(int, c, int_1, int_2)
}
getUnchecked(int: number, d: [D, int_1: number, int_2: number): void {
this.getUnchecked(int, d, int_1, int_2)
}
getUnchecked(int: number, f: [F, int_1: number, int_2: number): void {
this.getUnchecked(int, f, int_1, int_2)
}
getUnchecked(int: number, i: number[], int_1: number, int_2: number): void {
this.getUnchecked(int, i, int_1, int_2)
}
getUnchecked(int: number, j: [J, int_1: number, int_2: number): void {
this.getUnchecked(int, j, int_1, int_2)
}
getUnchecked(int: number, s: [S, int_1: number, int_2: number): void {
this.getUnchecked(int, s, int_1, int_2)
}
public hasArray(): boolean {
return this.hasArray()
}
public hashCode(): number {
return this.hashCode()
}
public isAccessible(): boolean {
return this.isAccessible()
}
public abstract isDirect(): boolean {
return this.isDirect()
}
public order(byt: ByteOrder): ByteBuffer {
return this.order(byt)
}
public order(): ByteOrder {
return this.order()
}
public abstract put(byt: byte): ByteBuffer {
return this.put(byt)
}
public abstract put(int: number, byt: byte): ByteBuffer {
return this.put(int, byt)
}
public put(byt: ByteBuffer): ByteBuffer {
return this.put(byt)
}
public put(b: byte[]): ByteBuffer {
return this.put(b)
}
public put(b: byte[], int: number, int_1: number): ByteBuffer {
return this.put(b, int, int_1)
}
public abstract putChar(cha: char): ByteBuffer {
return this.putChar(cha)
}
public abstract putChar(int: number, cha: char): ByteBuffer {
return this.putChar(int, cha)
}
putCharUnchecked(int: number, cha: char): void {
this.putCharUnchecked(int, cha)
}
public abstract putDouble(dou: double): ByteBuffer {
return this.putDouble(dou)
}
public abstract putDouble(int: number, dou: double): ByteBuffer {
return this.putDouble(int, dou)
}
putDoubleUnchecked(int: number, dou: double): void {
this.putDoubleUnchecked(int, dou)
}
public abstract putFloat(flo: float): ByteBuffer {
return this.putFloat(flo)
}
public abstract putFloat(int: number, flo: float): ByteBuffer {
return this.putFloat(int, flo)
}
putFloatUnchecked(int: number, flo: float): void {
this.putFloatUnchecked(int, flo)
}
public abstract putInt(int: number): ByteBuffer {
return this.putInt(int)
}
public abstract putInt(int: number, int_1: number): ByteBuffer {
return this.putInt(int, int_1)
}
putIntUnchecked(int: number, int_1: number): void {
this.putIntUnchecked(int, int_1)
}
public abstract putLong(int: number, lon: number): ByteBuffer {
return this.putLong(int, lon)
}
public abstract putLong(lon: number): ByteBuffer {
return this.putLong(lon)
}
putLongUnchecked(int: number, lon: number): void {
this.putLongUnchecked(int, lon)
}
public abstract putShort(int: number, sho: short): ByteBuffer {
return this.putShort(int, sho)
}
public abstract putShort(sho: short): ByteBuffer {
return this.putShort(sho)
}
putShortUnchecked(int: number, sho: short): void {
this.putShortUnchecked(int, sho)
}
putUnchecked(int: number, c: String[], int_1: number, int_2: number): void {
this.putUnchecked(int, c, int_1, int_2)
}
putUnchecked(int: number, d: [D, int_1: number, int_2: number): void {
this.putUnchecked(int, d, int_1, int_2)
}
putUnchecked(int: number, f: [F, int_1: number, int_2: number): void {
this.putUnchecked(int, f, int_1, int_2)
}
putUnchecked(int: number, i: number[], int_1: number, int_2: number): void {
this.putUnchecked(int, i, int_1, int_2)
}
putUnchecked(int: number, j: [J, int_1: number, int_2: number): void {
this.putUnchecked(int, j, int_1, int_2)
}
putUnchecked(int: number, s: [S, int_1: number, int_2: number): void {
this.putUnchecked(int, s, int_1, int_2)
}
public setAccessible(boo: boolean): void {
this.setAccessible(boo)
}
public abstract slice(): ByteBuffer {
return this.slice()
}
public toString(): string {
return this.toString()
}
// Fields
bigEndian: boolean
final hb: byte[]
isReadOnly: boolean
nativeByteOrder: boolean
final offset: number
}