import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@levyer/vite-wasm',
  description: 'Vite plugin that compiles server entries into WebAssembly components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'wasm',
    'wasi',
    'webassembly',
    'component-model',
  ],
  links: {
    github: 'https://github.com/levyercom/vite-wasm',
    npm: 'https://www.npmjs.com/package/@levyer/vite-wasm',
    website: 'https://github.com/levyercom/vite-wasm#readme',
  },
  source: {
    github: 'levyercom/vite-wasm',
    npm: '@levyer/vite-wasm',
  },
})
