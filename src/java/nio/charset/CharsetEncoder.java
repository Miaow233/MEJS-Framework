public abstract class java.nio.charset.CharsetEncoder
{
    // Constructors
    public abstract java.nio.charset.CharsetEncoder(java.nio.charset.Charset, float, float);
    public abstract java.nio.charset.CharsetEncoder(java.nio.charset.Charset, float, float, [B);
    public abstract java.nio.charset.CharsetEncoder(java.nio.charset.Charset, float, float, [B, boolean);
    // Methods
    private boolean canEncode(java.nio.CharBuffer);
    private void throwIllegalStateException(int, int);
    public final float averageBytesPerChar();
    public boolean canEncode(char);
    public boolean canEncode(java.lang.CharSequence);
    public final java.nio.charset.Charset charset();
    public final java.nio.ByteBuffer encode(java.nio.CharBuffer);
    public final java.nio.charset.CoderResult encode(java.nio.CharBuffer, java.nio.ByteBuffer, boolean);
    protected abstract java.nio.charset.CoderResult encodeLoop(java.nio.CharBuffer, java.nio.ByteBuffer);
    public final java.nio.charset.CoderResult flush(java.nio.ByteBuffer);
    protected java.nio.charset.CoderResult implFlush(java.nio.ByteBuffer);
    protected void implOnMalformedInput(java.nio.charset.CodingErrorAction);
    protected void implOnUnmappableCharacter(java.nio.charset.CodingErrorAction);
    protected void implReplaceWith([B);
    protected void implReset();
    public boolean isLegalReplacement([B);
    public java.nio.charset.CodingErrorAction malformedInputAction();
    public final float maxBytesPerChar();
    public final java.nio.charset.CharsetEncoder onMalformedInput(java.nio.charset.CodingErrorAction);
    public final java.nio.charset.CharsetEncoder onUnmappableCharacter(java.nio.charset.CodingErrorAction);
    public final java.nio.charset.CharsetEncoder replaceWith([B);
    public final [B replacement();
    public final java.nio.charset.CharsetEncoder reset();
    public java.nio.charset.CodingErrorAction unmappableCharacterAction();
    // Fields
    private final float averageBytesPerChar;
    private java.lang.ref.WeakReference cachedDecoder;
    private final java.nio.charset.Charset charset;
    private java.nio.charset.CodingErrorAction malformedInputAction;
    private final float maxBytesPerChar;
    private [B replacement;
    private int state;
    private java.nio.charset.CodingErrorAction unmappableCharacterAction;
    static final boolean -assertionsDisabled;
    private static final int ST_CODING;
    private static final int ST_END;
    private static final int ST_FLUSHED;
    private static final int ST_RESET;
    private static [Ljava.lang.String; stateNames;
}