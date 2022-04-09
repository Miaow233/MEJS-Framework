public abstract class java.nio.charset.Charset
{
    // Constructors
    public abstract java.nio.charset.Charset(java.lang.String, [Ljava.lang.String;);
    // Methods
    static java.util.Iterator -wrap0();
    static void -wrap1(java.util.Iterator, java.util.Map);
    static boolean atBugLevel(java.lang.String);
    public static java.util.SortedMap availableCharsets();
    private static void cache(java.lang.String, java.nio.charset.Charset);
    private static void checkName(java.lang.String);
    public static java.nio.charset.Charset defaultCharset();
    public static java.nio.charset.Charset forName(java.lang.String);
    public static java.nio.charset.Charset forNameUEE(java.lang.String);
    public static boolean isSupported(java.lang.String);
    private static java.nio.charset.Charset lookup(java.lang.String);
    private static java.nio.charset.Charset lookup2(java.lang.String);
    private static java.nio.charset.Charset lookupViaProviders(java.lang.String);
    private static java.util.Iterator providers();
    private static void put(java.util.Iterator, java.util.Map);
    public final java.util.Set aliases();
    public boolean canEncode();
    public volatile int compareTo(java.lang.Object);
    public final int compareTo(java.nio.charset.Charset);
    public abstract boolean contains(java.nio.charset.Charset);
    public final java.nio.CharBuffer decode(java.nio.ByteBuffer);
    public java.lang.String displayName();
    public java.lang.String displayName(java.util.Locale);
    public final java.nio.ByteBuffer encode(java.lang.String);
    public final java.nio.ByteBuffer encode(java.nio.CharBuffer);
    public final boolean equals(java.lang.Object);
    public final int hashCode();
    public final boolean isRegistered();
    public final java.lang.String name();
    public abstract java.nio.charset.CharsetDecoder newDecoder();
    public abstract java.nio.charset.CharsetEncoder newEncoder();
    public final java.lang.String toString();
    // Fields
    private java.util.Set aliasSet;
    private final [Ljava.lang.String; aliases;
    private final java.lang.String name;
    private static volatile java.lang.String bugLevel;
    private static volatile java.util.Map$Entry cache1;
    private static final java.util.HashMap cache2;
    private static java.nio.charset.Charset defaultCharset;
    private static java.lang.ThreadLocal gate;
}