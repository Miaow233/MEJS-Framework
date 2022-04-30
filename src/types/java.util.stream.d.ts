declare namespace java.util.stream {
  interface BaseStream<T, S> /* extends java.lang.AutoCloseable*/ {
    close(): void
    isParallel(): boolean
    iterator(): java.util.Iterator<T>
    onClose(arg0: java.lang.Runnable): S
    parallel(): S
    sequential(): S
    spliterator(): java.util.Spliterator<T>
    unordered(): S
  } // end BaseStream
} // end namespace java.util.stream
declare namespace java.util.stream {
  interface Collector<T, A, R> {
    // static of<A,R,T>( arg0:any /*java.util.function.Supplier*/, arg1:any /*java.util.function.BiConsumer*/, arg2:any /*java.util.function.BinaryOperator*/, arg3:any /*java.util.function.Function*/, ...arg4:any /*java.util.stream.Collector$Characteristics*/[] ):Collector<T, A, R>;
    // static of<R,T>( arg0:any /*java.util.function.Supplier*/, arg1:any /*java.util.function.BiConsumer*/, arg2:any /*java.util.function.BinaryOperator*/, ...arg3:any /*java.util.stream.Collector$Characteristics*/[] ):Collector<T, R, R>;
    accumulator(): any /*java.util.function.BiConsumer*/
    characteristics(): java.util.Set<any /*java.util.stream.Collector$Characteristics*/>
    combiner(): any /*java.util.function.BinaryOperator*/
    finisher(): any /*java.util.function.Function*/
    supplier(): any /*java.util.function.Supplier*/
  } // end Collector
} // end namespace java.util.stream
declare namespace java.util.stream {
  class Collectors /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    static averagingDouble<T>(
      arg0: any /*java.util.function.ToDoubleFunction*/
    ): Collector<T, java.lang.Object, double | null>
    static averagingInt<T>(
      arg0: any /*java.util.function.ToIntFunction*/
    ): Collector<T, java.lang.Object, double | null>
    static averagingLong<T>(
      arg0: any /*java.util.function.ToLongFunction*/
    ): Collector<T, java.lang.Object, double | null>
    static collectingAndThen<RR, A, R, T>(
      arg0: Collector<T, A, R>,
      arg1: any /*java.util.function.Function*/
    ): Collector<T, A, RR>
    static counting<T>(): Collector<T, java.lang.Object, long | null>
    static filtering<A, R, T>(
      arg0: any /*java.util.function.Predicate*/,
      arg1: Collector<T, A, R>
    ): Collector<T, java.lang.Object, R>
    static flatMapping<A, R, T, U>(
      arg0: any /*java.util.function.Function*/,
      arg1: Collector<U, A, R>
    ): Collector<T, java.lang.Object, R>
    static groupingBy<A, K, T, D>(
      arg0: any /*java.util.function.Function*/,
      arg1: Collector<T, A, D>
    ): Collector<T, java.lang.Object, java.util.Map<K, D>>
    static groupingBy<A, T, D, M>(
      arg0: any /*java.util.function.Function*/,
      arg1: any /*java.util.function.Supplier*/,
      arg2: Collector<T, A, D>
    ): Collector<T, java.lang.Object, M>
    static groupingBy<K, T>(
      arg0: any /*java.util.function.Function*/
    ): Collector<T, java.lang.Object, java.util.Map<K, java.util.List<T>>>
    static groupingByConcurrent<A, T, D, M>(
      arg0: any /*java.util.function.Function*/,
      arg1: any /*java.util.function.Supplier*/,
      arg2: Collector<T, A, D>
    ): Collector<T, java.lang.Object, M>
    static groupingByConcurrent<A, T, D>(
      arg0: any /*java.util.function.Function*/,
      arg1: Collector<T, A, D>
    ): Collector<T, java.lang.Object, any /*java.util.concurrent.ConcurrentMap*/>
    static groupingByConcurrent<T>(
      arg0: any /*java.util.function.Function*/
    ): Collector<T, java.lang.Object, any /*java.util.concurrent.ConcurrentMap*/>
    static joining(): Collector<java.lang.CharSequence, java.lang.Object, string>
    static joining(arg0: java.lang.CharSequence): Collector<java.lang.CharSequence, java.lang.Object, string>
    static joining(
      arg0: java.lang.CharSequence,
      arg1: java.lang.CharSequence,
      arg2: java.lang.CharSequence
    ): Collector<java.lang.CharSequence, java.lang.Object, string>
    static mapping<A, R, T, U>(
      arg0: any /*java.util.function.Function*/,
      arg1: Collector<U, A, R>
    ): Collector<T, java.lang.Object, R>
    static maxBy<T>(arg0: java.util.Comparator<T>): Collector<T, java.lang.Object, java.util.Optional<T>>
    static minBy<T>(arg0: java.util.Comparator<T>): Collector<T, java.lang.Object, java.util.Optional<T>>
    static partitioningBy<A, T, D>(
      arg0: any /*java.util.function.Predicate*/,
      arg1: Collector<T, A, D>
    ): Collector<T, java.lang.Object, java.util.Map<boolean | null, D>>
    static partitioningBy<T>(
      arg0: any /*java.util.function.Predicate*/
    ): Collector<T, java.lang.Object, java.util.Map<boolean | null, java.util.List<T>>>
    static reducing<T, U>(
      arg0: U,
      arg1: any /*java.util.function.Function*/,
      arg2: any /*java.util.function.BinaryOperator*/
    ): Collector<T, java.lang.Object, U>
    static reducing<T>(arg0: T, arg1: any /*java.util.function.BinaryOperator*/): Collector<T, java.lang.Object, T>
    static reducing<T>(
      arg0: any /*java.util.function.BinaryOperator*/
    ): Collector<T, java.lang.Object, java.util.Optional<T>>
    static summarizingDouble<T>(
      arg0: any /*java.util.function.ToDoubleFunction*/
    ): Collector<T, java.lang.Object, java.util.DoubleSummaryStatistics>
    static summarizingInt<T>(
      arg0: any /*java.util.function.ToIntFunction*/
    ): Collector<T, java.lang.Object, java.util.IntSummaryStatistics>
    static summarizingLong<T>(
      arg0: any /*java.util.function.ToLongFunction*/
    ): Collector<T, java.lang.Object, java.util.LongSummaryStatistics>
    static summingDouble<T>(
      arg0: any /*java.util.function.ToDoubleFunction*/
    ): Collector<T, java.lang.Object, double | null>
    static summingInt<T>(arg0: any /*java.util.function.ToIntFunction*/): Collector<T, java.lang.Object, int | null>
    static summingLong<T>(arg0: any /*java.util.function.ToLongFunction*/): Collector<T, java.lang.Object, long | null>
    static toCollection<C, T>(arg0: any /*java.util.function.Supplier*/): Collector<T, java.lang.Object, C>
    static toConcurrentMap<T, M>(
      arg0: any /*java.util.function.Function*/,
      arg1: any /*java.util.function.Function*/,
      arg2: any /*java.util.function.BinaryOperator*/,
      arg3: any /*java.util.function.Supplier*/
    ): Collector<T, java.lang.Object, M>
    static toConcurrentMap<T>(
      arg0: any /*java.util.function.Function*/,
      arg1: any /*java.util.function.Function*/
    ): Collector<T, java.lang.Object, any /*java.util.concurrent.ConcurrentMap*/>
    static toConcurrentMap<T>(
      arg0: any /*java.util.function.Function*/,
      arg1: any /*java.util.function.Function*/,
      arg2: any /*java.util.function.BinaryOperator*/
    ): Collector<T, java.lang.Object, any /*java.util.concurrent.ConcurrentMap*/>
    static toList<T>(): Collector<T, java.lang.Object, java.util.List<T>>
    static toMap<K, T, U>(
      arg0: any /*java.util.function.Function*/,
      arg1: any /*java.util.function.Function*/
    ): Collector<T, java.lang.Object, java.util.Map<K, U>>
    static toMap<K, T, U>(
      arg0: any /*java.util.function.Function*/,
      arg1: any /*java.util.function.Function*/,
      arg2: any /*java.util.function.BinaryOperator*/
    ): Collector<T, java.lang.Object, java.util.Map<K, U>>
    static toMap<T, M>(
      arg0: any /*java.util.function.Function*/,
      arg1: any /*java.util.function.Function*/,
      arg2: any /*java.util.function.BinaryOperator*/,
      arg3: any /*java.util.function.Supplier*/
    ): Collector<T, java.lang.Object, M>
    static toSet<T>(): Collector<T, java.lang.Object, java.util.Set<T>>
    static toUnmodifiableList<T>(): Collector<T, java.lang.Object, java.util.List<T>>
    static toUnmodifiableMap<K, T, U>(
      arg0: any /*java.util.function.Function*/,
      arg1: any /*java.util.function.Function*/
    ): Collector<T, java.lang.Object, java.util.Map<K, U>>
    static toUnmodifiableMap<K, T, U>(
      arg0: any /*java.util.function.Function*/,
      arg1: any /*java.util.function.Function*/,
      arg2: any /*java.util.function.BinaryOperator*/
    ): Collector<T, java.lang.Object, java.util.Map<K, U>>
    static toUnmodifiableSet<T>(): Collector<T, java.lang.Object, java.util.Set<T>>
    toString(): string
  } // end Collectors
} // end namespace java.util.stream
declare namespace java.util.stream {
  interface DoubleStream /* extends BaseStream<any, any>*/ {
    // static builder(  ):any /*java.util.stream.DoubleStream$Builder*/;
    // static concat( arg0:DoubleStream, arg1:DoubleStream ):DoubleStream;
    // static empty(  ):DoubleStream;
    // static generate( arg0:any /*java.util.function.DoubleSupplier*/ ):DoubleStream;
    // static iterate( arg0:double, arg1:any /*java.util.function.DoublePredicate*/, arg2:any /*java.util.function.DoubleUnaryOperator*/ ):DoubleStream;
    // static iterate( arg0:double, arg1:any /*java.util.function.DoubleUnaryOperator*/ ):DoubleStream;
    // static of( ...arg0:double[] ):DoubleStream;
    // static of( arg0:double ):DoubleStream;
    allMatch(arg0: any /*java.util.function.DoublePredicate*/): boolean
    anyMatch(arg0: any /*java.util.function.DoublePredicate*/): boolean
    average(): java.util.OptionalDouble
    boxed(): Stream<double | null>
    close(): void
    collect<R>(
      arg0: any /*java.util.function.Supplier*/,
      arg1: any /*java.util.function.ObjDoubleConsumer*/,
      arg2: any /*java.util.function.BiConsumer*/
    ): R
    count(): long
    distinct(): DoubleStream
    dropWhile(arg0: any /*java.util.function.DoublePredicate*/): DoubleStream
    filter(arg0: any /*java.util.function.DoublePredicate*/): DoubleStream
    findAny(): java.util.OptionalDouble
    findFirst(): java.util.OptionalDouble
    flatMap(arg0: any /*java.util.function.DoubleFunction*/): DoubleStream
    forEach(arg0: any /*java.util.function.DoubleConsumer*/): void
    forEachOrdered(arg0: any /*java.util.function.DoubleConsumer*/): void
    isParallel(): boolean
    iterator(): any /*java.util.PrimitiveIterator$OfDouble*/
    limit(arg0: long): DoubleStream
    map(arg0: any /*java.util.function.DoubleUnaryOperator*/): DoubleStream
    mapToInt(arg0: any /*java.util.function.DoubleToIntFunction*/): IntStream
    mapToLong(arg0: any /*java.util.function.DoubleToLongFunction*/): LongStream
    mapToObj<U>(arg0: any /*java.util.function.DoubleFunction*/): Stream<U>
    max(): java.util.OptionalDouble
    min(): java.util.OptionalDouble
    noneMatch(arg0: any /*java.util.function.DoublePredicate*/): boolean
    onClose<S>(arg0: java.lang.Runnable): S
    parallel(): DoubleStream
    peek(arg0: any /*java.util.function.DoubleConsumer*/): DoubleStream
    reduce(arg0: any /*java.util.function.DoubleBinaryOperator*/): java.util.OptionalDouble
    reduce(arg0: double, arg1: any /*java.util.function.DoubleBinaryOperator*/): double
    sequential(): DoubleStream
    skip(arg0: long): DoubleStream
    sorted(): DoubleStream
    spliterator(): any /*java.util.Spliterator$OfDouble*/
    sum(): double
    summaryStatistics(): java.util.DoubleSummaryStatistics
    takeWhile(arg0: any /*java.util.function.DoublePredicate*/): DoubleStream
    toArray(): [double]
    unordered<S>(): S
  } // end DoubleStream
} // end namespace java.util.stream
declare namespace java.util.stream {
  interface IntStream /* extends BaseStream<any, any>*/ {
    // static builder(  ):any /*java.util.stream.IntStream$Builder*/;
    // static concat( arg0:IntStream, arg1:IntStream ):IntStream;
    // static empty(  ):IntStream;
    // static generate( arg0:any /*java.util.function.IntSupplier*/ ):IntStream;
    // static iterate( arg0:int, arg1:any /*java.util.function.IntPredicate*/, arg2:any /*java.util.function.IntUnaryOperator*/ ):IntStream;
    // static iterate( arg0:int, arg1:any /*java.util.function.IntUnaryOperator*/ ):IntStream;
    // static of( ...arg0:int[] ):IntStream;
    // static of( arg0:int ):IntStream;
    // static range( arg0:int, arg1:int ):IntStream;
    // static rangeClosed( arg0:int, arg1:int ):IntStream;
    allMatch(arg0: any /*java.util.function.IntPredicate*/): boolean
    anyMatch(arg0: any /*java.util.function.IntPredicate*/): boolean
    asDoubleStream(): DoubleStream
    asLongStream(): LongStream
    average(): java.util.OptionalDouble
    boxed(): Stream<int | null>
    close(): void
    collect<R>(
      arg0: any /*java.util.function.Supplier*/,
      arg1: any /*java.util.function.ObjIntConsumer*/,
      arg2: any /*java.util.function.BiConsumer*/
    ): R
    count(): long
    distinct(): IntStream
    dropWhile(arg0: any /*java.util.function.IntPredicate*/): IntStream
    filter(arg0: any /*java.util.function.IntPredicate*/): IntStream
    findAny(): java.util.OptionalInt
    findFirst(): java.util.OptionalInt
    flatMap(arg0: any /*java.util.function.IntFunction*/): IntStream
    forEach(arg0: any /*java.util.function.IntConsumer*/): void
    forEachOrdered(arg0: any /*java.util.function.IntConsumer*/): void
    isParallel(): boolean
    iterator(): any /*java.util.PrimitiveIterator$OfInt*/
    limit(arg0: long): IntStream
    map(arg0: any /*java.util.function.IntUnaryOperator*/): IntStream
    mapToDouble(arg0: any /*java.util.function.IntToDoubleFunction*/): DoubleStream
    mapToLong(arg0: any /*java.util.function.IntToLongFunction*/): LongStream
    mapToObj<U>(arg0: any /*java.util.function.IntFunction*/): Stream<U>
    max(): java.util.OptionalInt
    min(): java.util.OptionalInt
    noneMatch(arg0: any /*java.util.function.IntPredicate*/): boolean
    onClose<S>(arg0: java.lang.Runnable): S
    parallel(): IntStream
    peek(arg0: any /*java.util.function.IntConsumer*/): IntStream
    reduce(arg0: any /*java.util.function.IntBinaryOperator*/): java.util.OptionalInt
    reduce(arg0: int, arg1: any /*java.util.function.IntBinaryOperator*/): int
    sequential(): IntStream
    skip(arg0: long): IntStream
    sorted(): IntStream
    spliterator(): any /*java.util.Spliterator$OfInt*/
    sum(): int
    summaryStatistics(): java.util.IntSummaryStatistics
    takeWhile(arg0: any /*java.util.function.IntPredicate*/): IntStream
    toArray(): [int]
    unordered<S>(): S
  } // end IntStream
} // end namespace java.util.stream
declare namespace java.util.stream {
  interface LongStream /* extends BaseStream<any, any>*/ {
    // static builder(  ):any /*java.util.stream.LongStream$Builder*/;
    // static concat( arg0:LongStream, arg1:LongStream ):LongStream;
    // static empty(  ):LongStream;
    // static generate( arg0:any /*java.util.function.LongSupplier*/ ):LongStream;
    // static iterate( arg0:long, arg1:any /*java.util.function.LongPredicate*/, arg2:any /*java.util.function.LongUnaryOperator*/ ):LongStream;
    // static iterate( arg0:long, arg1:any /*java.util.function.LongUnaryOperator*/ ):LongStream;
    // static of( ...arg0:long[] ):LongStream;
    // static of( arg0:long ):LongStream;
    // static range( arg0:long, arg1:long ):LongStream;
    // static rangeClosed( arg0:long, arg1:long ):LongStream;
    allMatch(arg0: any /*java.util.function.LongPredicate*/): boolean
    anyMatch(arg0: any /*java.util.function.LongPredicate*/): boolean
    asDoubleStream(): DoubleStream
    average(): java.util.OptionalDouble
    boxed(): Stream<long | null>
    close(): void
    collect<R>(
      arg0: any /*java.util.function.Supplier*/,
      arg1: any /*java.util.function.ObjLongConsumer*/,
      arg2: any /*java.util.function.BiConsumer*/
    ): R
    count(): long
    distinct(): LongStream
    dropWhile(arg0: any /*java.util.function.LongPredicate*/): LongStream
    filter(arg0: any /*java.util.function.LongPredicate*/): LongStream
    findAny(): java.util.OptionalLong
    findFirst(): java.util.OptionalLong
    flatMap(arg0: any /*java.util.function.LongFunction*/): LongStream
    forEach(arg0: any /*java.util.function.LongConsumer*/): void
    forEachOrdered(arg0: any /*java.util.function.LongConsumer*/): void
    isParallel(): boolean
    iterator(): any /*java.util.PrimitiveIterator$OfLong*/
    limit(arg0: long): LongStream
    map(arg0: any /*java.util.function.LongUnaryOperator*/): LongStream
    mapToDouble(arg0: any /*java.util.function.LongToDoubleFunction*/): DoubleStream
    mapToInt(arg0: any /*java.util.function.LongToIntFunction*/): IntStream
    mapToObj<U>(arg0: any /*java.util.function.LongFunction*/): Stream<U>
    max(): java.util.OptionalLong
    min(): java.util.OptionalLong
    noneMatch(arg0: any /*java.util.function.LongPredicate*/): boolean
    onClose<S>(arg0: java.lang.Runnable): S
    parallel(): LongStream
    peek(arg0: any /*java.util.function.LongConsumer*/): LongStream
    reduce(arg0: any /*java.util.function.LongBinaryOperator*/): java.util.OptionalLong
    reduce(arg0: long, arg1: any /*java.util.function.LongBinaryOperator*/): long
    sequential(): LongStream
    skip(arg0: long): LongStream
    sorted(): LongStream
    spliterator(): any /*java.util.Spliterator$OfLong*/
    sum(): long
    summaryStatistics(): java.util.LongSummaryStatistics
    takeWhile(arg0: any /*java.util.function.LongPredicate*/): LongStream
    toArray(): [long]
    unordered<S>(): S
  } // end LongStream
} // end namespace java.util.stream
declare namespace java.util.stream {
  interface Stream<T> /* extends BaseStream<T, any>*/ {
    // static builder(  ):any /*java.util.stream.Stream$Builder*/;
    // static concat<T>( arg0:Stream<T>, arg1:Stream<T> ):Stream<T>;
    // static empty<T>(  ):Stream<T>;
    // static generate<T>( arg0:any /*java.util.function.Supplier*/ ):Stream<T>;
    // static iterate<T>( arg0:T, arg1:any /*java.util.function.Predicate*/, arg2:any /*java.util.function.UnaryOperator*/ ):Stream<T>;
    // static iterate<T>( arg0:T, arg1:any /*java.util.function.UnaryOperator*/ ):Stream<T>;
    // static of<T>( ...arg0:T[] ):Stream<T>;
    // static of<T>( arg0:T ):Stream<T>;
    // static ofNullable<T>( arg0:T ):Stream<T>;
    allMatch(arg0: any /*java.util.function.Predicate*/): boolean
    anyMatch(arg0: any /*java.util.function.Predicate*/): boolean
    close(): void
    collect<A, R>(arg0: Collector<T, A, R>): R
    collect<R>(
      arg0: any /*java.util.function.Supplier*/,
      arg1: any /*java.util.function.BiConsumer*/,
      arg2: any /*java.util.function.BiConsumer*/
    ): R
    count(): long
    distinct(): Stream<T>
    dropWhile(arg0: any /*java.util.function.Predicate*/): Stream<T>
    filter(arg0: any /*java.util.function.Predicate*/): Stream<T>
    findAny(): java.util.Optional<T>
    findFirst(): java.util.Optional<T>
    flatMap<R>(arg0: any /*java.util.function.Function*/): Stream<R>
    flatMapToDouble(arg0: any /*java.util.function.Function*/): DoubleStream
    flatMapToInt(arg0: any /*java.util.function.Function*/): IntStream
    flatMapToLong(arg0: any /*java.util.function.Function*/): LongStream
    forEach(arg0: any /*java.util.function.Consumer*/): void
    forEachOrdered(arg0: any /*java.util.function.Consumer*/): void
    isParallel(): boolean
    iterator(): java.util.Iterator<T>
    limit(arg0: long): Stream<T>
    map<R>(arg0: any /*java.util.function.Function*/): Stream<R>
    mapToDouble(arg0: any /*java.util.function.ToDoubleFunction*/): DoubleStream
    mapToInt(arg0: any /*java.util.function.ToIntFunction*/): IntStream
    mapToLong(arg0: any /*java.util.function.ToLongFunction*/): LongStream
    max(arg0: java.util.Comparator<T>): java.util.Optional<T>
    min(arg0: java.util.Comparator<T>): java.util.Optional<T>
    noneMatch(arg0: any /*java.util.function.Predicate*/): boolean
    onClose<S>(arg0: java.lang.Runnable): S
    parallel<S>(): S
    peek(arg0: any /*java.util.function.Consumer*/): Stream<T>
    reduce(arg0: T, arg1: any /*java.util.function.BinaryOperator*/): T
    reduce(arg0: any /*java.util.function.BinaryOperator*/): java.util.Optional<T>
    reduce<U>(arg0: U, arg1: any /*java.util.function.BiFunction*/, arg2: any /*java.util.function.BinaryOperator*/): U
    sequential<S>(): S
    skip(arg0: long): Stream<T>
    sorted(): Stream<T>
    sorted(arg0: java.util.Comparator<T>): Stream<T>
    spliterator(): java.util.Spliterator<T>
    takeWhile(arg0: any /*java.util.function.Predicate*/): Stream<T>
    toArray(): [java.lang.Object]
    toArray<A>(arg0: any /*java.util.function.IntFunction*/): [A]
    unordered<S>(): S
  } // end Stream
} // end namespace java.util.stream
declare namespace java.util.stream {
  class StreamSupport /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    static doubleStream(arg0: any /*java.util.Spliterator$OfDouble*/, arg1: boolean): DoubleStream
    static doubleStream(arg0: any /*java.util.function.Supplier*/, arg1: int, arg2: boolean): DoubleStream
    static intStream(arg0: any /*java.util.Spliterator$OfInt*/, arg1: boolean): IntStream
    static intStream(arg0: any /*java.util.function.Supplier*/, arg1: int, arg2: boolean): IntStream
    static longStream(arg0: any /*java.util.Spliterator$OfLong*/, arg1: boolean): LongStream
    static longStream(arg0: any /*java.util.function.Supplier*/, arg1: int, arg2: boolean): LongStream
    static stream<T>(arg0: any /*java.util.function.Supplier*/, arg1: int, arg2: boolean): Stream<T>
    static stream<T>(arg0: java.util.Spliterator<T>, arg1: boolean): Stream<T>
    toString(): string
  } // end StreamSupport
} // end namespace java.util.stream
