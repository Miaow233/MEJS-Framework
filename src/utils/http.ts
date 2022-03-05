import { compat } from '../types/compat'
import { Http, Response } from '../types/http'

export const get = async function (url: string, headers: object = {}): Promise<Response> {
  return await compat.access(url, headers)
}

export const post = async function (url: string, data: string | ArrayBuffer, headers: object = {}): Promise<Response> {
  return await compat.access(url, headers, data)
}
