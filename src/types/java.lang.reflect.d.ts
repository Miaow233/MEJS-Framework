declare namespace java.lang.reflect {
  class AccessibleObject /* extends java.lang.Object implements AnnotatedElement*/ {
    canAccess(arg0: java.lang.Object): boolean
    equals(arg0: java.lang.Object): boolean
    getAnnotation<T>(arg0: java.lang.Class<T>): T
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getDeclaredAnnotation<T>(arg0: java.lang.Class<T>): T
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    isAccessible(): boolean
    isAnnotationPresent(arg0: java.lang.Class<any /*java.lang.annotation.Annotation*/>): boolean
    setAccessible(arg0: boolean): void
    static setAccessible(arg0: [AccessibleObject], arg1: boolean): void
    toString(): string
    trySetAccessible(): boolean
  } // end AccessibleObject
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  interface AnnotatedArrayType /* extends AnnotatedType*/ {
    getAnnotatedGenericComponentType(): AnnotatedType
    getAnnotatedOwnerType(): AnnotatedType
    getAnnotation<T>(arg0: java.lang.Class<T>): T
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getDeclaredAnnotation<T>(arg0: java.lang.Class<T>): T
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getType(): Type
    isAnnotationPresent(arg0: java.lang.Class<any /*java.lang.annotation.Annotation*/>): boolean
  } // end AnnotatedArrayType
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  interface AnnotatedElement {
    getAnnotation<T>(arg0: java.lang.Class<T>): T
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getDeclaredAnnotation<T>(arg0: java.lang.Class<T>): T
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    isAnnotationPresent(arg0: java.lang.Class<any /*java.lang.annotation.Annotation*/>): boolean
  } // end AnnotatedElement
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  interface AnnotatedParameterizedType /* extends AnnotatedType*/ {
    getAnnotatedActualTypeArguments(): [AnnotatedType]
    getAnnotatedOwnerType(): AnnotatedType
    getAnnotation<T>(arg0: java.lang.Class<T>): T
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getDeclaredAnnotation<T>(arg0: java.lang.Class<T>): T
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getType(): Type
    isAnnotationPresent(arg0: java.lang.Class<any /*java.lang.annotation.Annotation*/>): boolean
  } // end AnnotatedParameterizedType
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  interface AnnotatedType /* extends AnnotatedElement*/ {
    getAnnotatedOwnerType(): AnnotatedType
    getAnnotation<T>(arg0: java.lang.Class<T>): T
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getDeclaredAnnotation<T>(arg0: java.lang.Class<T>): T
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getType(): Type
    isAnnotationPresent(arg0: java.lang.Class<any /*java.lang.annotation.Annotation*/>): boolean
  } // end AnnotatedType
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  interface AnnotatedTypeVariable /* extends AnnotatedType*/ {
    getAnnotatedBounds(): [AnnotatedType]
    getAnnotatedOwnerType(): AnnotatedType
    getAnnotation<T>(arg0: java.lang.Class<T>): T
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getDeclaredAnnotation<T>(arg0: java.lang.Class<T>): T
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getType(): Type
    isAnnotationPresent(arg0: java.lang.Class<any /*java.lang.annotation.Annotation*/>): boolean
  } // end AnnotatedTypeVariable
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  interface AnnotatedWildcardType /* extends AnnotatedType*/ {
    getAnnotatedLowerBounds(): [AnnotatedType]
    getAnnotatedOwnerType(): AnnotatedType
    getAnnotatedUpperBounds(): [AnnotatedType]
    getAnnotation<T>(arg0: java.lang.Class<T>): T
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getDeclaredAnnotation<T>(arg0: java.lang.Class<T>): T
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getType(): Type
    isAnnotationPresent(arg0: java.lang.Class<any /*java.lang.annotation.Annotation*/>): boolean
  } // end AnnotatedWildcardType
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  class Array /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    static get(arg0: java.lang.Object, arg1: int): java.lang.Object
    static getBoolean(arg0: java.lang.Object, arg1: int): boolean
    static getByte(arg0: java.lang.Object, arg1: int): byte
    static getChar(arg0: java.lang.Object, arg1: int): char
    static getDouble(arg0: java.lang.Object, arg1: int): double
    static getFloat(arg0: java.lang.Object, arg1: int): float
    static getInt(arg0: java.lang.Object, arg1: int): int
    static getLength(arg0: java.lang.Object): int
    static getLong(arg0: java.lang.Object, arg1: int): long
    static getShort(arg0: java.lang.Object, arg1: int): short
    static newInstance(arg0: java.lang.Class<java.lang.Object>, ...arg1: int[]): java.lang.Object
    static newInstance(arg0: java.lang.Class<java.lang.Object>, arg1: int): java.lang.Object
    static set(arg0: java.lang.Object, arg1: int, arg2: java.lang.Object): void
    static setBoolean(arg0: java.lang.Object, arg1: int, arg2: boolean): void
    static setByte(arg0: java.lang.Object, arg1: int, arg2: byte): void
    static setChar(arg0: java.lang.Object, arg1: int, arg2: char): void
    static setDouble(arg0: java.lang.Object, arg1: int, arg2: double): void
    static setFloat(arg0: java.lang.Object, arg1: int, arg2: float): void
    static setInt(arg0: java.lang.Object, arg1: int, arg2: int): void
    static setLong(arg0: java.lang.Object, arg1: int, arg2: long): void
    static setShort(arg0: java.lang.Object, arg1: int, arg2: short): void
    toString(): string
  } // end Array
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  class Constructor<T> /* extends Executable*/ {
    canAccess(arg0: java.lang.Object): boolean
    equals(arg0: java.lang.Object): boolean
    getAnnotatedExceptionTypes(): [AnnotatedType]
    getAnnotatedParameterTypes(): [AnnotatedType]
    getAnnotatedReceiverType(): AnnotatedType
    getAnnotatedReturnType(): AnnotatedType
    getAnnotation(arg0: java.lang.Class<T>): T
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType(arg0: java.lang.Class<T>): [T]
    getDeclaredAnnotation(arg0: java.lang.Class<T>): T
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType(arg0: java.lang.Class<T>): [T]
    getDeclaringClass(): java.lang.Class<T>
    getExceptionTypes(): [java.lang.Class<java.lang.Object>]
    getGenericExceptionTypes(): [Type]
    getGenericParameterTypes(): [Type]
    getModifiers(): int
    getName(): string
    getParameterAnnotations(): [[any /*java.lang.annotation.Annotation*/]]
    getParameterCount(): int
    getParameterTypes(): [java.lang.Class<java.lang.Object>]
    getParameters(): [Parameter]
    getTypeParameters(): [TypeVariable<Constructor<T>>]
    isAccessible(): boolean
    isAnnotationPresent(arg0: java.lang.Class<any /*java.lang.annotation.Annotation*/>): boolean
    isSynthetic(): boolean
    isVarArgs(): boolean
    newInstance(...arg0: java.lang.Object[]): T
    setAccessible(arg0: boolean): void
    static setAccessible(arg0: [AccessibleObject], arg1: boolean): void
    toGenericString(): string
    toString(): string
    trySetAccessible(): boolean
  } // end Constructor
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  class Executable /* extends AccessibleObject implements Member, GenericDeclaration*/ {
    canAccess(arg0: java.lang.Object): boolean
    equals(arg0: java.lang.Object): boolean
    getAnnotatedExceptionTypes(): [AnnotatedType]
    getAnnotatedParameterTypes(): [AnnotatedType]
    getAnnotatedReceiverType(): AnnotatedType
    getAnnotatedReturnType(): AnnotatedType
    getAnnotation<T>(arg0: java.lang.Class<T>): T
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getDeclaredAnnotation<T>(arg0: java.lang.Class<T>): T
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getDeclaringClass(): java.lang.Class<java.lang.Object>
    getExceptionTypes(): [java.lang.Class<java.lang.Object>]
    getGenericExceptionTypes(): [Type]
    getGenericParameterTypes(): [Type]
    getModifiers(): int
    getName(): string
    getParameterAnnotations(): [[any /*java.lang.annotation.Annotation*/]]
    getParameterCount(): int
    getParameterTypes(): [java.lang.Class<java.lang.Object>]
    getParameters(): [Parameter]
    getTypeParameters(): [TypeVariable<java.lang.Object>]
    isAccessible(): boolean
    isAnnotationPresent(arg0: java.lang.Class<any /*java.lang.annotation.Annotation*/>): boolean
    isSynthetic(): boolean
    isVarArgs(): boolean
    setAccessible(arg0: boolean): void
    static setAccessible(arg0: [AccessibleObject], arg1: boolean): void
    toGenericString(): string
    toString(): string
    trySetAccessible(): boolean
  } // end Executable
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  class Field /* extends AccessibleObject implements Member*/ {
    canAccess(arg0: java.lang.Object): boolean
    equals(arg0: java.lang.Object): boolean
    get(arg0: java.lang.Object): java.lang.Object
    getAnnotatedType(): AnnotatedType
    getAnnotation<T>(arg0: java.lang.Class<T>): T
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getBoolean(arg0: java.lang.Object): boolean
    getByte(arg0: java.lang.Object): byte
    getChar(arg0: java.lang.Object): char
    getDeclaredAnnotation<T>(arg0: java.lang.Class<T>): T
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getDeclaringClass(): java.lang.Class<java.lang.Object>
    getDouble(arg0: java.lang.Object): double
    getFloat(arg0: java.lang.Object): float
    getGenericType(): Type
    getInt(arg0: java.lang.Object): int
    getLong(arg0: java.lang.Object): long
    getModifiers(): int
    getName(): string
    getShort(arg0: java.lang.Object): short
    getType(): java.lang.Class<java.lang.Object>
    isAccessible(): boolean
    isAnnotationPresent(arg0: java.lang.Class<any /*java.lang.annotation.Annotation*/>): boolean
    isEnumConstant(): boolean
    isSynthetic(): boolean
    set(arg0: java.lang.Object, arg1: java.lang.Object): void
    setAccessible(arg0: boolean): void
    setBoolean(arg0: java.lang.Object, arg1: boolean): void
    setByte(arg0: java.lang.Object, arg1: byte): void
    setChar(arg0: java.lang.Object, arg1: char): void
    setDouble(arg0: java.lang.Object, arg1: double): void
    setFloat(arg0: java.lang.Object, arg1: float): void
    setInt(arg0: java.lang.Object, arg1: int): void
    setLong(arg0: java.lang.Object, arg1: long): void
    setShort(arg0: java.lang.Object, arg1: short): void
    static setAccessible(arg0: [AccessibleObject], arg1: boolean): void
    toGenericString(): string
    toString(): string
    trySetAccessible(): boolean
  } // end Field
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  interface GenericArrayType /* extends Type*/ {
    getGenericComponentType(): Type
    getTypeName(): string
  } // end GenericArrayType
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  interface GenericDeclaration /* extends AnnotatedElement*/ {
    getAnnotation<T>(arg0: java.lang.Class<T>): T
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getDeclaredAnnotation<T>(arg0: java.lang.Class<T>): T
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getTypeParameters(): [TypeVariable<java.lang.Object>]
    isAnnotationPresent(arg0: java.lang.Class<any /*java.lang.annotation.Annotation*/>): boolean
  } // end GenericDeclaration
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  interface InvocationHandler {
    invoke(arg0: java.lang.Object, arg1: Method, arg2: [java.lang.Object]): java.lang.Object
  } // end InvocationHandler
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  interface Member {
    getDeclaringClass(): java.lang.Class<java.lang.Object>
    getModifiers(): int
    getName(): string
    isSynthetic(): boolean
  } // end Member
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  class Method /* extends Executable*/ {
    canAccess(arg0: java.lang.Object): boolean
    equals(arg0: java.lang.Object): boolean
    getAnnotatedExceptionTypes(): [AnnotatedType]
    getAnnotatedParameterTypes(): [AnnotatedType]
    getAnnotatedReceiverType(): AnnotatedType
    getAnnotatedReturnType(): AnnotatedType
    getAnnotation<T>(arg0: java.lang.Class<T>): T
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getDeclaredAnnotation<T>(arg0: java.lang.Class<T>): T
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getDeclaringClass(): java.lang.Class<java.lang.Object>
    getDefaultValue(): java.lang.Object
    getExceptionTypes(): [java.lang.Class<java.lang.Object>]
    getGenericExceptionTypes(): [Type]
    getGenericParameterTypes(): [Type]
    getGenericReturnType(): Type
    getModifiers(): int
    getName(): string
    getParameterAnnotations(): [[any /*java.lang.annotation.Annotation*/]]
    getParameterCount(): int
    getParameterTypes(): [java.lang.Class<java.lang.Object>]
    getParameters(): [Parameter]
    getReturnType(): java.lang.Class<java.lang.Object>
    getTypeParameters(): [TypeVariable<Method>]
    invoke(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
    isAccessible(): boolean
    isAnnotationPresent(arg0: java.lang.Class<any /*java.lang.annotation.Annotation*/>): boolean
    isBridge(): boolean
    isDefault(): boolean
    isSynthetic(): boolean
    isVarArgs(): boolean
    setAccessible(arg0: boolean): void
    static setAccessible(arg0: [AccessibleObject], arg1: boolean): void
    toGenericString(): string
    toString(): string
    trySetAccessible(): boolean
  } // end Method
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  class Modifier /* extends java.lang.Object*/ {
    equals(arg0: java.lang.Object): boolean
    static classModifiers(): int
    static constructorModifiers(): int
    static fieldModifiers(): int
    static interfaceModifiers(): int
    static isAbstract(arg0: int): boolean
    static isFinal(arg0: int): boolean
    static isInterface(arg0: int): boolean
    static isNative(arg0: int): boolean
    static isPrivate(arg0: int): boolean
    static isProtected(arg0: int): boolean
    static isPublic(arg0: int): boolean
    static isStatic(arg0: int): boolean
    static isStrict(arg0: int): boolean
    static isSynchronized(arg0: int): boolean
    static isTransient(arg0: int): boolean
    static isVolatile(arg0: int): boolean
    static methodModifiers(): int
    static parameterModifiers(): int
    static toString(arg0: int): string
    toString(): string
  } // end Modifier
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  class Parameter /* extends java.lang.Object implements AnnotatedElement*/ {
    equals(arg0: java.lang.Object): boolean
    getAnnotatedType(): AnnotatedType
    getAnnotation<T>(arg0: java.lang.Class<T>): T
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getDeclaredAnnotation<T>(arg0: java.lang.Class<T>): T
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getDeclaringExecutable(): Executable
    getModifiers(): int
    getName(): string
    getParameterizedType(): Type
    getType(): java.lang.Class<java.lang.Object>
    isAnnotationPresent(arg0: java.lang.Class<any /*java.lang.annotation.Annotation*/>): boolean
    isImplicit(): boolean
    isNamePresent(): boolean
    isSynthetic(): boolean
    isVarArgs(): boolean
    toString(): string
  } // end Parameter
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  interface ParameterizedType /* extends Type*/ {
    getActualTypeArguments(): [Type]
    getOwnerType(): Type
    getRawType(): Type
    getTypeName(): string
  } // end ParameterizedType
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  class Proxy /* extends java.lang.Object implements java.io.Serializable*/ {
    equals(arg0: java.lang.Object): boolean
    static getInvocationHandler(arg0: java.lang.Object): InvocationHandler
    static getProxyClass(
      arg0: java.lang.ClassLoader,
      ...arg1: java.lang.Class<java.lang.Object>[]
    ): java.lang.Class<java.lang.Object>
    static isProxyClass(arg0: java.lang.Class<java.lang.Object>): boolean
    static newProxyInstance(
      arg0: java.lang.ClassLoader,
      arg1: [java.lang.Class<java.lang.Object>],
      arg2: InvocationHandler
    ): java.lang.Object
    toString(): string
  } // end Proxy
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  class ReflectPermission /* extends java.security.BasicPermission*/ {
    checkGuard(arg0: java.lang.Object): void
    equals(arg0: java.lang.Object): boolean
    getActions(): string
    getName(): string
    implies(arg0: any /*java.security.Permission*/): boolean
    newPermissionCollection(): any /*java.security.PermissionCollection*/
    toString(): string
  } // end ReflectPermission
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  interface Type {
    getTypeName(): string
  } // end Type
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  interface TypeVariable<D> /* extends Type, AnnotatedElement*/ {
    getAnnotatedBounds(): [AnnotatedType]
    getAnnotation<T>(arg0: java.lang.Class<T>): T
    getAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getBounds(): [Type]
    getDeclaredAnnotation<T>(arg0: java.lang.Class<T>): T
    getDeclaredAnnotations(): [any /*java.lang.annotation.Annotation*/]
    getDeclaredAnnotationsByType<T>(arg0: java.lang.Class<T>): [T]
    getGenericDeclaration(): D
    getName(): string
    getTypeName(): string
    isAnnotationPresent(arg0: java.lang.Class<any /*java.lang.annotation.Annotation*/>): boolean
  } // end TypeVariable
} // end namespace java.lang.reflect
declare namespace java.lang.reflect {
  interface WildcardType /* extends Type*/ {
    getLowerBounds(): [Type]
    getTypeName(): string
    getUpperBounds(): [Type]
  } // end WildcardType
} // end namespace java.lang.reflect
