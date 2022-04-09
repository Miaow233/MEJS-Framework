public abstract interface class java.util.Map
{
    // Constructors
    // Methods
    public abstract void clear();
    public java.lang.Object compute(java.lang.Object, java.util.function.BiFunction);
    public java.lang.Object computeIfAbsent(java.lang.Object, java.util.function.Function);
    public java.lang.Object computeIfPresent(java.lang.Object, java.util.function.BiFunction);
    public abstract boolean containsKey(java.lang.Object);
    public abstract boolean containsValue(java.lang.Object);
    public abstract java.util.Set entrySet();
    public abstract boolean equals(java.lang.Object);
    public void forEach(java.util.function.BiConsumer);
    public abstract java.lang.Object get(java.lang.Object);
    public java.lang.Object getOrDefault(java.lang.Object, java.lang.Object);
    public abstract int hashCode();
    public abstract boolean isEmpty();
    public abstract java.util.Set keySet();
    public java.lang.Object merge(java.lang.Object, java.lang.Object, java.util.function.BiFunction);
    public abstract java.lang.Object put(java.lang.Object, java.lang.Object);
    public abstract void putAll(java.util.Map);
    public java.lang.Object putIfAbsent(java.lang.Object, java.lang.Object);
    public abstract java.lang.Object remove(java.lang.Object);
    public boolean remove(java.lang.Object, java.lang.Object);
    public java.lang.Object replace(java.lang.Object, java.lang.Object);
    public boolean replace(java.lang.Object, java.lang.Object, java.lang.Object);
    public void replaceAll(java.util.function.BiFunction);
    public abstract int size();
    public abstract java.util.Collection values();
    // Fields
}