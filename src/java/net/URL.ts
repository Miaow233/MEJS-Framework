export class URL {
// Constructors
public constructor(str: string) {
return new Packages.java.net.URL(str)
}
public constructor(str: string, str_1: string, int: number, str_2: string) {
return new Packages.java.net.URL(str, str_1, int, str_2)
}
public constructor(str: string, str_1: string, int: number, str_2: string, url: URLStreamHandler) {
return new Packages.java.net.URL(str, str_1, int, str_2, url)
}
public constructor(str: string, str_1: string, str_2: string) {
return new Packages.java.net.URL(str, str_1, str_2)
}
public constructor(url: URL, str: string) {
return new Packages.java.net.URL(url, str)
}
public constructor(url: URL, str: string, url_1: URLStreamHandler) {
return new Packages.java.net.URL(url, str, url_1)
}
// Methods
private checkSpecifyHandler(sec: SecurityManager): void {
this.checkSpecifyHandler(sec)
}
static getURLStreamHandler(str: string): URLStreamHandler {
return Packages.java.net.URL.getURLStreamHandler(str)
}
private isValidProtocol(str: string): boolean {
return this.isValidProtocol(str)
}
private synchronized readObject(obj: ObjectInputStream): void {
this.readObject(obj)
}
public static setURLStreamHandlerFactory(url: URLStreamHandlerFactory): void {
this.setURLStreamHandlerFactory(url)
}
private synchronized writeObject(obj: ObjectOutputStream): void {
this.writeObject(obj)
}
public equals(obj: Object): boolean {
return this.equals(obj)
}
public getAuthority(): string {
return this.getAuthority()
}
public getContent(): Object {
return this.getContent()
}
public getContent(cla: Class[]): Object {
return this.getContent(cla)
}
public getDefaultPort(): number {
return this.getDefaultPort()
}
public getFile(): string {
return this.getFile()
}
public getHost(): string {
return this.getHost()
}
public getPath(): string {
return this.getPath()
}
public getPort(): number {
return this.getPort()
}
public getProtocol(): string {
return this.getProtocol()
}
public getQuery(): string {
return this.getQuery()
}
public getRef(): string {
return this.getRef()
}
public getUserInfo(): string {
return this.getUserInfo()
}
public synchronized hashCode(): number {
return this.hashCode()
}
public openConnection(): URLConnection {
return this.openConnection()
}
public openConnection(pro: Proxy): URLConnection {
return this.openConnection(pro)
}
public openStream(): InputStream {
return this.openStream()
}
public sameFile(url: URL): boolean {
return this.sameFile(url)
}
protected set(str: string, str_1: string, int: number, str_2: string, str_3: string): void {
this.set(str, str_1, int, str_2, str_3)
}
protected set(str: string, str_1: string, int: number, str_2: string, str_3: string, str_4: string, str_5: string, str_6: string): void {
this.set(str, str_1, int, str_2, str_3, str_4, str_5, str_6)
}
public toExternalForm(): string {
return this.toExternalForm()
}
public toString(): string {
return this.toString()
}
public toURI(): URI {
return this.toURI()
}
// Fields
private authority: string
private file: string
transient handler: URLStreamHandler
private transient hashCode: number
private host: string
transient hostAddress: InetAddress
private transient path: string
private port: number
private protocol: string
private transient query: string
private ref: string
private transient userInfo: string
static factory: URLStreamHandlerFactory
static handlers: Hashtable
private static protocolPathProp: string
static serialVersionUID: number
private static streamHandlerLock: Object
}
