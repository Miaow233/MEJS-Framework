public class java.io.InputStreamReader extends java.io.Reader
{
    // Constructors
    public java.io.InputStreamReader(java.io.InputStream);
    public java.io.InputStreamReader(java.io.InputStream, java.lang.String);
    public java.io.InputStreamReader(java.io.InputStream, java.nio.charset.Charset);
    public java.io.InputStreamReader(java.io.InputStream, java.nio.charset.CharsetDecoder);
    // Methods
    public void close();
    public java.lang.String getEncoding();
    public int read();
    public int read([C, int, int);
    public boolean ready();
    // Fields
    private final sun.nio.cs.StreamDecoder sd;
}