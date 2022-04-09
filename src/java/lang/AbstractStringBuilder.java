abstract class java.lang.AbstractStringBuilder
{
    // Constructors
    abstract java.lang.AbstractStringBuilder();
    abstract java.lang.AbstractStringBuilder(int);
    // Methods
    public java.lang.AbstractStringBuilder append(char);
    public java.lang.AbstractStringBuilder append(double);
    public java.lang.AbstractStringBuilder append(float);
    public java.lang.AbstractStringBuilder append(int);
    public java.lang.AbstractStringBuilder append(long);
    public java.lang.AbstractStringBuilder append(java.lang.CharSequence);
    public java.lang.AbstractStringBuilder append(java.lang.CharSequence, int, int);
    public java.lang.AbstractStringBuilder append(java.lang.Object);
    public java.lang.AbstractStringBuilder append(java.lang.String);
    public java.lang.AbstractStringBuilder append(java.lang.StringBuffer);
    public java.lang.AbstractStringBuilder append(boolean);
    public java.lang.AbstractStringBuilder append([C);
    public java.lang.AbstractStringBuilder append([C, int, int);
    public java.lang.AbstractStringBuilder appendCodePoint(int);
    public int capacity();
    public char charAt(int);
    public int codePointAt(int);
    public int codePointBefore(int);
    public int codePointCount(int, int);
    public java.lang.AbstractStringBuilder delete(int, int);
    public java.lang.AbstractStringBuilder deleteCharAt(int);
    public void ensureCapacity(int);
    void ensureCapacityInternal(int);
    void expandCapacity(int);
    public void getChars(int, int, [C, int);
    final [C getValue();
    public int indexOf(java.lang.String);
    public int indexOf(java.lang.String, int);
    public java.lang.AbstractStringBuilder insert(int, char);
    public java.lang.AbstractStringBuilder insert(int, double);
    public java.lang.AbstractStringBuilder insert(int, float);
    public java.lang.AbstractStringBuilder insert(int, int);
    public java.lang.AbstractStringBuilder insert(int, long);
    public java.lang.AbstractStringBuilder insert(int, java.lang.CharSequence);
    public java.lang.AbstractStringBuilder insert(int, java.lang.CharSequence, int, int);
    public java.lang.AbstractStringBuilder insert(int, java.lang.Object);
    public java.lang.AbstractStringBuilder insert(int, java.lang.String);
    public java.lang.AbstractStringBuilder insert(int, boolean);
    public java.lang.AbstractStringBuilder insert(int, [C);
    public java.lang.AbstractStringBuilder insert(int, [C, int, int);
    public int lastIndexOf(java.lang.String);
    public int lastIndexOf(java.lang.String, int);
    public int length();
    public int offsetByCodePoints(int, int);
    public java.lang.AbstractStringBuilder replace(int, int, java.lang.String);
    public java.lang.AbstractStringBuilder reverse();
    public void setCharAt(int, char);
    public void setLength(int);
    public java.lang.CharSequence subSequence(int, int);
    public java.lang.String substring(int);
    public java.lang.String substring(int, int);
    public abstract java.lang.String toString();
    public void trimToSize();
    // Fields
    int count;
    [C value;
}