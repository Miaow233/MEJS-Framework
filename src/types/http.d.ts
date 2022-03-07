declare interface Response {
  readonly status: number
  readonly result: string | ArrayBuffer
  readonly head: string
  json(): Object
  text: string
}
declare interface Http {
  get: (url: string, headers?: object) => Promise<Response>
  post: (url: string, data: string | ArrayBuffer, headers?: object) => Promise<Response>
}
