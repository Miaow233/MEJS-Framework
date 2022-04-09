class java.net.URLConnection {
// Constructors
public abstract constructor(url: URL) {
return new Packages.java.net.URLConnection(url)
}
// Methods
private static checkfpx(inp: InputStream): boolean {
return Packages.java.net.URLConnection.checkfpx(inp)
}
private getContentHandlerPkgPrefixes(): string {
return this.getContentHandlerPkgPrefixes()
}
public static getDefaultAllowUserInteraction(): boolean {
return Packages.java.net.URLConnection.getDefaultAllowUserInteraction()
}
public static getDefaultRequestProperty(str: string): string {
return Packages.java.net.URLConnection.getDefaultRequestProperty(str)
}
public static synchronized getFileNameMap(): FileNameMap {
return Packages.java.net.URLConnection.getFileNameMap()
}
public static guessContentTypeFromName(str: string): string {
return Packages.java.net.URLConnection.guessContentTypeFromName(str)
}
public static guessContentTypeFromStream(inp: InputStream): string {
return Packages.java.net.URLConnection.guessContentTypeFromStream(inp)
}
private lookupContentHandlerClassFor(str: string): ContentHandler {
return this.lookupContentHandlerClassFor(str)
}
private static readBytes(i: number[], int: number, inp: InputStream): number {
return Packages.java.net.URLConnection.readBytes(i, int, inp)
}
public static synchronized setContentHandlerFactory(con: ContentHandlerFactory): void {
this.setContentHandlerFactory(con)
}
public static setDefaultAllowUserInteraction(boo: boolean): void {
this.setDefaultAllowUserInteraction(boo)
}
public static setDefaultRequestProperty(str: string, str_1: string): void {
this.setDefaultRequestProperty(str, str_1)
}
public static setFileNameMap(fil: FileNameMap): void {
this.setFileNameMap(fil)
}
private static skipForward(inp: InputStream, lon: number): number {
return Packages.java.net.URLConnection.skipForward(inp, lon)
}
private stripOffParameters(str: string): string {
return this.stripOffParameters(str)
}
private typeToPackageName(str: string): string {
return this.typeToPackageName(str)
}
public addRequestProperty(str: string, str_1: string): void {
this.addRequestProperty(str, str_1)
}
public abstract connect(): void {
this.connect()
}
public getAllowUserInteraction(): boolean {
return this.getAllowUserInteraction()
}
public getConnectTimeout(): number {
return this.getConnectTimeout()
}
public getContent(): Object {
return this.getContent()
}
public getContent(cla: Class[]): Object {
return this.getContent(cla)
}
public getContentEncoding(): string {
return this.getContentEncoding()
}
synchronized getContentHandler(): ContentHandler {
return this.getContentHandler()
}
public getContentLength(): number {
return this.getContentLength()
}
public getContentLengthLong(): number {
return this.getContentLengthLong()
}
public getContentType(): string {
return this.getContentType()
}
public getDate(): number {
return this.getDate()
}
public getDefaultUseCaches(): boolean {
return this.getDefaultUseCaches()
}
public getDoInput(): boolean {
return this.getDoInput()
}
public getDoOutput(): boolean {
return this.getDoOutput()
}
public getExpiration(): number {
return this.getExpiration()
}
public getHeaderField(int: number): string {
return this.getHeaderField(int)
}
public getHeaderField(str: string): string {
return this.getHeaderField(str)
}
public getHeaderFieldDate(str: string, lon: number): number {
return this.getHeaderFieldDate(str, lon)
}
public getHeaderFieldInt(str: string, int: number): number {
return this.getHeaderFieldInt(str, int)
}
public getHeaderFieldKey(int: number): string {
return this.getHeaderFieldKey(int)
}
public getHeaderFieldLong(str: string, lon: number): number {
return this.getHeaderFieldLong(str, lon)
}
public getHeaderFields(): Map {
return this.getHeaderFields()
}
public getIfModifiedSince(): number {
return this.getIfModifiedSince()
}
public getInputStream(): InputStream {
return this.getInputStream()
}
public getLastModified(): number {
return this.getLastModified()
}
public getOutputStream(): OutputStream {
return this.getOutputStream()
}
public getPermission(): Permission {
return this.getPermission()
}
public getReadTimeout(): number {
return this.getReadTimeout()
}
public getRequestProperties(): Map {
return this.getRequestProperties()
}
public getRequestProperty(str: string): string {
return this.getRequestProperty(str)
}
public getURL(): URL {
return this.getURL()
}
public getUseCaches(): boolean {
return this.getUseCaches()
}
public setAllowUserInteraction(boo: boolean): void {
this.setAllowUserInteraction(boo)
}
public setConnectTimeout(int: number): void {
this.setConnectTimeout(int)
}
public setDefaultUseCaches(boo: boolean): void {
this.setDefaultUseCaches(boo)
}
public setDoInput(boo: boolean): void {
this.setDoInput(boo)
}
public setDoOutput(boo: boolean): void {
this.setDoOutput(boo)
}
public setIfModifiedSince(lon: number): void {
this.setIfModifiedSince(lon)
}
public setReadTimeout(int: number): void {
this.setReadTimeout(int)
}
public setRequestProperty(str: string, str_1: string): void {
this.setRequestProperty(str, str_1)
}
public setUseCaches(boo: boolean): void {
this.setUseCaches(boo)
}
public toString(): string {
return this.toString()
}
// Fields
protected allowUserInteraction: boolean
private connectTimeout: number
protected connected: boolean
protected doInput: boolean
protected doOutput: boolean
protected ifModifiedSince: number
private readTimeout: number
private requests: MessageHeader
protected url: URL
protected useCaches: boolean
private static contentClassPrefix: string
private static contentPathProp: string
private static defaultAllowUserInteraction: boolean
private static defaultUseCaches: boolean
static factory: ContentHandlerFactory
private static fileNameMap: FileNameMap
private static handlers: Hashtable
}