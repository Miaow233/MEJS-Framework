public final class java.net.URL
{
    // Constructors
    public final java.net.URL(java.lang.String);
    public final java.net.URL(java.lang.String, java.lang.String, int, java.lang.String);
    public final java.net.URL(java.lang.String, java.lang.String, int, java.lang.String, java.net.URLStreamHandler);
    public final java.net.URL(java.lang.String, java.lang.String, java.lang.String);
    public final java.net.URL(java.net.URL, java.lang.String);
    public final java.net.URL(java.net.URL, java.lang.String, java.net.URLStreamHandler);
    // Methods
    private void checkSpecifyHandler(java.lang.SecurityManager);
    static java.net.URLStreamHandler getURLStreamHandler(java.lang.String);
    private boolean isValidProtocol(java.lang.String);
    private synchronized void readObject(java.io.ObjectInputStream);
    public static void setURLStreamHandlerFactory(java.net.URLStreamHandlerFactory);
    private synchronized void writeObject(java.io.ObjectOutputStream);
    public boolean equals(java.lang.Object);
    public java.lang.String getAuthority();
    public final java.lang.Object getContent();
    public final java.lang.Object getContent([Ljava.lang.Class;);
    public int getDefaultPort();
    public java.lang.String getFile();
    public java.lang.String getHost();
    public java.lang.String getPath();
    public int getPort();
    public java.lang.String getProtocol();
    public java.lang.String getQuery();
    public java.lang.String getRef();
    public java.lang.String getUserInfo();
    public synchronized int hashCode();
    public java.net.URLConnection openConnection();
    public java.net.URLConnection openConnection(java.net.Proxy);
    public final java.io.InputStream openStream();
    public boolean sameFile(java.net.URL);
    protected void set(java.lang.String, java.lang.String, int, java.lang.String, java.lang.String);
    protected void set(java.lang.String, java.lang.String, int, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String);
    public java.lang.String toExternalForm();
    public java.lang.String toString();
    public java.net.URI toURI();
    // Fields
    private java.lang.String authority;
    private java.lang.String file;
    transient java.net.URLStreamHandler handler;
    private transient int hashCode;
    private java.lang.String host;
    transient java.net.InetAddress hostAddress;
    private transient java.lang.String path;
    private int port;
    private java.lang.String protocol;
    private transient java.lang.String query;
    private java.lang.String ref;
    private transient java.lang.String userInfo;
    static java.net.URLStreamHandlerFactory factory;
    static java.util.Hashtable handlers;
    private static final java.lang.String protocolPathProp;
    static final long serialVersionUID;
    private static java.lang.Object streamHandlerLock;
}