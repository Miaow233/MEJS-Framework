import { Context } from 'cordis'

export const name = 'ping'

export function apply(ctx: Context, option) {
  ctx.on('ready', function () {
    // now register the plugin
    console.log(arguments.length)
    console.log(arguments[0])
  })

  ctx.on('dispose', function () {
    // call to cancel the plugin
  })
}
