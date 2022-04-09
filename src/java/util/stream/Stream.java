public abstract interface class java.util.stream.Stream
{
    // Constructors
    // Methods
    public static java.util.stream.Stream$Builder builder();
    public static java.util.stream.Stream concat(java.util.stream.Stream, java.util.stream.Stream);
    public static java.util.stream.Stream empty();
    public static java.util.stream.Stream generate(java.util.function.Supplier);
    public static java.util.stream.Stream iterate(java.lang.Object, java.util.function.UnaryOperator);
    public static java.util.stream.Stream of(java.lang.Object);
    public static transient java.util.stream.Stream of([Ljava.lang.Object;);
    public abstract boolean allMatch(java.util.function.Predicate);
    public abstract boolean anyMatch(java.util.function.Predicate);
    public abstract java.lang.Object collect(java.util.function.Supplier, java.util.function.BiConsumer, java.util.function.BiConsumer);
    public abstract java.lang.Object collect(java.util.stream.Collector);
    public abstract long count();
    public abstract java.util.stream.Stream distinct();
    public abstract java.util.stream.Stream filter(java.util.function.Predicate);
    public abstract java.util.Optional findAny();
    public abstract java.util.Optional findFirst();
    public abstract java.util.stream.Stream flatMap(java.util.function.Function);
    public abstract java.util.stream.DoubleStream flatMapToDouble(java.util.function.Function);
    public abstract java.util.stream.IntStream flatMapToInt(java.util.function.Function);
    public abstract java.util.stream.LongStream flatMapToLong(java.util.function.Function);
    public abstract void forEach(java.util.function.Consumer);
    public abstract void forEachOrdered(java.util.function.Consumer);
    public abstract java.util.stream.Stream limit(long);
    public abstract java.util.stream.Stream map(java.util.function.Function);
    public abstract java.util.stream.DoubleStream mapToDouble(java.util.function.ToDoubleFunction);
    public abstract java.util.stream.IntStream mapToInt(java.util.function.ToIntFunction);
    public abstract java.util.stream.LongStream mapToLong(java.util.function.ToLongFunction);
    public abstract java.util.Optional max(java.util.Comparator);
    public abstract java.util.Optional min(java.util.Comparator);
    public abstract boolean noneMatch(java.util.function.Predicate);
    public abstract java.util.stream.Stream peek(java.util.function.Consumer);
    public abstract java.lang.Object reduce(java.lang.Object, java.util.function.BiFunction, java.util.function.BinaryOperator);
    public abstract java.lang.Object reduce(java.lang.Object, java.util.function.BinaryOperator);
    public abstract java.util.Optional reduce(java.util.function.BinaryOperator);
    public abstract java.util.stream.Stream skip(long);
    public abstract java.util.stream.Stream sorted();
    public abstract java.util.stream.Stream sorted(java.util.Comparator);
    public abstract [Ljava.lang.Object; toArray();
    public abstract [Ljava.lang.Object; toArray(java.util.function.IntFunction);
    // Fields
}