interface BaseStreamStatic {
  readonly class: any
}

export const BaseStream: BaseStreamStatic = Packages.java.util.stream.BaseStream

interface CollectorStatic {
  readonly class: any
  of<A, R, T>(
    arg0: any /*java.util.function.Supplier*/,
    arg1: any /*java.util.function.BiConsumer*/,
    arg2: any /*java.util.function.BinaryOperator*/,
    arg3: any /*java.util.function.Function*/,
    ...arg4: any /*java.util.stream.Collector$Characteristics*/[]
  ): java.util.stream.Collector<T, A, R>
  of<R, T>(
    arg0: any /*java.util.function.Supplier*/,
    arg1: any /*java.util.function.BiConsumer*/,
    arg2: any /*java.util.function.BinaryOperator*/,
    ...arg3: any /*java.util.stream.Collector$Characteristics*/[]
  ): java.util.stream.Collector<T, R, R>
}

export const Collector: CollectorStatic = Packages.java.util.stream.Collector

interface CollectorsStatic {
  readonly class: any
  collectingAndThen<RR, A, R, T>(
    arg0: java.util.stream.Collector<T, A, R>,
    arg1: any /*java.util.function.Function*/
  ): java.util.stream.Collector<T, A, RR>
  filtering<A, R, T>(
    arg0: any /*java.util.function.Predicate*/,
    arg1: java.util.stream.Collector<T, A, R>
  ): java.util.stream.Collector<T, java.lang.Object, R>
  toCollection<C, T>(arg0: any /*java.util.function.Supplier*/): java.util.stream.Collector<T, java.lang.Object, C>
  partitioningBy<A, T, D>(
    arg0: any /*java.util.function.Predicate*/,
    arg1: java.util.stream.Collector<T, A, D>
  ): java.util.stream.Collector<T, java.lang.Object, java.util.Map<boolean | null, D>>
  groupingByConcurrent<A, T, D, M>(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Supplier*/,
    arg2: java.util.stream.Collector<T, A, D>
  ): java.util.stream.Collector<T, java.lang.Object, M>
  groupingBy<A, K, T, D>(
    arg0: any /*java.util.function.Function*/,
    arg1: java.util.stream.Collector<T, A, D>
  ): java.util.stream.Collector<T, java.lang.Object, java.util.Map<K, D>>
  groupingByConcurrent<A, T, D>(
    arg0: any /*java.util.function.Function*/,
    arg1: java.util.stream.Collector<T, A, D>
  ): java.util.stream.Collector<T, java.lang.Object, any /*java.util.concurrent.ConcurrentMap*/>
  groupingBy<A, T, D, M>(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Supplier*/,
    arg2: java.util.stream.Collector<T, A, D>
  ): java.util.stream.Collector<T, java.lang.Object, M>
  toConcurrentMap<T, M>(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Function*/,
    arg2: any /*java.util.function.BinaryOperator*/,
    arg3: any /*java.util.function.Supplier*/
  ): java.util.stream.Collector<T, java.lang.Object, M>
  toMap<T, M>(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Function*/,
    arg2: any /*java.util.function.BinaryOperator*/,
    arg3: any /*java.util.function.Supplier*/
  ): java.util.stream.Collector<T, java.lang.Object, M>
  toMap<K, T, U>(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Function*/
  ): java.util.stream.Collector<T, java.lang.Object, java.util.Map<K, U>>
  toMap<K, T, U>(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Function*/,
    arg2: any /*java.util.function.BinaryOperator*/
  ): java.util.stream.Collector<T, java.lang.Object, java.util.Map<K, U>>
  toUnmodifiableMap<K, T, U>(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Function*/
  ): java.util.stream.Collector<T, java.lang.Object, java.util.Map<K, U>>
  toUnmodifiableMap<K, T, U>(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Function*/,
    arg2: any /*java.util.function.BinaryOperator*/
  ): java.util.stream.Collector<T, java.lang.Object, java.util.Map<K, U>>
  toConcurrentMap<T>(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Function*/
  ): java.util.stream.Collector<T, java.lang.Object, any /*java.util.concurrent.ConcurrentMap*/>
  toConcurrentMap<T>(
    arg0: any /*java.util.function.Function*/,
    arg1: any /*java.util.function.Function*/,
    arg2: any /*java.util.function.BinaryOperator*/
  ): java.util.stream.Collector<T, java.lang.Object, any /*java.util.concurrent.ConcurrentMap*/>
  groupingBy<K, T>(
    arg0: any /*java.util.function.Function*/
  ): java.util.stream.Collector<T, java.lang.Object, java.util.Map<K, java.util.List<T>>>
  groupingByConcurrent<T>(
    arg0: any /*java.util.function.Function*/
  ): java.util.stream.Collector<T, java.lang.Object, any /*java.util.concurrent.ConcurrentMap*/>
  flatMapping<A, R, T, U>(
    arg0: any /*java.util.function.Function*/,
    arg1: java.util.stream.Collector<U, A, R>
  ): java.util.stream.Collector<T, java.lang.Object, R>
  mapping<A, R, T, U>(
    arg0: any /*java.util.function.Function*/,
    arg1: java.util.stream.Collector<U, A, R>
  ): java.util.stream.Collector<T, java.lang.Object, R>
  reducing<T, U>(
    arg0: U,
    arg1: any /*java.util.function.Function*/,
    arg2: any /*java.util.function.BinaryOperator*/
  ): java.util.stream.Collector<T, java.lang.Object, U>
  reducing<T>(
    arg0: T,
    arg1: any /*java.util.function.BinaryOperator*/
  ): java.util.stream.Collector<T, java.lang.Object, T>
  averagingDouble<T>(
    arg0: any /*java.util.function.ToDoubleFunction*/
  ): java.util.stream.Collector<T, java.lang.Object, double | null>
  averagingInt<T>(
    arg0: any /*java.util.function.ToIntFunction*/
  ): java.util.stream.Collector<T, java.lang.Object, double | null>
  averagingLong<T>(
    arg0: any /*java.util.function.ToLongFunction*/
  ): java.util.stream.Collector<T, java.lang.Object, double | null>
  summingDouble<T>(
    arg0: any /*java.util.function.ToDoubleFunction*/
  ): java.util.stream.Collector<T, java.lang.Object, double | null>
  summingInt<T>(
    arg0: any /*java.util.function.ToIntFunction*/
  ): java.util.stream.Collector<T, java.lang.Object, int | null>
  counting<T>(): java.util.stream.Collector<T, java.lang.Object, long | null>
  summingLong<T>(
    arg0: any /*java.util.function.ToLongFunction*/
  ): java.util.stream.Collector<T, java.lang.Object, long | null>
  summarizingDouble<T>(
    arg0: any /*java.util.function.ToDoubleFunction*/
  ): java.util.stream.Collector<T, java.lang.Object, java.util.DoubleSummaryStatistics>
  summarizingInt<T>(
    arg0: any /*java.util.function.ToIntFunction*/
  ): java.util.stream.Collector<T, java.lang.Object, java.util.IntSummaryStatistics>
  toList<T>(): java.util.stream.Collector<T, java.lang.Object, java.util.List<T>>
  toUnmodifiableList<T>(): java.util.stream.Collector<T, java.lang.Object, java.util.List<T>>
  summarizingLong<T>(
    arg0: any /*java.util.function.ToLongFunction*/
  ): java.util.stream.Collector<T, java.lang.Object, java.util.LongSummaryStatistics>
  partitioningBy<T>(
    arg0: any /*java.util.function.Predicate*/
  ): java.util.stream.Collector<T, java.lang.Object, java.util.Map<boolean | null, java.util.List<T>>>
  maxBy<T>(arg0: java.util.Comparator<T>): java.util.stream.Collector<T, java.lang.Object, java.util.Optional<T>>
  minBy<T>(arg0: java.util.Comparator<T>): java.util.stream.Collector<T, java.lang.Object, java.util.Optional<T>>
  reducing<T>(
    arg0: any /*java.util.function.BinaryOperator*/
  ): java.util.stream.Collector<T, java.lang.Object, java.util.Optional<T>>
  toSet<T>(): java.util.stream.Collector<T, java.lang.Object, java.util.Set<T>>
  toUnmodifiableSet<T>(): java.util.stream.Collector<T, java.lang.Object, java.util.Set<T>>
  joining(): java.util.stream.Collector<java.lang.CharSequence, java.lang.Object, string>
  joining(arg0: java.lang.CharSequence): java.util.stream.Collector<java.lang.CharSequence, java.lang.Object, string>
  joining(
    arg0: java.lang.CharSequence,
    arg1: java.lang.CharSequence,
    arg2: java.lang.CharSequence
  ): java.util.stream.Collector<java.lang.CharSequence, java.lang.Object, string>
}

export const Collectors: CollectorsStatic = Packages.java.util.stream.Collectors

interface DoubleStreamStatic {
  readonly class: any
  concat(arg0: java.util.stream.DoubleStream, arg1: java.util.stream.DoubleStream): java.util.stream.DoubleStream
  empty(): java.util.stream.DoubleStream
  generate(arg0: any /*java.util.function.DoubleSupplier*/): java.util.stream.DoubleStream
  iterate(
    arg0: double,
    arg1: any /*java.util.function.DoublePredicate*/,
    arg2: any /*java.util.function.DoubleUnaryOperator*/
  ): java.util.stream.DoubleStream
  iterate(arg0: double, arg1: any /*java.util.function.DoubleUnaryOperator*/): java.util.stream.DoubleStream
  of(arg0: double): java.util.stream.DoubleStream
  of(...arg0: double[]): java.util.stream.DoubleStream
  builder(): any /*java.util.stream.DoubleStream$Builder*/
}

export const DoubleStream: DoubleStreamStatic = Packages.java.util.stream.DoubleStream

interface IntStreamStatic {
  readonly class: any
  concat(arg0: java.util.stream.IntStream, arg1: java.util.stream.IntStream): java.util.stream.IntStream
  empty(): java.util.stream.IntStream
  generate(arg0: any /*java.util.function.IntSupplier*/): java.util.stream.IntStream
  iterate(
    arg0: int,
    arg1: any /*java.util.function.IntPredicate*/,
    arg2: any /*java.util.function.IntUnaryOperator*/
  ): java.util.stream.IntStream
  iterate(arg0: int, arg1: any /*java.util.function.IntUnaryOperator*/): java.util.stream.IntStream
  of(arg0: int): java.util.stream.IntStream
  of(...arg0: int[]): java.util.stream.IntStream
  range(arg0: int, arg1: int): java.util.stream.IntStream
  rangeClosed(arg0: int, arg1: int): java.util.stream.IntStream
  builder(): any /*java.util.stream.IntStream$Builder*/
}

export const IntStream: IntStreamStatic = Packages.java.util.stream.IntStream

interface LongStreamStatic {
  readonly class: any
  concat(arg0: java.util.stream.LongStream, arg1: java.util.stream.LongStream): java.util.stream.LongStream
  empty(): java.util.stream.LongStream
  generate(arg0: any /*java.util.function.LongSupplier*/): java.util.stream.LongStream
  iterate(
    arg0: long,
    arg1: any /*java.util.function.LongPredicate*/,
    arg2: any /*java.util.function.LongUnaryOperator*/
  ): java.util.stream.LongStream
  iterate(arg0: long, arg1: any /*java.util.function.LongUnaryOperator*/): java.util.stream.LongStream
  of(arg0: long): java.util.stream.LongStream
  of(...arg0: long[]): java.util.stream.LongStream
  range(arg0: long, arg1: long): java.util.stream.LongStream
  rangeClosed(arg0: long, arg1: long): java.util.stream.LongStream
  builder(): any /*java.util.stream.LongStream$Builder*/
}

export const LongStream: LongStreamStatic = Packages.java.util.stream.LongStream

interface StreamStatic {
  readonly class: any
  builder(): any /*java.util.stream.Stream$Builder*/
  concat<T>(arg0: java.util.stream.Stream<T>, arg1: java.util.stream.Stream<T>): java.util.stream.Stream<T>
  empty<T>(): java.util.stream.Stream<T>
  generate<T>(arg0: any /*java.util.function.Supplier*/): java.util.stream.Stream<T>
  iterate<T>(
    arg0: T,
    arg1: any /*java.util.function.Predicate*/,
    arg2: any /*java.util.function.UnaryOperator*/
  ): java.util.stream.Stream<T>
  iterate<T>(arg0: T, arg1: any /*java.util.function.UnaryOperator*/): java.util.stream.Stream<T>
  of<T>(arg0: T): java.util.stream.Stream<T>
  of<T>(...arg0: T[]): java.util.stream.Stream<T>
  ofNullable<T>(arg0: T): java.util.stream.Stream<T>
}

export const Stream: StreamStatic = Packages.java.util.stream.Stream

interface StreamSupportStatic {
  readonly class: any
  stream<T>(arg0: java.util.Spliterator<T>, arg1: boolean): java.util.stream.Stream<T>
  stream<T>(arg0: any /*java.util.function.Supplier*/, arg1: int, arg2: boolean): java.util.stream.Stream<T>
  doubleStream(arg0: any /*java.util.Spliterator$OfDouble*/, arg1: boolean): java.util.stream.DoubleStream
  doubleStream(arg0: any /*java.util.function.Supplier*/, arg1: int, arg2: boolean): java.util.stream.DoubleStream
  intStream(arg0: any /*java.util.Spliterator$OfInt*/, arg1: boolean): java.util.stream.IntStream
  intStream(arg0: any /*java.util.function.Supplier*/, arg1: int, arg2: boolean): java.util.stream.IntStream
  longStream(arg0: any /*java.util.Spliterator$OfLong*/, arg1: boolean): java.util.stream.LongStream
  longStream(arg0: any /*java.util.function.Supplier*/, arg1: int, arg2: boolean): java.util.stream.LongStream
}

export const StreamSupport: StreamSupportStatic = Packages.java.util.stream.StreamSupport
