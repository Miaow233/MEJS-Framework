class java.lang.Double extends java.lang.Number {
// Constructors
public constructor(dou: double) {
return new Packages.java.lang.Double(dou)
}
// Constructors
public constructor(str: string) {
return new Packages.java.lang.Double(str)
}
// Methods
public static compare(dou: double, dou_1: double): number {
return Packages.java.lang.Double.compare(dou, dou_1)
}
public static doubleToLongBits(dou: double): number {
return Packages.java.lang.Double.doubleToLongBits(dou)
}
public static native doubleToRawLongBits(dou: double): number {
return Packages.java.lang.Double.doubleToRawLongBits(dou)
}
public static hashCode(dou: double): number {
return Packages.java.lang.Double.hashCode(dou)
}
public static isFinite(dou: double): boolean {
return Packages.java.lang.Double.isFinite(dou)
}
public static isInfinite(dou: double): boolean {
return Packages.java.lang.Double.isInfinite(dou)
}
public static isNaN(dou: double): boolean {
return Packages.java.lang.Double.isNaN(dou)
}
public static native longBitsToDouble(lon: number): double {
return Packages.java.lang.Double.longBitsToDouble(lon)
}
public static max(dou: double, dou_1: double): double {
return Packages.java.lang.Double.max(dou, dou_1)
}
public static min(dou: double, dou_1: double): double {
return Packages.java.lang.Double.min(dou, dou_1)
}
public static parseDouble(str: string): double {
return Packages.java.lang.Double.parseDouble(str)
}
public static sum(dou: double, dou_1: double): double {
return Packages.java.lang.Double.sum(dou, dou_1)
}
public static toHexString(dou: double): string {
return Packages.java.lang.Double.toHexString(dou)
}
public static toString(dou: double): string {
return Packages.java.lang.Double.toString(dou)
}
public static valueOf(dou: double): Double {
return Packages.java.lang.Double.valueOf(dou)
}
public static valueOf(str: string): Double {
return Packages.java.lang.Double.valueOf(str)
}
public byteValue(): byte {
return this.byteValue()
}
public compareTo(dou: Double): number {
return this.compareTo(dou)
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
private value: double
public static BYTES: number
public static MAX_EXPONENT: number
public static MAX_VALUE: double
public static MIN_EXPONENT: number
public static MIN_NORMAL: double
public static MIN_VALUE: double
public static NEGATIVE_INFINITY: double
public static NaN: double
public static POSITIVE_INFINITY: double
public static SIZE: number
public static TYPE: Class
private static serialVersionUID: number
}