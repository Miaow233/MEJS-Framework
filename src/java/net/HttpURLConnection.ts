class java.net.HttpURLConnection extends java.net.URLConnection {
// Constructors
public abstract constructor(url: URL) {
return new Packages.java.net.HttpURLConnection(url)
}
// Methods
public static getFollowRedirects(): boolean {
return Packages.java.net.HttpURLConnection.getFollowRedirects()
}
public static setFollowRedirects(boo: boolean): void {
this.setFollowRedirects(boo)
}
public abstract disconnect(): void {
this.disconnect()
}
public getErrorStream(): InputStream {
return this.getErrorStream()
}
public getHeaderField(int: number): string {
return this.getHeaderField(int)
}
public getHeaderFieldDate(str: string, lon: number): number {
return this.getHeaderFieldDate(str, lon)
}
public getHeaderFieldKey(int: number): string {
return this.getHeaderFieldKey(int)
}
public getInstanceFollowRedirects(): boolean {
return this.getInstanceFollowRedirects()
}
public getPermission(): Permission {
return this.getPermission()
}
public getRequestMethod(): string {
return this.getRequestMethod()
}
public getResponseCode(): number {
return this.getResponseCode()
}
public getResponseMessage(): string {
return this.getResponseMessage()
}
public setChunkedStreamingMode(int: number): void {
this.setChunkedStreamingMode(int)
}
public setFixedLengthStreamingMode(int: number): void {
this.setFixedLengthStreamingMode(int)
}
public setFixedLengthStreamingMode(lon: number): void {
this.setFixedLengthStreamingMode(lon)
}
public setInstanceFollowRedirects(boo: boolean): void {
this.setInstanceFollowRedirects(boo)
}
public setRequestMethod(str: string): void {
this.setRequestMethod(str)
}
public abstract usingProxy(): boolean {
return this.usingProxy()
}
// Fields
protected chunkLength: number
protected fixedContentLength: number
protected fixedContentLengthLong: number
protected instanceFollowRedirects: boolean
protected method: string
protected responseCode: number
protected responseMessage: string
private static DEFAULT_CHUNK_SIZE: number
public static HTTP_ACCEPTED: number
public static HTTP_BAD_GATEWAY: number
public static HTTP_BAD_METHOD: number
public static HTTP_BAD_REQUEST: number
public static HTTP_CLIENT_TIMEOUT: number
public static HTTP_CONFLICT: number
public static HTTP_CREATED: number
public static HTTP_ENTITY_TOO_LARGE: number
public static HTTP_FORBIDDEN: number
public static HTTP_GATEWAY_TIMEOUT: number
public static HTTP_GONE: number
public static HTTP_INTERNAL_ERROR: number
public static HTTP_LENGTH_REQUIRED: number
public static HTTP_MOVED_PERM: number
public static HTTP_MOVED_TEMP: number
public static HTTP_MULT_CHOICE: number
public static HTTP_NOT_ACCEPTABLE: number
public static HTTP_NOT_AUTHORITATIVE: number
public static HTTP_NOT_FOUND: number
public static HTTP_NOT_IMPLEMENTED: number
public static HTTP_NOT_MODIFIED: number
public static HTTP_NO_CONTENT: number
public static HTTP_OK: number
public static HTTP_PARTIAL: number
public static HTTP_PAYMENT_REQUIRED: number
public static HTTP_PRECON_FAILED: number
public static HTTP_PROXY_AUTH: number
public static HTTP_REQ_TOO_LONG: number
public static HTTP_RESET: number
public static HTTP_SEE_OTHER: number
public static HTTP_SERVER_ERROR: number
public static HTTP_UNAUTHORIZED: number
public static HTTP_UNAVAILABLE: number
public static HTTP_UNSUPPORTED_TYPE: number
public static HTTP_USE_PROXY: number
public static HTTP_VERSION: number
private static followRedirects: boolean
private static methods: String[]
}