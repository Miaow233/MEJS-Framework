interface AccessibleObjectStatic {
  readonly class: any
  setAccessible(arg0: [java.lang.reflect.AccessibleObject], arg1: boolean): void
}

export const AccessibleObject: AccessibleObjectStatic = Packages.java.lang.reflect.AccessibleObject

interface AnnotatedArrayTypeStatic {
  readonly class: any
}

export const AnnotatedArrayType: AnnotatedArrayTypeStatic = Packages.java.lang.reflect.AnnotatedArrayType

interface AnnotatedElementStatic {
  readonly class: any
}

export const AnnotatedElement: AnnotatedElementStatic = Packages.java.lang.reflect.AnnotatedElement

interface AnnotatedParameterizedTypeStatic {
  readonly class: any
}

export const AnnotatedParameterizedType: AnnotatedParameterizedTypeStatic =
  Packages.java.lang.reflect.AnnotatedParameterizedType

interface AnnotatedTypeStatic {
  readonly class: any
}

export const AnnotatedType: AnnotatedTypeStatic = Packages.java.lang.reflect.AnnotatedType

interface AnnotatedTypeVariableStatic {
  readonly class: any
}

export const AnnotatedTypeVariable: AnnotatedTypeVariableStatic = Packages.java.lang.reflect.AnnotatedTypeVariable

interface AnnotatedWildcardTypeStatic {
  readonly class: any
}

export const AnnotatedWildcardType: AnnotatedWildcardTypeStatic = Packages.java.lang.reflect.AnnotatedWildcardType

interface ArrayStatic {
  readonly class: any
  newInstance(arg0: java.lang.Class<java.lang.Object>, arg1: int): java.lang.Object
  newInstance(arg0: java.lang.Class<java.lang.Object>, ...arg1: int[]): java.lang.Object
  getBoolean(arg0: java.lang.Object, arg1: int): boolean
  getByte(arg0: java.lang.Object, arg1: int): byte
  getChar(arg0: java.lang.Object, arg1: int): char
  getDouble(arg0: java.lang.Object, arg1: int): double
  getFloat(arg0: java.lang.Object, arg1: int): float
  getInt(arg0: java.lang.Object, arg1: int): int
  getLength(arg0: java.lang.Object): int
  get(arg0: java.lang.Object, arg1: int): java.lang.Object
  getLong(arg0: java.lang.Object, arg1: int): long
  getShort(arg0: java.lang.Object, arg1: int): short
  set(arg0: java.lang.Object, arg1: int, arg2: java.lang.Object): void
  setBoolean(arg0: java.lang.Object, arg1: int, arg2: boolean): void
  setByte(arg0: java.lang.Object, arg1: int, arg2: byte): void
  setChar(arg0: java.lang.Object, arg1: int, arg2: char): void
  setDouble(arg0: java.lang.Object, arg1: int, arg2: double): void
  setFloat(arg0: java.lang.Object, arg1: int, arg2: float): void
  setInt(arg0: java.lang.Object, arg1: int, arg2: int): void
  setLong(arg0: java.lang.Object, arg1: int, arg2: long): void
  setShort(arg0: java.lang.Object, arg1: int, arg2: short): void
}

export const Array: ArrayStatic = Packages.java.lang.reflect.Array

interface ConstructorStatic {
  readonly class: any
  setAccessible(arg0: [java.lang.reflect.AccessibleObject], arg1: boolean): void
}

export const Constructor: ConstructorStatic = Packages.java.lang.reflect.Constructor

interface ExecutableStatic {
  readonly class: any
  setAccessible(arg0: [java.lang.reflect.AccessibleObject], arg1: boolean): void
}

export const Executable: ExecutableStatic = Packages.java.lang.reflect.Executable

interface FieldStatic {
  readonly class: any
  setAccessible(arg0: [java.lang.reflect.AccessibleObject], arg1: boolean): void
}

export const Field: FieldStatic = Packages.java.lang.reflect.Field

interface GenericArrayTypeStatic {
  readonly class: any
}

export const GenericArrayType: GenericArrayTypeStatic = Packages.java.lang.reflect.GenericArrayType

interface GenericDeclarationStatic {
  readonly class: any
}

export const GenericDeclaration: GenericDeclarationStatic = Packages.java.lang.reflect.GenericDeclaration

interface InvocationHandlerStatic {
  readonly class: any
}

export const InvocationHandler: InvocationHandlerStatic = Packages.java.lang.reflect.InvocationHandler

interface MemberStatic {
  readonly class: any
}

export const Member: MemberStatic = Packages.java.lang.reflect.Member

interface MethodStatic {
  readonly class: any
  setAccessible(arg0: [java.lang.reflect.AccessibleObject], arg1: boolean): void
}

export const Method: MethodStatic = Packages.java.lang.reflect.Method

interface ModifierStatic {
  readonly class: any
  new (): java.lang.reflect.Modifier
  isAbstract(arg0: int): boolean
  isFinal(arg0: int): boolean
  isInterface(arg0: int): boolean
  isNative(arg0: int): boolean
  isPrivate(arg0: int): boolean
  isProtected(arg0: int): boolean
  isPublic(arg0: int): boolean
  isStatic(arg0: int): boolean
  isStrict(arg0: int): boolean
  isSynchronized(arg0: int): boolean
  isTransient(arg0: int): boolean
  isVolatile(arg0: int): boolean
  classModifiers(): int
  constructorModifiers(): int
  fieldModifiers(): int
  interfaceModifiers(): int
  methodModifiers(): int
  parameterModifiers(): int
  toString(arg0: int): string
}

export const Modifier: ModifierStatic = Packages.java.lang.reflect.Modifier

interface ParameterStatic {
  readonly class: any
}

export const Parameter: ParameterStatic = Packages.java.lang.reflect.Parameter

interface ParameterizedTypeStatic {
  readonly class: any
}

export const ParameterizedType: ParameterizedTypeStatic = Packages.java.lang.reflect.ParameterizedType

interface ProxyStatic {
  readonly class: any
  isProxyClass(arg0: java.lang.Class<java.lang.Object>): boolean
  getProxyClass(
    arg0: java.lang.ClassLoader,
    ...arg1: java.lang.Class<java.lang.Object>[]
  ): java.lang.Class<java.lang.Object>
  newProxyInstance(
    arg0: java.lang.ClassLoader,
    arg1: [java.lang.Class<java.lang.Object>],
    arg2: java.lang.reflect.InvocationHandler
  ): java.lang.Object
  getInvocationHandler(arg0: java.lang.Object): java.lang.reflect.InvocationHandler
}

export const Proxy: ProxyStatic = Packages.java.lang.reflect.Proxy

interface ReflectPermissionStatic {
  readonly class: any
  new (arg0: string): java.lang.reflect.ReflectPermission
  new (arg0: string, arg1: string): java.lang.reflect.ReflectPermission
}

export const ReflectPermission: ReflectPermissionStatic = Packages.java.lang.reflect.ReflectPermission

interface TypeStatic {
  readonly class: any
}

export const Type: TypeStatic = Packages.java.lang.reflect.Type

interface TypeVariableStatic {
  readonly class: any
}

export const TypeVariable: TypeVariableStatic = Packages.java.lang.reflect.TypeVariable

interface WildcardTypeStatic {
  readonly class: any
}

export const WildcardType: WildcardTypeStatic = Packages.java.lang.reflect.WildcardType
