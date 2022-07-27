import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import { transform } from './core'
export * from './core'

export default createUnplugin<Options>(options => ({
  name: 'unplugin-starter',
  transformInclude(id) {
    return id.endsWith('.vue')
  },
  transform(code) {
    return transform(code)
  },
}))
