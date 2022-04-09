class java.util.Map {
// Methods
public abstract clear(): void {
this.clear()
}
public compute(obj: Object, bif: BiFunction): Object {
return this.compute(obj, bif)
}
public computeIfAbsent(obj: Object, fun: Function): Object {
return this.computeIfAbsent(obj, fun)
}
public computeIfPresent(obj: Object, bif: BiFunction): Object {
return this.computeIfPresent(obj, bif)
}
public abstract containsKey(obj: Object): boolean {
return this.containsKey(obj)
}
public abstract containsValue(obj: Object): boolean {
return this.containsValue(obj)
}
public abstract entrySet(): Set {
return this.entrySet()
}
public abstract equals(obj: Object): boolean {
return this.equals(obj)
}
public forEach(bic: BiConsumer): void {
this.forEach(bic)
}
public abstract get(obj: Object): Object {
return this.get(obj)
}
public getOrDefault(obj: Object, obj_1: Object): Object {
return this.getOrDefault(obj, obj_1)
}
public abstract hashCode(): number {
return this.hashCode()
}
public abstract isEmpty(): boolean {
return this.isEmpty()
}
public abstract keySet(): Set {
return this.keySet()
}
public merge(obj: Object, obj_1: Object, bif: BiFunction): Object {
return this.merge(obj, obj_1, bif)
}
public abstract put(obj: Object, obj_1: Object): Object {
return this.put(obj, obj_1)
}
public abstract putAll(map: Map): void {
this.putAll(map)
}
public putIfAbsent(obj: Object, obj_1: Object): Object {
return this.putIfAbsent(obj, obj_1)
}
public abstract remove(obj: Object): Object {
return this.remove(obj)
}
public remove(obj: Object, obj_1: Object): boolean {
return this.remove(obj, obj_1)
}
public replace(obj: Object, obj_1: Object): Object {
return this.replace(obj, obj_1)
}
public replace(obj: Object, obj_1: Object, obj_2: Object): boolean {
return this.replace(obj, obj_1, obj_2)
}
public replaceAll(bif: BiFunction): void {
this.replaceAll(bif)
}
public abstract size(): number {
return this.size()
}
public abstract values(): Collection {
return this.values()
}
// Fields
}