public abstract class java.net.HttpURLConnection extends java.net.URLConnection
{
    // Constructors
    public abstract java.net.HttpURLConnection(java.net.URL);
    // Methods
    public static boolean getFollowRedirects();
    public static void setFollowRedirects(boolean);
    public abstract void disconnect();
    public java.io.InputStream getErrorStream();
    public java.lang.String getHeaderField(int);
    public long getHeaderFieldDate(java.lang.String, long);
    public java.lang.String getHeaderFieldKey(int);
    public boolean getInstanceFollowRedirects();
    public java.security.Permission getPermission();
    public java.lang.String getRequestMethod();
    public int getResponseCode();
    public java.lang.String getResponseMessage();
    public void setChunkedStreamingMode(int);
    public void setFixedLengthStreamingMode(int);
    public void setFixedLengthStreamingMode(long);
    public void setInstanceFollowRedirects(boolean);
    public void setRequestMethod(java.lang.String);
    public abstract boolean usingProxy();
    // Fields
    protected int chunkLength;
    protected int fixedContentLength;
    protected long fixedContentLengthLong;
    protected boolean instanceFollowRedirects;
    protected java.lang.String method;
    protected int responseCode;
    protected java.lang.String responseMessage;
    private static final int DEFAULT_CHUNK_SIZE;
    public static final int HTTP_ACCEPTED;
    public static final int HTTP_BAD_GATEWAY;
    public static final int HTTP_BAD_METHOD;
    public static final int HTTP_BAD_REQUEST;
    public static final int HTTP_CLIENT_TIMEOUT;
    public static final int HTTP_CONFLICT;
    public static final int HTTP_CREATED;
    public static final int HTTP_ENTITY_TOO_LARGE;
    public static final int HTTP_FORBIDDEN;
    public static final int HTTP_GATEWAY_TIMEOUT;
    public static final int HTTP_GONE;
    public static final int HTTP_INTERNAL_ERROR;
    public static final int HTTP_LENGTH_REQUIRED;
    public static final int HTTP_MOVED_PERM;
    public static final int HTTP_MOVED_TEMP;
    public static final int HTTP_MULT_CHOICE;
    public static final int HTTP_NOT_ACCEPTABLE;
    public static final int HTTP_NOT_AUTHORITATIVE;
    public static final int HTTP_NOT_FOUND;
    public static final int HTTP_NOT_IMPLEMENTED;
    public static final int HTTP_NOT_MODIFIED;
    public static final int HTTP_NO_CONTENT;
    public static final int HTTP_OK;
    public static final int HTTP_PARTIAL;
    public static final int HTTP_PAYMENT_REQUIRED;
    public static final int HTTP_PRECON_FAILED;
    public static final int HTTP_PROXY_AUTH;
    public static final int HTTP_REQ_TOO_LONG;
    public static final int HTTP_RESET;
    public static final int HTTP_SEE_OTHER;
    public static final int HTTP_SERVER_ERROR;
    public static final int HTTP_UNAUTHORIZED;
    public static final int HTTP_UNAVAILABLE;
    public static final int HTTP_UNSUPPORTED_TYPE;
    public static final int HTTP_USE_PROXY;
    public static final int HTTP_VERSION;
    private static boolean followRedirects;
    private static final [Ljava.lang.String; methods;
}