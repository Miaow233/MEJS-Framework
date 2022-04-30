interface AuthenticatorStatic {

	readonly class:any;
	new(  ):java.net.Authenticator;
	getDefault(  ):java.net.Authenticator;
	requestPasswordAuthentication( arg0:string, arg1:java.net.InetAddress, arg2:int, arg3:string, arg4:string, arg5:string ):java.net.PasswordAuthentication;
	requestPasswordAuthentication( arg0:string, arg1:java.net.InetAddress, arg2:int, arg3:string, arg4:string, arg5:string, arg6:java.net.URL, arg7:any /*java.net.Authenticator$RequestorType*/ ):java.net.PasswordAuthentication;
	requestPasswordAuthentication( arg0:java.net.Authenticator, arg1:string, arg2:java.net.InetAddress, arg3:int, arg4:string, arg5:string, arg6:string, arg7:java.net.URL, arg8:any /*java.net.Authenticator$RequestorType*/ ):java.net.PasswordAuthentication;
	requestPasswordAuthentication( arg0:java.net.InetAddress, arg1:int, arg2:string, arg3:string, arg4:string ):java.net.PasswordAuthentication;
	setDefault( arg0:java.net.Authenticator ):void;
}

export const Authenticator: AuthenticatorStatic = Packages.java.net.Authenticator;


interface CacheRequestStatic {

	readonly class:any;
	new(  ):java.net.CacheRequest;
}

export const CacheRequest: CacheRequestStatic = Packages.java.net.CacheRequest;


interface CacheResponseStatic {

	readonly class:any;
	new(  ):java.net.CacheResponse;
}

export const CacheResponse: CacheResponseStatic = Packages.java.net.CacheResponse;


interface ContentHandlerStatic {

	readonly class:any;
	new(  ):java.net.ContentHandler;
}

export const ContentHandler: ContentHandlerStatic = Packages.java.net.ContentHandler;


interface ContentHandlerFactoryStatic {

	readonly class:any;
}

export const ContentHandlerFactory: ContentHandlerFactoryStatic = Packages.java.net.ContentHandlerFactory;


interface CookieHandlerStatic {

	readonly class:any;
	new(  ):java.net.CookieHandler;
	getDefault(  ):java.net.CookieHandler;
	setDefault( arg0:java.net.CookieHandler ):void;
}

export const CookieHandler: CookieHandlerStatic = Packages.java.net.CookieHandler;


interface CookieManagerStatic {

	readonly class:any;
	new(  ):java.net.CookieManager;
	new( arg0:java.net.CookieStore, arg1:java.net.CookiePolicy ):java.net.CookieManager;
	getDefault(  ):java.net.CookieHandler;
	setDefault( arg0:java.net.CookieHandler ):void;
}

export const CookieManager: CookieManagerStatic = Packages.java.net.CookieManager;


interface CookiePolicyStatic {

	readonly class:any;
}

export const CookiePolicy: CookiePolicyStatic = Packages.java.net.CookiePolicy;


interface CookieStoreStatic {

	readonly class:any;
}

export const CookieStore: CookieStoreStatic = Packages.java.net.CookieStore;


interface DatagramPacketStatic {

	readonly class:any;
	new( arg0:bytearray, arg1:int, arg2:java.net.SocketAddress ):java.net.DatagramPacket;
	new( arg0:bytearray, arg1:int, arg2:java.net.InetAddress, arg3:int ):java.net.DatagramPacket;
	new( arg0:bytearray, arg1:int, arg2:int, arg3:java.net.SocketAddress ):java.net.DatagramPacket;
	new( arg0:bytearray, arg1:int, arg2:int ):java.net.DatagramPacket;
	new( arg0:bytearray, arg1:int ):java.net.DatagramPacket;
	new( arg0:bytearray, arg1:int, arg2:int, arg3:java.net.InetAddress, arg4:int ):java.net.DatagramPacket;
}

export const DatagramPacket: DatagramPacketStatic = Packages.java.net.DatagramPacket;


interface DatagramSocketStatic {

	readonly class:any;
	new( arg0:int, arg1:java.net.InetAddress ):java.net.DatagramSocket;
	new( arg0:java.net.SocketAddress ):java.net.DatagramSocket;
	new(  ):java.net.DatagramSocket;
	new( arg0:int ):java.net.DatagramSocket;
	setDatagramSocketImplFactory( arg0:java.net.DatagramSocketImplFactory ):void;
}

export const DatagramSocket: DatagramSocketStatic = Packages.java.net.DatagramSocket;


interface DatagramSocketImplStatic {

	readonly class:any;
	new(  ):java.net.DatagramSocketImpl;
}

export const DatagramSocketImpl: DatagramSocketImplStatic = Packages.java.net.DatagramSocketImpl;


interface DatagramSocketImplFactoryStatic {

	readonly class:any;
}

export const DatagramSocketImplFactory: DatagramSocketImplFactoryStatic = Packages.java.net.DatagramSocketImplFactory;


interface FileNameMapStatic {

	readonly class:any;
}

export const FileNameMap: FileNameMapStatic = Packages.java.net.FileNameMap;


interface HttpCookieStatic {

	readonly class:any;
	new( arg0:string, arg1:string ):java.net.HttpCookie;
	domainMatches( arg0:string, arg1:string ):boolean;
	parse( arg0:string ):java.util.List<java.net.HttpCookie>;
}

export const HttpCookie: HttpCookieStatic = Packages.java.net.HttpCookie;


interface HttpURLConnectionStatic {

	readonly class:any;
	getFollowRedirects(  ):boolean;
	getDefaultAllowUserInteraction(  ):boolean;
	getDefaultUseCaches( arg0:string ):boolean;
	getDefaultRequestProperty( arg0:string ):string;
	guessContentTypeFromName( arg0:string ):string;
	guessContentTypeFromStream( arg0:java.io.InputStream ):string;
	getFileNameMap(  ):java.net.FileNameMap;
	setContentHandlerFactory( arg0:java.net.ContentHandlerFactory ):void;
	setFollowRedirects( arg0:boolean ):void;
	setDefaultAllowUserInteraction( arg0:boolean ):void;
	setDefaultRequestProperty( arg0:string, arg1:string ):void;
	setDefaultUseCaches( arg0:string, arg1:boolean ):void;
	setFileNameMap( arg0:java.net.FileNameMap ):void;
}

export const HttpURLConnection: HttpURLConnectionStatic = Packages.java.net.HttpURLConnection;


interface IDNStatic {

	readonly class:any;
	toASCII( arg0:string ):string;
	toASCII( arg0:string, arg1:int ):string;
	toUnicode( arg0:string ):string;
	toUnicode( arg0:string, arg1:int ):string;
}

export const IDN: IDNStatic = Packages.java.net.IDN;


interface Inet4AddressStatic {

	readonly class:any;
	getByAddress( arg0:bytearray ):java.net.InetAddress;
	getByAddress( arg0:string, arg1:bytearray ):java.net.InetAddress;
	getByName( arg0:string ):java.net.InetAddress;
	getLocalHost(  ):java.net.InetAddress;
	getLoopbackAddress(  ):java.net.InetAddress;
	getAllByName( arg0:string ):[java.net.InetAddress];
}

export const Inet4Address: Inet4AddressStatic = Packages.java.net.Inet4Address;


interface Inet6AddressStatic {

	readonly class:any;
	getByAddress( arg0:string, arg1:bytearray, arg2:int ):java.net.Inet6Address;
	getByAddress( arg0:string, arg1:bytearray, arg2:java.net.NetworkInterface ):java.net.Inet6Address;
	getByAddress( arg0:bytearray ):java.net.InetAddress;
	getByAddress( arg0:string, arg1:bytearray ):java.net.InetAddress;
	getByName( arg0:string ):java.net.InetAddress;
	getLocalHost(  ):java.net.InetAddress;
	getLoopbackAddress(  ):java.net.InetAddress;
	getAllByName( arg0:string ):[java.net.InetAddress];
}

export const Inet6Address: Inet6AddressStatic = Packages.java.net.Inet6Address;


interface InetAddressStatic {

	readonly class:any;
	getByAddress( arg0:bytearray ):java.net.InetAddress;
	getByAddress( arg0:string, arg1:bytearray ):java.net.InetAddress;
	getByName( arg0:string ):java.net.InetAddress;
	getLocalHost(  ):java.net.InetAddress;
	getLoopbackAddress(  ):java.net.InetAddress;
	getAllByName( arg0:string ):[java.net.InetAddress];
}

export const InetAddress: InetAddressStatic = Packages.java.net.InetAddress;


interface InetSocketAddressStatic {

	readonly class:any;
	new( arg0:java.net.InetAddress, arg1:int ):java.net.InetSocketAddress;
	new( arg0:int ):java.net.InetSocketAddress;
	new( arg0:string, arg1:int ):java.net.InetSocketAddress;
	createUnresolved( arg0:string, arg1:int ):java.net.InetSocketAddress;
}

export const InetSocketAddress: InetSocketAddressStatic = Packages.java.net.InetSocketAddress;


interface InterfaceAddressStatic {

	readonly class:any;
}

export const InterfaceAddress: InterfaceAddressStatic = Packages.java.net.InterfaceAddress;


interface JarURLConnectionStatic {

	readonly class:any;
	getDefaultAllowUserInteraction(  ):boolean;
	getDefaultUseCaches( arg0:string ):boolean;
	getDefaultRequestProperty( arg0:string ):string;
	guessContentTypeFromName( arg0:string ):string;
	guessContentTypeFromStream( arg0:java.io.InputStream ):string;
	getFileNameMap(  ):java.net.FileNameMap;
	setContentHandlerFactory( arg0:java.net.ContentHandlerFactory ):void;
	setDefaultAllowUserInteraction( arg0:boolean ):void;
	setDefaultRequestProperty( arg0:string, arg1:string ):void;
	setDefaultUseCaches( arg0:string, arg1:boolean ):void;
	setFileNameMap( arg0:java.net.FileNameMap ):void;
}

export const JarURLConnection: JarURLConnectionStatic = Packages.java.net.JarURLConnection;


interface MulticastSocketStatic {

	readonly class:any;
	new( arg0:java.net.SocketAddress ):java.net.MulticastSocket;
	new( arg0:int ):java.net.MulticastSocket;
	new(  ):java.net.MulticastSocket;
	setDatagramSocketImplFactory( arg0:java.net.DatagramSocketImplFactory ):void;
}

export const MulticastSocket: MulticastSocketStatic = Packages.java.net.MulticastSocket;


interface NetPermissionStatic {

	readonly class:any;
	new( arg0:string ):java.net.NetPermission;
	new( arg0:string, arg1:string ):java.net.NetPermission;
}

export const NetPermission: NetPermissionStatic = Packages.java.net.NetPermission;


interface NetworkInterfaceStatic {

	readonly class:any;
	getByIndex( arg0:int ):java.net.NetworkInterface;
	getByInetAddress( arg0:java.net.InetAddress ):java.net.NetworkInterface;
	getByName( arg0:string ):java.net.NetworkInterface;
	getNetworkInterfaces(  ):java.util.Enumeration<java.net.NetworkInterface>;
	networkInterfaces(  ):java.util.stream.Stream<java.net.NetworkInterface>;
}

export const NetworkInterface: NetworkInterfaceStatic = Packages.java.net.NetworkInterface;


interface PasswordAuthenticationStatic {

	readonly class:any;
	new( arg0:string, arg1:chararray ):java.net.PasswordAuthentication;
}

export const PasswordAuthentication: PasswordAuthenticationStatic = Packages.java.net.PasswordAuthentication;


interface ProtocolFamilyStatic {

	readonly class:any;
}

export const ProtocolFamily: ProtocolFamilyStatic = Packages.java.net.ProtocolFamily;


interface ProxyStatic {

	readonly class:any;
	new( arg0:any /*java.net.Proxy$Type*/, arg1:java.net.SocketAddress ):java.net.Proxy;
}

export const Proxy: ProxyStatic = Packages.java.net.Proxy;


interface ProxySelectorStatic {

	readonly class:any;
	new(  ):java.net.ProxySelector;
	getDefault(  ):java.net.ProxySelector;
	of( arg0:java.net.InetSocketAddress ):java.net.ProxySelector;
	setDefault( arg0:java.net.ProxySelector ):void;
}

export const ProxySelector: ProxySelectorStatic = Packages.java.net.ProxySelector;


interface ResponseCacheStatic {

	readonly class:any;
	new(  ):java.net.ResponseCache;
	getDefault(  ):java.net.ResponseCache;
	setDefault( arg0:java.net.ResponseCache ):void;
}

export const ResponseCache: ResponseCacheStatic = Packages.java.net.ResponseCache;


interface SecureCacheResponseStatic {

	readonly class:any;
	new(  ):java.net.SecureCacheResponse;
}

export const SecureCacheResponse: SecureCacheResponseStatic = Packages.java.net.SecureCacheResponse;


interface ServerSocketStatic {

	readonly class:any;
	new( arg0:int, arg1:int, arg2:java.net.InetAddress ):java.net.ServerSocket;
	new( arg0:int, arg1:int ):java.net.ServerSocket;
	new( arg0:int ):java.net.ServerSocket;
	new(  ):java.net.ServerSocket;
	setSocketFactory( arg0:java.net.SocketImplFactory ):void;
}

export const ServerSocket: ServerSocketStatic = Packages.java.net.ServerSocket;


interface SocketStatic {

	readonly class:any;
	new( arg0:java.net.InetAddress, arg1:int ):java.net.Socket;
	new( arg0:string, arg1:int, arg2:java.net.InetAddress, arg3:int ):java.net.Socket;
	new( arg0:java.net.InetAddress, arg1:int, arg2:java.net.InetAddress, arg3:int ):java.net.Socket;
	new( arg0:string, arg1:int, arg2:boolean ):java.net.Socket;
	new( arg0:java.net.InetAddress, arg1:int, arg2:boolean ):java.net.Socket;
	new(  ):java.net.Socket;
	new( arg0:java.net.Proxy ):java.net.Socket;
	new( arg0:string, arg1:int ):java.net.Socket;
	setSocketImplFactory( arg0:java.net.SocketImplFactory ):void;
}

export const Socket: SocketStatic = Packages.java.net.Socket;


interface SocketAddressStatic {

	readonly class:any;
	new(  ):java.net.SocketAddress;
}

export const SocketAddress: SocketAddressStatic = Packages.java.net.SocketAddress;


interface SocketImplStatic {

	readonly class:any;
	new(  ):java.net.SocketImpl;
}

export const SocketImpl: SocketImplStatic = Packages.java.net.SocketImpl;


interface SocketImplFactoryStatic {

	readonly class:any;
}

export const SocketImplFactory: SocketImplFactoryStatic = Packages.java.net.SocketImplFactory;


interface SocketOptionStatic {

	readonly class:any;
}

export const SocketOption: SocketOptionStatic = Packages.java.net.SocketOption;


interface SocketOptionsStatic {

	readonly class:any;
}

export const SocketOptions: SocketOptionsStatic = Packages.java.net.SocketOptions;


interface SocketPermissionStatic {

	readonly class:any;
	new( arg0:string, arg1:string ):java.net.SocketPermission;
}

export const SocketPermission: SocketPermissionStatic = Packages.java.net.SocketPermission;


interface StandardSocketOptionsStatic {

	readonly class:any;
}

export const StandardSocketOptions: StandardSocketOptionsStatic = Packages.java.net.StandardSocketOptions;


interface URIStatic {

	readonly class:any;
	new( arg0:string, arg1:string, arg2:string, arg3:string, arg4:string ):java.net.URI;
	new( arg0:string, arg1:string, arg2:string, arg3:string ):java.net.URI;
	new( arg0:string, arg1:string, arg2:string ):java.net.URI;
	new( arg0:string ):java.net.URI;
	new( arg0:string, arg1:string, arg2:string, arg3:int, arg4:string, arg5:string, arg6:string ):java.net.URI;
	create( arg0:string ):java.net.URI;
}

export const URI: URIStatic = Packages.java.net.URI;


interface URLStatic {

	readonly class:any;
	new( arg0:java.net.URL, arg1:string, arg2:java.net.URLStreamHandler ):java.net.URL;
	new( arg0:java.net.URL, arg1:string ):java.net.URL;
	new( arg0:string ):java.net.URL;
	new( arg0:string, arg1:string, arg2:int, arg3:string ):java.net.URL;
	new( arg0:string, arg1:string, arg2:string ):java.net.URL;
	new( arg0:string, arg1:string, arg2:int, arg3:string, arg4:java.net.URLStreamHandler ):java.net.URL;
	setURLStreamHandlerFactory( arg0:java.net.URLStreamHandlerFactory ):void;
}

export const URL: URLStatic = Packages.java.net.URL;


interface URLClassLoaderStatic {

	readonly class:any;
	new( arg0:[java.net.URL], arg1:java.lang.ClassLoader, arg2:java.net.URLStreamHandlerFactory ):java.net.URLClassLoader;
	new( arg0:string, arg1:[java.net.URL], arg2:java.lang.ClassLoader ):java.net.URLClassLoader;
	new( arg0:string, arg1:[java.net.URL], arg2:java.lang.ClassLoader, arg3:java.net.URLStreamHandlerFactory ):java.net.URLClassLoader;
	new( arg0:[java.net.URL], arg1:java.lang.ClassLoader ):java.net.URLClassLoader;
	new( arg0:[java.net.URL] ):java.net.URLClassLoader;
	getSystemResourceAsStream( arg0:string ):java.io.InputStream;
	getPlatformClassLoader(  ):java.lang.ClassLoader;
	getSystemClassLoader(  ):java.lang.ClassLoader;
	getSystemResource( arg0:string ):java.net.URL;
	newInstance( arg0:[java.net.URL] ):java.net.URLClassLoader;
	newInstance( arg0:[java.net.URL], arg1:java.lang.ClassLoader ):java.net.URLClassLoader;
	getSystemResources( arg0:string ):java.util.Enumeration<java.net.URL>;
}

export const URLClassLoader: URLClassLoaderStatic = Packages.java.net.URLClassLoader;


interface URLConnectionStatic {

	readonly class:any;
	getDefaultAllowUserInteraction(  ):boolean;
	getDefaultUseCaches( arg0:string ):boolean;
	getDefaultRequestProperty( arg0:string ):string;
	guessContentTypeFromName( arg0:string ):string;
	guessContentTypeFromStream( arg0:java.io.InputStream ):string;
	getFileNameMap(  ):java.net.FileNameMap;
	setContentHandlerFactory( arg0:java.net.ContentHandlerFactory ):void;
	setDefaultAllowUserInteraction( arg0:boolean ):void;
	setDefaultRequestProperty( arg0:string, arg1:string ):void;
	setDefaultUseCaches( arg0:string, arg1:boolean ):void;
	setFileNameMap( arg0:java.net.FileNameMap ):void;
}

export const URLConnection: URLConnectionStatic = Packages.java.net.URLConnection;


interface URLDecoderStatic {

	readonly class:any;
	new(  ):java.net.URLDecoder;
	decode( arg0:string ):string;
	decode( arg0:string, arg1:string ):string;
	decode( arg0:string, arg1:any /*java.nio.charset.Charset*/ ):string;
}

export const URLDecoder: URLDecoderStatic = Packages.java.net.URLDecoder;


interface URLEncoderStatic {

	readonly class:any;
	encode( arg0:string ):string;
	encode( arg0:string, arg1:string ):string;
	encode( arg0:string, arg1:any /*java.nio.charset.Charset*/ ):string;
}

export const URLEncoder: URLEncoderStatic = Packages.java.net.URLEncoder;


interface URLPermissionStatic {

	readonly class:any;
	new( arg0:string ):java.net.URLPermission;
	new( arg0:string, arg1:string ):java.net.URLPermission;
}

export const URLPermission: URLPermissionStatic = Packages.java.net.URLPermission;


interface URLStreamHandlerStatic {

	readonly class:any;
	new(  ):java.net.URLStreamHandler;
}

export const URLStreamHandler: URLStreamHandlerStatic = Packages.java.net.URLStreamHandler;


interface URLStreamHandlerFactoryStatic {

	readonly class:any;
}

export const URLStreamHandlerFactory: URLStreamHandlerFactoryStatic = Packages.java.net.URLStreamHandlerFactory;


