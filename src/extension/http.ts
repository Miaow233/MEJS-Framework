export const get = async function (url: string, headers: object = {}): Promise<Response> {
  let response: Response = await compat.access(url, headers)
  response.json = function () {
    return JSON.parse(this.text)
  }
  response.text = response.toString()
  return response
}

export const post = async function (url: string, data: string | ArrayBuffer, headers: object = {}): Promise<Response> {
  let response: Response = await compat.access(url, headers, data)
  response.json = function () {
    return JSON.parse(this.text)
  }
  response.text = response.toString()
  return response
}
