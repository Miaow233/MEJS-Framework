/**
 * 即 "消息链", 被用于承载整个消息内容的数据结构, 包含有一有序列表, 包含有继承了 Element 的各式类实例.
 *
 * @example 1. 你可以使用 `MessageChain.create` 方法创建一个消息链:
 * ```javascript
 * MessageChain.create([
 *     Plain("这是盛放在这个消息链中的一个 Plain 元素")
 * ])
 * ```
 *
 * @example 2. `MessageChain.has` 方法可用于判断特定的元素类型是否存在于消息链中:
 * ```javascript
 * console.log(message.has(At))
 * ```
 *
 * @example 3. 可以使用 `MessageChain.get` 方法获取消息链中的所有特定类型的元素:
 * ```javascript
 * console.log(message.get(At))
 * console.log(message.get(Image)) // -> Array[Image]
 * ```
 *
 * @example 4. 使用 `MessageChain.asDisplay` 方法可以获取到字符串形式表示的消息, 至于字面意思, 看示例:
 * ```javascript
 * console.log(MessageChain.create([
 *     Plain("text"), At(123, display="某人"), Image(...)
 * ]).asDisplay()) // -> "text@某人 [图片]"
 *
 * @example 5. 使用 `MessageChain.join` 方法可以拼接多个消息链:
 * MessageChain.join(
 *     message1, message2, message3, ...
 * ) // -> MessageChain
 */

class MessageChain {
  #root = []
  /**
   * 从传入的序列创建消息链.
   * @param {Array<Element>} elements 包含且仅包含消息元素的序列
   * @returns {MessageChain} 以传入的序列作为所承载消息的消息链
   */
  create(...elements) {
    return (this.#root = elements)
  }

  /**
   * 内部接口, 会自动将作为外部态的消息元素转为内部态.
   * @param {Array<T>} obj 需要反序列化的对象
   * @returns {MessageChain} 反序列化后的对象
   */
  parse_obj(obj) {
    handled_elements = []
    for (let element of obj) {
      if (element instanceof Element) {
        handled_elements.push(element)
      } else if (element instanceof Array && 'type' in element) {
        handled_elements.push(Element.create(element))
      }
    }
    return (this.#root = handled_elements)
  }

  /**
   * 判断消息链中是否含有特定类型的消息元素
   * @param {Class<Element>} type 需要判断的消息元素的类型, 例如 "Plain", "At", "Image" 等.
   * @returns {boolean} 判断结果
   */
  has(type) {
    return this.#root.some((element) => element instanceof type)
  }
}
