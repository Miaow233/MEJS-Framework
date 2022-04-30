declare namespace java.util {
  class AbstractCollection<E> /* extends java.lang.Object implements Collection<E>*/ {
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    clear(): void
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    isEmpty(): boolean
    iterator(): Iterator<E>
    parallelStream(): java.util.stream.Stream<E>
    remove(arg0: java.lang.Object): boolean
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    retainAll(arg0: Collection<java.lang.Object>): boolean
    size(): int
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
    toString(): string
  } // end AbstractCollection
} // end namespace java.util
declare namespace java.util {
  class AbstractList<E> /* extends AbstractCollection<E> implements List<E>*/ {
    add(arg0: E): boolean
    add(arg0: int, arg1: E): void
    addAll(arg0: Collection<E>): boolean
    addAll(arg0: int, arg1: Collection<E>): boolean
    clear(): void
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    get(arg0: int): E
    indexOf(arg0: java.lang.Object): int
    isEmpty(): boolean
    iterator(): Iterator<E>
    lastIndexOf(arg0: java.lang.Object): int
    listIterator(): ListIterator<E>
    listIterator(arg0: int): ListIterator<E>
    parallelStream(): java.util.stream.Stream<E>
    remove(arg0: java.lang.Object): boolean
    remove(arg0: int): E
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    replaceAll(arg0: any /*java.util.function.UnaryOperator*/): void
    retainAll(arg0: Collection<java.lang.Object>): boolean
    set(arg0: int, arg1: E): E
    size(): int
    sort(arg0: Comparator<E>): void
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    subList(arg0: int, arg1: int): List<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
    toString(): string
  } // end AbstractList
} // end namespace java.util
declare namespace java.util {
  class AbstractMap<K, V> /* extends java.lang.Object implements Map<K, V>*/ {
    clear(): void
    compute(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    computeIfAbsent(arg0: K, arg1: any /*java.util.function.Function*/): V
    computeIfPresent(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    containsKey(arg0: java.lang.Object): boolean
    containsValue(arg0: java.lang.Object): boolean
    entrySet(): Set<any /*java.util.Map$Entry*/>
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.BiConsumer*/): void
    get(arg0: java.lang.Object): V
    getOrDefault(arg0: java.lang.Object, arg1: V): V
    isEmpty(): boolean
    keySet(): Set<K>
    merge(arg0: K, arg1: V, arg2: any /*java.util.function.BiFunction*/): V
    put(arg0: K, arg1: V): V
    putAll(arg0: Map<K, V>): void
    putIfAbsent(arg0: K, arg1: V): V
    remove(arg0: java.lang.Object): V
    remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    replace(arg0: K, arg1: V): V
    replace(arg0: K, arg1: V, arg2: V): boolean
    replaceAll(arg0: any /*java.util.function.BiFunction*/): void
    size(): int
    toString(): string
    values(): Collection<V>
  } // end AbstractMap
} // end namespace java.util
declare namespace java.util {
  class AbstractQueue<E> /* extends AbstractCollection<E> implements Queue<E>*/ {
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    clear(): void
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    element(): E
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    isEmpty(): boolean
    iterator(): Iterator<E>
    offer(arg0: E): boolean
    parallelStream(): java.util.stream.Stream<E>
    peek(): E
    poll(): E
    remove(): E
    remove(arg0: java.lang.Object): boolean
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    retainAll(arg0: Collection<java.lang.Object>): boolean
    size(): int
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
    toString(): string
  } // end AbstractQueue
} // end namespace java.util
declare namespace java.util {
  class AbstractSequentialList<E> /* extends AbstractList<E>*/ {
    add(arg0: E): boolean
    add(arg0: int, arg1: E): void
    addAll(arg0: Collection<E>): boolean
    addAll(arg0: int, arg1: Collection<E>): boolean
    clear(): void
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    get(arg0: int): E
    indexOf(arg0: java.lang.Object): int
    isEmpty(): boolean
    iterator(): Iterator<E>
    lastIndexOf(arg0: java.lang.Object): int
    listIterator(): ListIterator<E>
    listIterator(arg0: int): ListIterator<E>
    parallelStream(): java.util.stream.Stream<E>
    remove(arg0: java.lang.Object): boolean
    remove(arg0: int): E
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    replaceAll(arg0: any /*java.util.function.UnaryOperator*/): void
    retainAll(arg0: Collection<java.lang.Object>): boolean
    set(arg0: int, arg1: E): E
    size(): int
    sort(arg0: Comparator<E>): void
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    subList(arg0: int, arg1: int): List<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
    toString(): string
  } // end AbstractSequentialList
} // end namespace java.util
declare namespace java.util {
  class AbstractSet<E> /* extends AbstractCollection<E> implements Set<E>*/ {
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    clear(): void
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    isEmpty(): boolean
    iterator(): Iterator<E>
    parallelStream(): java.util.stream.Stream<E>
    remove(arg0: java.lang.Object): boolean
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    retainAll(arg0: Collection<java.lang.Object>): boolean
    size(): int
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
    toString(): string
  } // end AbstractSet
} // end namespace java.util
declare namespace java.util {
  class ArrayDeque<
    E
  > /* extends AbstractCollection<E> implements Deque<E>, java.lang.Cloneable, java.io.Serializable*/ {
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    addFirst(arg0: E): void
    addLast(arg0: E): void
    clear(): void
    clone(): ArrayDeque<E>
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    descendingIterator(): Iterator<E>
    element(): E
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    getFirst(): E
    getLast(): E
    isEmpty(): boolean
    iterator(): Iterator<E>
    offer(arg0: E): boolean
    offerFirst(arg0: E): boolean
    offerLast(arg0: E): boolean
    parallelStream(): java.util.stream.Stream<E>
    peek(): E
    peekFirst(): E
    peekLast(): E
    poll(): E
    pollFirst(): E
    pollLast(): E
    pop(): E
    push(arg0: E): void
    remove(): E
    remove(arg0: java.lang.Object): boolean
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeFirst(): E
    removeFirstOccurrence(arg0: java.lang.Object): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    removeLast(): E
    removeLastOccurrence(arg0: java.lang.Object): boolean
    retainAll(arg0: Collection<java.lang.Object>): boolean
    size(): int
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
    toString(): string
  } // end ArrayDeque
} // end namespace java.util
declare namespace java.util {
  class ArrayList<
    E
  > /* extends AbstractList<E> implements List<E>, RandomAccess, java.lang.Cloneable, java.io.Serializable*/ {
    add(arg0: E): boolean
    add(arg0: int, arg1: E): void
    addAll(arg0: Collection<E>): boolean
    addAll(arg0: int, arg1: Collection<E>): boolean
    clear(): void
    clone(): java.lang.Object
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    ensureCapacity(arg0: int): void
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    get(arg0: int): E
    indexOf(arg0: java.lang.Object): int
    isEmpty(): boolean
    iterator(): Iterator<E>
    lastIndexOf(arg0: java.lang.Object): int
    listIterator(): ListIterator<E>
    listIterator(arg0: int): ListIterator<E>
    parallelStream(): java.util.stream.Stream<E>
    remove(arg0: java.lang.Object): boolean
    remove(arg0: int): E
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    replaceAll(arg0: any /*java.util.function.UnaryOperator*/): void
    retainAll(arg0: Collection<java.lang.Object>): boolean
    set(arg0: int, arg1: E): E
    size(): int
    sort(arg0: Comparator<E>): void
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    subList(arg0: int, arg1: int): List<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
    toString(): string
    trimToSize(): void
  } // end ArrayList
} // end namespace java.util
declare namespace java.util {
  class Arrays /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    static asList<T>(...arg0: T[]): List<T>
    static binarySearch(arg0: [java.lang.Object], arg1: java.lang.Object): int
    static binarySearch(arg0: [java.lang.Object], arg1: int, arg2: int, arg3: java.lang.Object): int
    static binarySearch(arg0: [short], arg1: short): int
    static binarySearch(arg0: [short], arg1: int, arg2: int, arg3: short): int
    static binarySearch(arg0: [double], arg1: double): int
    static binarySearch(arg0: [double], arg1: int, arg2: int, arg3: double): int
    static binarySearch(arg0: [float], arg1: float): int
    static binarySearch(arg0: [float], arg1: int, arg2: int, arg3: float): int
    static binarySearch(arg0: [int], arg1: int): int
    static binarySearch(arg0: [int], arg1: int, arg2: int, arg3: int): int
    static binarySearch(arg0: [long], arg1: int, arg2: int, arg3: long): int
    static binarySearch(arg0: [long], arg1: long): int
    static binarySearch(arg0: bytearray, arg1: byte): int
    static binarySearch(arg0: bytearray, arg1: int, arg2: int, arg3: byte): int
    static binarySearch(arg0: chararray, arg1: char): int
    static binarySearch(arg0: chararray, arg1: int, arg2: int, arg3: char): int
    static binarySearch<T>(arg0: [T], arg1: T, arg2: Comparator<T>): int
    static binarySearch<T>(arg0: [T], arg1: int, arg2: int, arg3: T, arg4: Comparator<T>): int
    static compare(arg0: [short], arg1: [short]): int
    static compare(arg0: [short], arg1: int, arg2: int, arg3: [short], arg4: int, arg5: int): int
    static compare(arg0: [boolean], arg1: [boolean]): int
    static compare(arg0: [boolean], arg1: int, arg2: int, arg3: [boolean], arg4: int, arg5: int): int
    static compare(arg0: [double], arg1: [double]): int
    static compare(arg0: [double], arg1: int, arg2: int, arg3: [double], arg4: int, arg5: int): int
    static compare(arg0: [float], arg1: [float]): int
    static compare(arg0: [float], arg1: int, arg2: int, arg3: [float], arg4: int, arg5: int): int
    static compare(arg0: [int], arg1: [int]): int
    static compare(arg0: [int], arg1: int, arg2: int, arg3: [int], arg4: int, arg5: int): int
    static compare(arg0: [long], arg1: [long]): int
    static compare(arg0: [long], arg1: int, arg2: int, arg3: [long], arg4: int, arg5: int): int
    static compare(arg0: bytearray, arg1: bytearray): int
    static compare(arg0: bytearray, arg1: int, arg2: int, arg3: bytearray, arg4: int, arg5: int): int
    static compare(arg0: chararray, arg1: chararray): int
    static compare(arg0: chararray, arg1: int, arg2: int, arg3: chararray, arg4: int, arg5: int): int
    static compare<T>(arg0: [T], arg1: [T]): int
    static compare<T>(arg0: [T], arg1: [T], arg2: Comparator<T>): int
    static compare<T>(arg0: [T], arg1: int, arg2: int, arg3: [T], arg4: int, arg5: int): int
    static compare<T>(arg0: [T], arg1: int, arg2: int, arg3: [T], arg4: int, arg5: int, arg6: Comparator<T>): int
    static compareUnsigned(arg0: [short], arg1: [short]): int
    static compareUnsigned(arg0: [short], arg1: int, arg2: int, arg3: [short], arg4: int, arg5: int): int
    static compareUnsigned(arg0: [int], arg1: [int]): int
    static compareUnsigned(arg0: [int], arg1: int, arg2: int, arg3: [int], arg4: int, arg5: int): int
    static compareUnsigned(arg0: [long], arg1: [long]): int
    static compareUnsigned(arg0: [long], arg1: int, arg2: int, arg3: [long], arg4: int, arg5: int): int
    static compareUnsigned(arg0: bytearray, arg1: bytearray): int
    static compareUnsigned(arg0: bytearray, arg1: int, arg2: int, arg3: bytearray, arg4: int, arg5: int): int
    static copyOf(arg0: [short], arg1: int): [short]
    static copyOf(arg0: [boolean], arg1: int): [boolean]
    static copyOf(arg0: [double], arg1: int): [double]
    static copyOf(arg0: [float], arg1: int): [float]
    static copyOf(arg0: [int], arg1: int): [int]
    static copyOf(arg0: [long], arg1: int): [long]
    static copyOf(arg0: bytearray, arg1: int): bytearray
    static copyOf(arg0: chararray, arg1: int): chararray
    static copyOf<T, U>(arg0: [U], arg1: int, arg2: java.lang.Class<[T]>): [T]
    static copyOf<T>(arg0: [T], arg1: int): [T]
    static copyOfRange(arg0: [short], arg1: int, arg2: int): [short]
    static copyOfRange(arg0: [boolean], arg1: int, arg2: int): [boolean]
    static copyOfRange(arg0: [double], arg1: int, arg2: int): [double]
    static copyOfRange(arg0: [float], arg1: int, arg2: int): [float]
    static copyOfRange(arg0: [int], arg1: int, arg2: int): [int]
    static copyOfRange(arg0: [long], arg1: int, arg2: int): [long]
    static copyOfRange(arg0: bytearray, arg1: int, arg2: int): bytearray
    static copyOfRange(arg0: chararray, arg1: int, arg2: int): chararray
    static copyOfRange<T, U>(arg0: [U], arg1: int, arg2: int, arg3: java.lang.Class<[T]>): [T]
    static copyOfRange<T>(arg0: [T], arg1: int, arg2: int): [T]
    static deepEquals(arg0: [java.lang.Object], arg1: [java.lang.Object]): boolean
    static deepHashCode(arg0: [java.lang.Object]): int
    static deepToString(arg0: [java.lang.Object]): string
    static equals(arg0: [java.lang.Object], arg1: [java.lang.Object]): boolean
    static equals(
      arg0: [java.lang.Object],
      arg1: int,
      arg2: int,
      arg3: [java.lang.Object],
      arg4: int,
      arg5: int
    ): boolean
    static equals(arg0: [short], arg1: [short]): boolean
    static equals(arg0: [short], arg1: int, arg2: int, arg3: [short], arg4: int, arg5: int): boolean
    static equals(arg0: [boolean], arg1: [boolean]): boolean
    static equals(arg0: [boolean], arg1: int, arg2: int, arg3: [boolean], arg4: int, arg5: int): boolean
    static equals(arg0: [double], arg1: [double]): boolean
    static equals(arg0: [double], arg1: int, arg2: int, arg3: [double], arg4: int, arg5: int): boolean
    static equals(arg0: [float], arg1: [float]): boolean
    static equals(arg0: [float], arg1: int, arg2: int, arg3: [float], arg4: int, arg5: int): boolean
    static equals(arg0: [int], arg1: [int]): boolean
    static equals(arg0: [int], arg1: int, arg2: int, arg3: [int], arg4: int, arg5: int): boolean
    static equals(arg0: [long], arg1: [long]): boolean
    static equals(arg0: [long], arg1: int, arg2: int, arg3: [long], arg4: int, arg5: int): boolean
    static equals(arg0: bytearray, arg1: bytearray): boolean
    static equals(arg0: bytearray, arg1: int, arg2: int, arg3: bytearray, arg4: int, arg5: int): boolean
    static equals(arg0: chararray, arg1: chararray): boolean
    static equals(arg0: chararray, arg1: int, arg2: int, arg3: chararray, arg4: int, arg5: int): boolean
    static equals<T>(arg0: [T], arg1: [T], arg2: Comparator<T>): boolean
    static equals<T>(arg0: [T], arg1: int, arg2: int, arg3: [T], arg4: int, arg5: int, arg6: Comparator<T>): boolean
    static fill(arg0: [java.lang.Object], arg1: java.lang.Object): void
    static fill(arg0: [java.lang.Object], arg1: int, arg2: int, arg3: java.lang.Object): void
    static fill(arg0: [short], arg1: short): void
    static fill(arg0: [short], arg1: int, arg2: int, arg3: short): void
    static fill(arg0: [boolean], arg1: boolean): void
    static fill(arg0: [boolean], arg1: int, arg2: int, arg3: boolean): void
    static fill(arg0: [double], arg1: double): void
    static fill(arg0: [double], arg1: int, arg2: int, arg3: double): void
    static fill(arg0: [float], arg1: float): void
    static fill(arg0: [float], arg1: int, arg2: int, arg3: float): void
    static fill(arg0: [int], arg1: int): void
    static fill(arg0: [int], arg1: int, arg2: int, arg3: int): void
    static fill(arg0: [long], arg1: int, arg2: int, arg3: long): void
    static fill(arg0: [long], arg1: long): void
    static fill(arg0: bytearray, arg1: byte): void
    static fill(arg0: bytearray, arg1: int, arg2: int, arg3: byte): void
    static fill(arg0: chararray, arg1: char): void
    static fill(arg0: chararray, arg1: int, arg2: int, arg3: char): void
    static mismatch(arg0: [java.lang.Object], arg1: [java.lang.Object]): int
    static mismatch(arg0: [java.lang.Object], arg1: int, arg2: int, arg3: [java.lang.Object], arg4: int, arg5: int): int
    static mismatch(arg0: [short], arg1: [short]): int
    static mismatch(arg0: [short], arg1: int, arg2: int, arg3: [short], arg4: int, arg5: int): int
    static mismatch(arg0: [boolean], arg1: [boolean]): int
    static mismatch(arg0: [boolean], arg1: int, arg2: int, arg3: [boolean], arg4: int, arg5: int): int
    static mismatch(arg0: [double], arg1: [double]): int
    static mismatch(arg0: [double], arg1: int, arg2: int, arg3: [double], arg4: int, arg5: int): int
    static mismatch(arg0: [float], arg1: [float]): int
    static mismatch(arg0: [float], arg1: int, arg2: int, arg3: [float], arg4: int, arg5: int): int
    static mismatch(arg0: [int], arg1: [int]): int
    static mismatch(arg0: [int], arg1: int, arg2: int, arg3: [int], arg4: int, arg5: int): int
    static mismatch(arg0: [long], arg1: [long]): int
    static mismatch(arg0: [long], arg1: int, arg2: int, arg3: [long], arg4: int, arg5: int): int
    static mismatch(arg0: bytearray, arg1: bytearray): int
    static mismatch(arg0: bytearray, arg1: int, arg2: int, arg3: bytearray, arg4: int, arg5: int): int
    static mismatch(arg0: chararray, arg1: chararray): int
    static mismatch(arg0: chararray, arg1: int, arg2: int, arg3: chararray, arg4: int, arg5: int): int
    static mismatch<T>(arg0: [T], arg1: [T], arg2: Comparator<T>): int
    static mismatch<T>(arg0: [T], arg1: int, arg2: int, arg3: [T], arg4: int, arg5: int, arg6: Comparator<T>): int
    static parallelPrefix(arg0: [double], arg1: any /*java.util.function.DoubleBinaryOperator*/): void
    static parallelPrefix(
      arg0: [double],
      arg1: int,
      arg2: int,
      arg3: any /*java.util.function.DoubleBinaryOperator*/
    ): void
    static parallelPrefix(arg0: [int], arg1: any /*java.util.function.IntBinaryOperator*/): void
    static parallelPrefix(arg0: [int], arg1: int, arg2: int, arg3: any /*java.util.function.IntBinaryOperator*/): void
    static parallelPrefix(arg0: [long], arg1: any /*java.util.function.LongBinaryOperator*/): void
    static parallelPrefix(arg0: [long], arg1: int, arg2: int, arg3: any /*java.util.function.LongBinaryOperator*/): void
    static parallelPrefix<T>(arg0: [T], arg1: any /*java.util.function.BinaryOperator*/): void
    static parallelPrefix<T>(arg0: [T], arg1: int, arg2: int, arg3: any /*java.util.function.BinaryOperator*/): void
    static parallelSetAll(arg0: [double], arg1: any /*java.util.function.IntToDoubleFunction*/): void
    static parallelSetAll(arg0: [int], arg1: any /*java.util.function.IntUnaryOperator*/): void
    static parallelSetAll(arg0: [long], arg1: any /*java.util.function.IntToLongFunction*/): void
    static parallelSetAll<T>(arg0: [T], arg1: any /*java.util.function.IntFunction*/): void
    static parallelSort(arg0: [short]): void
    static parallelSort(arg0: [short], arg1: int, arg2: int): void
    static parallelSort(arg0: [double]): void
    static parallelSort(arg0: [double], arg1: int, arg2: int): void
    static parallelSort(arg0: [float]): void
    static parallelSort(arg0: [float], arg1: int, arg2: int): void
    static parallelSort(arg0: [int]): void
    static parallelSort(arg0: [int], arg1: int, arg2: int): void
    static parallelSort(arg0: [long]): void
    static parallelSort(arg0: [long], arg1: int, arg2: int): void
    static parallelSort(arg0: bytearray): void
    static parallelSort(arg0: bytearray, arg1: int, arg2: int): void
    static parallelSort(arg0: chararray): void
    static parallelSort(arg0: chararray, arg1: int, arg2: int): void
    static parallelSort<T>(arg0: [T]): void
    static parallelSort<T>(arg0: [T], arg1: Comparator<T>): void
    static parallelSort<T>(arg0: [T], arg1: int, arg2: int): void
    static parallelSort<T>(arg0: [T], arg1: int, arg2: int, arg3: Comparator<T>): void
    static setAll(arg0: [double], arg1: any /*java.util.function.IntToDoubleFunction*/): void
    static setAll(arg0: [int], arg1: any /*java.util.function.IntUnaryOperator*/): void
    static setAll(arg0: [long], arg1: any /*java.util.function.IntToLongFunction*/): void
    static setAll<T>(arg0: [T], arg1: any /*java.util.function.IntFunction*/): void
    static sort(arg0: [java.lang.Object]): void
    static sort(arg0: [java.lang.Object], arg1: int, arg2: int): void
    static sort(arg0: [short]): void
    static sort(arg0: [short], arg1: int, arg2: int): void
    static sort(arg0: [double]): void
    static sort(arg0: [double], arg1: int, arg2: int): void
    static sort(arg0: [float]): void
    static sort(arg0: [float], arg1: int, arg2: int): void
    static sort(arg0: [int]): void
    static sort(arg0: [int], arg1: int, arg2: int): void
    static sort(arg0: [long]): void
    static sort(arg0: [long], arg1: int, arg2: int): void
    static sort(arg0: bytearray): void
    static sort(arg0: bytearray, arg1: int, arg2: int): void
    static sort(arg0: chararray): void
    static sort(arg0: chararray, arg1: int, arg2: int): void
    static sort<T>(arg0: [T], arg1: Comparator<T>): void
    static sort<T>(arg0: [T], arg1: int, arg2: int, arg3: Comparator<T>): void
    static spliterator(arg0: [double]): any /*java.util.Spliterator$OfDouble*/
    static spliterator(arg0: [double], arg1: int, arg2: int): any /*java.util.Spliterator$OfDouble*/
    static spliterator(arg0: [int]): any /*java.util.Spliterator$OfInt*/
    static spliterator(arg0: [int], arg1: int, arg2: int): any /*java.util.Spliterator$OfInt*/
    static spliterator(arg0: [long]): any /*java.util.Spliterator$OfLong*/
    static spliterator(arg0: [long], arg1: int, arg2: int): any /*java.util.Spliterator$OfLong*/
    static spliterator<T>(arg0: [T]): Spliterator<T>
    static spliterator<T>(arg0: [T], arg1: int, arg2: int): Spliterator<T>
    static stream(arg0: [double]): java.util.stream.DoubleStream
    static stream(arg0: [double], arg1: int, arg2: int): java.util.stream.DoubleStream
    static stream(arg0: [int]): java.util.stream.IntStream
    static stream(arg0: [int], arg1: int, arg2: int): java.util.stream.IntStream
    static stream(arg0: [long]): java.util.stream.LongStream
    static stream(arg0: [long], arg1: int, arg2: int): java.util.stream.LongStream
    static stream<T>(arg0: [T]): java.util.stream.Stream<T>
    static stream<T>(arg0: [T], arg1: int, arg2: int): java.util.stream.Stream<T>
    static toString(arg0: [java.lang.Object]): string
    static toString(arg0: [short]): string
    static toString(arg0: [boolean]): string
    static toString(arg0: [double]): string
    static toString(arg0: [float]): string
    static toString(arg0: [int]): string
    static toString(arg0: [long]): string
    static toString(arg0: bytearray): string
    static toString(arg0: chararray): string
    toString(): string
  } // end Arrays
} // end namespace java.util
declare namespace java.util {
  class Base64 /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    static getDecoder(): any /*java.util.Base64$Decoder*/
    static getEncoder(): any /*java.util.Base64$Encoder*/
    static getMimeDecoder(): any /*java.util.Base64$Decoder*/
    static getMimeEncoder(): any /*java.util.Base64$Encoder*/
    static getMimeEncoder(arg0: int, arg1: bytearray): any /*java.util.Base64$Encoder*/
    static getUrlDecoder(): any /*java.util.Base64$Decoder*/
    static getUrlEncoder(): any /*java.util.Base64$Encoder*/
    toString(): string
  } // end Base64
} // end namespace java.util
declare namespace java.util {
  class BitSet /* extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable*/ {
    and(arg0: BitSet): void
    andNot(arg0: BitSet): void
    cardinality(): int
    clear(): void
    clear(arg0: int): void
    clear(arg0: int, arg1: int): void
    clone(): java.lang.Object
    equals(arg0: java.lang.Object): boolean
    flip(arg0: int): void
    flip(arg0: int, arg1: int): void
    get(arg0: int): boolean
    get(arg0: int, arg1: int): BitSet
    intersects(arg0: BitSet): boolean
    isEmpty(): boolean
    length(): int
    nextClearBit(arg0: int): int
    nextSetBit(arg0: int): int
    or(arg0: BitSet): void
    previousClearBit(arg0: int): int
    previousSetBit(arg0: int): int
    set(arg0: int): void
    set(arg0: int, arg1: boolean): void
    set(arg0: int, arg1: int): void
    set(arg0: int, arg1: int, arg2: boolean): void
    size(): int
    static valueOf(arg0: [long]): BitSet
    static valueOf(arg0: any /*java.nio.ByteBuffer*/): BitSet
    static valueOf(arg0: any /*java.nio.LongBuffer*/): BitSet
    static valueOf(arg0: bytearray): BitSet
    stream(): java.util.stream.IntStream
    toByteArray(): bytearray
    toLongArray(): [long]
    toString(): string
    xor(arg0: BitSet): void
  } // end BitSet
} // end namespace java.util
declare namespace java.util {
  class Calendar /* extends java.lang.Object implements java.io.Serializable, java.lang.Cloneable, java.lang.Comparable<any>*/ {
    add(arg0: int, arg1: int): void
    after(arg0: java.lang.Object): boolean
    before(arg0: java.lang.Object): boolean
    clear(): void
    clear(arg0: int): void
    clone(): java.lang.Object
    compareTo(arg0: Calendar): int
    equals(arg0: java.lang.Object): boolean
    get(arg0: int): int
    getActualMaximum(arg0: int): int
    getActualMinimum(arg0: int): int
    getCalendarType(): string
    getDisplayName(arg0: int, arg1: int, arg2: Locale): string
    getDisplayNames(arg0: int, arg1: int, arg2: Locale): Map<string, int | null>
    getFirstDayOfWeek(): int
    getGreatestMinimum(arg0: int): int
    getLeastMaximum(arg0: int): int
    getMaximum(arg0: int): int
    getMinimalDaysInFirstWeek(): int
    getMinimum(arg0: int): int
    getTime(): Date
    getTimeInMillis(): long
    getTimeZone(): TimeZone
    getWeekYear(): int
    getWeeksInWeekYear(): int
    isLenient(): boolean
    isSet(arg0: int): boolean
    isWeekDateSupported(): boolean
    roll(arg0: int, arg1: boolean): void
    roll(arg0: int, arg1: int): void
    set(arg0: int, arg1: int): void
    set(arg0: int, arg1: int, arg2: int): void
    set(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
    set(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
    setFirstDayOfWeek(arg0: int): void
    setLenient(arg0: boolean): void
    setMinimalDaysInFirstWeek(arg0: int): void
    setTime(arg0: Date): void
    setTimeInMillis(arg0: long): void
    setTimeZone(arg0: TimeZone): void
    setWeekDate(arg0: int, arg1: int, arg2: int): void
    static getAvailableCalendarTypes(): Set<string>
    static getAvailableLocales(): [Locale]
    static getInstance(): Calendar
    static getInstance(arg0: Locale): Calendar
    static getInstance(arg0: TimeZone): Calendar
    static getInstance(arg0: TimeZone, arg1: Locale): Calendar
    toInstant(): any /*java.time.Instant*/
    toString(): string
  } // end Calendar
} // end namespace java.util
declare namespace java.util {
  interface Collection<E> /* extends java.lang.Iterable<E>*/ {
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    clear(): void
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    isEmpty(): boolean
    iterator(): Iterator<E>
    parallelStream(): java.util.stream.Stream<E>
    remove(arg0: java.lang.Object): boolean
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    retainAll(arg0: Collection<java.lang.Object>): boolean
    size(): int
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
  } // end Collection
} // end namespace java.util
declare namespace java.util {
  class Collections /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    static addAll<T>(arg0: Collection<T>, ...arg1: T[]): boolean
    static asLifoQueue<T>(arg0: Deque<T>): Queue<T>
    static binarySearch<T>(arg0: List<T>, arg1: T, arg2: Comparator<T>): int
    static binarySearch<T>(arg0: List<java.lang.Comparable<T>>, arg1: T): int
    static checkedCollection<E>(arg0: Collection<E>, arg1: java.lang.Class<E>): Collection<E>
    static checkedList<E>(arg0: List<E>, arg1: java.lang.Class<E>): List<E>
    static checkedMap<K, V>(arg0: Map<K, V>, arg1: java.lang.Class<K>, arg2: java.lang.Class<V>): Map<K, V>
    static checkedNavigableMap<K, V>(
      arg0: NavigableMap<K, V>,
      arg1: java.lang.Class<K>,
      arg2: java.lang.Class<V>
    ): NavigableMap<K, V>
    static checkedNavigableSet<E>(arg0: NavigableSet<E>, arg1: java.lang.Class<E>): NavigableSet<E>
    static checkedQueue<E>(arg0: Queue<E>, arg1: java.lang.Class<E>): Queue<E>
    static checkedSet<E>(arg0: Set<E>, arg1: java.lang.Class<E>): Set<E>
    static checkedSortedMap<K, V>(
      arg0: SortedMap<K, V>,
      arg1: java.lang.Class<K>,
      arg2: java.lang.Class<V>
    ): SortedMap<K, V>
    static checkedSortedSet<E>(arg0: SortedSet<E>, arg1: java.lang.Class<E>): SortedSet<E>
    static copy<T>(arg0: List<T>, arg1: List<T>): void
    static disjoint(arg0: Collection<java.lang.Object>, arg1: Collection<java.lang.Object>): boolean
    static emptyEnumeration<T>(): Enumeration<T>
    static emptyIterator<T>(): Iterator<T>
    static emptyList<T>(): List<T>
    static emptyListIterator<T>(): ListIterator<T>
    static emptyMap<K, V>(): Map<K, V>
    static emptyNavigableMap<K, V>(): NavigableMap<K, V>
    static emptyNavigableSet<E>(): NavigableSet<E>
    static emptySet<T>(): Set<T>
    static emptySortedMap<K, V>(): SortedMap<K, V>
    static emptySortedSet<E>(): SortedSet<E>
    static enumeration<T>(arg0: Collection<T>): Enumeration<T>
    static fill<T>(arg0: List<T>, arg1: T): void
    static frequency(arg0: Collection<java.lang.Object>, arg1: java.lang.Object): int
    static indexOfSubList(arg0: List<java.lang.Object>, arg1: List<java.lang.Object>): int
    static lastIndexOfSubList(arg0: List<java.lang.Object>, arg1: List<java.lang.Object>): int
    static list<T>(arg0: Enumeration<T>): ArrayList<T>
    static max<T>(arg0: Collection<T>): T
    static max<T>(arg0: Collection<T>, arg1: Comparator<T>): T
    static min<T>(arg0: Collection<T>): T
    static min<T>(arg0: Collection<T>, arg1: Comparator<T>): T
    static nCopies<T>(arg0: int, arg1: T): List<T>
    static newSetFromMap<E>(arg0: Map<E, boolean | null>): Set<E>
    static replaceAll<T>(arg0: List<T>, arg1: T, arg2: T): boolean
    static reverse(arg0: List<java.lang.Object>): void
    static reverseOrder<T>(): Comparator<T>
    static reverseOrder<T>(arg0: Comparator<T>): Comparator<T>
    static rotate(arg0: List<java.lang.Object>, arg1: int): void
    static shuffle(arg0: List<java.lang.Object>): void
    static shuffle(arg0: List<java.lang.Object>, arg1: Random): void
    static singleton<T>(arg0: T): Set<T>
    static singletonList<T>(arg0: T): List<T>
    static singletonMap<K, V>(arg0: K, arg1: V): Map<K, V>
    static sort<T>(arg0: List<T>): void
    static sort<T>(arg0: List<T>, arg1: Comparator<T>): void
    static swap(arg0: List<java.lang.Object>, arg1: int, arg2: int): void
    static synchronizedCollection<T>(arg0: Collection<T>): Collection<T>
    static synchronizedList<T>(arg0: List<T>): List<T>
    static synchronizedMap<K, V>(arg0: Map<K, V>): Map<K, V>
    static synchronizedNavigableMap<K, V>(arg0: NavigableMap<K, V>): NavigableMap<K, V>
    static synchronizedNavigableSet<T>(arg0: NavigableSet<T>): NavigableSet<T>
    static synchronizedSet<T>(arg0: Set<T>): Set<T>
    static synchronizedSortedMap<K, V>(arg0: SortedMap<K, V>): SortedMap<K, V>
    static synchronizedSortedSet<T>(arg0: SortedSet<T>): SortedSet<T>
    static unmodifiableCollection<T>(arg0: Collection<T>): Collection<T>
    static unmodifiableList<T>(arg0: List<T>): List<T>
    static unmodifiableMap<K, V>(arg0: Map<K, V>): Map<K, V>
    static unmodifiableNavigableMap<K, V>(arg0: NavigableMap<K, V>): NavigableMap<K, V>
    static unmodifiableNavigableSet<T>(arg0: NavigableSet<T>): NavigableSet<T>
    static unmodifiableSet<T>(arg0: Set<T>): Set<T>
    static unmodifiableSortedMap<K, V>(arg0: SortedMap<K, V>): SortedMap<K, V>
    static unmodifiableSortedSet<T>(arg0: SortedSet<T>): SortedSet<T>
    toString(): string
  } // end Collections
} // end namespace java.util
declare namespace java.util {
  interface Comparator<T> {
    (arg0: java.lang.Object): boolean
    // static comparing<T,U>( arg0:any /*java.util.function.Function*/, arg1:Comparator<U> ):Comparator<T>;
    // static comparing<T>( arg0:any /*java.util.function.Function*/ ):Comparator<T>;
    // static comparingDouble<T>( arg0:any /*java.util.function.ToDoubleFunction*/ ):Comparator<T>;
    // static comparingInt<T>( arg0:any /*java.util.function.ToIntFunction*/ ):Comparator<T>;
    // static comparingLong<T>( arg0:any /*java.util.function.ToLongFunction*/ ):Comparator<T>;
    // static naturalOrder<T>(  ):Comparator<T>;
    // static nullsFirst<T>( arg0:Comparator<T> ):Comparator<T>;
    // static nullsLast<T>( arg0:Comparator<T> ):Comparator<T>;
    // static reverseOrder<T>(  ):Comparator<T>;
    reversed?(): Comparator<T>
    thenComparing?(arg0: Comparator<T>): Comparator<T>
    thenComparing?(arg0: any /*java.util.function.Function*/): Comparator<T>
    thenComparing?<U>(arg0: any /*java.util.function.Function*/, arg1: Comparator<U>): Comparator<T>
    thenComparingDouble?(arg0: any /*java.util.function.ToDoubleFunction*/): Comparator<T>
    thenComparingInt?(arg0: any /*java.util.function.ToIntFunction*/): Comparator<T>
    thenComparingLong?(arg0: any /*java.util.function.ToLongFunction*/): Comparator<T>
  } // end Comparator
} // end namespace java.util
declare namespace java.util {
  class Currency /* extends java.lang.Object implements java.io.Serializable*/ {
    equals(arg0: java.lang.Object): boolean
    getCurrencyCode(): string
    getDefaultFractionDigits(): int
    getDisplayName(): string
    getDisplayName(arg0: Locale): string
    getNumericCode(): int
    getNumericCodeAsString(): string
    getSymbol(): string
    getSymbol(arg0: Locale): string
    static getAvailableCurrencies(): Set<Currency>
    static getInstance(arg0: Locale): Currency
    static getInstance(arg0: string): Currency
    toString(): string
  } // end Currency
} // end namespace java.util
declare namespace java.util {
  class Date /* extends java.lang.Object implements java.io.Serializable, java.lang.Cloneable, java.lang.Comparable<any>*/ {
    after(arg0: Date): boolean
    before(arg0: Date): boolean
    clone(): java.lang.Object
    compareTo(arg0: Date): int
    equals(arg0: java.lang.Object): boolean
    getDate(): int
    getDay(): int
    getHours(): int
    getMinutes(): int
    getMonth(): int
    getSeconds(): int
    getTime(): long
    getTimezoneOffset(): int
    getYear(): int
    setDate(arg0: int): void
    setHours(arg0: int): void
    setMinutes(arg0: int): void
    setMonth(arg0: int): void
    setSeconds(arg0: int): void
    setTime(arg0: long): void
    setYear(arg0: int): void
    static UTC(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): long
    static from(arg0: any /*java.time.Instant*/): Date
    static parse(arg0: string): long
    toGMTString(): string
    toInstant(): any /*java.time.Instant*/
    toLocaleString(): string
    toString(): string
  } // end Date
} // end namespace java.util
declare namespace java.util {
  interface Deque<E> /* extends Queue<E>*/ {
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    addFirst(arg0: E): void
    addLast(arg0: E): void
    clear(): void
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    descendingIterator(): Iterator<E>
    element(): E
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    getFirst(): E
    getLast(): E
    isEmpty(): boolean
    iterator(): Iterator<E>
    offer(arg0: E): boolean
    offerFirst(arg0: E): boolean
    offerLast(arg0: E): boolean
    parallelStream(): java.util.stream.Stream<E>
    peek(): E
    peekFirst(): E
    peekLast(): E
    poll(): E
    pollFirst(): E
    pollLast(): E
    pop(): E
    push(arg0: E): void
    remove(): E
    remove(arg0: java.lang.Object): boolean
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeFirst(): E
    removeFirstOccurrence(arg0: java.lang.Object): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    removeLast(): E
    removeLastOccurrence(arg0: java.lang.Object): boolean
    retainAll(arg0: Collection<java.lang.Object>): boolean
    size(): int
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
  } // end Deque
} // end namespace java.util
declare namespace java.util {
  class Dictionary<K, V> /* extends java.lang.Object*/ {
    elements(): Enumeration<V>
    equals(arg0: java.lang.Object): boolean
    get(arg0: java.lang.Object): V
    isEmpty(): boolean
    keys(): Enumeration<K>
    put(arg0: K, arg1: V): V
    remove(arg0: java.lang.Object): V
    size(): int
    toString(): string
  } // end Dictionary
} // end namespace java.util
declare namespace java.util {
  class DoubleSummaryStatistics /* extends java.lang.Object implements java.util.function.DoubleConsumer*/ {
    accept(arg0: double): void
    andThen(arg0: any /*java.util.function.DoubleConsumer*/): any /*java.util.function.DoubleConsumer*/
    combine(arg0: DoubleSummaryStatistics): void
    equals(arg0: java.lang.Object): boolean
    getAverage(): double
    getCount(): long
    getMax(): double
    getMin(): double
    getSum(): double
    toString(): string
  } // end DoubleSummaryStatistics
} // end namespace java.util
declare namespace java.util {
  interface Enumeration<E> {
    asIterator(): Iterator<E>
    hasMoreElements(): boolean
    nextElement(): E
  } // end Enumeration
} // end namespace java.util
declare namespace java.util {
  class EnumMap<K, V> /* extends AbstractMap<K, V> implements java.io.Serializable, java.lang.Cloneable*/ {
    clear(): void
    clone(): EnumMap<K, V>
    compute(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    computeIfAbsent(arg0: K, arg1: any /*java.util.function.Function*/): V
    computeIfPresent(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    containsKey(arg0: java.lang.Object): boolean
    containsValue(arg0: java.lang.Object): boolean
    entrySet(): Set<any /*java.util.Map$Entry*/>
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.BiConsumer*/): void
    get(arg0: java.lang.Object): V
    getOrDefault(arg0: java.lang.Object, arg1: V): V
    isEmpty(): boolean
    keySet(): Set<K>
    merge(arg0: K, arg1: V, arg2: any /*java.util.function.BiFunction*/): V
    put(arg0: K, arg1: V): V
    putAll(arg0: Map<K, V>): void
    putIfAbsent(arg0: K, arg1: V): V
    remove(arg0: java.lang.Object): V
    remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    replace(arg0: K, arg1: V): V
    replace(arg0: K, arg1: V, arg2: V): boolean
    replaceAll(arg0: any /*java.util.function.BiFunction*/): void
    size(): int
    toString(): string
    values(): Collection<V>
  } // end EnumMap
} // end namespace java.util
declare namespace java.util {
  class EnumSet<E> /* extends AbstractSet<E> implements java.lang.Cloneable, java.io.Serializable*/ {
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    clear(): void
    clone(): EnumSet<E>
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    isEmpty(): boolean
    iterator(): Iterator<E>
    parallelStream(): java.util.stream.Stream<E>
    remove(arg0: java.lang.Object): boolean
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    retainAll(arg0: Collection<java.lang.Object>): boolean
    size(): int
    spliterator(): Spliterator<E>
    static allOf<E>(arg0: java.lang.Class<E>): EnumSet<E>
    static complementOf<E>(arg0: EnumSet<E>): EnumSet<E>
    static copyOf<E>(arg0: Collection<E>): EnumSet<E>
    static copyOf<E>(arg0: EnumSet<E>): EnumSet<E>
    static noneOf<E>(arg0: java.lang.Class<E>): EnumSet<E>
    static of<E>(arg0: E): EnumSet<E>
    static of<E>(arg0: E, ...arg1: E[]): EnumSet<E>
    static of<E>(arg0: E, arg1: E): EnumSet<E>
    static of<E>(arg0: E, arg1: E, arg2: E): EnumSet<E>
    static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): EnumSet<E>
    static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): EnumSet<E>
    static range<E>(arg0: E, arg1: E): EnumSet<E>
    stream(): java.util.stream.Stream<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
    toString(): string
  } // end EnumSet
} // end namespace java.util
declare namespace java.util {
  interface EventListener {} // end EventListener
} // end namespace java.util
declare namespace java.util {
  class EventListenerProxy<T> /* extends java.lang.Object implements EventListener*/ {
    equals(arg0: java.lang.Object): boolean
    getListener(): T
    toString(): string
  } // end EventListenerProxy
} // end namespace java.util
declare namespace java.util {
  class EventObject /* extends java.lang.Object implements java.io.Serializable*/ {
    equals(arg0: java.lang.Object): boolean
    getSource(): java.lang.Object
    toString(): string
  } // end EventObject
} // end namespace java.util
declare namespace java.util {
  interface Formattable {
    formatTo(arg0: Formatter, arg1: int, arg2: int, arg3: int): void
  } // end Formattable
} // end namespace java.util
declare namespace java.util {
  class FormattableFlags /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    toString(): string
  } // end FormattableFlags
} // end namespace java.util
declare namespace java.util {
  class Formatter /* extends java.lang.Object implements java.io.Closeable, java.io.Flushable*/ {
    close(): void
    equals(arg0: java.lang.Object): boolean
    flush(): void
    format(arg0: Locale, arg1: string, ...arg2: java.lang.Object[]): Formatter
    format(arg0: string, ...arg1: java.lang.Object[]): Formatter
    ioException(): any /*java.io.IOException*/
    locale(): Locale
    out(): java.lang.Appendable
    toString(): string
  } // end Formatter
} // end namespace java.util
declare namespace java.util {
  class GregorianCalendar /* extends Calendar*/ {
    add(arg0: int, arg1: int): void
    after(arg0: java.lang.Object): boolean
    before(arg0: java.lang.Object): boolean
    clear(): void
    clear(arg0: int): void
    clone(): java.lang.Object
    compareTo(arg0: Calendar): int
    equals(arg0: java.lang.Object): boolean
    get(arg0: int): int
    getActualMaximum(arg0: int): int
    getActualMinimum(arg0: int): int
    getCalendarType(): string
    getDisplayName(arg0: int, arg1: int, arg2: Locale): string
    getDisplayNames(arg0: int, arg1: int, arg2: Locale): Map<string, int | null>
    getFirstDayOfWeek(): int
    getGreatestMinimum(arg0: int): int
    getGregorianChange(): Date
    getLeastMaximum(arg0: int): int
    getMaximum(arg0: int): int
    getMinimalDaysInFirstWeek(): int
    getMinimum(arg0: int): int
    getTime(): Date
    getTimeInMillis(): long
    getTimeZone(): TimeZone
    getWeekYear(): int
    getWeeksInWeekYear(): int
    isLeapYear(arg0: int): boolean
    isLenient(): boolean
    isSet(arg0: int): boolean
    isWeekDateSupported(): boolean
    roll(arg0: int, arg1: boolean): void
    roll(arg0: int, arg1: int): void
    set(arg0: int, arg1: int): void
    set(arg0: int, arg1: int, arg2: int): void
    set(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
    set(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
    setFirstDayOfWeek(arg0: int): void
    setGregorianChange(arg0: Date): void
    setLenient(arg0: boolean): void
    setMinimalDaysInFirstWeek(arg0: int): void
    setTime(arg0: Date): void
    setTimeInMillis(arg0: long): void
    setTimeZone(arg0: TimeZone): void
    setWeekDate(arg0: int, arg1: int, arg2: int): void
    static from(arg0: any /*java.time.ZonedDateTime*/): GregorianCalendar
    static getAvailableCalendarTypes(): Set<string>
    static getAvailableLocales(): [Locale]
    static getInstance(): Calendar
    static getInstance(arg0: Locale): Calendar
    static getInstance(arg0: TimeZone): Calendar
    static getInstance(arg0: TimeZone, arg1: Locale): Calendar
    toInstant(): any /*java.time.Instant*/
    toString(): string
    toZonedDateTime(): any /*java.time.ZonedDateTime*/
  } // end GregorianCalendar
} // end namespace java.util
declare namespace java.util {
  class HashMap<K, V> /* extends AbstractMap<K, V> implements Map<K, V>, java.lang.Cloneable, java.io.Serializable*/ {
    clear(): void
    clone(): java.lang.Object
    compute(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    computeIfAbsent(arg0: K, arg1: any /*java.util.function.Function*/): V
    computeIfPresent(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    containsKey(arg0: java.lang.Object): boolean
    containsValue(arg0: java.lang.Object): boolean
    entrySet(): Set<any /*java.util.Map$Entry*/>
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.BiConsumer*/): void
    get(arg0: java.lang.Object): V
    getOrDefault(arg0: java.lang.Object, arg1: V): V
    isEmpty(): boolean
    keySet(): Set<K>
    merge(arg0: K, arg1: V, arg2: any /*java.util.function.BiFunction*/): V
    put(arg0: K, arg1: V): V
    putAll(arg0: Map<K, V>): void
    putIfAbsent(arg0: K, arg1: V): V
    remove(arg0: java.lang.Object): V
    remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    replace(arg0: K, arg1: V): V
    replace(arg0: K, arg1: V, arg2: V): boolean
    replaceAll(arg0: any /*java.util.function.BiFunction*/): void
    size(): int
    toString(): string
    values(): Collection<V>
  } // end HashMap
} // end namespace java.util
declare namespace java.util {
  class HashSet<E> /* extends AbstractSet<E> implements Set<E>, java.lang.Cloneable, java.io.Serializable*/ {
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    clear(): void
    clone(): java.lang.Object
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    isEmpty(): boolean
    iterator(): Iterator<E>
    parallelStream(): java.util.stream.Stream<E>
    remove(arg0: java.lang.Object): boolean
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    retainAll(arg0: Collection<java.lang.Object>): boolean
    size(): int
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
    toString(): string
  } // end HashSet
} // end namespace java.util
declare namespace java.util {
  class Hashtable<K, V> /* extends Dictionary<K, V> implements Map<K, V>, java.lang.Cloneable, java.io.Serializable*/ {
    clear(): void
    clone(): java.lang.Object
    compute(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    computeIfAbsent(arg0: K, arg1: any /*java.util.function.Function*/): V
    computeIfPresent(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    contains(arg0: java.lang.Object): boolean
    containsKey(arg0: java.lang.Object): boolean
    containsValue(arg0: java.lang.Object): boolean
    elements(): Enumeration<V>
    entrySet(): Set<any /*java.util.Map$Entry*/>
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.BiConsumer*/): void
    get(arg0: java.lang.Object): V
    getOrDefault(arg0: java.lang.Object, arg1: V): V
    isEmpty(): boolean
    keySet(): Set<K>
    keys(): Enumeration<K>
    merge(arg0: K, arg1: V, arg2: any /*java.util.function.BiFunction*/): V
    put(arg0: K, arg1: V): V
    putAll(arg0: Map<K, V>): void
    putIfAbsent(arg0: K, arg1: V): V
    remove(arg0: java.lang.Object): V
    remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    replace(arg0: K, arg1: V): V
    replace(arg0: K, arg1: V, arg2: V): boolean
    replaceAll(arg0: any /*java.util.function.BiFunction*/): void
    size(): int
    toString(): string
    values(): Collection<V>
  } // end Hashtable
} // end namespace java.util
declare namespace java.util {
  class IdentityHashMap<
    K,
    V
  > /* extends AbstractMap<K, V> implements Map<K, V>, java.io.Serializable, java.lang.Cloneable*/ {
    clear(): void
    clone(): java.lang.Object
    compute(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    computeIfAbsent(arg0: K, arg1: any /*java.util.function.Function*/): V
    computeIfPresent(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    containsKey(arg0: java.lang.Object): boolean
    containsValue(arg0: java.lang.Object): boolean
    entrySet(): Set<any /*java.util.Map$Entry*/>
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.BiConsumer*/): void
    get(arg0: java.lang.Object): V
    getOrDefault(arg0: java.lang.Object, arg1: V): V
    isEmpty(): boolean
    keySet(): Set<K>
    merge(arg0: K, arg1: V, arg2: any /*java.util.function.BiFunction*/): V
    put(arg0: K, arg1: V): V
    putAll(arg0: Map<K, V>): void
    putIfAbsent(arg0: K, arg1: V): V
    remove(arg0: java.lang.Object): V
    remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    replace(arg0: K, arg1: V): V
    replace(arg0: K, arg1: V, arg2: V): boolean
    replaceAll(arg0: any /*java.util.function.BiFunction*/): void
    size(): int
    toString(): string
    values(): Collection<V>
  } // end IdentityHashMap
} // end namespace java.util
declare namespace java.util {
  class IntSummaryStatistics /* extends java.lang.Object implements java.util.function.IntConsumer*/ {
    accept(arg0: int): void
    andThen(arg0: any /*java.util.function.IntConsumer*/): any /*java.util.function.IntConsumer*/
    combine(arg0: IntSummaryStatistics): void
    equals(arg0: java.lang.Object): boolean
    getAverage(): double
    getCount(): long
    getMax(): int
    getMin(): int
    getSum(): long
    toString(): string
  } // end IntSummaryStatistics
} // end namespace java.util
declare namespace java.util {
  interface Iterator<E> {
    forEachRemaining(arg0: any /*java.util.function.Consumer*/): void
    hasNext(): boolean
    next(): E
    remove(): void
  } // end Iterator
} // end namespace java.util
declare namespace java.util {
  class LinkedHashMap<K, V> /* extends HashMap<K, V> implements Map<K, V>*/ {
    clear(): void
    clone(): java.lang.Object
    compute(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    computeIfAbsent(arg0: K, arg1: any /*java.util.function.Function*/): V
    computeIfPresent(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    containsKey(arg0: java.lang.Object): boolean
    containsValue(arg0: java.lang.Object): boolean
    entrySet(): Set<any /*java.util.Map$Entry*/>
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.BiConsumer*/): void
    get(arg0: java.lang.Object): V
    getOrDefault(arg0: java.lang.Object, arg1: V): V
    isEmpty(): boolean
    keySet(): Set<K>
    merge(arg0: K, arg1: V, arg2: any /*java.util.function.BiFunction*/): V
    put(arg0: K, arg1: V): V
    putAll(arg0: Map<K, V>): void
    putIfAbsent(arg0: K, arg1: V): V
    remove(arg0: java.lang.Object): V
    remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    replace(arg0: K, arg1: V): V
    replace(arg0: K, arg1: V, arg2: V): boolean
    replaceAll(arg0: any /*java.util.function.BiFunction*/): void
    size(): int
    toString(): string
    values(): Collection<V>
  } // end LinkedHashMap
} // end namespace java.util
declare namespace java.util {
  class LinkedHashSet<E> /* extends HashSet<E> implements Set<E>, java.lang.Cloneable, java.io.Serializable*/ {
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    clear(): void
    clone(): java.lang.Object
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    isEmpty(): boolean
    iterator(): Iterator<E>
    parallelStream(): java.util.stream.Stream<E>
    remove(arg0: java.lang.Object): boolean
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    retainAll(arg0: Collection<java.lang.Object>): boolean
    size(): int
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
    toString(): string
  } // end LinkedHashSet
} // end namespace java.util
declare namespace java.util {
  class LinkedList<
    E
  > /* extends AbstractSequentialList<E> implements List<E>, Deque<E>, java.lang.Cloneable, java.io.Serializable*/ {
    add(arg0: E): boolean
    add(arg0: int, arg1: E): void
    addAll(arg0: Collection<E>): boolean
    addAll(arg0: int, arg1: Collection<E>): boolean
    addFirst(arg0: E): void
    addLast(arg0: E): void
    clear(): void
    clone(): java.lang.Object
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    descendingIterator(): Iterator<E>
    element(): E
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    get(arg0: int): E
    getFirst(): E
    getLast(): E
    indexOf(arg0: java.lang.Object): int
    isEmpty(): boolean
    iterator(): Iterator<E>
    lastIndexOf(arg0: java.lang.Object): int
    listIterator(): ListIterator<E>
    listIterator(arg0: int): ListIterator<E>
    offer(arg0: E): boolean
    offerFirst(arg0: E): boolean
    offerLast(arg0: E): boolean
    parallelStream(): java.util.stream.Stream<E>
    peek(): E
    peekFirst(): E
    peekLast(): E
    poll(): E
    pollFirst(): E
    pollLast(): E
    pop(): E
    push(arg0: E): void
    remove(): E
    remove(arg0: java.lang.Object): boolean
    remove(arg0: int): E
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeFirst(): E
    removeFirstOccurrence(arg0: java.lang.Object): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    removeLast(): E
    removeLastOccurrence(arg0: java.lang.Object): boolean
    replaceAll(arg0: any /*java.util.function.UnaryOperator*/): void
    retainAll(arg0: Collection<java.lang.Object>): boolean
    set(arg0: int, arg1: E): E
    size(): int
    sort(arg0: Comparator<E>): void
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    subList(arg0: int, arg1: int): List<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
    toString(): string
  } // end LinkedList
} // end namespace java.util
declare namespace java.util {
  interface List<E> /* extends Collection<E>*/ {
    // static copyOf<E>( arg0:Collection<E> ):List<E>;
    // static of<E>(  ):List<E>;
    // static of<E>( ...arg0:E[] ):List<E>;
    // static of<E>( arg0:E ):List<E>;
    // static of<E>( arg0:E, arg1:E ):List<E>;
    // static of<E>( arg0:E, arg1:E, arg2:E ):List<E>;
    // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E ):List<E>;
    // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E ):List<E>;
    // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E ):List<E>;
    // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E ):List<E>;
    // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E ):List<E>;
    // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E, arg8:E ):List<E>;
    // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E, arg8:E, arg9:E ):List<E>;
    add(arg0: E): boolean
    add(arg0: int, arg1: E): void
    addAll(arg0: Collection<E>): boolean
    addAll(arg0: int, arg1: Collection<E>): boolean
    clear(): void
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    get(arg0: int): E
    indexOf(arg0: java.lang.Object): int
    isEmpty(): boolean
    iterator(): Iterator<E>
    lastIndexOf(arg0: java.lang.Object): int
    listIterator(): ListIterator<E>
    listIterator(arg0: int): ListIterator<E>
    parallelStream(): java.util.stream.Stream<E>
    remove(arg0: java.lang.Object): boolean
    remove(arg0: int): E
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    replaceAll(arg0: any /*java.util.function.UnaryOperator*/): void
    retainAll(arg0: Collection<java.lang.Object>): boolean
    set(arg0: int, arg1: E): E
    size(): int
    sort(arg0: Comparator<E>): void
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    subList(arg0: int, arg1: int): List<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
  } // end List
} // end namespace java.util
declare namespace java.util {
  interface ListIterator<E> /* extends Iterator<E>*/ {
    add(arg0: E): void
    forEachRemaining(arg0: any /*java.util.function.Consumer*/): void
    hasNext(): boolean
    hasPrevious(): boolean
    next(): E
    nextIndex(): int
    previous(): E
    previousIndex(): int
    remove(): void
    set(arg0: E): void
  } // end ListIterator
} // end namespace java.util
declare namespace java.util {
  class ListResourceBundle /* extends ResourceBundle*/ {
    containsKey(arg0: string): boolean
    equals(arg0: java.lang.Object): boolean
    getBaseBundleName(): string
    getKeys(): Enumeration<string>
    getLocale(): Locale
    getObject(arg0: string): java.lang.Object
    getString(arg0: string): string
    getStringArray(arg0: string): [string]
    handleGetObject(arg0: string): java.lang.Object
    keySet(): Set<string>
    static clearCache(): void
    static clearCache(arg0: java.lang.ClassLoader): void
    static getBundle(arg0: string): ResourceBundle
    static getBundle(arg0: string, arg1: Locale): ResourceBundle
    static getBundle(arg0: string, arg1: Locale, arg2: any /*java.lang.Module*/): ResourceBundle
    static getBundle(arg0: string, arg1: Locale, arg2: any /*java.util.ResourceBundle$Control*/): ResourceBundle
    static getBundle(arg0: string, arg1: Locale, arg2: java.lang.ClassLoader): ResourceBundle
    static getBundle(
      arg0: string,
      arg1: Locale,
      arg2: java.lang.ClassLoader,
      arg3: any /*java.util.ResourceBundle$Control*/
    ): ResourceBundle
    static getBundle(arg0: string, arg1: any /*java.lang.Module*/): ResourceBundle
    static getBundle(arg0: string, arg1: any /*java.util.ResourceBundle$Control*/): ResourceBundle
    toString(): string
  } // end ListResourceBundle
} // end namespace java.util
declare namespace java.util {
  class Locale /* extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable*/ {
    clone(): java.lang.Object
    equals(arg0: java.lang.Object): boolean
    getCountry(): string
    getDisplayCountry(): string
    getDisplayCountry(arg0: Locale): string
    getDisplayLanguage(): string
    getDisplayLanguage(arg0: Locale): string
    getDisplayName(): string
    getDisplayName(arg0: Locale): string
    getDisplayScript(): string
    getDisplayScript(arg0: Locale): string
    getDisplayVariant(): string
    getDisplayVariant(arg0: Locale): string
    getExtension(arg0: char): string
    getExtensionKeys(): Set<java.lang.Character>
    getISO3Country(): string
    getISO3Language(): string
    getLanguage(): string
    getScript(): string
    getUnicodeLocaleAttributes(): Set<string>
    getUnicodeLocaleKeys(): Set<string>
    getUnicodeLocaleType(arg0: string): string
    getVariant(): string
    hasExtensions(): boolean
    static filter(arg0: List<any /*java.util.Locale$LanguageRange*/>, arg1: Collection<Locale>): List<Locale>
    static filter(
      arg0: List<any /*java.util.Locale$LanguageRange*/>,
      arg1: Collection<Locale>,
      arg2: any /*java.util.Locale$FilteringMode*/
    ): List<Locale>
    static filterTags(arg0: List<any /*java.util.Locale$LanguageRange*/>, arg1: Collection<string>): List<string>
    static filterTags(
      arg0: List<any /*java.util.Locale$LanguageRange*/>,
      arg1: Collection<string>,
      arg2: any /*java.util.Locale$FilteringMode*/
    ): List<string>
    static forLanguageTag(arg0: string): Locale
    static getAvailableLocales(): [Locale]
    static getDefault(): Locale
    static getDefault(arg0: any /*java.util.Locale$Category*/): Locale
    static getISOCountries(): [string]
    static getISOCountries(arg0: any /*java.util.Locale$IsoCountryCode*/): Set<string>
    static getISOLanguages(): [string]
    static lookup(arg0: List<any /*java.util.Locale$LanguageRange*/>, arg1: Collection<Locale>): Locale
    static lookupTag(arg0: List<any /*java.util.Locale$LanguageRange*/>, arg1: Collection<string>): string
    static setDefault(arg0: Locale): void
    static setDefault(arg0: any /*java.util.Locale$Category*/, arg1: Locale): void
    stripExtensions(): Locale
    toLanguageTag(): string
    toString(): string
  } // end Locale
} // end namespace java.util
declare namespace java.util {
  class LongSummaryStatistics /* extends java.lang.Object implements java.util.function.LongConsumer, java.util.function.IntConsumer*/ {
    accept(arg0: int): void
    accept(arg0: long): void
    andThen(arg0: any /*java.util.function.IntConsumer*/): any /*java.util.function.IntConsumer*/
    andThen(arg0: any /*java.util.function.LongConsumer*/): any /*java.util.function.LongConsumer*/
    combine(arg0: LongSummaryStatistics): void
    equals(arg0: java.lang.Object): boolean
    getAverage(): double
    getCount(): long
    getMax(): long
    getMin(): long
    getSum(): long
    toString(): string
  } // end LongSummaryStatistics
} // end namespace java.util
declare namespace java.util {
  interface Map<K, V> {
    // static copyOf<K,V>( arg0:Map<K, V> ):Map<K, V>;
    // static entry<K,V>( arg0:K, arg1:V ):any /*java.util.Map$Entry*/;
    // static of<K,V>(  ):Map<K, V>;
    // static of<K,V>( arg0:K, arg1:V ):Map<K, V>;
    // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V ):Map<K, V>;
    // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V ):Map<K, V>;
    // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V ):Map<K, V>;
    // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V ):Map<K, V>;
    // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V, arg10:K, arg11:V ):Map<K, V>;
    // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V, arg10:K, arg11:V, arg12:K, arg13:V ):Map<K, V>;
    // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V, arg10:K, arg11:V, arg12:K, arg13:V, arg14:K, arg15:V ):Map<K, V>;
    // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V, arg10:K, arg11:V, arg12:K, arg13:V, arg14:K, arg15:V, arg16:K, arg17:V ):Map<K, V>;
    // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V, arg10:K, arg11:V, arg12:K, arg13:V, arg14:K, arg15:V, arg16:K, arg17:V, arg18:K, arg19:V ):Map<K, V>;
    // static ofEntries<K,V>( ...arg0:any /*java.util.Map$Entry*/[] ):Map<K, V>;
    clear(): void
    compute(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    computeIfAbsent(arg0: K, arg1: any /*java.util.function.Function*/): V
    computeIfPresent(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    containsKey(arg0: java.lang.Object): boolean
    containsValue(arg0: java.lang.Object): boolean
    entrySet(): Set<any /*java.util.Map$Entry*/>
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.BiConsumer*/): void
    get(arg0: java.lang.Object): V
    getOrDefault(arg0: java.lang.Object, arg1: V): V
    isEmpty(): boolean
    keySet(): Set<K>
    merge(arg0: K, arg1: V, arg2: any /*java.util.function.BiFunction*/): V
    put(arg0: K, arg1: V): V
    putAll(arg0: Map<K, V>): void
    putIfAbsent(arg0: K, arg1: V): V
    remove(arg0: java.lang.Object): V
    remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    replace(arg0: K, arg1: V): V
    replace(arg0: K, arg1: V, arg2: V): boolean
    replaceAll(arg0: any /*java.util.function.BiFunction*/): void
    size(): int
    values(): Collection<V>
  } // end Map
} // end namespace java.util
declare namespace java.util {
  interface NavigableMap<K, V> /* extends SortedMap<K, V>*/ {
    ceilingEntry(arg0: K): any /*java.util.Map$Entry*/
    ceilingKey(arg0: K): K
    clear(): void
    comparator(): Comparator<K>
    compute(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    computeIfAbsent(arg0: K, arg1: any /*java.util.function.Function*/): V
    computeIfPresent(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    containsKey(arg0: java.lang.Object): boolean
    containsValue(arg0: java.lang.Object): boolean
    descendingKeySet(): NavigableSet<K>
    descendingMap(): NavigableMap<K, V>
    entrySet(): Set<any /*java.util.Map$Entry*/>
    equals(arg0: java.lang.Object): boolean
    firstEntry(): any /*java.util.Map$Entry*/
    firstKey(): K
    floorEntry(arg0: K): any /*java.util.Map$Entry*/
    floorKey(arg0: K): K
    forEach(arg0: any /*java.util.function.BiConsumer*/): void
    get(arg0: java.lang.Object): V
    getOrDefault(arg0: java.lang.Object, arg1: V): V
    headMap(arg0: K): SortedMap<K, V>
    headMap(arg0: K, arg1: boolean): NavigableMap<K, V>
    higherEntry(arg0: K): any /*java.util.Map$Entry*/
    higherKey(arg0: K): K
    isEmpty(): boolean
    keySet(): Set<K>
    lastEntry(): any /*java.util.Map$Entry*/
    lastKey(): K
    lowerEntry(arg0: K): any /*java.util.Map$Entry*/
    lowerKey(arg0: K): K
    merge(arg0: K, arg1: V, arg2: any /*java.util.function.BiFunction*/): V
    navigableKeySet(): NavigableSet<K>
    pollFirstEntry(): any /*java.util.Map$Entry*/
    pollLastEntry(): any /*java.util.Map$Entry*/
    put(arg0: K, arg1: V): V
    putAll(arg0: Map<K, V>): void
    putIfAbsent(arg0: K, arg1: V): V
    remove(arg0: java.lang.Object): V
    remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    replace(arg0: K, arg1: V): V
    replace(arg0: K, arg1: V, arg2: V): boolean
    replaceAll(arg0: any /*java.util.function.BiFunction*/): void
    size(): int
    subMap(arg0: K, arg1: K): SortedMap<K, V>
    subMap(arg0: K, arg1: boolean, arg2: K, arg3: boolean): NavigableMap<K, V>
    tailMap(arg0: K): SortedMap<K, V>
    tailMap(arg0: K, arg1: boolean): NavigableMap<K, V>
    values(): Collection<V>
  } // end NavigableMap
} // end namespace java.util
declare namespace java.util {
  interface NavigableSet<E> /* extends SortedSet<E>*/ {
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    ceiling(arg0: E): E
    clear(): void
    comparator(): Comparator<E>
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    descendingIterator(): Iterator<E>
    descendingSet(): NavigableSet<E>
    equals(arg0: java.lang.Object): boolean
    first(): E
    floor(arg0: E): E
    forEach(arg0: any /*java.util.function.Consumer*/): void
    headSet(arg0: E): SortedSet<E>
    headSet(arg0: E, arg1: boolean): NavigableSet<E>
    higher(arg0: E): E
    isEmpty(): boolean
    iterator(): Iterator<E>
    last(): E
    lower(arg0: E): E
    parallelStream(): java.util.stream.Stream<E>
    pollFirst(): E
    pollLast(): E
    remove(arg0: java.lang.Object): boolean
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    retainAll(arg0: Collection<java.lang.Object>): boolean
    size(): int
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    subSet(arg0: E, arg1: E): SortedSet<E>
    subSet(arg0: E, arg1: boolean, arg2: E, arg3: boolean): NavigableSet<E>
    tailSet(arg0: E): SortedSet<E>
    tailSet(arg0: E, arg1: boolean): NavigableSet<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
  } // end NavigableSet
} // end namespace java.util
declare namespace java.util {
  class Objects /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    static checkFromIndexSize(arg0: int, arg1: int, arg2: int): int
    static checkFromToIndex(arg0: int, arg1: int, arg2: int): int
    static checkIndex(arg0: int, arg1: int): int
    static compare<T>(arg0: T, arg1: T, arg2: Comparator<T>): int
    static deepEquals(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    static equals(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    static hash(...arg0: java.lang.Object[]): int
    static isNull(arg0: java.lang.Object): boolean
    static nonNull(arg0: java.lang.Object): boolean
    static requireNonNull<T>(arg0: T): T
    static requireNonNull<T>(arg0: T, arg1: any /*java.util.function.Supplier*/): T
    static requireNonNull<T>(arg0: T, arg1: string): T
    static requireNonNullElse<T>(arg0: T, arg1: T): T
    static requireNonNullElseGet<T>(arg0: T, arg1: any /*java.util.function.Supplier*/): T
    static toString(arg0: java.lang.Object): string
    static toString(arg0: java.lang.Object, arg1: string): string
    toString(): string
  } // end Objects
} // end namespace java.util
declare namespace java.util {
  class Observable /* extends java.lang.Object*/ {
    addObserver(arg0: Observer): void
    countObservers(): int
    deleteObserver(arg0: Observer): void
    deleteObservers(): void
    equals(arg0: java.lang.Object): boolean
    hasChanged(): boolean
    notifyObservers(): void
    notifyObservers(arg0: java.lang.Object): void
    toString(): string
  } // end Observable
} // end namespace java.util
declare namespace java.util {
  interface Observer {
    update(arg0: Observable, arg1: java.lang.Object): void
  } // end Observer
} // end namespace java.util
declare namespace java.util {
  class Optional<T> /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    filter(arg0: any /*java.util.function.Predicate*/): Optional<T>
    flatMap<U>(arg0: any /*java.util.function.Function*/): Optional<U>
    get(): T
    ifPresent(arg0: any /*java.util.function.Consumer*/): void
    ifPresentOrElse(arg0: any /*java.util.function.Consumer*/, arg1: java.lang.Runnable): void
    isEmpty(): boolean
    isPresent(): boolean
    map<U>(arg0: any /*java.util.function.Function*/): Optional<U>
    or(arg0: any /*java.util.function.Supplier*/): Optional<T>
    orElse(arg0: T): T
    orElseGet(arg0: any /*java.util.function.Supplier*/): T
    orElseThrow(): T
    orElseThrow(arg0: any /*java.util.function.Supplier*/): T
    static empty<T>(): Optional<T>
    static of<T>(arg0: T): Optional<T>
    static ofNullable<T>(arg0: T): Optional<T>
    stream(): java.util.stream.Stream<T>
    toString(): string
  } // end Optional
} // end namespace java.util
declare namespace java.util {
  class OptionalDouble /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    getAsDouble(): double
    ifPresent(arg0: any /*java.util.function.DoubleConsumer*/): void
    ifPresentOrElse(arg0: any /*java.util.function.DoubleConsumer*/, arg1: java.lang.Runnable): void
    isEmpty(): boolean
    isPresent(): boolean
    orElse(arg0: double): double
    orElseGet(arg0: any /*java.util.function.DoubleSupplier*/): double
    orElseThrow(): double
    orElseThrow(arg0: any /*java.util.function.Supplier*/): double
    static empty(): OptionalDouble
    static of(arg0: double): OptionalDouble
    stream(): java.util.stream.DoubleStream
    toString(): string
  } // end OptionalDouble
} // end namespace java.util
declare namespace java.util {
  class OptionalInt /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    getAsInt(): int
    ifPresent(arg0: any /*java.util.function.IntConsumer*/): void
    ifPresentOrElse(arg0: any /*java.util.function.IntConsumer*/, arg1: java.lang.Runnable): void
    isEmpty(): boolean
    isPresent(): boolean
    orElse(arg0: int): int
    orElseGet(arg0: any /*java.util.function.IntSupplier*/): int
    orElseThrow(): int
    orElseThrow(arg0: any /*java.util.function.Supplier*/): int
    static empty(): OptionalInt
    static of(arg0: int): OptionalInt
    stream(): java.util.stream.IntStream
    toString(): string
  } // end OptionalInt
} // end namespace java.util
declare namespace java.util {
  class OptionalLong /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    getAsLong(): long
    ifPresent(arg0: any /*java.util.function.LongConsumer*/): void
    ifPresentOrElse(arg0: any /*java.util.function.LongConsumer*/, arg1: java.lang.Runnable): void
    isEmpty(): boolean
    isPresent(): boolean
    orElse(arg0: long): long
    orElseGet(arg0: any /*java.util.function.LongSupplier*/): long
    orElseThrow(): long
    orElseThrow(arg0: any /*java.util.function.Supplier*/): long
    static empty(): OptionalLong
    static of(arg0: long): OptionalLong
    stream(): java.util.stream.LongStream
    toString(): string
  } // end OptionalLong
} // end namespace java.util
declare namespace java.util {
  interface PrimitiveIterator<T, T_CONS> /* extends Iterator<any>*/ {
    forEachRemaining(arg0: T_CONS): void
    forEachRemaining(arg0: any /*java.util.function.Consumer*/): void
    hasNext(): boolean
    next<E>(): E
    remove(): void
  } // end PrimitiveIterator
} // end namespace java.util
declare namespace java.util {
  class PriorityQueue<E> /* extends AbstractQueue<E> implements java.io.Serializable*/ {
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    clear(): void
    comparator(): Comparator<E>
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    element(): E
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    isEmpty(): boolean
    iterator(): Iterator<E>
    offer(arg0: E): boolean
    parallelStream(): java.util.stream.Stream<E>
    peek(): E
    poll(): E
    remove(): E
    remove(arg0: java.lang.Object): boolean
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    retainAll(arg0: Collection<java.lang.Object>): boolean
    size(): int
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
    toString(): string
  } // end PriorityQueue
} // end namespace java.util
declare namespace java.util {
  class Properties /* extends Hashtable<any, any>*/ {
    clear(): void
    clone(): java.lang.Object
    compute(arg0: java.lang.Object, arg1: any /*java.util.function.BiFunction*/): java.lang.Object
    computeIfAbsent(arg0: java.lang.Object, arg1: any /*java.util.function.Function*/): java.lang.Object
    computeIfPresent(arg0: java.lang.Object, arg1: any /*java.util.function.BiFunction*/): java.lang.Object
    contains(arg0: java.lang.Object): boolean
    containsKey(arg0: java.lang.Object): boolean
    containsValue(arg0: java.lang.Object): boolean
    elements(): Enumeration<java.lang.Object>
    entrySet(): Set<any /*java.util.Map$Entry*/>
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.BiConsumer*/): void
    get(arg0: java.lang.Object): java.lang.Object
    getOrDefault(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    getProperty(arg0: string): string
    getProperty(arg0: string, arg1: string): string
    isEmpty(): boolean
    keySet(): Set<java.lang.Object>
    keys(): Enumeration<java.lang.Object>
    list(arg0: java.io.PrintStream): void
    list(arg0: java.io.PrintWriter): void
    load(arg0: java.io.InputStream): void
    load(arg0: java.io.Reader): void
    loadFromXML(arg0: java.io.InputStream): void
    merge(arg0: java.lang.Object, arg1: java.lang.Object, arg2: any /*java.util.function.BiFunction*/): java.lang.Object
    propertyNames(): Enumeration<java.lang.Object>
    put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    putAll(arg0: Map<java.lang.Object, java.lang.Object>): void
    putIfAbsent(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    remove(arg0: java.lang.Object): java.lang.Object
    remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    replace(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    replace(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): boolean
    replaceAll(arg0: any /*java.util.function.BiFunction*/): void
    save(arg0: java.io.OutputStream, arg1: string): void
    setProperty(arg0: string, arg1: string): java.lang.Object
    size(): int
    store(arg0: java.io.OutputStream, arg1: string): void
    store(arg0: java.io.Writer, arg1: string): void
    storeToXML(arg0: java.io.OutputStream, arg1: string): void
    storeToXML(arg0: java.io.OutputStream, arg1: string, arg2: any /*java.nio.charset.Charset*/): void
    storeToXML(arg0: java.io.OutputStream, arg1: string, arg2: string): void
    stringPropertyNames(): Set<string>
    toString(): string
    values(): Collection<java.lang.Object>
  } // end Properties
} // end namespace java.util
declare namespace java.util {
  class PropertyPermission /* extends java.security.BasicPermission*/ {
    checkGuard(arg0: java.lang.Object): void
    equals(arg0: java.lang.Object): boolean
    getActions(): string
    getName(): string
    implies(arg0: any /*java.security.Permission*/): boolean
    newPermissionCollection(): any /*java.security.PermissionCollection*/
    toString(): string
  } // end PropertyPermission
} // end namespace java.util
declare namespace java.util {
  class PropertyResourceBundle /* extends ResourceBundle*/ {
    containsKey(arg0: string): boolean
    equals(arg0: java.lang.Object): boolean
    getBaseBundleName(): string
    getKeys(): Enumeration<string>
    getLocale(): Locale
    getObject(arg0: string): java.lang.Object
    getString(arg0: string): string
    getStringArray(arg0: string): [string]
    handleGetObject(arg0: string): java.lang.Object
    keySet(): Set<string>
    static clearCache(): void
    static clearCache(arg0: java.lang.ClassLoader): void
    static getBundle(arg0: string): ResourceBundle
    static getBundle(arg0: string, arg1: Locale): ResourceBundle
    static getBundle(arg0: string, arg1: Locale, arg2: any /*java.lang.Module*/): ResourceBundle
    static getBundle(arg0: string, arg1: Locale, arg2: any /*java.util.ResourceBundle$Control*/): ResourceBundle
    static getBundle(arg0: string, arg1: Locale, arg2: java.lang.ClassLoader): ResourceBundle
    static getBundle(
      arg0: string,
      arg1: Locale,
      arg2: java.lang.ClassLoader,
      arg3: any /*java.util.ResourceBundle$Control*/
    ): ResourceBundle
    static getBundle(arg0: string, arg1: any /*java.lang.Module*/): ResourceBundle
    static getBundle(arg0: string, arg1: any /*java.util.ResourceBundle$Control*/): ResourceBundle
    toString(): string
  } // end PropertyResourceBundle
} // end namespace java.util
declare namespace java.util {
  interface Queue<E> /* extends Collection<E>*/ {
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    clear(): void
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    element(): E
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    isEmpty(): boolean
    iterator(): Iterator<E>
    offer(arg0: E): boolean
    parallelStream(): java.util.stream.Stream<E>
    peek(): E
    poll(): E
    remove(): E
    remove(arg0: java.lang.Object): boolean
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    retainAll(arg0: Collection<java.lang.Object>): boolean
    size(): int
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
  } // end Queue
} // end namespace java.util
declare namespace java.util {
  class Random /* extends java.lang.Object implements java.io.Serializable*/ {
    doubles(): java.util.stream.DoubleStream
    doubles(arg0: double, arg1: double): java.util.stream.DoubleStream
    doubles(arg0: long): java.util.stream.DoubleStream
    doubles(arg0: long, arg1: double, arg2: double): java.util.stream.DoubleStream
    equals(arg0: java.lang.Object): boolean
    ints(): java.util.stream.IntStream
    ints(arg0: int, arg1: int): java.util.stream.IntStream
    ints(arg0: long): java.util.stream.IntStream
    ints(arg0: long, arg1: int, arg2: int): java.util.stream.IntStream
    longs(): java.util.stream.LongStream
    longs(arg0: long): java.util.stream.LongStream
    longs(arg0: long, arg1: long): java.util.stream.LongStream
    longs(arg0: long, arg1: long, arg2: long): java.util.stream.LongStream
    nextBoolean(): boolean
    nextBytes(arg0: bytearray): void
    nextDouble(): double
    nextFloat(): float
    nextGaussian(): double
    nextInt(): int
    nextInt(arg0: int): int
    nextLong(): long
    setSeed(arg0: long): void
    toString(): string
  } // end Random
} // end namespace java.util
declare namespace java.util {
  interface RandomAccess {} // end RandomAccess
} // end namespace java.util
declare namespace java.util {
  class ResourceBundle /* extends java.lang.Object*/ {
    containsKey(arg0: string): boolean
    equals(arg0: java.lang.Object): boolean
    getBaseBundleName(): string
    getKeys(): Enumeration<string>
    getLocale(): Locale
    getObject(arg0: string): java.lang.Object
    getString(arg0: string): string
    getStringArray(arg0: string): [string]
    keySet(): Set<string>
    static clearCache(): void
    static clearCache(arg0: java.lang.ClassLoader): void
    static getBundle(arg0: string): ResourceBundle
    static getBundle(arg0: string, arg1: Locale): ResourceBundle
    static getBundle(arg0: string, arg1: Locale, arg2: any /*java.lang.Module*/): ResourceBundle
    static getBundle(arg0: string, arg1: Locale, arg2: any /*java.util.ResourceBundle$Control*/): ResourceBundle
    static getBundle(arg0: string, arg1: Locale, arg2: java.lang.ClassLoader): ResourceBundle
    static getBundle(
      arg0: string,
      arg1: Locale,
      arg2: java.lang.ClassLoader,
      arg3: any /*java.util.ResourceBundle$Control*/
    ): ResourceBundle
    static getBundle(arg0: string, arg1: any /*java.lang.Module*/): ResourceBundle
    static getBundle(arg0: string, arg1: any /*java.util.ResourceBundle$Control*/): ResourceBundle
    toString(): string
  } // end ResourceBundle
} // end namespace java.util
declare namespace java.util {
  class Scanner /* extends java.lang.Object implements Iterator<any>, java.io.Closeable*/ {
    close(): void
    delimiter(): any /*java.util.regex.Pattern*/
    equals(arg0: java.lang.Object): boolean
    findAll(arg0: any /*java.util.regex.Pattern*/): java.util.stream.Stream<any /*java.util.regex.MatchResult*/>
    findAll(arg0: string): java.util.stream.Stream<any /*java.util.regex.MatchResult*/>
    findInLine(arg0: any /*java.util.regex.Pattern*/): string
    findInLine(arg0: string): string
    findWithinHorizon(arg0: any /*java.util.regex.Pattern*/, arg1: int): string
    findWithinHorizon(arg0: string, arg1: int): string
    forEachRemaining(arg0: any /*java.util.function.Consumer*/): void
    hasNext(): boolean
    hasNext(arg0: any /*java.util.regex.Pattern*/): boolean
    hasNext(arg0: string): boolean
    hasNextBigDecimal(): boolean
    hasNextBigInteger(): boolean
    hasNextBigInteger(arg0: int): boolean
    hasNextBoolean(): boolean
    hasNextByte(): boolean
    hasNextByte(arg0: int): boolean
    hasNextDouble(): boolean
    hasNextFloat(): boolean
    hasNextInt(): boolean
    hasNextInt(arg0: int): boolean
    hasNextLine(): boolean
    hasNextLong(): boolean
    hasNextLong(arg0: int): boolean
    hasNextShort(): boolean
    hasNextShort(arg0: int): boolean
    ioException(): any /*java.io.IOException*/
    locale(): Locale
    match(): any /*java.util.regex.MatchResult*/
    next(): string
    next(arg0: any /*java.util.regex.Pattern*/): string
    next(arg0: string): string
    nextBigDecimal(): any /*java.math.BigDecimal*/
    nextBigInteger(): any /*java.math.BigInteger*/
    nextBigInteger(arg0: int): any /*java.math.BigInteger*/
    nextBoolean(): boolean
    nextByte(): byte
    nextByte(arg0: int): byte
    nextDouble(): double
    nextFloat(): float
    nextInt(): int
    nextInt(arg0: int): int
    nextLine(): string
    nextLong(): long
    nextLong(arg0: int): long
    nextShort(): short
    nextShort(arg0: int): short
    radix(): int
    remove(): void
    reset(): Scanner
    skip(arg0: any /*java.util.regex.Pattern*/): Scanner
    skip(arg0: string): Scanner
    toString(): string
    tokens(): java.util.stream.Stream<string>
    useDelimiter(arg0: any /*java.util.regex.Pattern*/): Scanner
    useDelimiter(arg0: string): Scanner
    useLocale(arg0: Locale): Scanner
    useRadix(arg0: int): Scanner
  } // end Scanner
} // end namespace java.util
declare namespace java.util {
  class ServiceLoader<S> /* extends java.lang.Object implements java.lang.Iterable<S>*/ {
    equals(arg0: java.lang.Object): boolean
    findFirst(): Optional<S>
    forEach(arg0: any /*java.util.function.Consumer*/): void
    iterator(): Iterator<S>
    reload(): void
    spliterator<T>(): Spliterator<T>
    static load<S>(arg0: any /*java.lang.ModuleLayer*/, arg1: java.lang.Class<S>): ServiceLoader<S>
    static load<S>(arg0: java.lang.Class<S>): ServiceLoader<S>
    static load<S>(arg0: java.lang.Class<S>, arg1: java.lang.ClassLoader): ServiceLoader<S>
    static loadInstalled<S>(arg0: java.lang.Class<S>): ServiceLoader<S>
    stream(): java.util.stream.Stream<any /*java.util.ServiceLoader$Provider*/>
    toString(): string
  } // end ServiceLoader
} // end namespace java.util
declare namespace java.util {
  interface Set<E> /* extends Collection<E>*/ {
    // static copyOf<E>( arg0:Collection<E> ):Set<E>;
    // static of<E>(  ):Set<E>;
    // static of<E>( ...arg0:E[] ):Set<E>;
    // static of<E>( arg0:E ):Set<E>;
    // static of<E>( arg0:E, arg1:E ):Set<E>;
    // static of<E>( arg0:E, arg1:E, arg2:E ):Set<E>;
    // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E ):Set<E>;
    // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E ):Set<E>;
    // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E ):Set<E>;
    // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E ):Set<E>;
    // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E ):Set<E>;
    // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E, arg8:E ):Set<E>;
    // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E, arg8:E, arg9:E ):Set<E>;
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    clear(): void
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.Consumer*/): void
    isEmpty(): boolean
    iterator(): Iterator<E>
    parallelStream(): java.util.stream.Stream<E>
    remove(arg0: java.lang.Object): boolean
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    retainAll(arg0: Collection<java.lang.Object>): boolean
    size(): int
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
  } // end Set
} // end namespace java.util
declare namespace java.util {
  class SimpleTimeZone /* extends TimeZone*/ {
    clone(): java.lang.Object
    equals(arg0: java.lang.Object): boolean
    getDSTSavings(): int
    getDisplayName(): string
    getDisplayName(arg0: Locale): string
    getDisplayName(arg0: boolean, arg1: int): string
    getDisplayName(arg0: boolean, arg1: int, arg2: Locale): string
    getID(): string
    getOffset(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): int
    getOffset(arg0: long): int
    getRawOffset(): int
    hasSameRules(arg0: TimeZone): boolean
    inDaylightTime(arg0: Date): boolean
    observesDaylightTime(): boolean
    setDSTSavings(arg0: int): void
    setEndRule(arg0: int, arg1: int, arg2: int): void
    setEndRule(arg0: int, arg1: int, arg2: int, arg3: int): void
    setEndRule(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean): void
    setID(arg0: string): void
    setRawOffset(arg0: int): void
    setStartRule(arg0: int, arg1: int, arg2: int): void
    setStartRule(arg0: int, arg1: int, arg2: int, arg3: int): void
    setStartRule(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean): void
    setStartYear(arg0: int): void
    static getAvailableIDs(): [string]
    static getAvailableIDs(arg0: int): [string]
    static getDefault(): TimeZone
    static getTimeZone(arg0: any /*java.time.ZoneId*/): TimeZone
    static getTimeZone(arg0: string): TimeZone
    static setDefault(arg0: TimeZone): void
    toString(): string
    toZoneId(): any /*java.time.ZoneId*/
    useDaylightTime(): boolean
  } // end SimpleTimeZone
} // end namespace java.util
declare namespace java.util {
  interface SortedMap<K, V> /* extends Map<K, V>*/ {
    clear(): void
    comparator(): Comparator<K>
    compute(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    computeIfAbsent(arg0: K, arg1: any /*java.util.function.Function*/): V
    computeIfPresent(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    containsKey(arg0: java.lang.Object): boolean
    containsValue(arg0: java.lang.Object): boolean
    entrySet(): Set<any /*java.util.Map$Entry*/>
    equals(arg0: java.lang.Object): boolean
    firstKey(): K
    forEach(arg0: any /*java.util.function.BiConsumer*/): void
    get(arg0: java.lang.Object): V
    getOrDefault(arg0: java.lang.Object, arg1: V): V
    headMap(arg0: K): SortedMap<K, V>
    isEmpty(): boolean
    keySet(): Set<K>
    lastKey(): K
    merge(arg0: K, arg1: V, arg2: any /*java.util.function.BiFunction*/): V
    put(arg0: K, arg1: V): V
    putAll(arg0: Map<K, V>): void
    putIfAbsent(arg0: K, arg1: V): V
    remove(arg0: java.lang.Object): V
    remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    replace(arg0: K, arg1: V): V
    replace(arg0: K, arg1: V, arg2: V): boolean
    replaceAll(arg0: any /*java.util.function.BiFunction*/): void
    size(): int
    subMap(arg0: K, arg1: K): SortedMap<K, V>
    tailMap(arg0: K): SortedMap<K, V>
    values(): Collection<V>
  } // end SortedMap
} // end namespace java.util
declare namespace java.util {
  interface SortedSet<E> /* extends Set<E>*/ {
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    clear(): void
    comparator(): Comparator<E>
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    equals(arg0: java.lang.Object): boolean
    first(): E
    forEach(arg0: any /*java.util.function.Consumer*/): void
    headSet(arg0: E): SortedSet<E>
    isEmpty(): boolean
    iterator(): Iterator<E>
    last(): E
    parallelStream(): java.util.stream.Stream<E>
    remove(arg0: java.lang.Object): boolean
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    retainAll(arg0: Collection<java.lang.Object>): boolean
    size(): int
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    subSet(arg0: E, arg1: E): SortedSet<E>
    tailSet(arg0: E): SortedSet<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
  } // end SortedSet
} // end namespace java.util
declare namespace java.util {
  interface Spliterator<T> {
    characteristics(): int
    estimateSize(): long
    forEachRemaining(arg0: any /*java.util.function.Consumer*/): void
    getComparator(): Comparator<T>
    getExactSizeIfKnown(): long
    hasCharacteristics(arg0: int): boolean
    tryAdvance(arg0: any /*java.util.function.Consumer*/): boolean
    trySplit(): Spliterator<T>
  } // end Spliterator
} // end namespace java.util
declare namespace java.util {
  class Spliterators /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    static emptyDoubleSpliterator(): any /*java.util.Spliterator$OfDouble*/
    static emptyIntSpliterator(): any /*java.util.Spliterator$OfInt*/
    static emptyLongSpliterator(): any /*java.util.Spliterator$OfLong*/
    static emptySpliterator<T>(): Spliterator<T>
    static iterator(arg0: any /*java.util.Spliterator$OfDouble*/): any /*java.util.PrimitiveIterator$OfDouble*/
    static iterator(arg0: any /*java.util.Spliterator$OfInt*/): any /*java.util.PrimitiveIterator$OfInt*/
    static iterator(arg0: any /*java.util.Spliterator$OfLong*/): any /*java.util.PrimitiveIterator$OfLong*/
    static iterator<T>(arg0: Spliterator<T>): Iterator<T>
    static spliterator(arg0: [double], arg1: int): any /*java.util.Spliterator$OfDouble*/
    static spliterator(arg0: [double], arg1: int, arg2: int, arg3: int): any /*java.util.Spliterator$OfDouble*/
    static spliterator(arg0: [int], arg1: int): any /*java.util.Spliterator$OfInt*/
    static spliterator(arg0: [int], arg1: int, arg2: int, arg3: int): any /*java.util.Spliterator$OfInt*/
    static spliterator(arg0: [long], arg1: int): any /*java.util.Spliterator$OfLong*/
    static spliterator(arg0: [long], arg1: int, arg2: int, arg3: int): any /*java.util.Spliterator$OfLong*/
    static spliterator(
      arg0: any /*java.util.PrimitiveIterator$OfDouble*/,
      arg1: long,
      arg2: int
    ): any /*java.util.Spliterator$OfDouble*/
    static spliterator(
      arg0: any /*java.util.PrimitiveIterator$OfInt*/,
      arg1: long,
      arg2: int
    ): any /*java.util.Spliterator$OfInt*/
    static spliterator(
      arg0: any /*java.util.PrimitiveIterator$OfLong*/,
      arg1: long,
      arg2: int
    ): any /*java.util.Spliterator$OfLong*/
    static spliterator<T>(arg0: Collection<T>, arg1: int): Spliterator<T>
    static spliterator<T>(arg0: Iterator<T>, arg1: long, arg2: int): Spliterator<T>
    static spliterator<T>(arg0: [java.lang.Object], arg1: int): Spliterator<T>
    static spliterator<T>(arg0: [java.lang.Object], arg1: int, arg2: int, arg3: int): Spliterator<T>
    static spliteratorUnknownSize(
      arg0: any /*java.util.PrimitiveIterator$OfDouble*/,
      arg1: int
    ): any /*java.util.Spliterator$OfDouble*/
    static spliteratorUnknownSize(
      arg0: any /*java.util.PrimitiveIterator$OfInt*/,
      arg1: int
    ): any /*java.util.Spliterator$OfInt*/
    static spliteratorUnknownSize(
      arg0: any /*java.util.PrimitiveIterator$OfLong*/,
      arg1: int
    ): any /*java.util.Spliterator$OfLong*/
    static spliteratorUnknownSize<T>(arg0: Iterator<T>, arg1: int): Spliterator<T>
    toString(): string
  } // end Spliterators
} // end namespace java.util
declare namespace java.util {
  class SplittableRandom /* extends java.lang.Object*/ {
    doubles(): java.util.stream.DoubleStream
    doubles(arg0: double, arg1: double): java.util.stream.DoubleStream
    doubles(arg0: long): java.util.stream.DoubleStream
    doubles(arg0: long, arg1: double, arg2: double): java.util.stream.DoubleStream
    equals(arg0: java.lang.Object): boolean
    ints(): java.util.stream.IntStream
    ints(arg0: int, arg1: int): java.util.stream.IntStream
    ints(arg0: long): java.util.stream.IntStream
    ints(arg0: long, arg1: int, arg2: int): java.util.stream.IntStream
    longs(): java.util.stream.LongStream
    longs(arg0: long): java.util.stream.LongStream
    longs(arg0: long, arg1: long): java.util.stream.LongStream
    longs(arg0: long, arg1: long, arg2: long): java.util.stream.LongStream
    nextBoolean(): boolean
    nextBytes(arg0: bytearray): void
    nextDouble(): double
    nextDouble(arg0: double): double
    nextDouble(arg0: double, arg1: double): double
    nextInt(): int
    nextInt(arg0: int): int
    nextInt(arg0: int, arg1: int): int
    nextLong(): long
    nextLong(arg0: long): long
    nextLong(arg0: long, arg1: long): long
    split(): SplittableRandom
    toString(): string
  } // end SplittableRandom
} // end namespace java.util
declare namespace java.util {
  class Stack<E> /* extends Vector<E>*/ {
    add(arg0: E): boolean
    add(arg0: int, arg1: E): void
    addAll(arg0: Collection<E>): boolean
    addAll(arg0: int, arg1: Collection<E>): boolean
    addElement(arg0: E): void
    capacity(): int
    clear(): void
    clone(): java.lang.Object
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    copyInto(arg0: [java.lang.Object]): void
    elementAt(arg0: int): E
    elements(): Enumeration<E>
    empty(): boolean
    ensureCapacity(arg0: int): void
    equals(arg0: java.lang.Object): boolean
    firstElement(): E
    forEach(arg0: any /*java.util.function.Consumer*/): void
    get(arg0: int): E
    indexOf(arg0: java.lang.Object): int
    indexOf(arg0: java.lang.Object, arg1: int): int
    insertElementAt(arg0: E, arg1: int): void
    isEmpty(): boolean
    iterator(): Iterator<E>
    lastElement(): E
    lastIndexOf(arg0: java.lang.Object): int
    lastIndexOf(arg0: java.lang.Object, arg1: int): int
    listIterator(): ListIterator<E>
    listIterator(arg0: int): ListIterator<E>
    parallelStream(): java.util.stream.Stream<E>
    peek(): E
    pop(): E
    push(arg0: E): E
    remove(arg0: java.lang.Object): boolean
    remove(arg0: int): E
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeAllElements(): void
    removeElement(arg0: java.lang.Object): boolean
    removeElementAt(arg0: int): void
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    replaceAll(arg0: any /*java.util.function.UnaryOperator*/): void
    retainAll(arg0: Collection<java.lang.Object>): boolean
    search(arg0: java.lang.Object): int
    set(arg0: int, arg1: E): E
    setElementAt(arg0: E, arg1: int): void
    setSize(arg0: int): void
    size(): int
    sort(arg0: Comparator<E>): void
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    subList(arg0: int, arg1: int): List<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
    toString(): string
    trimToSize(): void
  } // end Stack
} // end namespace java.util

declare namespace java.util {
  class StringJoiner /* extends java.lang.Object*/ {
    add(arg0: java.lang.CharSequence): StringJoiner
    equals(arg0: java.lang.Object): boolean
    length(): int
    merge(arg0: StringJoiner): StringJoiner
    setEmptyValue(arg0: java.lang.CharSequence): StringJoiner
    toString(): string
  } // end StringJoiner
} // end namespace java.util
declare namespace java.util {
  class StringTokenizer /* extends java.lang.Object implements Enumeration<any>*/ {
    asIterator<E>(): Iterator<E>
    countTokens(): int
    equals(arg0: java.lang.Object): boolean
    hasMoreElements(): boolean
    hasMoreTokens(): boolean
    nextElement(): java.lang.Object
    nextToken(): string
    nextToken(arg0: string): string
    toString(): string
  } // end StringTokenizer
} // end namespace java.util
declare namespace java.util {
  class Timer /* extends java.lang.Object*/ {
    cancel(): void
    equals(arg0: java.lang.Object): boolean
    purge(): int
    schedule(arg0: TimerTask, arg1: Date): void
    schedule(arg0: TimerTask, arg1: Date, arg2: long): void
    schedule(arg0: TimerTask, arg1: long): void
    schedule(arg0: TimerTask, arg1: long, arg2: long): void
    scheduleAtFixedRate(arg0: TimerTask, arg1: Date, arg2: long): void
    scheduleAtFixedRate(arg0: TimerTask, arg1: long, arg2: long): void
    toString(): string
  } // end Timer
} // end namespace java.util
declare namespace java.util {
  class TimerTask /* extends java.lang.Object implements java.lang.Runnable*/ {
    cancel(): boolean
    equals(arg0: java.lang.Object): boolean
    run(): void
    scheduledExecutionTime(): long
    toString(): string
  } // end TimerTask
} // end namespace java.util
declare namespace java.util {
  class TimeZone /* extends java.lang.Object implements java.io.Serializable, java.lang.Cloneable*/ {
    clone(): java.lang.Object
    equals(arg0: java.lang.Object): boolean
    getDSTSavings(): int
    getDisplayName(): string
    getDisplayName(arg0: Locale): string
    getDisplayName(arg0: boolean, arg1: int): string
    getDisplayName(arg0: boolean, arg1: int, arg2: Locale): string
    getID(): string
    getOffset(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): int
    getOffset(arg0: long): int
    getRawOffset(): int
    hasSameRules(arg0: TimeZone): boolean
    inDaylightTime(arg0: Date): boolean
    observesDaylightTime(): boolean
    setID(arg0: string): void
    setRawOffset(arg0: int): void
    static getAvailableIDs(): [string]
    static getAvailableIDs(arg0: int): [string]
    static getDefault(): TimeZone
    static getTimeZone(arg0: any /*java.time.ZoneId*/): TimeZone
    static getTimeZone(arg0: string): TimeZone
    static setDefault(arg0: TimeZone): void
    toString(): string
    toZoneId(): any /*java.time.ZoneId*/
    useDaylightTime(): boolean
  } // end TimeZone
} // end namespace java.util
declare namespace java.util {
  class TreeMap<
    K,
    V
  > /* extends AbstractMap<K, V> implements NavigableMap<K, V>, java.lang.Cloneable, java.io.Serializable*/ {
    ceilingEntry(arg0: K): any /*java.util.Map$Entry*/
    ceilingKey(arg0: K): K
    clear(): void
    clone(): java.lang.Object
    comparator(): Comparator<K>
    compute(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    computeIfAbsent(arg0: K, arg1: any /*java.util.function.Function*/): V
    computeIfPresent(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    containsKey(arg0: java.lang.Object): boolean
    containsValue(arg0: java.lang.Object): boolean
    descendingKeySet(): NavigableSet<K>
    descendingMap(): NavigableMap<K, V>
    entrySet(): Set<any /*java.util.Map$Entry*/>
    equals(arg0: java.lang.Object): boolean
    firstEntry(): any /*java.util.Map$Entry*/
    firstKey(): K
    floorEntry(arg0: K): any /*java.util.Map$Entry*/
    floorKey(arg0: K): K
    forEach(arg0: any /*java.util.function.BiConsumer*/): void
    get(arg0: java.lang.Object): V
    getOrDefault(arg0: java.lang.Object, arg1: V): V
    headMap(arg0: K): SortedMap<K, V>
    headMap(arg0: K, arg1: boolean): NavigableMap<K, V>
    higherEntry(arg0: K): any /*java.util.Map$Entry*/
    higherKey(arg0: K): K
    isEmpty(): boolean
    keySet(): Set<K>
    lastEntry(): any /*java.util.Map$Entry*/
    lastKey(): K
    lowerEntry(arg0: K): any /*java.util.Map$Entry*/
    lowerKey(arg0: K): K
    merge(arg0: K, arg1: V, arg2: any /*java.util.function.BiFunction*/): V
    navigableKeySet(): NavigableSet<K>
    pollFirstEntry(): any /*java.util.Map$Entry*/
    pollLastEntry(): any /*java.util.Map$Entry*/
    put(arg0: K, arg1: V): V
    putAll(arg0: Map<K, V>): void
    putIfAbsent(arg0: K, arg1: V): V
    remove(arg0: java.lang.Object): V
    remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    replace(arg0: K, arg1: V): V
    replace(arg0: K, arg1: V, arg2: V): boolean
    replaceAll(arg0: any /*java.util.function.BiFunction*/): void
    size(): int
    subMap(arg0: K, arg1: K): SortedMap<K, V>
    subMap(arg0: K, arg1: boolean, arg2: K, arg3: boolean): NavigableMap<K, V>
    tailMap(arg0: K): SortedMap<K, V>
    tailMap(arg0: K, arg1: boolean): NavigableMap<K, V>
    toString(): string
    values(): Collection<V>
  } // end TreeMap
} // end namespace java.util
declare namespace java.util {
  class TreeSet<E> /* extends AbstractSet<E> implements NavigableSet<E>, java.lang.Cloneable, java.io.Serializable*/ {
    add(arg0: E): boolean
    addAll(arg0: Collection<E>): boolean
    ceiling(arg0: E): E
    clear(): void
    clone(): java.lang.Object
    comparator(): Comparator<E>
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    descendingIterator(): Iterator<E>
    descendingSet(): NavigableSet<E>
    equals(arg0: java.lang.Object): boolean
    first(): E
    floor(arg0: E): E
    forEach(arg0: any /*java.util.function.Consumer*/): void
    headSet(arg0: E): SortedSet<E>
    headSet(arg0: E, arg1: boolean): NavigableSet<E>
    higher(arg0: E): E
    isEmpty(): boolean
    iterator(): Iterator<E>
    last(): E
    lower(arg0: E): E
    parallelStream(): java.util.stream.Stream<E>
    pollFirst(): E
    pollLast(): E
    remove(arg0: java.lang.Object): boolean
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    retainAll(arg0: Collection<java.lang.Object>): boolean
    size(): int
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    subSet(arg0: E, arg1: E): SortedSet<E>
    subSet(arg0: E, arg1: boolean, arg2: E, arg3: boolean): NavigableSet<E>
    tailSet(arg0: E): SortedSet<E>
    tailSet(arg0: E, arg1: boolean): NavigableSet<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
    toString(): string
  } // end TreeSet
} // end namespace java.util
declare namespace java.util {
  class UUID /* extends java.lang.Object implements java.io.Serializable, java.lang.Comparable<any>*/ {
    clockSequence(): int
    compareTo(arg0: UUID): int
    equals(arg0: java.lang.Object): boolean
    getLeastSignificantBits(): long
    getMostSignificantBits(): long
    node(): long
    static fromString(arg0: string): UUID
    static nameUUIDFromBytes(arg0: bytearray): UUID
    static randomUUID(): UUID
    timestamp(): long
    toString(): string
    variant(): int
    version(): int
  } // end UUID
} // end namespace java.util
declare namespace java.util {
  class Vector<
    E
  > /* extends AbstractList<E> implements List<E>, RandomAccess, java.lang.Cloneable, java.io.Serializable*/ {
    add(arg0: E): boolean
    add(arg0: int, arg1: E): void
    addAll(arg0: Collection<E>): boolean
    addAll(arg0: int, arg1: Collection<E>): boolean
    addElement(arg0: E): void
    capacity(): int
    clear(): void
    clone(): java.lang.Object
    contains(arg0: java.lang.Object): boolean
    containsAll(arg0: Collection<java.lang.Object>): boolean
    copyInto(arg0: [java.lang.Object]): void
    elementAt(arg0: int): E
    elements(): Enumeration<E>
    ensureCapacity(arg0: int): void
    equals(arg0: java.lang.Object): boolean
    firstElement(): E
    forEach(arg0: any /*java.util.function.Consumer*/): void
    get(arg0: int): E
    indexOf(arg0: java.lang.Object): int
    indexOf(arg0: java.lang.Object, arg1: int): int
    insertElementAt(arg0: E, arg1: int): void
    isEmpty(): boolean
    iterator(): Iterator<E>
    lastElement(): E
    lastIndexOf(arg0: java.lang.Object): int
    lastIndexOf(arg0: java.lang.Object, arg1: int): int
    listIterator(): ListIterator<E>
    listIterator(arg0: int): ListIterator<E>
    parallelStream(): java.util.stream.Stream<E>
    remove(arg0: java.lang.Object): boolean
    remove(arg0: int): E
    removeAll(arg0: Collection<java.lang.Object>): boolean
    removeAllElements(): void
    removeElement(arg0: java.lang.Object): boolean
    removeElementAt(arg0: int): void
    removeIf(arg0: any /*java.util.function.Predicate*/): boolean
    replaceAll(arg0: any /*java.util.function.UnaryOperator*/): void
    retainAll(arg0: Collection<java.lang.Object>): boolean
    set(arg0: int, arg1: E): E
    setElementAt(arg0: E, arg1: int): void
    setSize(arg0: int): void
    size(): int
    sort(arg0: Comparator<E>): void
    spliterator(): Spliterator<E>
    stream(): java.util.stream.Stream<E>
    subList(arg0: int, arg1: int): List<E>
    toArray(): [java.lang.Object]
    toArray<T>(arg0: [T]): [T]
    toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T]
    toString(): string
    trimToSize(): void
  } // end Vector
} // end namespace java.util
declare namespace java.util {
  class WeakHashMap<K, V> /* extends AbstractMap<K, V> implements Map<K, V>*/ {
    clear(): void
    compute(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    computeIfAbsent(arg0: K, arg1: any /*java.util.function.Function*/): V
    computeIfPresent(arg0: K, arg1: any /*java.util.function.BiFunction*/): V
    containsKey(arg0: java.lang.Object): boolean
    containsValue(arg0: java.lang.Object): boolean
    entrySet(): Set<any /*java.util.Map$Entry*/>
    equals(arg0: java.lang.Object): boolean
    forEach(arg0: any /*java.util.function.BiConsumer*/): void
    get(arg0: java.lang.Object): V
    getOrDefault(arg0: java.lang.Object, arg1: V): V
    isEmpty(): boolean
    keySet(): Set<K>
    merge(arg0: K, arg1: V, arg2: any /*java.util.function.BiFunction*/): V
    put(arg0: K, arg1: V): V
    putAll(arg0: Map<K, V>): void
    putIfAbsent(arg0: K, arg1: V): V
    remove(arg0: java.lang.Object): V
    remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    replace(arg0: K, arg1: V): V
    replace(arg0: K, arg1: V, arg2: V): boolean
    replaceAll(arg0: any /*java.util.function.BiFunction*/): void
    size(): int
    toString(): string
    values(): Collection<V>
  } // end WeakHashMap
} // end namespace java.util
