public class java.io.FileOutputStream extends java.io.OutputStream
{
    // Constructors
    public java.io.FileOutputStream(java.io.File);
    public java.io.FileOutputStream(java.io.File, boolean);
    public java.io.FileOutputStream(java.io.FileDescriptor);
    public java.io.FileOutputStream(java.io.FileDescriptor, boolean);
    public java.io.FileOutputStream(java.lang.String);
    public java.io.FileOutputStream(java.lang.String, boolean);
    // Methods
    private native void open(java.lang.String, boolean);
    public void close();
    protected void finalize();
    public java.nio.channels.FileChannel getChannel();
    public final java.io.FileDescriptor getFD();
    public void write(int);
    public void write([B);
    public void write([B, int, int);
    // Fields
    private final boolean append;
    private java.nio.channels.FileChannel channel;
    private final java.lang.Object closeLock;
    private volatile boolean closed;
    private final java.io.FileDescriptor fd;
    private final dalvik.system.CloseGuard guard;
    private final boolean isFdOwner;
    private final java.lang.String path;
}