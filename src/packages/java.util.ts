interface AbstractCollectionStatic {
  readonly class: any
}

export const AbstractCollection: AbstractCollectionStatic = Packages.java.util.AbstractCollection

interface AbstractListStatic {
  readonly class: any
}

export const AbstractList: AbstractListStatic = Packages.java.util.AbstractList

interface AbstractMapStatic {
  readonly class: any
}

export const AbstractMap: AbstractMapStatic = Packages.java.util.AbstractMap

interface AbstractQueueStatic {
  readonly class: any
}

export const AbstractQueue: AbstractQueueStatic = Packages.java.util.AbstractQueue

interface AbstractSequentialListStatic {
  readonly class: any
}

export const AbstractSequentialList: AbstractSequentialListStatic = Packages.java.util.AbstractSequentialList

interface AbstractSetStatic {
  readonly class: any
}

export const AbstractSet: AbstractSetStatic = Packages.java.util.AbstractSet

interface ArrayDequeStatic {
  readonly class: any
  new <E>(arg0: int): java.util.ArrayDeque<E>
  new <E>(arg0: java.util.Collection<E>): java.util.ArrayDeque<E>
  new <E>(): java.util.ArrayDeque<E>
}

export const ArrayDeque: ArrayDequeStatic = Packages.java.util.ArrayDeque

interface ArrayListStatic {
  readonly class: any
  new <E>(arg0: java.util.Collection<E>): java.util.ArrayList<E>
  new <E>(): java.util.ArrayList<E>
  new <E>(arg0: int): java.util.ArrayList<E>
}

export const ArrayList: ArrayListStatic = Packages.java.util.ArrayList

interface ArraysStatic {
  readonly class: any
  copyOf<T, U>(arg0: [U], arg1: int, arg2: java.lang.Class<[T]>): [T]
  copyOfRange<T, U>(arg0: [U], arg1: int, arg2: int, arg3: java.lang.Class<[T]>): [T]
  copyOf<T>(arg0: [T], arg1: int): [T]
  copyOfRange<T>(arg0: [T], arg1: int, arg2: int): [T]
  equals<T>(arg0: [T], arg1: [T], arg2: java.util.Comparator<T>): boolean
  equals<T>(arg0: [T], arg1: int, arg2: int, arg3: [T], arg4: int, arg5: int, arg6: java.util.Comparator<T>): boolean
  binarySearch<T>(arg0: [T], arg1: T, arg2: java.util.Comparator<T>): int
  binarySearch<T>(arg0: [T], arg1: int, arg2: int, arg3: T, arg4: java.util.Comparator<T>): int
  compare<T>(arg0: [T], arg1: [T]): int
  compare<T>(arg0: [T], arg1: [T], arg2: java.util.Comparator<T>): int
  compare<T>(arg0: [T], arg1: int, arg2: int, arg3: [T], arg4: int, arg5: int): int
  compare<T>(arg0: [T], arg1: int, arg2: int, arg3: [T], arg4: int, arg5: int, arg6: java.util.Comparator<T>): int
  mismatch<T>(arg0: [T], arg1: [T], arg2: java.util.Comparator<T>): int
  mismatch<T>(arg0: [T], arg1: int, arg2: int, arg3: [T], arg4: int, arg5: int, arg6: java.util.Comparator<T>): int
  asList<T>(...arg0: T[]): java.util.List<T>
  spliterator<T>(arg0: [T]): java.util.Spliterator<T>
  spliterator<T>(arg0: [T], arg1: int, arg2: int): java.util.Spliterator<T>
  stream<T>(arg0: [T]): java.util.stream.Stream<T>
  stream<T>(arg0: [T], arg1: int, arg2: int): java.util.stream.Stream<T>
  parallelPrefix<T>(arg0: [T], arg1: int, arg2: int, arg3: any /*java.util.function.BinaryOperator*/): void
  parallelPrefix<T>(arg0: [T], arg1: any /*java.util.function.BinaryOperator*/): void
  parallelSetAll<T>(arg0: [T], arg1: any /*java.util.function.IntFunction*/): void
  parallelSort<T>(arg0: [T]): void
  parallelSort<T>(arg0: [T], arg1: int, arg2: int): void
  parallelSort<T>(arg0: [T], arg1: int, arg2: int, arg3: java.util.Comparator<T>): void
  parallelSort<T>(arg0: [T], arg1: java.util.Comparator<T>): void
  setAll<T>(arg0: [T], arg1: any /*java.util.function.IntFunction*/): void
  sort<T>(arg0: [T], arg1: int, arg2: int, arg3: java.util.Comparator<T>): void
  sort<T>(arg0: [T], arg1: java.util.Comparator<T>): void
  deepEquals(arg0: [java.lang.Object], arg1: [java.lang.Object]): boolean
  equals(arg0: [boolean], arg1: [boolean]): boolean
  equals(arg0: [boolean], arg1: int, arg2: int, arg3: [boolean], arg4: int, arg5: int): boolean
  equals(arg0: bytearray, arg1: bytearray): boolean
  equals(arg0: bytearray, arg1: int, arg2: int, arg3: bytearray, arg4: int, arg5: int): boolean
  equals(arg0: chararray, arg1: chararray): boolean
  equals(arg0: chararray, arg1: int, arg2: int, arg3: chararray, arg4: int, arg5: int): boolean
  equals(arg0: [double], arg1: [double]): boolean
  equals(arg0: [double], arg1: int, arg2: int, arg3: [double], arg4: int, arg5: int): boolean
  equals(arg0: [float], arg1: [float]): boolean
  equals(arg0: [float], arg1: int, arg2: int, arg3: [float], arg4: int, arg5: int): boolean
  equals(arg0: [int], arg1: int, arg2: int, arg3: [int], arg4: int, arg5: int): boolean
  equals(arg0: [int], arg1: [int]): boolean
  equals(arg0: [java.lang.Object], arg1: int, arg2: int, arg3: [java.lang.Object], arg4: int, arg5: int): boolean
  equals(arg0: [java.lang.Object], arg1: [java.lang.Object]): boolean
  equals(arg0: [long], arg1: int, arg2: int, arg3: [long], arg4: int, arg5: int): boolean
  equals(arg0: [long], arg1: [long]): boolean
  equals(arg0: [short], arg1: int, arg2: int, arg3: [short], arg4: int, arg5: int): boolean
  equals(arg0: [short], arg1: [short]): boolean
  copyOf(arg0: [boolean], arg1: int): [boolean]
  copyOfRange(arg0: [boolean], arg1: int, arg2: int): [boolean]
  copyOf(arg0: bytearray, arg1: int): bytearray
  copyOfRange(arg0: bytearray, arg1: int, arg2: int): bytearray
  copyOf(arg0: chararray, arg1: int): chararray
  copyOfRange(arg0: chararray, arg1: int, arg2: int): chararray
  copyOf(arg0: [double], arg1: int): [double]
  copyOfRange(arg0: [double], arg1: int, arg2: int): [double]
  copyOf(arg0: [float], arg1: int): [float]
  copyOfRange(arg0: [float], arg1: int, arg2: int): [float]
  binarySearch(arg0: bytearray, arg1: byte): int
  binarySearch(arg0: bytearray, arg1: int, arg2: int, arg3: byte): int
  binarySearch(arg0: chararray, arg1: char): int
  binarySearch(arg0: chararray, arg1: int, arg2: int, arg3: char): int
  binarySearch(arg0: [double], arg1: double): int
  binarySearch(arg0: [double], arg1: int, arg2: int, arg3: double): int
  binarySearch(arg0: [float], arg1: float): int
  binarySearch(arg0: [float], arg1: int, arg2: int, arg3: float): int
  binarySearch(arg0: [int], arg1: int): int
  binarySearch(arg0: [int], arg1: int, arg2: int, arg3: int): int
  binarySearch(arg0: [java.lang.Object], arg1: int, arg2: int, arg3: java.lang.Object): int
  binarySearch(arg0: [java.lang.Object], arg1: java.lang.Object): int
  binarySearch(arg0: [long], arg1: int, arg2: int, arg3: long): int
  binarySearch(arg0: [long], arg1: long): int
  binarySearch(arg0: [short], arg1: int, arg2: int, arg3: short): int
  binarySearch(arg0: [short], arg1: short): int
  compare(arg0: [boolean], arg1: [boolean]): int
  compare(arg0: [boolean], arg1: int, arg2: int, arg3: [boolean], arg4: int, arg5: int): int
  compare(arg0: bytearray, arg1: bytearray): int
  compare(arg0: bytearray, arg1: int, arg2: int, arg3: bytearray, arg4: int, arg5: int): int
  compare(arg0: chararray, arg1: chararray): int
  compare(arg0: chararray, arg1: int, arg2: int, arg3: chararray, arg4: int, arg5: int): int
  compare(arg0: [double], arg1: [double]): int
  compare(arg0: [double], arg1: int, arg2: int, arg3: [double], arg4: int, arg5: int): int
  compare(arg0: [float], arg1: [float]): int
  compare(arg0: [float], arg1: int, arg2: int, arg3: [float], arg4: int, arg5: int): int
  compare(arg0: [int], arg1: int, arg2: int, arg3: [int], arg4: int, arg5: int): int
  compare(arg0: [int], arg1: [int]): int
  compare(arg0: [long], arg1: int, arg2: int, arg3: [long], arg4: int, arg5: int): int
  compare(arg0: [long], arg1: [long]): int
  compare(arg0: [short], arg1: int, arg2: int, arg3: [short], arg4: int, arg5: int): int
  compare(arg0: [short], arg1: [short]): int
  compareUnsigned(arg0: bytearray, arg1: bytearray): int
  compareUnsigned(arg0: bytearray, arg1: int, arg2: int, arg3: bytearray, arg4: int, arg5: int): int
  compareUnsigned(arg0: [int], arg1: int, arg2: int, arg3: [int], arg4: int, arg5: int): int
  compareUnsigned(arg0: [int], arg1: [int]): int
  compareUnsigned(arg0: [long], arg1: int, arg2: int, arg3: [long], arg4: int, arg5: int): int
  compareUnsigned(arg0: [long], arg1: [long]): int
  compareUnsigned(arg0: [short], arg1: int, arg2: int, arg3: [short], arg4: int, arg5: int): int
  compareUnsigned(arg0: [short], arg1: [short]): int
  deepHashCode(arg0: [java.lang.Object]): int
  hashCode(arg0: [boolean]): int
  hashCode(arg0: bytearray): int
  hashCode(arg0: chararray): int
  hashCode(arg0: [double]): int
  hashCode(arg0: [float]): int
  hashCode(arg0: [int]): int
  hashCode(arg0: [java.lang.Object]): int
  hashCode(arg0: [long]): int
  hashCode(arg0: [short]): int
  mismatch(arg0: [boolean], arg1: [boolean]): int
  mismatch(arg0: [boolean], arg1: int, arg2: int, arg3: [boolean], arg4: int, arg5: int): int
  mismatch(arg0: bytearray, arg1: bytearray): int
  mismatch(arg0: bytearray, arg1: int, arg2: int, arg3: bytearray, arg4: int, arg5: int): int
  mismatch(arg0: chararray, arg1: chararray): int
  mismatch(arg0: chararray, arg1: int, arg2: int, arg3: chararray, arg4: int, arg5: int): int
  mismatch(arg0: [double], arg1: [double]): int
  mismatch(arg0: [double], arg1: int, arg2: int, arg3: [double], arg4: int, arg5: int): int
  mismatch(arg0: [float], arg1: [float]): int
  mismatch(arg0: [float], arg1: int, arg2: int, arg3: [float], arg4: int, arg5: int): int
  mismatch(arg0: [int], arg1: int, arg2: int, arg3: [int], arg4: int, arg5: int): int
  mismatch(arg0: [int], arg1: [int]): int
  mismatch(arg0: [java.lang.Object], arg1: int, arg2: int, arg3: [java.lang.Object], arg4: int, arg5: int): int
  mismatch(arg0: [java.lang.Object], arg1: [java.lang.Object]): int
  mismatch(arg0: [long], arg1: int, arg2: int, arg3: [long], arg4: int, arg5: int): int
  mismatch(arg0: [long], arg1: [long]): int
  mismatch(arg0: [short], arg1: int, arg2: int, arg3: [short], arg4: int, arg5: int): int
  mismatch(arg0: [short], arg1: [short]): int
  copyOf(arg0: [int], arg1: int): [int]
  copyOfRange(arg0: [int], arg1: int, arg2: int): [int]
  deepToString(arg0: [java.lang.Object]): string
  toString(arg0: [boolean]): string
  toString(arg0: bytearray): string
  toString(arg0: chararray): string
  toString(arg0: [double]): string
  toString(arg0: [float]): string
  toString(arg0: [int]): string
  toString(arg0: [java.lang.Object]): string
  toString(arg0: [long]): string
  toString(arg0: [short]): string
  spliterator(arg0: [double]): any /*java.util.Spliterator$OfDouble*/
  spliterator(arg0: [double], arg1: int, arg2: int): any /*java.util.Spliterator$OfDouble*/
  spliterator(arg0: [int]): any /*java.util.Spliterator$OfInt*/
  spliterator(arg0: [int], arg1: int, arg2: int): any /*java.util.Spliterator$OfInt*/
  spliterator(arg0: [long]): any /*java.util.Spliterator$OfLong*/
  spliterator(arg0: [long], arg1: int, arg2: int): any /*java.util.Spliterator$OfLong*/
  stream(arg0: [double]): java.util.stream.DoubleStream
  stream(arg0: [double], arg1: int, arg2: int): java.util.stream.DoubleStream
  stream(arg0: [int]): java.util.stream.IntStream
  stream(arg0: [int], arg1: int, arg2: int): java.util.stream.IntStream
  stream(arg0: [long]): java.util.stream.LongStream
  stream(arg0: [long], arg1: int, arg2: int): java.util.stream.LongStream
  copyOf(arg0: [long], arg1: int): [long]
  copyOfRange(arg0: [long], arg1: int, arg2: int): [long]
  copyOf(arg0: [short], arg1: int): [short]
  copyOfRange(arg0: [short], arg1: int, arg2: int): [short]
  fill(arg0: [boolean], arg1: boolean): void
  fill(arg0: [boolean], arg1: int, arg2: int, arg3: boolean): void
  fill(arg0: bytearray, arg1: byte): void
  fill(arg0: bytearray, arg1: int, arg2: int, arg3: byte): void
  fill(arg0: chararray, arg1: char): void
  fill(arg0: chararray, arg1: int, arg2: int, arg3: char): void
  fill(arg0: [double], arg1: double): void
  fill(arg0: [double], arg1: int, arg2: int, arg3: double): void
  fill(arg0: [float], arg1: float): void
  fill(arg0: [float], arg1: int, arg2: int, arg3: float): void
  fill(arg0: [int], arg1: int): void
  fill(arg0: [int], arg1: int, arg2: int, arg3: int): void
  fill(arg0: [java.lang.Object], arg1: int, arg2: int, arg3: java.lang.Object): void
  fill(arg0: [java.lang.Object], arg1: java.lang.Object): void
  fill(arg0: [long], arg1: int, arg2: int, arg3: long): void
  fill(arg0: [long], arg1: long): void
  fill(arg0: [short], arg1: int, arg2: int, arg3: short): void
  fill(arg0: [short], arg1: short): void
  parallelPrefix(arg0: [double], arg1: int, arg2: int, arg3: any /*java.util.function.DoubleBinaryOperator*/): void
  parallelPrefix(arg0: [double], arg1: any /*java.util.function.DoubleBinaryOperator*/): void
  parallelPrefix(arg0: [int], arg1: int, arg2: int, arg3: any /*java.util.function.IntBinaryOperator*/): void
  parallelPrefix(arg0: [int], arg1: any /*java.util.function.IntBinaryOperator*/): void
  parallelPrefix(arg0: [long], arg1: int, arg2: int, arg3: any /*java.util.function.LongBinaryOperator*/): void
  parallelPrefix(arg0: [long], arg1: any /*java.util.function.LongBinaryOperator*/): void
  parallelSetAll(arg0: [double], arg1: any /*java.util.function.IntToDoubleFunction*/): void
  parallelSetAll(arg0: [int], arg1: any /*java.util.function.IntUnaryOperator*/): void
  parallelSetAll(arg0: [long], arg1: any /*java.util.function.IntToLongFunction*/): void
  parallelSort(arg0: bytearray): void
  parallelSort(arg0: bytearray, arg1: int, arg2: int): void
  parallelSort(arg0: chararray): void
  parallelSort(arg0: chararray, arg1: int, arg2: int): void
  parallelSort(arg0: [double]): void
  parallelSort(arg0: [double], arg1: int, arg2: int): void
  parallelSort(arg0: [float]): void
  parallelSort(arg0: [float], arg1: int, arg2: int): void
  parallelSort(arg0: [int]): void
  parallelSort(arg0: [int], arg1: int, arg2: int): void
  parallelSort(arg0: [long]): void
  parallelSort(arg0: [long], arg1: int, arg2: int): void
  parallelSort(arg0: [short]): void
  parallelSort(arg0: [short], arg1: int, arg2: int): void
  setAll(arg0: [double], arg1: any /*java.util.function.IntToDoubleFunction*/): void
  setAll(arg0: [int], arg1: any /*java.util.function.IntUnaryOperator*/): void
  setAll(arg0: [long], arg1: any /*java.util.function.IntToLongFunction*/): void
  sort(arg0: bytearray): void
  sort(arg0: bytearray, arg1: int, arg2: int): void
  sort(arg0: chararray): void
  sort(arg0: chararray, arg1: int, arg2: int): void
  sort(arg0: [double]): void
  sort(arg0: [double], arg1: int, arg2: int): void
  sort(arg0: [float]): void
  sort(arg0: [float], arg1: int, arg2: int): void
  sort(arg0: [int]): void
  sort(arg0: [int], arg1: int, arg2: int): void
  sort(arg0: [java.lang.Object]): void
  sort(arg0: [java.lang.Object], arg1: int, arg2: int): void
  sort(arg0: [long]): void
  sort(arg0: [long], arg1: int, arg2: int): void
  sort(arg0: [short]): void
  sort(arg0: [short], arg1: int, arg2: int): void
}

export const Arrays: ArraysStatic = Packages.java.util.Arrays

interface Base64Static {
  readonly class: any
  getDecoder(): any /*java.util.Base64$Decoder*/
  getMimeDecoder(): any /*java.util.Base64$Decoder*/
  getUrlDecoder(): any /*java.util.Base64$Decoder*/
  getEncoder(): any /*java.util.Base64$Encoder*/
  getMimeEncoder(): any /*java.util.Base64$Encoder*/
  getMimeEncoder(arg0: int, arg1: bytearray): any /*java.util.Base64$Encoder*/
  getUrlEncoder(): any /*java.util.Base64$Encoder*/
}

export const Base64: Base64Static = Packages.java.util.Base64

interface BitSetStatic {
  readonly class: any
  new (arg0: int): java.util.BitSet
  new (): java.util.BitSet
  valueOf(arg0: bytearray): java.util.BitSet
  valueOf(arg0: any /*java.nio.ByteBuffer*/): java.util.BitSet
  valueOf(arg0: any /*java.nio.LongBuffer*/): java.util.BitSet
  valueOf(arg0: [long]): java.util.BitSet
}

export const BitSet: BitSetStatic = Packages.java.util.BitSet

interface CalendarStatic {
  readonly class: any
  getInstance(): java.util.Calendar
  getInstance(arg0: java.util.Locale): java.util.Calendar
  getInstance(arg0: java.util.TimeZone): java.util.Calendar
  getInstance(arg0: java.util.TimeZone, arg1: java.util.Locale): java.util.Calendar
  getAvailableCalendarTypes(): java.util.Set<string>
  getAvailableLocales(): [java.util.Locale]
}

export const Calendar: CalendarStatic = Packages.java.util.Calendar

interface CollectionStatic {
  readonly class: any
}

export const Collection: CollectionStatic = Packages.java.util.Collection

interface CollectionsStatic {
  readonly class: any
  checkedCollection<E>(arg0: java.util.Collection<E>, arg1: java.lang.Class<E>): java.util.Collection<E>
  checkedList<E>(arg0: java.util.List<E>, arg1: java.lang.Class<E>): java.util.List<E>
  checkedNavigableSet<E>(arg0: java.util.NavigableSet<E>, arg1: java.lang.Class<E>): java.util.NavigableSet<E>
  emptyNavigableSet<E>(): java.util.NavigableSet<E>
  checkedQueue<E>(arg0: java.util.Queue<E>, arg1: java.lang.Class<E>): java.util.Queue<E>
  checkedSet<E>(arg0: java.util.Set<E>, arg1: java.lang.Class<E>): java.util.Set<E>
  newSetFromMap<E>(arg0: java.util.Map<E, boolean | null>): java.util.Set<E>
  checkedSortedSet<E>(arg0: java.util.SortedSet<E>, arg1: java.lang.Class<E>): java.util.SortedSet<E>
  emptySortedSet<E>(): java.util.SortedSet<E>
  checkedMap<K, V>(arg0: java.util.Map<K, V>, arg1: java.lang.Class<K>, arg2: java.lang.Class<V>): java.util.Map<K, V>
  singletonMap<K, V>(arg0: K, arg1: V): java.util.Map<K, V>
  synchronizedMap<K, V>(arg0: java.util.Map<K, V>): java.util.Map<K, V>
  unmodifiableMap<K, V>(arg0: java.util.Map<K, V>): java.util.Map<K, V>
  checkedNavigableMap<K, V>(
    arg0: java.util.NavigableMap<K, V>,
    arg1: java.lang.Class<K>,
    arg2: java.lang.Class<V>
  ): java.util.NavigableMap<K, V>
  synchronizedNavigableMap<K, V>(arg0: java.util.NavigableMap<K, V>): java.util.NavigableMap<K, V>
  unmodifiableNavigableMap<K, V>(arg0: java.util.NavigableMap<K, V>): java.util.NavigableMap<K, V>
  checkedSortedMap<K, V>(
    arg0: java.util.SortedMap<K, V>,
    arg1: java.lang.Class<K>,
    arg2: java.lang.Class<V>
  ): java.util.SortedMap<K, V>
  synchronizedSortedMap<K, V>(arg0: java.util.SortedMap<K, V>): java.util.SortedMap<K, V>
  unmodifiableSortedMap<K, V>(arg0: java.util.SortedMap<K, V>): java.util.SortedMap<K, V>
  max<T>(arg0: java.util.Collection<T>): T
  max<T>(arg0: java.util.Collection<T>, arg1: java.util.Comparator<T>): T
  min<T>(arg0: java.util.Collection<T>): T
  min<T>(arg0: java.util.Collection<T>, arg1: java.util.Comparator<T>): T
  addAll<T>(arg0: java.util.Collection<T>, ...arg1: T[]): boolean
  replaceAll<T>(arg0: java.util.List<T>, arg1: T, arg2: T): boolean
  binarySearch<T>(arg0: java.util.List<T>, arg1: T, arg2: java.util.Comparator<T>): int
  binarySearch<T>(arg0: java.util.List<java.lang.Comparable<T>>, arg1: T): int
  list<T>(arg0: java.util.Enumeration<T>): java.util.ArrayList<T>
  synchronizedCollection<T>(arg0: java.util.Collection<T>): java.util.Collection<T>
  unmodifiableCollection<T>(arg0: java.util.Collection<T>): java.util.Collection<T>
  reverseOrder<T>(): java.util.Comparator<T>
  reverseOrder<T>(arg0: java.util.Comparator<T>): java.util.Comparator<T>
  emptyEnumeration<T>(): java.util.Enumeration<T>
  enumeration<T>(arg0: java.util.Collection<T>): java.util.Enumeration<T>
  emptyIterator<T>(): java.util.Iterator<T>
  nCopies<T>(arg0: int, arg1: T): java.util.List<T>
  singletonList<T>(arg0: T): java.util.List<T>
  synchronizedList<T>(arg0: java.util.List<T>): java.util.List<T>
  unmodifiableList<T>(arg0: java.util.List<T>): java.util.List<T>
  emptyListIterator<T>(): java.util.ListIterator<T>
  synchronizedNavigableSet<T>(arg0: java.util.NavigableSet<T>): java.util.NavigableSet<T>
  unmodifiableNavigableSet<T>(arg0: java.util.NavigableSet<T>): java.util.NavigableSet<T>
  asLifoQueue<T>(arg0: java.util.Deque<T>): java.util.Queue<T>
  singleton<T>(arg0: T): java.util.Set<T>
  synchronizedSet<T>(arg0: java.util.Set<T>): java.util.Set<T>
  unmodifiableSet<T>(arg0: java.util.Set<T>): java.util.Set<T>
  synchronizedSortedSet<T>(arg0: java.util.SortedSet<T>): java.util.SortedSet<T>
  unmodifiableSortedSet<T>(arg0: java.util.SortedSet<T>): java.util.SortedSet<T>
  copy<T>(arg0: java.util.List<T>, arg1: java.util.List<T>): void
  fill<T>(arg0: java.util.List<T>, arg1: T): void
  sort<T>(arg0: java.util.List<T>): void
  sort<T>(arg0: java.util.List<T>, arg1: java.util.Comparator<T>): void
  disjoint(arg0: java.util.Collection<java.lang.Object>, arg1: java.util.Collection<java.lang.Object>): boolean
  emptyMap<K, V>(): java.util.Map<K, V>
  emptyNavigableMap<K, V>(): java.util.NavigableMap<K, V>
  emptySortedMap<K, V>(): java.util.SortedMap<K, V>
  emptyList<T>(): java.util.List<T>
  emptySet<T>(): java.util.Set<T>
  frequency(arg0: java.util.Collection<java.lang.Object>, arg1: java.lang.Object): int
  indexOfSubList(arg0: java.util.List<java.lang.Object>, arg1: java.util.List<java.lang.Object>): int
  lastIndexOfSubList(arg0: java.util.List<java.lang.Object>, arg1: java.util.List<java.lang.Object>): int
  reverse(arg0: java.util.List<java.lang.Object>): void
  rotate(arg0: java.util.List<java.lang.Object>, arg1: int): void
  shuffle(arg0: java.util.List<java.lang.Object>): void
  shuffle(arg0: java.util.List<java.lang.Object>, arg1: java.util.Random): void
  swap(arg0: java.util.List<java.lang.Object>, arg1: int, arg2: int): void
}

export const Collections: CollectionsStatic = Packages.java.util.Collections

interface ComparatorStatic {
  readonly class: any
  new <T>(arg0: java.util.Comparator<T>): java.util.Comparator<T>
}

export const Comparator: ComparatorStatic = Packages.java.util.Comparator

interface CurrencyStatic {
  readonly class: any
  getInstance(arg0: string): java.util.Currency
  getInstance(arg0: java.util.Locale): java.util.Currency
  getAvailableCurrencies(): java.util.Set<java.util.Currency>
}

export const Currency: CurrencyStatic = Packages.java.util.Currency

interface DateStatic {
  readonly class: any
  new (arg0: string): java.util.Date
  new (arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): java.util.Date
  new (arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): java.util.Date
  new (): java.util.Date
  new (arg0: long): java.util.Date
  new (arg0: int, arg1: int, arg2: int): java.util.Date
  from(arg0: any /*java.time.Instant*/): java.util.Date
  UTC(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): long
  parse(arg0: string): long
}

export const Date: DateStatic = Packages.java.util.Date

interface DequeStatic {
  readonly class: any
}

export const Deque: DequeStatic = Packages.java.util.Deque

interface DictionaryStatic {
  readonly class: any
  new <K, V>(): java.util.Dictionary<K, V>
}

export const Dictionary: DictionaryStatic = Packages.java.util.Dictionary

interface DoubleSummaryStatisticsStatic {
  readonly class: any
  new (): java.util.DoubleSummaryStatistics
  new (arg0: long, arg1: double, arg2: double, arg3: double): java.util.DoubleSummaryStatistics
}

export const DoubleSummaryStatistics: DoubleSummaryStatisticsStatic = Packages.java.util.DoubleSummaryStatistics

interface EnumerationStatic {
  readonly class: any
}

export const Enumeration: EnumerationStatic = Packages.java.util.Enumeration

interface EnumMapStatic {
  readonly class: any
  new <K, V>(arg0: java.lang.Class<K>): java.util.EnumMap<K, V>
  new <K, V>(arg0: java.util.Map<K, V>): java.util.EnumMap<K, V>
  new <K, V>(arg0: java.util.EnumMap<K, V>): java.util.EnumMap<K, V>
}

export const EnumMap: EnumMapStatic = Packages.java.util.EnumMap

interface EnumSetStatic {
  readonly class: any
  allOf<E>(arg0: java.lang.Class<E>): java.util.EnumSet<E>
  complementOf<E>(arg0: java.util.EnumSet<E>): java.util.EnumSet<E>
  copyOf<E>(arg0: java.util.Collection<E>): java.util.EnumSet<E>
  copyOf<E>(arg0: java.util.EnumSet<E>): java.util.EnumSet<E>
  noneOf<E>(arg0: java.lang.Class<E>): java.util.EnumSet<E>
  of<E>(arg0: E): java.util.EnumSet<E>
  of<E>(arg0: E, arg1: E): java.util.EnumSet<E>
  of<E>(arg0: E, arg1: E, arg2: E): java.util.EnumSet<E>
  of<E>(arg0: E, arg1: E, arg2: E, arg3: E): java.util.EnumSet<E>
  of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): java.util.EnumSet<E>
  of<E>(arg0: E, ...arg1: E[]): java.util.EnumSet<E>
  range<E>(arg0: E, arg1: E): java.util.EnumSet<E>
}

export const EnumSet: EnumSetStatic = Packages.java.util.EnumSet

interface EventListenerStatic {
  readonly class: any
}

export const EventListener: EventListenerStatic = Packages.java.util.EventListener

interface EventListenerProxyStatic {
  readonly class: any
  new <T>(arg0: T): java.util.EventListenerProxy<T>
}

export const EventListenerProxy: EventListenerProxyStatic = Packages.java.util.EventListenerProxy

interface EventObjectStatic {
  readonly class: any
  new (arg0: java.lang.Object): java.util.EventObject
}

export const EventObject: EventObjectStatic = Packages.java.util.EventObject

interface FormattableStatic {
  readonly class: any
}

export const Formattable: FormattableStatic = Packages.java.util.Formattable

interface FormattableFlagsStatic {
  readonly class: any
}

export const FormattableFlags: FormattableFlagsStatic = Packages.java.util.FormattableFlags

interface FormatterStatic {
  readonly class: any
  new (arg0: java.io.File, arg1: string): java.util.Formatter
  new (arg0: java.io.File): java.util.Formatter
  new (arg0: string, arg1: any /*java.nio.charset.Charset*/, arg2: java.util.Locale): java.util.Formatter
  new (arg0: string, arg1: string, arg2: java.util.Locale): java.util.Formatter
  new (arg0: string, arg1: string): java.util.Formatter
  new (arg0: java.io.OutputStream, arg1: string): java.util.Formatter
  new (arg0: java.io.OutputStream, arg1: string, arg2: java.util.Locale): java.util.Formatter
  new (arg0: java.io.PrintStream): java.util.Formatter
  new (arg0: java.io.File, arg1: any /*java.nio.charset.Charset*/, arg2: java.util.Locale): java.util.Formatter
  new (arg0: java.io.File, arg1: string, arg2: java.util.Locale): java.util.Formatter
  new (): java.util.Formatter
  new (arg0: java.io.OutputStream, arg1: any /*java.nio.charset.Charset*/, arg2: java.util.Locale): java.util.Formatter
  new (arg0: java.io.OutputStream): java.util.Formatter
  new (arg0: string): java.util.Formatter
  new (arg0: java.lang.Appendable, arg1: java.util.Locale): java.util.Formatter
  new (arg0: java.util.Locale): java.util.Formatter
  new (arg0: java.lang.Appendable): java.util.Formatter
}

export const Formatter: FormatterStatic = Packages.java.util.Formatter

interface GregorianCalendarStatic {
  readonly class: any
  new (arg0: int, arg1: int, arg2: int): java.util.GregorianCalendar
  new (arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): java.util.GregorianCalendar
  new (arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): java.util.GregorianCalendar
  new (): java.util.GregorianCalendar
  new (arg0: java.util.TimeZone): java.util.GregorianCalendar
  new (arg0: java.util.Locale): java.util.GregorianCalendar
  new (arg0: java.util.TimeZone, arg1: java.util.Locale): java.util.GregorianCalendar
  getInstance(): java.util.Calendar
  getInstance(arg0: java.util.Locale): java.util.Calendar
  getInstance(arg0: java.util.TimeZone): java.util.Calendar
  getInstance(arg0: java.util.TimeZone, arg1: java.util.Locale): java.util.Calendar
  from(arg0: any /*java.time.ZonedDateTime*/): java.util.GregorianCalendar
  getAvailableCalendarTypes(): java.util.Set<string>
  getAvailableLocales(): [java.util.Locale]
}

export const GregorianCalendar: GregorianCalendarStatic = Packages.java.util.GregorianCalendar

interface HashMapStatic {
  readonly class: any
  new <K, V>(arg0: int, arg1: float): java.util.HashMap<K, V>
  new <K, V>(): java.util.HashMap<K, V>
  new <K, V>(arg0: java.util.Map<K, V>): java.util.HashMap<K, V>
  new <K, V>(arg0: int): java.util.HashMap<K, V>
}

export const HashMap: HashMapStatic = Packages.java.util.HashMap

interface HashSetStatic {
  readonly class: any
  new <E>(arg0: int): java.util.HashSet<E>
  new <E>(arg0: int, arg1: float): java.util.HashSet<E>
  new <E>(arg0: java.util.Collection<E>): java.util.HashSet<E>
  new <E>(): java.util.HashSet<E>
}

export const HashSet: HashSetStatic = Packages.java.util.HashSet

interface HashtableStatic {
  readonly class: any
  new <K, V>(arg0: java.util.Map<K, V>): java.util.Hashtable<K, V>
  new <K, V>(): java.util.Hashtable<K, V>
  new <K, V>(arg0: int): java.util.Hashtable<K, V>
  new <K, V>(arg0: int, arg1: float): java.util.Hashtable<K, V>
}

export const Hashtable: HashtableStatic = Packages.java.util.Hashtable

interface IdentityHashMapStatic {
  readonly class: any
  new <K, V>(arg0: int): java.util.IdentityHashMap<K, V>
  new <K, V>(): java.util.IdentityHashMap<K, V>
  new <K, V>(arg0: java.util.Map<K, V>): java.util.IdentityHashMap<K, V>
}

export const IdentityHashMap: IdentityHashMapStatic = Packages.java.util.IdentityHashMap

interface IntSummaryStatisticsStatic {
  readonly class: any
  new (): java.util.IntSummaryStatistics
  new (arg0: long, arg1: int, arg2: int, arg3: long): java.util.IntSummaryStatistics
}

export const IntSummaryStatistics: IntSummaryStatisticsStatic = Packages.java.util.IntSummaryStatistics

interface IteratorStatic {
  readonly class: any
}

export const Iterator: IteratorStatic = Packages.java.util.Iterator

interface LinkedHashMapStatic {
  readonly class: any
  new <K, V>(arg0: int, arg1: float, arg2: boolean): java.util.LinkedHashMap<K, V>
  new <K, V>(arg0: java.util.Map<K, V>): java.util.LinkedHashMap<K, V>
  new <K, V>(arg0: int): java.util.LinkedHashMap<K, V>
  new <K, V>(arg0: int, arg1: float): java.util.LinkedHashMap<K, V>
  new <K, V>(): java.util.LinkedHashMap<K, V>
}

export const LinkedHashMap: LinkedHashMapStatic = Packages.java.util.LinkedHashMap

interface LinkedHashSetStatic {
  readonly class: any
  new <E>(arg0: java.util.Collection<E>): java.util.LinkedHashSet<E>
  new <E>(): java.util.LinkedHashSet<E>
  new <E>(arg0: int): java.util.LinkedHashSet<E>
  new <E>(arg0: int, arg1: float): java.util.LinkedHashSet<E>
}

export const LinkedHashSet: LinkedHashSetStatic = Packages.java.util.LinkedHashSet

interface LinkedListStatic {
  readonly class: any
  new <E>(): java.util.LinkedList<E>
  new <E>(arg0: java.util.Collection<E>): java.util.LinkedList<E>
}

export const LinkedList: LinkedListStatic = Packages.java.util.LinkedList

interface ListStatic {
  readonly class: any
  copyOf<E>(arg0: java.util.Collection<E>): java.util.List<E>
  of<E>(): java.util.List<E>
  of<E>(arg0: E): java.util.List<E>
  of<E>(arg0: E, arg1: E): java.util.List<E>
  of<E>(arg0: E, arg1: E, arg2: E): java.util.List<E>
  of<E>(arg0: E, arg1: E, arg2: E, arg3: E): java.util.List<E>
  of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): java.util.List<E>
  of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): java.util.List<E>
  of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): java.util.List<E>
  of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): java.util.List<E>
  of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): java.util.List<E>
  of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): java.util.List<E>
  of<E>(...arg0: E[]): java.util.List<E>
}

export const List: ListStatic = Packages.java.util.List

interface ListIteratorStatic {
  readonly class: any
}

export const ListIterator: ListIteratorStatic = Packages.java.util.ListIterator

interface ListResourceBundleStatic {
  readonly class: any
  new (): java.util.ListResourceBundle
  getBundle(arg0: string): java.util.ResourceBundle
  getBundle(arg0: string, arg1: java.util.Locale): java.util.ResourceBundle
  getBundle(
    arg0: string,
    arg1: java.util.Locale,
    arg2: any /*java.util.ResourceBundle$Control*/
  ): java.util.ResourceBundle
  getBundle(arg0: string, arg1: any /*java.util.ResourceBundle$Control*/): java.util.ResourceBundle
  clearCache(): void
  clearCache(arg0: java.lang.ClassLoader): void
  getBundle(arg0: string, arg1: any /*java.lang.Module*/): java.util.ResourceBundle
  getBundle(arg0: string, arg1: java.util.Locale, arg2: java.lang.ClassLoader): java.util.ResourceBundle
  getBundle(
    arg0: string,
    arg1: java.util.Locale,
    arg2: java.lang.ClassLoader,
    arg3: any /*java.util.ResourceBundle$Control*/
  ): java.util.ResourceBundle
  getBundle(arg0: string, arg1: java.util.Locale, arg2: any /*java.lang.Module*/): java.util.ResourceBundle
}

export const ListResourceBundle: ListResourceBundleStatic = Packages.java.util.ListResourceBundle

interface LocaleStatic {
  readonly class: any
  new (arg0: string): java.util.Locale
  new (arg0: string, arg1: string): java.util.Locale
  new (arg0: string, arg1: string, arg2: string): java.util.Locale
  lookupTag(arg0: java.util.List<any /*java.util.Locale$LanguageRange*/>, arg1: java.util.Collection<string>): string
  getISOCountries(): [string]
  getISOLanguages(): [string]
  filterTags(
    arg0: java.util.List<any /*java.util.Locale$LanguageRange*/>,
    arg1: java.util.Collection<string>
  ): java.util.List<string>
  filterTags(
    arg0: java.util.List<any /*java.util.Locale$LanguageRange*/>,
    arg1: java.util.Collection<string>,
    arg2: any /*java.util.Locale$FilteringMode*/
  ): java.util.List<string>
  filter(
    arg0: java.util.List<any /*java.util.Locale$LanguageRange*/>,
    arg1: java.util.Collection<java.util.Locale>
  ): java.util.List<java.util.Locale>
  filter(
    arg0: java.util.List<any /*java.util.Locale$LanguageRange*/>,
    arg1: java.util.Collection<java.util.Locale>,
    arg2: any /*java.util.Locale$FilteringMode*/
  ): java.util.List<java.util.Locale>
  forLanguageTag(arg0: string): java.util.Locale
  getDefault(): java.util.Locale
  getDefault(arg0: any /*java.util.Locale$Category*/): java.util.Locale
  lookup(
    arg0: java.util.List<any /*java.util.Locale$LanguageRange*/>,
    arg1: java.util.Collection<java.util.Locale>
  ): java.util.Locale
  getAvailableLocales(): [java.util.Locale]
  getISOCountries(arg0: any /*java.util.Locale$IsoCountryCode*/): java.util.Set<string>
  setDefault(arg0: any /*java.util.Locale$Category*/, arg1: java.util.Locale): void
  setDefault(arg0: java.util.Locale): void
}

export const Locale: LocaleStatic = Packages.java.util.Locale

interface LongSummaryStatisticsStatic {
  readonly class: any
  new (): java.util.LongSummaryStatistics
  new (arg0: long, arg1: long, arg2: long, arg3: long): java.util.LongSummaryStatistics
}

export const LongSummaryStatistics: LongSummaryStatisticsStatic = Packages.java.util.LongSummaryStatistics

interface MapStatic {
  readonly class: any
  entry<K, V>(arg0: K, arg1: V): any /*java.util.Map$Entry*/
  copyOf<K, V>(arg0: java.util.Map<K, V>): java.util.Map<K, V>
  of<K, V>(): java.util.Map<K, V>
  of<K, V>(arg0: K, arg1: V): java.util.Map<K, V>
  of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): java.util.Map<K, V>
  of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): java.util.Map<K, V>
  of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): java.util.Map<K, V>
  of<K, V>(
    arg0: K,
    arg1: V,
    arg2: K,
    arg3: V,
    arg4: K,
    arg5: V,
    arg6: K,
    arg7: V,
    arg8: K,
    arg9: V
  ): java.util.Map<K, V>
  of<K, V>(
    arg0: K,
    arg1: V,
    arg2: K,
    arg3: V,
    arg4: K,
    arg5: V,
    arg6: K,
    arg7: V,
    arg8: K,
    arg9: V,
    arg10: K,
    arg11: V
  ): java.util.Map<K, V>
  of<K, V>(
    arg0: K,
    arg1: V,
    arg2: K,
    arg3: V,
    arg4: K,
    arg5: V,
    arg6: K,
    arg7: V,
    arg8: K,
    arg9: V,
    arg10: K,
    arg11: V,
    arg12: K,
    arg13: V
  ): java.util.Map<K, V>
  of<K, V>(
    arg0: K,
    arg1: V,
    arg2: K,
    arg3: V,
    arg4: K,
    arg5: V,
    arg6: K,
    arg7: V,
    arg8: K,
    arg9: V,
    arg10: K,
    arg11: V,
    arg12: K,
    arg13: V,
    arg14: K,
    arg15: V
  ): java.util.Map<K, V>
  of<K, V>(
    arg0: K,
    arg1: V,
    arg2: K,
    arg3: V,
    arg4: K,
    arg5: V,
    arg6: K,
    arg7: V,
    arg8: K,
    arg9: V,
    arg10: K,
    arg11: V,
    arg12: K,
    arg13: V,
    arg14: K,
    arg15: V,
    arg16: K,
    arg17: V
  ): java.util.Map<K, V>
  of<K, V>(
    arg0: K,
    arg1: V,
    arg2: K,
    arg3: V,
    arg4: K,
    arg5: V,
    arg6: K,
    arg7: V,
    arg8: K,
    arg9: V,
    arg10: K,
    arg11: V,
    arg12: K,
    arg13: V,
    arg14: K,
    arg15: V,
    arg16: K,
    arg17: V,
    arg18: K,
    arg19: V
  ): java.util.Map<K, V>
  ofEntries<K, V>(...arg0: any /*java.util.Map$Entry*/[]): java.util.Map<K, V>
}

export const Map: MapStatic = Packages.java.util.Map

interface NavigableMapStatic {
  readonly class: any
}

export const NavigableMap: NavigableMapStatic = Packages.java.util.NavigableMap

interface NavigableSetStatic {
  readonly class: any
}

export const NavigableSet: NavigableSetStatic = Packages.java.util.NavigableSet

interface ObjectsStatic {
  readonly class: any
  requireNonNull<T>(arg0: T): T
  requireNonNull<T>(arg0: T, arg1: string): T
  requireNonNull<T>(arg0: T, arg1: any /*java.util.function.Supplier*/): T
  requireNonNullElse<T>(arg0: T, arg1: T): T
  requireNonNullElseGet<T>(arg0: T, arg1: any /*java.util.function.Supplier*/): T
  compare<T>(arg0: T, arg1: T, arg2: java.util.Comparator<T>): int
  deepEquals(arg0: java.lang.Object, arg1: java.lang.Object): boolean
  equals(arg0: java.lang.Object, arg1: java.lang.Object): boolean
  isNull(arg0: java.lang.Object): boolean
  nonNull(arg0: java.lang.Object): boolean
  checkFromIndexSize(arg0: int, arg1: int, arg2: int): int
  checkFromToIndex(arg0: int, arg1: int, arg2: int): int
  checkIndex(arg0: int, arg1: int): int
  hash(...arg0: java.lang.Object[]): int
  hashCode(arg0: java.lang.Object): int
  toString(arg0: java.lang.Object): string
  toString(arg0: java.lang.Object, arg1: string): string
}

export const Objects: ObjectsStatic = Packages.java.util.Objects

interface ObservableStatic {
  readonly class: any
  new (): java.util.Observable
}

export const Observable: ObservableStatic = Packages.java.util.Observable

interface ObserverStatic {
  readonly class: any
}

export const Observer: ObserverStatic = Packages.java.util.Observer

interface OptionalStatic {
  readonly class: any
  empty<T>(): java.util.Optional<T>
  of<T>(arg0: T): java.util.Optional<T>
  ofNullable<T>(arg0: T): java.util.Optional<T>
}

export const Optional: OptionalStatic = Packages.java.util.Optional

interface OptionalDoubleStatic {
  readonly class: any
  empty(): java.util.OptionalDouble
  of(arg0: double): java.util.OptionalDouble
}

export const OptionalDouble: OptionalDoubleStatic = Packages.java.util.OptionalDouble

interface OptionalIntStatic {
  readonly class: any
  empty(): java.util.OptionalInt
  of(arg0: int): java.util.OptionalInt
}

export const OptionalInt: OptionalIntStatic = Packages.java.util.OptionalInt

interface OptionalLongStatic {
  readonly class: any
  empty(): java.util.OptionalLong
  of(arg0: long): java.util.OptionalLong
}

export const OptionalLong: OptionalLongStatic = Packages.java.util.OptionalLong

interface PrimitiveIteratorStatic {
  readonly class: any
}

export const PrimitiveIterator: PrimitiveIteratorStatic = Packages.java.util.PrimitiveIterator

interface PriorityQueueStatic {
  readonly class: any
  new <E>(arg0: int, arg1: java.util.Comparator<E>): java.util.PriorityQueue<E>
  new <E>(arg0: java.util.Collection<E>): java.util.PriorityQueue<E>
  new <E>(arg0: java.util.PriorityQueue<E>): java.util.PriorityQueue<E>
  new <E>(arg0: java.util.SortedSet<E>): java.util.PriorityQueue<E>
  new <E>(): java.util.PriorityQueue<E>
  new <E>(arg0: int): java.util.PriorityQueue<E>
  new <E>(arg0: java.util.Comparator<E>): java.util.PriorityQueue<E>
}

export const PriorityQueue: PriorityQueueStatic = Packages.java.util.PriorityQueue

interface PropertiesStatic {
  readonly class: any
  new (arg0: java.util.Properties): java.util.Properties
  new (arg0: int): java.util.Properties
  new (): java.util.Properties
}

export const Properties: PropertiesStatic = Packages.java.util.Properties

interface PropertyPermissionStatic {
  readonly class: any
  new (arg0: string, arg1: string): java.util.PropertyPermission
}

export const PropertyPermission: PropertyPermissionStatic = Packages.java.util.PropertyPermission

interface PropertyResourceBundleStatic {
  readonly class: any
  new (arg0: java.io.InputStream): java.util.PropertyResourceBundle
  new (arg0: java.io.Reader): java.util.PropertyResourceBundle
  getBundle(arg0: string): java.util.ResourceBundle
  getBundle(arg0: string, arg1: java.util.Locale): java.util.ResourceBundle
  getBundle(
    arg0: string,
    arg1: java.util.Locale,
    arg2: any /*java.util.ResourceBundle$Control*/
  ): java.util.ResourceBundle
  getBundle(arg0: string, arg1: any /*java.util.ResourceBundle$Control*/): java.util.ResourceBundle
  clearCache(): void
  clearCache(arg0: java.lang.ClassLoader): void
  getBundle(arg0: string, arg1: any /*java.lang.Module*/): java.util.ResourceBundle
  getBundle(arg0: string, arg1: java.util.Locale, arg2: java.lang.ClassLoader): java.util.ResourceBundle
  getBundle(
    arg0: string,
    arg1: java.util.Locale,
    arg2: java.lang.ClassLoader,
    arg3: any /*java.util.ResourceBundle$Control*/
  ): java.util.ResourceBundle
  getBundle(arg0: string, arg1: java.util.Locale, arg2: any /*java.lang.Module*/): java.util.ResourceBundle
}

export const PropertyResourceBundle: PropertyResourceBundleStatic = Packages.java.util.PropertyResourceBundle

interface QueueStatic {
  readonly class: any
}

export const Queue: QueueStatic = Packages.java.util.Queue

interface RandomStatic {
  readonly class: any
  new (): java.util.Random
  new (arg0: long): java.util.Random
}

export const Random: RandomStatic = Packages.java.util.Random

interface RandomAccessStatic {
  readonly class: any
}

export const RandomAccess: RandomAccessStatic = Packages.java.util.RandomAccess

interface ResourceBundleStatic {
  readonly class: any
  new (): java.util.ResourceBundle
  getBundle(arg0: string): java.util.ResourceBundle
  getBundle(arg0: string, arg1: java.util.Locale): java.util.ResourceBundle
  getBundle(
    arg0: string,
    arg1: java.util.Locale,
    arg2: any /*java.util.ResourceBundle$Control*/
  ): java.util.ResourceBundle
  getBundle(arg0: string, arg1: any /*java.util.ResourceBundle$Control*/): java.util.ResourceBundle
  clearCache(): void
  clearCache(arg0: java.lang.ClassLoader): void
  getBundle(arg0: string, arg1: any /*java.lang.Module*/): java.util.ResourceBundle
  getBundle(arg0: string, arg1: java.util.Locale, arg2: java.lang.ClassLoader): java.util.ResourceBundle
  getBundle(
    arg0: string,
    arg1: java.util.Locale,
    arg2: java.lang.ClassLoader,
    arg3: any /*java.util.ResourceBundle$Control*/
  ): java.util.ResourceBundle
  getBundle(arg0: string, arg1: java.util.Locale, arg2: any /*java.lang.Module*/): java.util.ResourceBundle
}

export const ResourceBundle: ResourceBundleStatic = Packages.java.util.ResourceBundle

interface ScannerStatic {
  readonly class: any
  new (arg0: java.io.InputStream, arg1: string): java.util.Scanner
  new (arg0: java.io.InputStream): java.util.Scanner
  new (arg0: java.lang.Readable): java.util.Scanner
  new (arg0: java.io.File): java.util.Scanner
  new (arg0: java.io.File, arg1: any /*java.nio.charset.Charset*/): java.util.Scanner
  new (arg0: java.io.InputStream, arg1: any /*java.nio.charset.Charset*/): java.util.Scanner
  new (arg0: any /*java.nio.channels.ReadableByteChannel*/): java.util.Scanner
  new (arg0: any /*java.nio.channels.ReadableByteChannel*/, arg1: string): java.util.Scanner
  new (arg0: any /*java.nio.channels.ReadableByteChannel*/, arg1: any /*java.nio.charset.Charset*/): java.util.Scanner
  new (arg0: java.io.File, arg1: string): java.util.Scanner
  new (arg0: any /*java.nio.file.Path*/): java.util.Scanner
  new (arg0: any /*java.nio.file.Path*/, arg1: string): java.util.Scanner
  new (arg0: any /*java.nio.file.Path*/, arg1: any /*java.nio.charset.Charset*/): java.util.Scanner
  new (arg0: string): java.util.Scanner
}

export const Scanner: ScannerStatic = Packages.java.util.Scanner

interface ServiceLoaderStatic {
  readonly class: any
  load<S>(arg0: java.lang.Class<S>): java.util.ServiceLoader<S>
  load<S>(arg0: java.lang.Class<S>, arg1: java.lang.ClassLoader): java.util.ServiceLoader<S>
  load<S>(arg0: any /*java.lang.ModuleLayer*/, arg1: java.lang.Class<S>): java.util.ServiceLoader<S>
  loadInstalled<S>(arg0: java.lang.Class<S>): java.util.ServiceLoader<S>
}

export const ServiceLoader: ServiceLoaderStatic = Packages.java.util.ServiceLoader

interface SetStatic {
  readonly class: any
  copyOf<E>(arg0: java.util.Collection<E>): java.util.Set<E>
  of<E>(): java.util.Set<E>
  of<E>(arg0: E): java.util.Set<E>
  of<E>(arg0: E, arg1: E): java.util.Set<E>
  of<E>(arg0: E, arg1: E, arg2: E): java.util.Set<E>
  of<E>(arg0: E, arg1: E, arg2: E, arg3: E): java.util.Set<E>
  of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): java.util.Set<E>
  of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): java.util.Set<E>
  of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): java.util.Set<E>
  of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): java.util.Set<E>
  of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): java.util.Set<E>
  of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): java.util.Set<E>
  of<E>(...arg0: E[]): java.util.Set<E>
}

export const Set: SetStatic = Packages.java.util.Set

interface SimpleTimeZoneStatic {
  readonly class: any
  new (
    arg0: int,
    arg1: string,
    arg2: int,
    arg3: int,
    arg4: int,
    arg5: int,
    arg6: int,
    arg7: int,
    arg8: int,
    arg9: int,
    arg10: int,
    arg11: int,
    arg12: int
  ): java.util.SimpleTimeZone
  new (
    arg0: int,
    arg1: string,
    arg2: int,
    arg3: int,
    arg4: int,
    arg5: int,
    arg6: int,
    arg7: int,
    arg8: int,
    arg9: int,
    arg10: int
  ): java.util.SimpleTimeZone
  new (
    arg0: int,
    arg1: string,
    arg2: int,
    arg3: int,
    arg4: int,
    arg5: int,
    arg6: int,
    arg7: int,
    arg8: int,
    arg9: int
  ): java.util.SimpleTimeZone
  new (arg0: int, arg1: string): java.util.SimpleTimeZone
  getDefault(): java.util.TimeZone
  getTimeZone(arg0: any /*java.time.ZoneId*/): java.util.TimeZone
  getAvailableIDs(): [string]
  getAvailableIDs(arg0: int): [string]
  getTimeZone(arg0: string): java.util.TimeZone
  setDefault(arg0: java.util.TimeZone): void
}

export const SimpleTimeZone: SimpleTimeZoneStatic = Packages.java.util.SimpleTimeZone

interface SortedMapStatic {
  readonly class: any
}

export const SortedMap: SortedMapStatic = Packages.java.util.SortedMap

interface SortedSetStatic {
  readonly class: any
}

export const SortedSet: SortedSetStatic = Packages.java.util.SortedSet

interface SpliteratorStatic {
  readonly class: any
}

export const Spliterator: SpliteratorStatic = Packages.java.util.Spliterator

interface SpliteratorsStatic {
  readonly class: any
  iterator<T>(arg0: java.util.Spliterator<T>): java.util.Iterator<T>
  emptySpliterator<T>(): java.util.Spliterator<T>
  spliterator<T>(arg0: [java.lang.Object], arg1: int): java.util.Spliterator<T>
  spliterator<T>(arg0: [java.lang.Object], arg1: int, arg2: int, arg3: int): java.util.Spliterator<T>
  spliterator<T>(arg0: java.util.Collection<T>, arg1: int): java.util.Spliterator<T>
  spliterator<T>(arg0: java.util.Iterator<T>, arg1: long, arg2: int): java.util.Spliterator<T>
  spliteratorUnknownSize<T>(arg0: java.util.Iterator<T>, arg1: int): java.util.Spliterator<T>
  iterator(arg0: any /*java.util.Spliterator$OfDouble*/): any /*java.util.PrimitiveIterator$OfDouble*/
  iterator(arg0: any /*java.util.Spliterator$OfInt*/): any /*java.util.PrimitiveIterator$OfInt*/
  iterator(arg0: any /*java.util.Spliterator$OfLong*/): any /*java.util.PrimitiveIterator$OfLong*/
  emptyDoubleSpliterator(): any /*java.util.Spliterator$OfDouble*/
  spliterator(arg0: [double], arg1: int): any /*java.util.Spliterator$OfDouble*/
  spliterator(arg0: [double], arg1: int, arg2: int, arg3: int): any /*java.util.Spliterator$OfDouble*/
  spliterator(
    arg0: any /*java.util.PrimitiveIterator$OfDouble*/,
    arg1: long,
    arg2: int
  ): any /*java.util.Spliterator$OfDouble*/
  spliteratorUnknownSize(
    arg0: any /*java.util.PrimitiveIterator$OfDouble*/,
    arg1: int
  ): any /*java.util.Spliterator$OfDouble*/
  emptyIntSpliterator(): any /*java.util.Spliterator$OfInt*/
  spliterator(arg0: [int], arg1: int): any /*java.util.Spliterator$OfInt*/
  spliterator(arg0: [int], arg1: int, arg2: int, arg3: int): any /*java.util.Spliterator$OfInt*/
  spliterator(
    arg0: any /*java.util.PrimitiveIterator$OfInt*/,
    arg1: long,
    arg2: int
  ): any /*java.util.Spliterator$OfInt*/
  spliteratorUnknownSize(
    arg0: any /*java.util.PrimitiveIterator$OfInt*/,
    arg1: int
  ): any /*java.util.Spliterator$OfInt*/
  emptyLongSpliterator(): any /*java.util.Spliterator$OfLong*/
  spliterator(
    arg0: any /*java.util.PrimitiveIterator$OfLong*/,
    arg1: long,
    arg2: int
  ): any /*java.util.Spliterator$OfLong*/
  spliterator(arg0: [long], arg1: int): any /*java.util.Spliterator$OfLong*/
  spliterator(arg0: [long], arg1: int, arg2: int, arg3: int): any /*java.util.Spliterator$OfLong*/
  spliteratorUnknownSize(
    arg0: any /*java.util.PrimitiveIterator$OfLong*/,
    arg1: int
  ): any /*java.util.Spliterator$OfLong*/
}

export const Spliterators: SpliteratorsStatic = Packages.java.util.Spliterators

interface SplittableRandomStatic {
  readonly class: any
  new (arg0: long): java.util.SplittableRandom
  new (): java.util.SplittableRandom
}

export const SplittableRandom: SplittableRandomStatic = Packages.java.util.SplittableRandom

interface StackStatic {
  readonly class: any
  new <E>(): java.util.Stack<E>
}

export const Stack: StackStatic = Packages.java.util.Stack

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

interface StringJoinerStatic {
  readonly class: any
  new (arg0: java.lang.CharSequence): java.util.StringJoiner
  new (arg0: java.lang.CharSequence, arg1: java.lang.CharSequence, arg2: java.lang.CharSequence): java.util.StringJoiner
}

export const StringJoiner: StringJoinerStatic = Packages.java.util.StringJoiner

interface StringTokenizerStatic {
  readonly class: any
  new (arg0: string, arg1: string): java.util.StringTokenizer
  new (arg0: string, arg1: string, arg2: boolean): java.util.StringTokenizer
  new (arg0: string): java.util.StringTokenizer
}

export const StringTokenizer: StringTokenizerStatic = Packages.java.util.StringTokenizer

interface TimerStatic {
  readonly class: any
  new (arg0: string, arg1: boolean): java.util.Timer
  new (arg0: boolean): java.util.Timer
  new (): java.util.Timer
  new (arg0: string): java.util.Timer
}

export const Timer: TimerStatic = Packages.java.util.Timer

interface TimerTaskStatic {
  readonly class: any
}

export const TimerTask: TimerTaskStatic = Packages.java.util.TimerTask

interface TimeZoneStatic {
  readonly class: any
  new (): java.util.TimeZone
  getDefault(): java.util.TimeZone
  getTimeZone(arg0: any /*java.time.ZoneId*/): java.util.TimeZone
  getAvailableIDs(): [string]
  getAvailableIDs(arg0: int): [string]
  getTimeZone(arg0: string): java.util.TimeZone
  setDefault(arg0: java.util.TimeZone): void
}

export const TimeZone: TimeZoneStatic = Packages.java.util.TimeZone

interface TreeMapStatic {
  readonly class: any
  new <K, V>(arg0: java.util.SortedMap<K, V>): java.util.TreeMap<K, V>
  new <K, V>(arg0: java.util.Map<K, V>): java.util.TreeMap<K, V>
  new <K, V>(arg0: java.util.Comparator<K>): java.util.TreeMap<K, V>
  new <K, V>(): java.util.TreeMap<K, V>
}

export const TreeMap: TreeMapStatic = Packages.java.util.TreeMap

interface TreeSetStatic {
  readonly class: any
  new <E>(arg0: java.util.SortedSet<E>): java.util.TreeSet<E>
  new <E>(arg0: java.util.Collection<E>): java.util.TreeSet<E>
  new <E>(arg0: java.util.Comparator<E>): java.util.TreeSet<E>
  new <E>(): java.util.TreeSet<E>
}

export const TreeSet: TreeSetStatic = Packages.java.util.TreeSet

interface UUIDStatic {
  readonly class: any
  new (arg0: long, arg1: long): java.util.UUID
  fromString(arg0: string): java.util.UUID
  nameUUIDFromBytes(arg0: bytearray): java.util.UUID
  randomUUID(): java.util.UUID
}

export const UUID: UUIDStatic = Packages.java.util.UUID

interface VectorStatic {
  readonly class: any
  new <E>(arg0: java.util.Collection<E>): java.util.Vector<E>
  new <E>(): java.util.Vector<E>
  new <E>(arg0: int): java.util.Vector<E>
  new <E>(arg0: int, arg1: int): java.util.Vector<E>
}

export const Vector: VectorStatic = Packages.java.util.Vector

interface WeakHashMapStatic {
  readonly class: any
  new <K, V>(arg0: java.util.Map<K, V>): java.util.WeakHashMap<K, V>
  new <K, V>(arg0: int): java.util.WeakHashMap<K, V>
  new <K, V>(arg0: int, arg1: float): java.util.WeakHashMap<K, V>
  new <K, V>(): java.util.WeakHashMap<K, V>
}

export const WeakHashMap: WeakHashMapStatic = Packages.java.util.WeakHashMap
