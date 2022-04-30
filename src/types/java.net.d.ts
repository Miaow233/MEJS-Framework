declare namespace java.net {
  class Authenticator /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    requestPasswordAuthenticationInstance(
      arg0: string,
      arg1: InetAddress,
      arg2: int,
      arg3: string,
      arg4: string,
      arg5: string,
      arg6: URL,
      arg7: any /*java.net.Authenticator$RequestorType*/
    ): PasswordAuthentication
    static getDefault(): Authenticator
    static requestPasswordAuthentication(
      arg0: Authenticator,
      arg1: string,
      arg2: InetAddress,
      arg3: int,
      arg4: string,
      arg5: string,
      arg6: string,
      arg7: URL,
      arg8: any /*java.net.Authenticator$RequestorType*/
    ): PasswordAuthentication
    static requestPasswordAuthentication(
      arg0: InetAddress,
      arg1: int,
      arg2: string,
      arg3: string,
      arg4: string
    ): PasswordAuthentication
    static requestPasswordAuthentication(
      arg0: string,
      arg1: InetAddress,
      arg2: int,
      arg3: string,
      arg4: string,
      arg5: string
    ): PasswordAuthentication
    static requestPasswordAuthentication(
      arg0: string,
      arg1: InetAddress,
      arg2: int,
      arg3: string,
      arg4: string,
      arg5: string,
      arg6: URL,
      arg7: any /*java.net.Authenticator$RequestorType*/
    ): PasswordAuthentication
    static setDefault(arg0: Authenticator): void
    toString(): string
  } // end Authenticator
} // end namespace java.net
declare namespace java.net {
  class CacheRequest /* extends java.lang.Object*/ {
    abort(): void
    equals(arg0: java.lang.Object): boolean
    getBody(): java.io.OutputStream
    toString(): string
  } // end CacheRequest
} // end namespace java.net
declare namespace java.net {
  class CacheResponse /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    getBody(): java.io.InputStream
    getHeaders(): java.util.Map<string, java.util.List<string>>
    toString(): string
  } // end CacheResponse
} // end namespace java.net
declare namespace java.net {
  class ContentHandler /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    getContent(arg0: URLConnection): java.lang.Object
    getContent(arg0: URLConnection, arg1: [java.lang.Class<any>]): java.lang.Object
    toString(): string
  } // end ContentHandler
} // end namespace java.net
declare namespace java.net {
  interface ContentHandlerFactory {
    createContentHandler(arg0: string): ContentHandler
  } // end ContentHandlerFactory
} // end namespace java.net
declare namespace java.net {
  class CookieHandler /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    get(arg0: URI, arg1: java.util.Map<string, java.util.List<string>>): java.util.Map<string, java.util.List<string>>
    put(arg0: URI, arg1: java.util.Map<string, java.util.List<string>>): void
    static getDefault(): CookieHandler
    static setDefault(arg0: CookieHandler): void
    toString(): string
  } // end CookieHandler
} // end namespace java.net
declare namespace java.net {
  class CookieManager /* extends CookieHandler*/ {
    equals(arg0: java.lang.Object): boolean
    get(arg0: URI, arg1: java.util.Map<string, java.util.List<string>>): java.util.Map<string, java.util.List<string>>
    getCookieStore(): CookieStore
    put(arg0: URI, arg1: java.util.Map<string, java.util.List<string>>): void
    setCookiePolicy(arg0: CookiePolicy): void
    static getDefault(): CookieHandler
    static setDefault(arg0: CookieHandler): void
    toString(): string
  } // end CookieManager
} // end namespace java.net
declare namespace java.net {
  interface CookiePolicy {
    shouldAccept(arg0: URI, arg1: HttpCookie): boolean
  } // end CookiePolicy
} // end namespace java.net
declare namespace java.net {
  interface CookieStore {
    add(arg0: URI, arg1: HttpCookie): void
    get(arg0: URI): java.util.List<HttpCookie>
    getCookies(): java.util.List<HttpCookie>
    getURIs(): java.util.List<URI>
    remove(arg0: URI, arg1: HttpCookie): boolean
    removeAll(): boolean
  } // end CookieStore
} // end namespace java.net
declare namespace java.net {
  class DatagramPacket /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    getAddress(): InetAddress
    getData(): bytearray
    getLength(): int
    getOffset(): int
    getPort(): int
    getSocketAddress(): SocketAddress
    setAddress(arg0: InetAddress): void
    setData(arg0: bytearray): void
    setData(arg0: bytearray, arg1: int, arg2: int): void
    setLength(arg0: int): void
    setPort(arg0: int): void
    setSocketAddress(arg0: SocketAddress): void
    toString(): string
  } // end DatagramPacket
} // end namespace java.net
declare namespace java.net {
  class DatagramSocket /* extends java.lang.Object implements java.io.Closeable*/ {
    bind(arg0: SocketAddress): void
    close(): void
    connect(arg0: InetAddress, arg1: int): void
    connect(arg0: SocketAddress): void
    disconnect(): void
    equals(arg0: java.lang.Object): boolean
    getBroadcast(): boolean
    getChannel(): any /*java.nio.channels.DatagramChannel*/
    getInetAddress(): InetAddress
    getLocalAddress(): InetAddress
    getLocalPort(): int
    getLocalSocketAddress(): SocketAddress
    getOption<T>(arg0: SocketOption<T>): T
    getPort(): int
    getReceiveBufferSize(): int
    getRemoteSocketAddress(): SocketAddress
    getReuseAddress(): boolean
    getSendBufferSize(): int
    getSoTimeout(): int
    getTrafficClass(): int
    isBound(): boolean
    isClosed(): boolean
    isConnected(): boolean
    receive(arg0: DatagramPacket): void
    send(arg0: DatagramPacket): void
    setBroadcast(arg0: boolean): void
    setOption<T>(arg0: SocketOption<T>, arg1: T): DatagramSocket
    setReceiveBufferSize(arg0: int): void
    setReuseAddress(arg0: boolean): void
    setSendBufferSize(arg0: int): void
    setSoTimeout(arg0: int): void
    setTrafficClass(arg0: int): void
    static setDatagramSocketImplFactory(arg0: DatagramSocketImplFactory): void
    supportedOptions(): java.util.Set<SocketOption<java.lang.Object>>
    toString(): string
  } // end DatagramSocket
} // end namespace java.net
declare namespace java.net {
  class DatagramSocketImpl /* extends java.lang.Object implements SocketOptions*/ {
    equals(arg0: java.lang.Object): boolean
    getOption(arg0: int): java.lang.Object
    setOption(arg0: int, arg1: java.lang.Object): void
    toString(): string
  } // end DatagramSocketImpl
} // end namespace java.net
declare namespace java.net {
  interface DatagramSocketImplFactory {
    createDatagramSocketImpl(): DatagramSocketImpl
  } // end DatagramSocketImplFactory
} // end namespace java.net
declare namespace java.net {
  interface FileNameMap {
    getContentTypeFor(arg0: string): string
  } // end FileNameMap
} // end namespace java.net
declare namespace java.net {
  class HttpCookie /* extends java.lang.Object implements java.lang.Cloneable*/ {
    clone(): java.lang.Object
    equals(arg0: java.lang.Object): boolean
    getComment(): string
    getCommentURL(): string
    getDiscard(): boolean
    getDomain(): string
    getMaxAge(): long
    getName(): string
    getPath(): string
    getPortlist(): string
    getSecure(): boolean
    getValue(): string
    getVersion(): int
    hasExpired(): boolean
    isHttpOnly(): boolean
    setComment(arg0: string): void
    setCommentURL(arg0: string): void
    setDiscard(arg0: boolean): void
    setDomain(arg0: string): void
    setHttpOnly(arg0: boolean): void
    setMaxAge(arg0: long): void
    setPath(arg0: string): void
    setPortlist(arg0: string): void
    setSecure(arg0: boolean): void
    setValue(arg0: string): void
    setVersion(arg0: int): void
    static domainMatches(arg0: string, arg1: string): boolean
    static parse(arg0: string): java.util.List<HttpCookie>
    toString(): string
  } // end HttpCookie
} // end namespace java.net
declare namespace java.net {
  class HttpURLConnection /* extends URLConnection*/ {
    addRequestProperty(arg0: string, arg1: string): void
    connect(): void
    disconnect(): void
    equals(arg0: java.lang.Object): boolean
    getAllowUserInteraction(): boolean
    getConnectTimeout(): int
    getContent(): java.lang.Object
    getContent(arg0: [java.lang.Class<java.lang.Object>]): java.lang.Object
    getContentEncoding(): string
    getContentLength(): int
    getContentLengthLong(): long
    getContentType(): string
    getDate(): long
    getDefaultUseCaches(): boolean
    getDoInput(): boolean
    getDoOutput(): boolean
    getErrorStream(): java.io.InputStream
    getExpiration(): long
    getHeaderField(arg0: int): string
    getHeaderField(arg0: string): string
    getHeaderFieldDate(arg0: string, arg1: long): long
    getHeaderFieldInt(arg0: string, arg1: int): int
    getHeaderFieldKey(arg0: int): string
    getHeaderFieldLong(arg0: string, arg1: long): long
    getHeaderFields(): java.util.Map<string, java.util.List<string>>
    getIfModifiedSince(): long
    getInputStream(): java.io.InputStream
    getInstanceFollowRedirects(): boolean
    getLastModified(): long
    getOutputStream(): java.io.OutputStream
    getPermission(): any /*java.security.Permission*/
    getReadTimeout(): int
    getRequestMethod(): string
    getRequestProperties(): java.util.Map<string, java.util.List<string>>
    getRequestProperty(arg0: string): string
    getResponseCode(): int
    getResponseMessage(): string
    getURL(): URL
    getUseCaches(): boolean
    setAllowUserInteraction(arg0: boolean): void
    setAuthenticator(arg0: Authenticator): void
    setChunkedStreamingMode(arg0: int): void
    setConnectTimeout(arg0: int): void
    setDefaultUseCaches(arg0: boolean): void
    setDoInput(arg0: boolean): void
    setDoOutput(arg0: boolean): void
    setFixedLengthStreamingMode(arg0: int): void
    setFixedLengthStreamingMode(arg0: long): void
    setIfModifiedSince(arg0: long): void
    setInstanceFollowRedirects(arg0: boolean): void
    setReadTimeout(arg0: int): void
    setRequestMethod(arg0: string): void
    setRequestProperty(arg0: string, arg1: string): void
    setUseCaches(arg0: boolean): void
    static getDefaultAllowUserInteraction(): boolean
    static getDefaultRequestProperty(arg0: string): string
    static getDefaultUseCaches(arg0: string): boolean
    static getFileNameMap(): FileNameMap
    static getFollowRedirects(): boolean
    static guessContentTypeFromName(arg0: string): string
    static guessContentTypeFromStream(arg0: java.io.InputStream): string
    static setContentHandlerFactory(arg0: ContentHandlerFactory): void
    static setDefaultAllowUserInteraction(arg0: boolean): void
    static setDefaultRequestProperty(arg0: string, arg1: string): void
    static setDefaultUseCaches(arg0: string, arg1: boolean): void
    static setFileNameMap(arg0: FileNameMap): void
    static setFollowRedirects(arg0: boolean): void
    toString(): string
    usingProxy(): boolean
  } // end HttpURLConnection
} // end namespace java.net
declare namespace java.net {
  class IDN /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    static toASCII(arg0: string): string
    static toASCII(arg0: string, arg1: int): string
    static toUnicode(arg0: string): string
    static toUnicode(arg0: string, arg1: int): string
    toString(): string
  } // end IDN
} // end namespace java.net
declare namespace java.net {
  class Inet4Address /* extends InetAddress*/ {
    equals(arg0: java.lang.Object): boolean
    getAddress(): bytearray
    getCanonicalHostName(): string
    getHostAddress(): string
    getHostName(): string
    isAnyLocalAddress(): boolean
    isLinkLocalAddress(): boolean
    isLoopbackAddress(): boolean
    isMCGlobal(): boolean
    isMCLinkLocal(): boolean
    isMCNodeLocal(): boolean
    isMCOrgLocal(): boolean
    isMCSiteLocal(): boolean
    isMulticastAddress(): boolean
    isReachable(arg0: NetworkInterface, arg1: int, arg2: int): boolean
    isReachable(arg0: int): boolean
    isSiteLocalAddress(): boolean
    static getAllByName(arg0: string): [InetAddress]
    static getByAddress(arg0: bytearray): InetAddress
    static getByAddress(arg0: string, arg1: bytearray): InetAddress
    static getByName(arg0: string): InetAddress
    static getLocalHost(): InetAddress
    static getLoopbackAddress(): InetAddress
    toString(): string
  } // end Inet4Address
} // end namespace java.net
declare namespace java.net {
  class Inet6Address /* extends InetAddress*/ {
    equals(arg0: java.lang.Object): boolean
    getAddress(): bytearray
    getCanonicalHostName(): string
    getHostAddress(): string
    getHostName(): string
    getScopeId(): int
    getScopedInterface(): NetworkInterface
    isAnyLocalAddress(): boolean
    isIPv4CompatibleAddress(): boolean
    isLinkLocalAddress(): boolean
    isLoopbackAddress(): boolean
    isMCGlobal(): boolean
    isMCLinkLocal(): boolean
    isMCNodeLocal(): boolean
    isMCOrgLocal(): boolean
    isMCSiteLocal(): boolean
    isMulticastAddress(): boolean
    isReachable(arg0: NetworkInterface, arg1: int, arg2: int): boolean
    isReachable(arg0: int): boolean
    isSiteLocalAddress(): boolean
    static getAllByName(arg0: string): [InetAddress]
    static getByAddress(arg0: bytearray): InetAddress
    static getByAddress(arg0: string, arg1: bytearray): InetAddress
    static getByAddress(arg0: string, arg1: bytearray, arg2: NetworkInterface): Inet6Address
    static getByAddress(arg0: string, arg1: bytearray, arg2: int): Inet6Address
    static getByName(arg0: string): InetAddress
    static getLocalHost(): InetAddress
    static getLoopbackAddress(): InetAddress
    toString(): string
  } // end Inet6Address
} // end namespace java.net
declare namespace java.net {
  class InetAddress /* extends java.lang.Object implements java.io.Serializable*/ {
    equals(arg0: java.lang.Object): boolean
    getAddress(): bytearray
    getCanonicalHostName(): string
    getHostAddress(): string
    getHostName(): string
    isAnyLocalAddress(): boolean
    isLinkLocalAddress(): boolean
    isLoopbackAddress(): boolean
    isMCGlobal(): boolean
    isMCLinkLocal(): boolean
    isMCNodeLocal(): boolean
    isMCOrgLocal(): boolean
    isMCSiteLocal(): boolean
    isMulticastAddress(): boolean
    isReachable(arg0: NetworkInterface, arg1: int, arg2: int): boolean
    isReachable(arg0: int): boolean
    isSiteLocalAddress(): boolean
    static getAllByName(arg0: string): [InetAddress]
    static getByAddress(arg0: bytearray): InetAddress
    static getByAddress(arg0: string, arg1: bytearray): InetAddress
    static getByName(arg0: string): InetAddress
    static getLocalHost(): InetAddress
    static getLoopbackAddress(): InetAddress
    toString(): string
  } // end InetAddress
} // end namespace java.net
declare namespace java.net {
  class InetSocketAddress /* extends SocketAddress*/ {
    equals(arg0: java.lang.Object): boolean
    getAddress(): InetAddress
    getHostName(): string
    getHostString(): string
    getPort(): int
    isUnresolved(): boolean
    static createUnresolved(arg0: string, arg1: int): InetSocketAddress
    toString(): string
  } // end InetSocketAddress
} // end namespace java.net
declare namespace java.net {
  class InterfaceAddress /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    getAddress(): InetAddress
    getBroadcast(): InetAddress
    getNetworkPrefixLength(): short
    toString(): string
  } // end InterfaceAddress
} // end namespace java.net
declare namespace java.net {
  class JarURLConnection /* extends URLConnection*/ {
    addRequestProperty(arg0: string, arg1: string): void
    connect(): void
    equals(arg0: java.lang.Object): boolean
    getAllowUserInteraction(): boolean
    getAttributes(): any /*java.util.jar.Attributes*/
    getCertificates(): [any /*java.security.cert.Certificate*/]
    getConnectTimeout(): int
    getContent(): java.lang.Object
    getContent(arg0: [java.lang.Class<java.lang.Object>]): java.lang.Object
    getContentEncoding(): string
    getContentLength(): int
    getContentLengthLong(): long
    getContentType(): string
    getDate(): long
    getDefaultUseCaches(): boolean
    getDoInput(): boolean
    getDoOutput(): boolean
    getEntryName(): string
    getExpiration(): long
    getHeaderField(arg0: int): string
    getHeaderField(arg0: string): string
    getHeaderFieldDate(arg0: string, arg1: long): long
    getHeaderFieldInt(arg0: string, arg1: int): int
    getHeaderFieldKey(arg0: int): string
    getHeaderFieldLong(arg0: string, arg1: long): long
    getHeaderFields(): java.util.Map<string, java.util.List<string>>
    getIfModifiedSince(): long
    getInputStream(): java.io.InputStream
    getJarEntry(): any /*java.util.jar.JarEntry*/
    getJarFile(): any /*java.util.jar.JarFile*/
    getJarFileURL(): URL
    getLastModified(): long
    getMainAttributes(): any /*java.util.jar.Attributes*/
    getManifest(): any /*java.util.jar.Manifest*/
    getOutputStream(): java.io.OutputStream
    getPermission(): any /*java.security.Permission*/
    getReadTimeout(): int
    getRequestProperties(): java.util.Map<string, java.util.List<string>>
    getRequestProperty(arg0: string): string
    getURL(): URL
    getUseCaches(): boolean
    setAllowUserInteraction(arg0: boolean): void
    setConnectTimeout(arg0: int): void
    setDefaultUseCaches(arg0: boolean): void
    setDoInput(arg0: boolean): void
    setDoOutput(arg0: boolean): void
    setIfModifiedSince(arg0: long): void
    setReadTimeout(arg0: int): void
    setRequestProperty(arg0: string, arg1: string): void
    setUseCaches(arg0: boolean): void
    static getDefaultAllowUserInteraction(): boolean
    static getDefaultRequestProperty(arg0: string): string
    static getDefaultUseCaches(arg0: string): boolean
    static getFileNameMap(): FileNameMap
    static guessContentTypeFromName(arg0: string): string
    static guessContentTypeFromStream(arg0: java.io.InputStream): string
    static setContentHandlerFactory(arg0: ContentHandlerFactory): void
    static setDefaultAllowUserInteraction(arg0: boolean): void
    static setDefaultRequestProperty(arg0: string, arg1: string): void
    static setDefaultUseCaches(arg0: string, arg1: boolean): void
    static setFileNameMap(arg0: FileNameMap): void
    toString(): string
  } // end JarURLConnection
} // end namespace java.net
declare namespace java.net {
  class MulticastSocket /* extends DatagramSocket*/ {
    bind(arg0: SocketAddress): void
    close(): void
    connect(arg0: InetAddress, arg1: int): void
    connect(arg0: SocketAddress): void
    disconnect(): void
    equals(arg0: java.lang.Object): boolean
    getBroadcast(): boolean
    getChannel(): any /*java.nio.channels.DatagramChannel*/
    getInetAddress(): InetAddress
    getInterface(): InetAddress
    getLocalAddress(): InetAddress
    getLocalPort(): int
    getLocalSocketAddress(): SocketAddress
    getLoopbackMode(): boolean
    getNetworkInterface(): NetworkInterface
    getOption<T>(arg0: SocketOption<T>): T
    getPort(): int
    getReceiveBufferSize(): int
    getRemoteSocketAddress(): SocketAddress
    getReuseAddress(): boolean
    getSendBufferSize(): int
    getSoTimeout(): int
    getTTL(): byte
    getTimeToLive(): int
    getTrafficClass(): int
    isBound(): boolean
    isClosed(): boolean
    isConnected(): boolean
    joinGroup(arg0: InetAddress): void
    joinGroup(arg0: SocketAddress, arg1: NetworkInterface): void
    leaveGroup(arg0: InetAddress): void
    leaveGroup(arg0: SocketAddress, arg1: NetworkInterface): void
    receive(arg0: DatagramPacket): void
    send(arg0: DatagramPacket): void
    send(arg0: DatagramPacket, arg1: byte): void
    setBroadcast(arg0: boolean): void
    setInterface(arg0: InetAddress): void
    setLoopbackMode(arg0: boolean): void
    setNetworkInterface(arg0: NetworkInterface): void
    setOption<T>(arg0: SocketOption<T>, arg1: T): DatagramSocket
    setReceiveBufferSize(arg0: int): void
    setReuseAddress(arg0: boolean): void
    setSendBufferSize(arg0: int): void
    setSoTimeout(arg0: int): void
    setTTL(arg0: byte): void
    setTimeToLive(arg0: int): void
    setTrafficClass(arg0: int): void
    static setDatagramSocketImplFactory(arg0: DatagramSocketImplFactory): void
    supportedOptions(): java.util.Set<SocketOption<java.lang.Object>>
    toString(): string
  } // end MulticastSocket
} // end namespace java.net
declare namespace java.net {
  class NetPermission /* extends java.security.BasicPermission*/ {
    checkGuard(arg0: java.lang.Object): void
    equals(arg0: java.lang.Object): boolean
    getActions(): string
    getName(): string
    implies(arg0: any /*java.security.Permission*/): boolean
    newPermissionCollection(): any /*java.security.PermissionCollection*/
    toString(): string
  } // end NetPermission
} // end namespace java.net
declare namespace java.net {
  class NetworkInterface /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    getDisplayName(): string
    getHardwareAddress(): bytearray
    getIndex(): int
    getInetAddresses(): java.util.Enumeration<InetAddress>
    getInterfaceAddresses(): java.util.List<InterfaceAddress>
    getMTU(): int
    getName(): string
    getParent(): NetworkInterface
    getSubInterfaces(): java.util.Enumeration<NetworkInterface>
    inetAddresses(): java.util.stream.Stream<InetAddress>
    isLoopback(): boolean
    isPointToPoint(): boolean
    isUp(): boolean
    isVirtual(): boolean
    static getByIndex(arg0: int): NetworkInterface
    static getByInetAddress(arg0: InetAddress): NetworkInterface
    static getByName(arg0: string): NetworkInterface
    static getNetworkInterfaces(): java.util.Enumeration<NetworkInterface>
    static networkInterfaces(): java.util.stream.Stream<NetworkInterface>
    subInterfaces(): java.util.stream.Stream<NetworkInterface>
    supportsMulticast(): boolean
    toString(): string
  } // end NetworkInterface
} // end namespace java.net
declare namespace java.net {
  class PasswordAuthentication /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    getPassword(): chararray
    getUserName(): string
    toString(): string
  } // end PasswordAuthentication
} // end namespace java.net
declare namespace java.net {
  interface ProtocolFamily {
    name(): string
  } // end ProtocolFamily
} // end namespace java.net
declare namespace java.net {
  class Proxy /* extends java.lang.Object*/ {
    address(): SocketAddress
    equals(arg0: java.lang.Object): boolean
    toString(): string
    type(): any /*java.net.Proxy$Type*/
  } // end Proxy
} // end namespace java.net
declare namespace java.net {
  class ProxySelector /* extends java.lang.Object*/ {
    connectFailed(arg0: URI, arg1: SocketAddress, arg2: any /*java.io.IOException*/): void
    equals(arg0: java.lang.Object): boolean
    select(arg0: URI): java.util.List<Proxy>
    static getDefault(): ProxySelector
    static of(arg0: InetSocketAddress): ProxySelector
    static setDefault(arg0: ProxySelector): void
    toString(): string
  } // end ProxySelector
} // end namespace java.net
declare namespace java.net {
  class ResponseCache /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    get(arg0: URI, arg1: string, arg2: java.util.Map<string, java.util.List<string>>): CacheResponse
    put(arg0: URI, arg1: URLConnection): CacheRequest
    static getDefault(): ResponseCache
    static setDefault(arg0: ResponseCache): void
    toString(): string
  } // end ResponseCache
} // end namespace java.net
declare namespace java.net {
  class SecureCacheResponse /* extends CacheResponse*/ {
    equals(arg0: java.lang.Object): boolean
    getBody(): java.io.InputStream
    getCipherSuite(): string
    getHeaders(): java.util.Map<string, java.util.List<string>>
    getLocalCertificateChain(): java.util.List<any /*java.security.cert.Certificate*/>
    getLocalPrincipal(): any /*java.security.Principal*/
    getPeerPrincipal(): any /*java.security.Principal*/
    getServerCertificateChain(): java.util.List<any /*java.security.cert.Certificate*/>
    toString(): string
  } // end SecureCacheResponse
} // end namespace java.net
declare namespace java.net {
  class ServerSocket /* extends java.lang.Object implements java.io.Closeable*/ {
    accept(): Socket
    bind(arg0: SocketAddress): void
    bind(arg0: SocketAddress, arg1: int): void
    close(): void
    equals(arg0: java.lang.Object): boolean
    getChannel(): any /*java.nio.channels.ServerSocketChannel*/
    getInetAddress(): InetAddress
    getLocalPort(): int
    getLocalSocketAddress(): SocketAddress
    getOption<T>(arg0: SocketOption<T>): T
    getReceiveBufferSize(): int
    getReuseAddress(): boolean
    getSoTimeout(): int
    isBound(): boolean
    isClosed(): boolean
    setOption<T>(arg0: SocketOption<T>, arg1: T): ServerSocket
    setPerformancePreferences(arg0: int, arg1: int, arg2: int): void
    setReceiveBufferSize(arg0: int): void
    setReuseAddress(arg0: boolean): void
    setSoTimeout(arg0: int): void
    static setSocketFactory(arg0: SocketImplFactory): void
    supportedOptions(): java.util.Set<SocketOption<java.lang.Object>>
    toString(): string
  } // end ServerSocket
} // end namespace java.net
declare namespace java.net {
  class Socket /* extends java.lang.Object implements java.io.Closeable*/ {
    bind(arg0: SocketAddress): void
    close(): void
    connect(arg0: SocketAddress): void
    connect(arg0: SocketAddress, arg1: int): void
    equals(arg0: java.lang.Object): boolean
    getChannel(): any /*java.nio.channels.SocketChannel*/
    getInetAddress(): InetAddress
    getInputStream(): java.io.InputStream
    getKeepAlive(): boolean
    getLocalAddress(): InetAddress
    getLocalPort(): int
    getLocalSocketAddress(): SocketAddress
    getOOBInline(): boolean
    getOption<T>(arg0: SocketOption<T>): T
    getOutputStream(): java.io.OutputStream
    getPort(): int
    getReceiveBufferSize(): int
    getRemoteSocketAddress(): SocketAddress
    getReuseAddress(): boolean
    getSendBufferSize(): int
    getSoLinger(): int
    getSoTimeout(): int
    getTcpNoDelay(): boolean
    getTrafficClass(): int
    isBound(): boolean
    isClosed(): boolean
    isConnected(): boolean
    isInputShutdown(): boolean
    isOutputShutdown(): boolean
    sendUrgentData(arg0: int): void
    setKeepAlive(arg0: boolean): void
    setOOBInline(arg0: boolean): void
    setOption<T>(arg0: SocketOption<T>, arg1: T): Socket
    setPerformancePreferences(arg0: int, arg1: int, arg2: int): void
    setReceiveBufferSize(arg0: int): void
    setReuseAddress(arg0: boolean): void
    setSendBufferSize(arg0: int): void
    setSoLinger(arg0: boolean, arg1: int): void
    setSoTimeout(arg0: int): void
    setTcpNoDelay(arg0: boolean): void
    setTrafficClass(arg0: int): void
    shutdownInput(): void
    shutdownOutput(): void
    static setSocketImplFactory(arg0: SocketImplFactory): void
    supportedOptions(): java.util.Set<SocketOption<java.lang.Object>>
    toString(): string
  } // end Socket
} // end namespace java.net
declare namespace java.net {
  class SocketAddress /* extends java.lang.Object implements java.io.Serializable*/ {
    equals(arg0: java.lang.Object): boolean
    toString(): string
  } // end SocketAddress
} // end namespace java.net
declare namespace java.net {
  class SocketImpl /* extends java.lang.Object implements SocketOptions*/ {
    equals(arg0: java.lang.Object): boolean
    getOption(arg0: int): java.lang.Object
    setOption(arg0: int, arg1: java.lang.Object): void
    toString(): string
  } // end SocketImpl
} // end namespace java.net
declare namespace java.net {
  interface SocketImplFactory {
    createSocketImpl(): SocketImpl
  } // end SocketImplFactory
} // end namespace java.net
declare namespace java.net {
  interface SocketOption<T> {
    name(): string
    type(): java.lang.Class<T>
  } // end SocketOption
} // end namespace java.net
declare namespace java.net {
  interface SocketOptions {
    getOption(arg0: int): java.lang.Object
    setOption(arg0: int, arg1: java.lang.Object): void
  } // end SocketOptions
} // end namespace java.net
declare namespace java.net {
  class SocketPermission /* extends java.security.Permission implements java.io.Serializable*/ {
    checkGuard(arg0: java.lang.Object): void
    equals(arg0: java.lang.Object): boolean
    getActions(): string
    getName(): string
    implies(arg0: any /*java.security.Permission*/): boolean
    newPermissionCollection(): any /*java.security.PermissionCollection*/
    toString(): string
  } // end SocketPermission
} // end namespace java.net
declare namespace java.net {
  class StandardSocketOptions /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    toString(): string
  } // end StandardSocketOptions
} // end namespace java.net
declare namespace java.net {
  class URI /* extends java.lang.Object implements java.lang.Comparable<any>, java.io.Serializable*/ {
    compareTo(arg0: URI): int
    equals(arg0: java.lang.Object): boolean
    getAuthority(): string
    getFragment(): string
    getHost(): string
    getPath(): string
    getPort(): int
    getQuery(): string
    getRawAuthority(): string
    getRawFragment(): string
    getRawPath(): string
    getRawQuery(): string
    getRawSchemeSpecificPart(): string
    getRawUserInfo(): string
    getScheme(): string
    getSchemeSpecificPart(): string
    getUserInfo(): string
    isAbsolute(): boolean
    isOpaque(): boolean
    normalize(): URI
    parseServerAuthority(): URI
    relativize(arg0: URI): URI
    resolve(arg0: URI): URI
    resolve(arg0: string): URI
    static create(arg0: string): URI
    toASCIIString(): string
    toString(): string
    toURL(): URL
  } // end URI
} // end namespace java.net
declare namespace java.net {
  class URL /* extends java.lang.Object implements java.io.Serializable*/ {
    equals(arg0: java.lang.Object): boolean
    getAuthority(): string
    getContent(): java.lang.Object
    getContent(arg0: [java.lang.Class<java.lang.Object>]): java.lang.Object
    getDefaultPort(): int
    getFile(): string
    getHost(): string
    getPath(): string
    getPort(): int
    getProtocol(): string
    getQuery(): string
    getRef(): string
    getUserInfo(): string
    openConnection(): URLConnection
    openConnection(arg0: Proxy): URLConnection
    openStream(): java.io.InputStream
    sameFile(arg0: URL): boolean
    static setURLStreamHandlerFactory(arg0: URLStreamHandlerFactory): void
    toExternalForm(): string
    toString(): string
    toURI(): URI
  } // end URL
} // end namespace java.net
declare namespace java.net {
  class URLClassLoader /* extends java.security.SecureClassLoader implements java.io.Closeable*/ {
    clearAssertionStatus(): void
    close(): void
    equals(arg0: java.lang.Object): boolean
    findResource(arg0: string): URL
    findResources(arg0: string): java.util.Enumeration<URL>
    getDefinedPackage(arg0: string): java.lang.Package
    getDefinedPackages(): [java.lang.Package]
    getName(): string
    getParent(): java.lang.ClassLoader
    getResource(arg0: string): URL
    getResourceAsStream(arg0: string): java.io.InputStream
    getResources(arg0: string): java.util.Enumeration<URL>
    getURLs(): [URL]
    getUnnamedModule(): any /*java.lang.Module*/
    isRegisteredAsParallelCapable(): boolean
    loadClass(arg0: string): java.lang.Class<java.lang.Object>
    resources(arg0: string): java.util.stream.Stream<URL>
    setClassAssertionStatus(arg0: string, arg1: boolean): void
    setDefaultAssertionStatus(arg0: boolean): void
    setPackageAssertionStatus(arg0: string, arg1: boolean): void
    static getPlatformClassLoader(): java.lang.ClassLoader
    static getSystemClassLoader(): java.lang.ClassLoader
    static getSystemResource(arg0: string): URL
    static getSystemResourceAsStream(arg0: string): java.io.InputStream
    static getSystemResources(arg0: string): java.util.Enumeration<URL>
    static newInstance(arg0: [URL]): URLClassLoader
    static newInstance(arg0: [URL], arg1: java.lang.ClassLoader): URLClassLoader
    toString(): string
  } // end URLClassLoader
} // end namespace java.net
declare namespace java.net {
  class URLConnection /* extends java.lang.Object*/ {
    addRequestProperty(arg0: string, arg1: string): void
    connect(): void
    equals(arg0: java.lang.Object): boolean
    getAllowUserInteraction(): boolean
    getConnectTimeout(): int
    getContent(): java.lang.Object
    getContent(arg0: [java.lang.Class<java.lang.Object>]): java.lang.Object
    getContentEncoding(): string
    getContentLength(): int
    getContentLengthLong(): long
    getContentType(): string
    getDate(): long
    getDefaultUseCaches(): boolean
    getDoInput(): boolean
    getDoOutput(): boolean
    getExpiration(): long
    getHeaderField(arg0: int): string
    getHeaderField(arg0: string): string
    getHeaderFieldDate(arg0: string, arg1: long): long
    getHeaderFieldInt(arg0: string, arg1: int): int
    getHeaderFieldKey(arg0: int): string
    getHeaderFieldLong(arg0: string, arg1: long): long
    getHeaderFields(): java.util.Map<string, java.util.List<string>>
    getIfModifiedSince(): long
    getInputStream(): java.io.InputStream
    getLastModified(): long
    getOutputStream(): java.io.OutputStream
    getPermission(): any /*java.security.Permission*/
    getReadTimeout(): int
    getRequestProperties(): java.util.Map<string, java.util.List<string>>
    getRequestProperty(arg0: string): string
    getURL(): URL
    getUseCaches(): boolean
    setAllowUserInteraction(arg0: boolean): void
    setConnectTimeout(arg0: int): void
    setDefaultUseCaches(arg0: boolean): void
    setDoInput(arg0: boolean): void
    setDoOutput(arg0: boolean): void
    setIfModifiedSince(arg0: long): void
    setReadTimeout(arg0: int): void
    setRequestProperty(arg0: string, arg1: string): void
    setUseCaches(arg0: boolean): void
    static getDefaultAllowUserInteraction(): boolean
    static getDefaultRequestProperty(arg0: string): string
    static getDefaultUseCaches(arg0: string): boolean
    static getFileNameMap(): FileNameMap
    static guessContentTypeFromName(arg0: string): string
    static guessContentTypeFromStream(arg0: java.io.InputStream): string
    static setContentHandlerFactory(arg0: ContentHandlerFactory): void
    static setDefaultAllowUserInteraction(arg0: boolean): void
    static setDefaultRequestProperty(arg0: string, arg1: string): void
    static setDefaultUseCaches(arg0: string, arg1: boolean): void
    static setFileNameMap(arg0: FileNameMap): void
    toString(): string
  } // end URLConnection
} // end namespace java.net
declare namespace java.net {
  class URLDecoder /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    static decode(arg0: string): string
    static decode(arg0: string, arg1: any /*java.nio.charset.Charset*/): string
    static decode(arg0: string, arg1: string): string
    toString(): string
  } // end URLDecoder
} // end namespace java.net
declare namespace java.net {
  class URLEncoder /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    static encode(arg0: string): string
    static encode(arg0: string, arg1: any /*java.nio.charset.Charset*/): string
    static encode(arg0: string, arg1: string): string
    toString(): string
  } // end URLEncoder
} // end namespace java.net
declare namespace java.net {
  class URLPermission /* extends java.security.Permission*/ {
    checkGuard(arg0: java.lang.Object): void
    equals(arg0: java.lang.Object): boolean
    getActions(): string
    getName(): string
    implies(arg0: any /*java.security.Permission*/): boolean
    newPermissionCollection(): any /*java.security.PermissionCollection*/
    toString(): string
  } // end URLPermission
} // end namespace java.net
declare namespace java.net {
  class URLStreamHandler /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    toString(): string
  } // end URLStreamHandler
} // end namespace java.net
declare namespace java.net {
  interface URLStreamHandlerFactory {
    createURLStreamHandler(arg0: string): URLStreamHandler
  } // end URLStreamHandlerFactory
} // end namespace java.net
