class java.lang.reflect.Method extends java.lang.reflect.AbstractMethod {
// Constructors
public constructor() {
return new Packages.java.lang.reflect.Method()
}
// Methods
private native getAnnotationNative(cla: Class): Annotation {
return this.getAnnotationNative(cla)
}
private native getParameterAnnotationsNative(): Annotation[] {
return this.getParameterAnnotationsNative()
}
equalNameAndParameters(met: Method): boolean {
return this.equalNameAndParameters(met)
}
public equals(obj: Object): boolean {
return this.equals(obj)
}
public getAnnotation(cla: Class): Annotation {
return this.getAnnotation(cla)
}
public getDeclaringClass(): Class {
return this.getDeclaringClass()
}
public native getDefaultValue(): Object {
return this.getDefaultValue()
}
public native getExceptionTypes(): Class[] {
return this.getExceptionTypes()
}
public getGenericExceptionTypes(): Type[] {
return this.getGenericExceptionTypes()
}
public getGenericParameterTypes(): Type[] {
return this.getGenericParameterTypes()
}
public getGenericReturnType(): Type {
return this.getGenericReturnType()
}
public getModifiers(): number {
return this.getModifiers()
}
public getName(): string {
return this.getName()
}
public getParameterAnnotations(): Annotation[] {
return this.getParameterAnnotations()
}
public getParameterTypes(): Class[] {
return this.getParameterTypes()
}
public getReturnType(): Class {
return this.getReturnType()
}
getSignature(): string {
return this.getSignature()
}
public getTypeParameters(): TypeVariable[] {
return this.getTypeParameters()
}
public hashCode(): number {
return this.hashCode()
}
public transient native invoke(obj: Object, obj_1: Object[]): Object {
return this.invoke(obj, obj_1)
}
public isBridge(): boolean {
return this.isBridge()
}
public isDefault(): boolean {
return this.isDefault()
}
public isSynthetic(): boolean {
return this.isSynthetic()
}
public isVarArgs(): boolean {
return this.isVarArgs()
}
public toGenericString(): string {
return this.toGenericString()
}
public toString(): string {
return this.toString()
}
// Fields
public static ORDER_BY_SIGNATURE: Comparator
}