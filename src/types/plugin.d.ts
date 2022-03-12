export interface Plugin {
  info: {
    name: string
    version: string
    description: string
    author: string
    help: string
  }
  enable: boolean
  action: Function
}
