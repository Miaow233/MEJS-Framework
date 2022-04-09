class java.nio.charset.CharsetEncoder {
// Constructors
public abstract constructor(cha: Charset, flo: float, flo_1: float) {
return new Packages.java.nio.charset.CharsetEncoder(cha, flo, flo_1)
}
// Constructors
public abstract constructor(cha: Charset, flo: float, flo_1: float, b: byte[]) {
return new Packages.java.nio.charset.CharsetEncoder(cha, flo, flo_1, b)
}
// Constructors
public abstract constructor(cha: Charset, flo: float, flo_1: float, b: byte[], boo: boolean) {
return new Packages.java.nio.charset.CharsetEncoder(cha, flo, flo_1, b, boo)
}
// Methods
private canEncode(cha: CharBuffer): boolean {
return this.canEncode(cha)
}
private throwIllegalStateException(int: number, int_1: number): void {
this.throwIllegalStateException(int, int_1)
}
public averageBytesPerChar(): float {
return this.averageBytesPerChar()
}
public canEncode(cha: char): boolean {
return this.canEncode(cha)
}
public canEncode(cha: CharSequence): boolean {
return this.canEncode(cha)
}
public charset(): Charset {
return this.charset()
}
public encode(cha: CharBuffer): ByteBuffer {
return this.encode(cha)
}
public encode(cha: CharBuffer, byt: ByteBuffer, boo: boolean): CoderResult {
return this.encode(cha, byt, boo)
}
protected abstract encodeLoop(cha: CharBuffer, byt: ByteBuffer): CoderResult {
return this.encodeLoop(cha, byt)
}
public flush(byt: ByteBuffer): CoderResult {
return this.flush(byt)
}
protected implFlush(byt: ByteBuffer): CoderResult {
return this.implFlush(byt)
}
protected implOnMalformedInput(cod: CodingErrorAction): void {
this.implOnMalformedInput(cod)
}
protected implOnUnmappableCharacter(cod: CodingErrorAction): void {
this.implOnUnmappableCharacter(cod)
}
protected implReplaceWith(b: byte[]): void {
this.implReplaceWith(b)
}
protected implReset(): void {
this.implReset()
}
public isLegalReplacement(b: byte[]): boolean {
return this.isLegalReplacement(b)
}
public malformedInputAction(): CodingErrorAction {
return this.malformedInputAction()
}
public maxBytesPerChar(): float {
return this.maxBytesPerChar()
}
public onMalformedInput(cod: CodingErrorAction): CharsetEncoder {
return this.onMalformedInput(cod)
}
public onUnmappableCharacter(cod: CodingErrorAction): CharsetEncoder {
return this.onUnmappableCharacter(cod)
}
public replaceWith(b: byte[]): CharsetEncoder {
return this.replaceWith(b)
}
public replacement(): byte[] {
return this.replacement()
}
public reset(): CharsetEncoder {
return this.reset()
}
public unmappableCharacterAction(): CodingErrorAction {
return this.unmappableCharacterAction()
}
// Fields
private averageBytesPerChar: float
private cachedDecoder: WeakReference
private charset: Charset
private malformedInputAction: CodingErrorAction
private maxBytesPerChar: float
private replacement: byte[]
private state: number
private unmappableCharacterAction: CodingErrorAction
static -assertionsDisabled: boolean
private static ST_CODING: number
private static ST_END: number
private static ST_FLUSHED: number
private static ST_RESET: number
private static stateNames: String[]
}