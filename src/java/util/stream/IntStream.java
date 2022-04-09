public abstract interface class java.util.stream.IntStream
{
    // Constructors
    // Methods
    public static java.util.stream.IntStream$Builder builder();
    public static java.util.stream.IntStream concat(java.util.stream.IntStream, java.util.stream.IntStream);
    public static java.util.stream.IntStream empty();
    public static java.util.stream.IntStream generate(java.util.function.IntSupplier);
    public static java.util.stream.IntStream iterate(int, java.util.function.IntUnaryOperator);
    public static java.util.stream.IntStream of(int);
    public static transient java.util.stream.IntStream of([I);
    public static java.util.stream.IntStream range(int, int);
    public static java.util.stream.IntStream rangeClosed(int, int);
    public abstract boolean allMatch(java.util.function.IntPredicate);
    public abstract boolean anyMatch(java.util.function.IntPredicate);
    public abstract java.util.stream.DoubleStream asDoubleStream();
    public abstract java.util.stream.LongStream asLongStream();
    public abstract java.util.OptionalDouble average();
    public abstract java.util.stream.Stream boxed();
    public abstract java.lang.Object collect(java.util.function.Supplier, java.util.function.ObjIntConsumer, java.util.function.BiConsumer);
    public abstract long count();
    public abstract java.util.stream.IntStream distinct();
    public abstract java.util.stream.IntStream filter(java.util.function.IntPredicate);
    public abstract java.util.OptionalInt findAny();
    public abstract java.util.OptionalInt findFirst();
    public abstract java.util.stream.IntStream flatMap(java.util.function.IntFunction);
    public abstract void forEach(java.util.function.IntConsumer);
    public abstract void forEachOrdered(java.util.function.IntConsumer);
    public volatile java.util.Iterator iterator();
    public abstract java.util.PrimitiveIterator$OfInt iterator();
    public abstract java.util.stream.IntStream limit(long);
    public abstract java.util.stream.IntStream map(java.util.function.IntUnaryOperator);
    public abstract java.util.stream.DoubleStream mapToDouble(java.util.function.IntToDoubleFunction);
    public abstract java.util.stream.LongStream mapToLong(java.util.function.IntToLongFunction);
    public abstract java.util.stream.Stream mapToObj(java.util.function.IntFunction);
    public abstract java.util.OptionalInt max();
    public abstract java.util.OptionalInt min();
    public abstract boolean noneMatch(java.util.function.IntPredicate);
    public volatile java.util.stream.BaseStream parallel();
    public abstract java.util.stream.IntStream parallel();
    public abstract java.util.stream.IntStream peek(java.util.function.IntConsumer);
    public abstract int reduce(int, java.util.function.IntBinaryOperator);
    public abstract java.util.OptionalInt reduce(java.util.function.IntBinaryOperator);
    public volatile java.util.stream.BaseStream sequential();
    public abstract java.util.stream.IntStream sequential();
    public abstract java.util.stream.IntStream skip(long);
    public abstract java.util.stream.IntStream sorted();
    public abstract java.util.Spliterator$OfInt spliterator();
    public volatile java.util.Spliterator spliterator();
    public abstract int sum();
    public abstract java.util.IntSummaryStatistics summaryStatistics();
    public abstract [I toArray();
    // Fields
}