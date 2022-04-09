public final class java.io.FileDescriptor
{
    // Constructors
    public final java.io.FileDescriptor();
    public final java.io.FileDescriptor(int);
    // Methods
    private static java.io.FileDescriptor dupFd(int);
    private static native boolean isSocket(int);
    public final int getInt$();
    public boolean isSocket$();
    public final void setInt$(int);
    public native void sync();
    public boolean valid();
    // Fields
    private int descriptor;
    public static final java.io.FileDescriptor err;
    public static final java.io.FileDescriptor in;
    public static final java.io.FileDescriptor out;
}