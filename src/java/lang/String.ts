class java.lang.String {
public constructor() {
return new Packages.java.lang.String()
}
public constructor(int: number, int_1: number, c: String[]) {
return new Packages.java.lang.String(int, int_1, c)
}
public constructor(str: string) {
return new Packages.java.lang.String(str)
}
public constructor(str: StringBuffer) {
return new Packages.java.lang.String(str)
}
public constructor(str: StringBuilder) {
return new Packages.java.lang.String(str)
}
public constructor(b: byte[]) {
return new Packages.java.lang.String(b)
}
public constructor(b: byte[], int: number) {
return new Packages.java.lang.String(b, int)
}
public constructor(b: byte[], int: number, int_1: number) {
return new Packages.java.lang.String(b, int, int_1)
}
public constructor(b: byte[], int: number, int_1: number, int_2: number) {
return new Packages.java.lang.String(b, int, int_1, int_2)
}
public constructor(b: byte[], int: number, int_1: number, str: string) {
return new Packages.java.lang.String(b, int, int_1, str)
}
public constructor(b: byte[], int: number, int_1: number, cha: Charset) {
return new Packages.java.lang.String(b, int, int_1, cha)
}
public constructor(b: byte[], str: string) {
return new Packages.java.lang.String(b, str)
}
public constructor(b: byte[], cha: Charset) {
return new Packages.java.lang.String(b, cha)
}
public constructor(c: String[]) {
return new Packages.java.lang.String(c)
}
public constructor(c: String[], int: number, int_1: number) {
return new Packages.java.lang.String(c, int, int_1)
}
public constructor(i: number[], int: number, int_1: number) {
return new Packages.java.lang.String(i, int, int_1)
}
// Methods
public static copyValueOf(c: String[]): string {
return Packages.java.lang.String.copyValueOf(c)
}
public static copyValueOf(c: String[], int: number, int_1: number): string {
return Packages.java.lang.String.copyValueOf(c, int, int_1)
}
private native fastIndexOf(int: number, int_1: number): number {
return this.fastIndexOf(int, int_1)
}
private native fastSubstring(int: number, int_1: number): string {
return this.fastSubstring(int, int_1)
}
public static transient format(str: string, obj: Object[]): string {
return Packages.java.lang.String.format(str, obj)
}
public static transient format(loc: Locale, str: string, obj: Object[]): string {
return Packages.java.lang.String.format(loc, str, obj)
}
static indexOf(str: string, str_1: string, int: number): number {
return Packages.java.lang.String.indexOf(str, str_1, int)
}
static indexOf(c: String[], int: number, int_1: number, c_1: String[], int_2: number, int_3: number, int_4: number): number {
return Packages.java.lang.String.indexOf(c, int, int_1, c_1, int_2, int_3, int_4)
}
private indexOfSupplementary(int: number, int_1: number): number {
return this.indexOfSupplementary(int, int_1)
}
static lastIndexOf(str: string, str_1: string, int: number): number {
return Packages.java.lang.String.lastIndexOf(str, str_1, int)
}
static lastIndexOf(c: String[], int: number, int_1: number, c_1: String[], int_2: number, int_3: number, int_4: number): number {
return Packages.java.lang.String.lastIndexOf(c, int, int_1, c_1, int_2, int_3, int_4)
}
private lastIndexOfSupplementary(int: number, int_1: number): number {
return this.lastIndexOfSupplementary(int, int_1)
}
public static valueOf(cha: char): string {
return Packages.java.lang.String.valueOf(cha)
}
public static valueOf(dou: double): string {
return Packages.java.lang.String.valueOf(dou)
}
public static valueOf(flo: float): string {
return Packages.java.lang.String.valueOf(flo)
}
public static valueOf(int: number): string {
return Packages.java.lang.String.valueOf(int)
}
public static valueOf(lon: number): string {
return Packages.java.lang.String.valueOf(lon)
}
public static valueOf(obj: Object): string {
return Packages.java.lang.String.valueOf(obj)
}
public static valueOf(boo: boolean): string {
return Packages.java.lang.String.valueOf(boo)
}
public static valueOf(c: String[]): string {
return Packages.java.lang.String.valueOf(c)
}
public static valueOf(c: String[], int: number, int_1: number): string {
return Packages.java.lang.String.valueOf(c, int, int_1)
}
public native charAt(int: number): char {
return this.charAt(int)
}
public codePointAt(int: number): number {
return this.codePointAt(int)
}
public codePointBefore(int: number): number {
return this.codePointBefore(int)
}
public codePointCount(int: number, int_1: number): number {
return this.codePointCount(int, int_1)
}
public volatile compareTo(obj: Object): number {
return this.compareTo(obj)
}
public native compareTo(str: string): number {
return this.compareTo(str)
}
public compareToIgnoreCase(str: string): number {
return this.compareToIgnoreCase(str)
}
public native concat(str: string): string {
return this.concat(str)
}
public contains(cha: CharSequence): boolean {
return this.contains(cha)
}
public contentEquals(cha: CharSequence): boolean {
return this.contentEquals(cha)
}
public contentEquals(str: StringBuffer): boolean {
return this.contentEquals(str)
}
public endsWith(str: string): boolean {
return this.endsWith(str)
}
public equals(obj: Object): boolean {
return this.equals(obj)
}
public equalsIgnoreCase(str: string): boolean {
return this.equalsIgnoreCase(str)
}
public getBytes(int: number, int_1: number, b: byte[], int_2: number): void {
this.getBytes(int, int_1, b, int_2)
}
public getBytes(): byte[] {
return this.getBytes()
}
public getBytes(str: string): byte[] {
return this.getBytes(str)
}
public getBytes(cha: Charset): byte[] {
return this.getBytes(cha)
}
public getChars(int: number, int_1: number, c: String[], int_2: number): void {
this.getChars(int, int_1, c, int_2)
}
native getCharsNoCheck(int: number, int_1: number, c: String[], int_2: number): void {
this.getCharsNoCheck(int, int_1, c, int_2)
}
public hashCode(): number {
return this.hashCode()
}
public indexOf(int: number): number {
return this.indexOf(int)
}
public indexOf(int: number, int_1: number): number {
return this.indexOf(int, int_1)
}
public indexOf(str: string): number {
return this.indexOf(str)
}
public indexOf(str: string, int: number): number {
return this.indexOf(str, int)
}
public native intern(): string {
return this.intern()
}
public isEmpty(): boolean {
return this.isEmpty()
}
public lastIndexOf(int: number): number {
return this.lastIndexOf(int)
}
public lastIndexOf(int: number, int_1: number): number {
return this.lastIndexOf(int, int_1)
}
public lastIndexOf(str: string): number {
return this.lastIndexOf(str)
}
public lastIndexOf(str: string, int: number): number {
return this.lastIndexOf(str, int)
}
public length(): number {
return this.length()
}
public matches(str: string): boolean {
return this.matches(str)
}
public offsetByCodePoints(int: number, int_1: number): number {
return this.offsetByCodePoints(int, int_1)
}
public regionMatches(int: number, str: string, int_1: number, int_2: number): boolean {
return this.regionMatches(int, str, int_1, int_2)
}
public regionMatches(boo: boolean, int: number, str: string, int_1: number, int_2: number): boolean {
return this.regionMatches(boo, int, str, int_1, int_2)
}
public replace(cha: char, cha_1: char): string {
return this.replace(cha, cha_1)
}
public replace(cha: CharSequence, cha_1: CharSequence): string {
return this.replace(cha, cha_1)
}
public replaceAll(str: string, str_1: string): string {
return this.replaceAll(str, str_1)
}
public replaceFirst(str: string, str_1: string): string {
return this.replaceFirst(str, str_1)
}
native setCharAt(int: number, cha: char): void {
this.setCharAt(int, cha)
}
public split(str: string): String[] {
return this.split(str)
}
public split(str: string, int: number): String[] {
return this.split(str, int)
}
public startsWith(str: string): boolean {
return this.startsWith(str)
}
public startsWith(str: string, int: number): boolean {
return this.startsWith(str, int)
}
public subSequence(int: number, int_1: number): CharSequence {
return this.subSequence(int, int_1)
}
public substring(int: number): string {
return this.substring(int)
}
public substring(int: number, int_1: number): string {
return this.substring(int, int_1)
}
public native toCharArray(): String[] {
return this.toCharArray()
}
public toLowerCase(): string {
return this.toLowerCase()
}
public toLowerCase(loc: Locale): string {
return this.toLowerCase(loc)
}
public toString(): string {
return this.toString()
}
public toUpperCase(): string {
return this.toUpperCase()
}
public toUpperCase(loc: Locale): string {
return this.toUpperCase(loc)
}
public trim(): string {
return this.trim()
}
// Fields
private count: number
private hash: number
public static CASE_INSENSITIVE_ORDER: Comparator
private static serialPersistentFields: ObjectStreamField[]
private static serialVersionUID: number
}