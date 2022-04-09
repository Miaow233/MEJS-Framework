class java.util.stream.IntStream {
// Methods
public static builder(): IntStream$Builder {
return Packages.java.util.stream.IntStream.builder()
}
public static concat(int: IntStream, int_1: IntStream): IntStream {
return Packages.java.util.stream.IntStream.concat(int, int_1)
}
public static empty(): IntStream {
return Packages.java.util.stream.IntStream.empty()
}
public static generate(int: IntSupplier): IntStream {
return Packages.java.util.stream.IntStream.generate(int)
}
public static iterate(int: number, int_1: IntUnaryOperator): IntStream {
return Packages.java.util.stream.IntStream.iterate(int, int_1)
}
public static of(int: number): IntStream {
return Packages.java.util.stream.IntStream.of(int)
}
public static transient of(i: number[]): IntStream {
return Packages.java.util.stream.IntStream.of(i)
}
public static range(int: number, int_1: number): IntStream {
return Packages.java.util.stream.IntStream.range(int, int_1)
}
public static rangeClosed(int: number, int_1: number): IntStream {
return Packages.java.util.stream.IntStream.rangeClosed(int, int_1)
}
public abstract allMatch(int: IntPredicate): boolean {
return this.allMatch(int)
}
public abstract anyMatch(int: IntPredicate): boolean {
return this.anyMatch(int)
}
public abstract asDoubleStream(): DoubleStream {
return this.asDoubleStream()
}
public abstract asLongStream(): LongStream {
return this.asLongStream()
}
public abstract average(): OptionalDouble {
return this.average()
}
public abstract boxed(): Stream {
return this.boxed()
}
public abstract collect(sup: Supplier, obj: ObjIntConsumer, bic: BiConsumer): Object {
return this.collect(sup, obj, bic)
}
public abstract count(): number {
return this.count()
}
public abstract distinct(): IntStream {
return this.distinct()
}
public abstract filter(int: IntPredicate): IntStream {
return this.filter(int)
}
public abstract findAny(): OptionalInt {
return this.findAny()
}
public abstract findFirst(): OptionalInt {
return this.findFirst()
}
public abstract flatMap(int: IntFunction): IntStream {
return this.flatMap(int)
}
public abstract forEach(int: IntConsumer): void {
this.forEach(int)
}
public abstract forEachOrdered(int: IntConsumer): void {
this.forEachOrdered(int)
}
public volatile iterator(): Iterator {
return this.iterator()
}
public abstract iterator(): PrimitiveIterator$OfInt {
return this.iterator()
}
public abstract limit(lon: number): IntStream {
return this.limit(lon)
}
public abstract map(int: IntUnaryOperator): IntStream {
return this.map(int)
}
public abstract mapToDouble(int: IntToDoubleFunction): DoubleStream {
return this.mapToDouble(int)
}
public abstract mapToLong(int: IntToLongFunction): LongStream {
return this.mapToLong(int)
}
public abstract mapToObj(int: IntFunction): Stream {
return this.mapToObj(int)
}
public abstract max(): OptionalInt {
return this.max()
}
public abstract min(): OptionalInt {
return this.min()
}
public abstract noneMatch(int: IntPredicate): boolean {
return this.noneMatch(int)
}
public volatile parallel(): BaseStream {
return this.parallel()
}
public abstract parallel(): IntStream {
return this.parallel()
}
public abstract peek(int: IntConsumer): IntStream {
return this.peek(int)
}
public abstract reduce(int: number, int_1: IntBinaryOperator): number {
return this.reduce(int, int_1)
}
public abstract reduce(int: IntBinaryOperator): OptionalInt {
return this.reduce(int)
}
public volatile sequential(): BaseStream {
return this.sequential()
}
public abstract sequential(): IntStream {
return this.sequential()
}
public abstract skip(lon: number): IntStream {
return this.skip(lon)
}
public abstract sorted(): IntStream {
return this.sorted()
}
public abstract spliterator(): Spliterator$OfInt {
return this.spliterator()
}
public volatile spliterator(): Spliterator {
return this.spliterator()
}
public abstract sum(): number {
return this.sum()
}
public abstract summaryStatistics(): IntSummaryStatistics {
return this.summaryStatistics()
}
public abstract toArray(): number[] {
return this.toArray()
}
// Fields
}