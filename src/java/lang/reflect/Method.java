public final class java.lang.reflect.Method extends java.lang.reflect.AbstractMethod
{
    // Constructors
    public final java.lang.reflect.Method();
    // Methods
    private native java.lang.annotation.Annotation getAnnotationNative(java.lang.Class);
    private native [[Ljava.lang.annotation.Annotation; getParameterAnnotationsNative();
    boolean equalNameAndParameters(java.lang.reflect.Method);
    public boolean equals(java.lang.Object);
    public java.lang.annotation.Annotation getAnnotation(java.lang.Class);
    public java.lang.Class getDeclaringClass();
    public native java.lang.Object getDefaultValue();
    public native [Ljava.lang.Class; getExceptionTypes();
    public [Ljava.lang.reflect.Type; getGenericExceptionTypes();
    public [Ljava.lang.reflect.Type; getGenericParameterTypes();
    public java.lang.reflect.Type getGenericReturnType();
    public int getModifiers();
    public java.lang.String getName();
    public [[Ljava.lang.annotation.Annotation; getParameterAnnotations();
    public [Ljava.lang.Class; getParameterTypes();
    public java.lang.Class getReturnType();
    java.lang.String getSignature();
    public [Ljava.lang.reflect.TypeVariable; getTypeParameters();
    public int hashCode();
    public transient native java.lang.Object invoke(java.lang.Object, [Ljava.lang.Object;);
    public boolean isBridge();
    public boolean isDefault();
    public boolean isSynthetic();
    public boolean isVarArgs();
    public java.lang.String toGenericString();
    public java.lang.String toString();
    // Fields
    public static final java.util.Comparator ORDER_BY_SIGNATURE;
}