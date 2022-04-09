public class java.io.BufferedReader extends java.io.Reader
{
    // Constructors
    public java.io.BufferedReader(java.io.Reader);
    public java.io.BufferedReader(java.io.Reader, int);
    // Methods
    private void ensureOpen();
    private void fill();
    private int read1([C, int, int);
    public void close();
    public java.util.stream.Stream lines();
    public void mark(int);
    public boolean markSupported();
    public int read();
    public int read([C, int, int);
    public java.lang.String readLine();
    java.lang.String readLine(boolean);
    public boolean ready();
    public void reset();
    public long skip(long);
    // Fields
    private [C cb;
    private java.io.Reader in;
    private int markedChar;
    private boolean markedSkipLF;
    private int nChars;
    private int nextChar;
    private int readAheadLimit;
    private boolean skipLF;
    private static final int INVALIDATED;
    private static final int UNMARKED;
    private static int defaultCharBufferSize;
    private static int defaultExpectedLineLength;
}