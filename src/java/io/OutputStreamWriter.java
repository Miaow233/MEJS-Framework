public class java.io.OutputStreamWriter extends java.io.Writer
{
    // Constructors
    public java.io.OutputStreamWriter(java.io.OutputStream);
    public java.io.OutputStreamWriter(java.io.OutputStream, java.lang.String);
    public java.io.OutputStreamWriter(java.io.OutputStream, java.nio.charset.Charset);
    public java.io.OutputStreamWriter(java.io.OutputStream, java.nio.charset.CharsetEncoder);
    // Methods
    public void close();
    public void flush();
    void flushBuffer();
    public java.lang.String getEncoding();
    public void write(int);
    public void write(java.lang.String, int, int);
    public void write([C, int, int);
    // Fields
    private final sun.nio.cs.StreamEncoder se;
}