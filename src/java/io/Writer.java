public abstract class java.io.Writer
{
    // Constructors
    public abstract java.io.Writer();
    public abstract java.io.Writer(java.lang.Object);
    // Methods
    public java.io.Writer append(char);
    public java.io.Writer append(java.lang.CharSequence);
    public java.io.Writer append(java.lang.CharSequence, int, int);
    public volatile java.lang.Appendable append(char);
    public volatile java.lang.Appendable append(java.lang.CharSequence);
    public volatile java.lang.Appendable append(java.lang.CharSequence, int, int);
    public abstract void close();
    public abstract void flush();
    public void write(int);
    public void write(java.lang.String);
    public void write(java.lang.String, int, int);
    public void write([C);
    public abstract void write([C, int, int);
    // Fields
    protected java.lang.Object lock;
    private [C writeBuffer;
    private final int writeBufferSize;
}