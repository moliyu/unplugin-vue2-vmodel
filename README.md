# unplugin-starter

[![NPM version](https://img.shields.io/npm/v/unplugin-starter?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-vue2-vmodel)

## Usage

To use this template, clone it down using:

```bash
npm install unplugin-vue2-vmodel
```

## before
```vue
<script lang="ts" setup>
const name = ref('')
</script>

<template>
  <div>
    <a-input v-model:value="name" />
    <a-input v-model:test="name" />
    <a-input v-model:test1 ="name" />
  </div>
</template>
```

## after
```vue
<script lang="ts" setup>
const name = ref('')
</script>

<template>
  <div>
    <a-input v-model="name" />
    <a-input :test.sync="name" />
    <a-input :test1.sync="name" />
  </div>
</template>
```

## Install

```bash
npm i unplugin-starter
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Vmodel from 'unplugin-vue2-vmodel/vite'

export default defineConfig({
  plugins: [
    Vmodel({ /* options */ }),
  ],
})
```

<!-- Example: [`playground/`](./playground/) -->

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Vmodel from 'unplugin-vue2-vmodel/rollup'

export default {
  plugins: [
    Vmodel({ /* options */ }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-vue2-vmodel/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default {
  buildModules: [
    ['unplugin-vue2-vmodel/nuxt', { /* options */ }],
  ],
}
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-vue2-vmodel/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import Vmodel from 'unplugin-vue2-vmodel/esbuild'

build({
  plugins: [Vmodel()],
})
```

<br></details>
