import { Context as CordisApp, Plugin } from 'cordis'

export class App {
  app: CordisApp
  plugins: Map<string, Plugin>
  constructor(cordis?: typeof CordisApp) {
    this.app = new (cordis ?? CordisApp)()
    this.plugins = new Map<string, Plugin>()
  }

  async addPlugin(id: string, path: string) {
    return await this.import(id, path)
  }
  async import(id: string, path: string) {
    const plugin = await import(path)
    this.plugins.set(id, plugin)
    return this.app.plugin(plugin)
  }
  delete(id: string) {
    this.plugins.has(id) && this.app.dispose(this.plugins.get(id)) && this.plugins.delete(id)
  }

  use(id: string, plugin: any) {
    this.plugins.set(id, plugin)
    this.app.plugin(plugin)
  }

  async start() {
    await this.app.start()
  }
  async stop() {
    await this.app.stop()
  }
}
export type { Context as FrontendContext } from 'cordis'

// @ts-ignore
const ping = await import('./plugins/example')

let ctx = new CordisApp()
ctx.plugin(ping)

ctx.start()
