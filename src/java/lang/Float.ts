class java.lang.Float extends java.lang.Number {
// Constructors
public constructor(dou: double) {
return new Packages.java.lang.Float(dou)
}
// Constructors
public constructor(flo: float) {
return new Packages.java.lang.Float(flo)
}
// Constructors
public constructor(str: string) {
return new Packages.java.lang.Float(str)
}
// Methods
public static compare(flo: float, flo_1: float): number {
return Packages.java.lang.Float.compare(flo, flo_1)
}
public static floatToIntBits(flo: float): number {
return Packages.java.lang.Float.floatToIntBits(flo)
}
public static native floatToRawIntBits(flo: float): number {
return Packages.java.lang.Float.floatToRawIntBits(flo)
}
public static hashCode(flo: float): number {
return Packages.java.lang.Float.hashCode(flo)
}
public static native intBitsToFloat(int: number): float {
return Packages.java.lang.Float.intBitsToFloat(int)
}
public static isFinite(flo: float): boolean {
return Packages.java.lang.Float.isFinite(flo)
}
public static isInfinite(flo: float): boolean {
return Packages.java.lang.Float.isInfinite(flo)
}
public static isNaN(flo: float): boolean {
return Packages.java.lang.Float.isNaN(flo)
}
public static max(flo: float, flo_1: float): float {
return Packages.java.lang.Float.max(flo, flo_1)
}
public static min(flo: float, flo_1: float): float {
return Packages.java.lang.Float.min(flo, flo_1)
}
public static parseFloat(str: string): float {
return Packages.java.lang.Float.parseFloat(str)
}
public static sum(flo: float, flo_1: float): float {
return Packages.java.lang.Float.sum(flo, flo_1)
}
public static toHexString(flo: float): string {
return Packages.java.lang.Float.toHexString(flo)
}
public static toString(flo: float): string {
return Packages.java.lang.Float.toString(flo)
}
public static valueOf(flo: float): Float {
return Packages.java.lang.Float.valueOf(flo)
}
public static valueOf(str: string): Float {
return Packages.java.lang.Float.valueOf(str)
}
public byteValue(): byte {
return this.byteValue()
}
public compareTo(flo: Float): number {
return this.compareTo(flo)
}
public volatile compareTo(obj: Object): number {
return this.compareTo(obj)
}
public doubleValue(): double {
return this.doubleValue()
}
public equals(obj: Object): boolean {
return this.equals(obj)
}
public floatValue(): float {
return this.floatValue()
}
public hashCode(): number {
return this.hashCode()
}
public intValue(): number {
return this.intValue()
}
public isInfinite(): boolean {
return this.isInfinite()
}
public isNaN(): boolean {
return this.isNaN()
}
public longValue(): number {
return this.longValue()
}
public shortValue(): short {
return this.shortValue()
}
public toString(): string {
return this.toString()
}
// Fields
private value: float
public static BYTES: number
public static MAX_EXPONENT: number
public static MAX_VALUE: float
public static MIN_EXPONENT: number
public static MIN_NORMAL: float
public static MIN_VALUE: float
public static NEGATIVE_INFINITY: float
public static NaN: float
public static POSITIVE_INFINITY: float
public static SIZE: number
public static TYPE: Class
private static serialVersionUID: number
}