export abstract class Stream{
// Methods
public static builder(): Stream$Builder {
return Packages.java.util.stream.Stream.builder()
}
public static concat(str: Stream, str_1: Stream): Stream {
return Packages.java.util.stream.Stream.concat(str, str_1)
}
public static empty(): Stream {
return Packages.java.util.stream.Stream.empty()
}
public static generate(sup: Supplier): Stream {
return Packages.java.util.stream.Stream.generate(sup)
}
public static iterate(obj: Object, una: UnaryOperator): Stream {
return Packages.java.util.stream.Stream.iterate(obj, una)
}
public static of(obj: Object): Stream {
return Packages.java.util.stream.Stream.of(obj)
}
public static transient of(obj: Object[]): Stream {
return Packages.java.util.stream.Stream.of(obj)
}
public abstract allMatch(pre: Predicate): boolean {}
public abstract anyMatch(pre: Predicate): boolean {}
public abstract collect(sup: Supplier, bic: BiConsumer, bic_1: BiConsumer): Object {}
public abstract collect(col: Collector): Object {}
public abstract count(): number {}
public abstract distinct(): Stream {}
public abstract filter(pre: Predicate): Stream {}
public abstract findAny(): Optional {}
public abstract findFirst(): Optional {}
public abstract flatMap(fun: Function): Stream {}
public abstract flatMapToDouble(fun: Function): DoubleStream {}
public abstract flatMapToInt(fun: Function): IntStream {}
public abstract flatMapToLong(fun: Function): LongStream {}
public abstract forEach(con: Consumer): void {
this.forEach(con)
}
public abstract forEachOrdered(con: Consumer): void {
this.forEachOrdered(con)
}
public abstract limit(lon: number): Stream {}
public abstract map(fun: Function): Stream {}
public abstract mapToDouble(tod: ToDoubleFunction): DoubleStream {}
public abstract mapToInt(toi: ToIntFunction): IntStream {}
public abstract mapToLong(tol: ToLongFunction): LongStream {}
public abstract max(com: Comparator): Optional {}
public abstract min(com: Comparator): Optional {}
public abstract noneMatch(pre: Predicate): boolean {}
public abstract peek(con: Consumer): Stream {}
public abstract reduce(obj: Object, bif: BiFunction, bin: BinaryOperator): Object {}
public abstract reduce(obj: Object, bin: BinaryOperator): Object {}
public abstract reduce(bin: BinaryOperator): Optional {}
public abstract skip(lon: number): Stream {}
public abstract sorted(): Stream {}
public abstract sorted(com: Comparator): Stream {}
public abstract toArray(): Object[] {}
public abstract toArray(int: IntFunction): Object[] {}
}