import { compat } from '../types/compat'
import { Http, Response } from '../types/http'

let http: Http
http.get = async function (url: string, headers: object = {}): Promise<Response> {
  return await compat.access(url, headers)
}

http.post = async function (url: string, data: string | ArrayBuffer, headers: object = {}): Promise<Response> {
  return await compat.access(url, headers, data)
}

export default http
