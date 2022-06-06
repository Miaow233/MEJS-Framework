# JSON

JSON->object() → 如果你写的是 JSONObject 的话【开头】必是这个（与下面那个配套的）

JSON->endObject() → 如果你写的是 JSONObject 的话【结尾】必是这个（与上面那个配套的）

JSON->array() → 如果你写的是 JSONArray 的话【开头】必是这个（与下面那个配套的）

JSON->endArray() → 如果你写的是 JSONArray 的话【结尾】必是这个（与上面面那个配套的）

JSON->key(key) → 添加 键

JSON->value(value) → 添加 值

JSON->booleanValue(value) → 添加 布尔值

JSON->longValueongValue(value) → 添加 数值

JSON->doubleValue(value) → 添加 浮点值


JSON->toString() 输出结果

JSON->clear() 清空

//例子
```
创建json
json:
JSON->object()
JSON->key(key)
JSON->array()
JSON->value(1)
JSON->value(2)
JSON->value(3)
JSON->endArray()
JSON->endObject()
JSON->toString()
```