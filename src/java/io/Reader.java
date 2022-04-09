public abstract class java.io.Reader
{
    // Constructors
    public abstract java.io.Reader();
    public abstract java.io.Reader(java.lang.Object);
    // Methods
    public abstract void close();
    public void mark(int);
    public boolean markSupported();
    public int read();
    public int read(java.nio.CharBuffer);
    public int read([C);
    public abstract int read([C, int, int);
    public boolean ready();
    public void reset();
    public long skip(long);
    // Fields
    protected java.lang.Object lock;
    private [C skipBuffer;
    private static final int maxSkipBufferSize;
}