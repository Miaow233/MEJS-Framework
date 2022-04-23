class Response implements Response {
  readonly result: string | ArrayBuffer
  readonly status: number
  readonly header: String[]
  constructor(result: string | ArrayBuffer, status: number, header: String[]) {
    this.result = result
    this.status = status
    this.header = header
  }
  get text() {
    return this.result.toString()
  }
  get json() {
    return JSON.parse(this.text)
  }
  toString(): string {
    return this.text
  }
}

namespace http {
  /**
   * 获取数据
   * @param url
   * @param headers
   * @returns {Promise<Response>}
   */
  export const get = async function (url: string, headers: object = {}): Promise<Response> {
    let { result, status, header } = await compat.access(url, headers)
    return new Response(result, status, header)
  }

  /**
   * 提交数据
   * @param url
   * @param data
   * @param headers
   * @returns {Promise<Response>}
   */
  export const post = async function (
    url: string,
    data: string | ArrayBuffer,
    headers: object = {}
  ): Promise<Response> {
    if (typeof data === 'string') {
      const { result, status, header } = await compat.access(url, headers, data)
      return new Response(result, status, header)
    } else {
      const { result, status, header } = await compat.access(url, headers, data)
      return new Response(result, status, header)
    }
  }
}

export default http
