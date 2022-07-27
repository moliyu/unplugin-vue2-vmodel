import { resolve } from 'path'
import { describe, expect, it } from 'vitest'
import fg from 'fast-glob'
import { promises as fs } from 'fs'
import {transform} from '../src'

describe('transform', () => {
  it('v-model', async() => {
    const root = resolve(__dirname)
    const files = fg.sync('vue/*.vue', {
      cwd: root,
      onlyFiles: true
    })
    for (let file of files) {
      const code = await fs.readFile(resolve(root, file), 'utf8')
      const ret = transform(code)
      expect(ret).toMatchSnapshot()
    }
  })
})
