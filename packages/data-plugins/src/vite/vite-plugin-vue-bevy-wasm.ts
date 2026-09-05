import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-bevy-wasm',
  description: 'Vite plugin to build bevy wasms',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'wasm-pack',
    'wasm-bindgen',
    'vite-plugin',
    'webassembly',
    'wasm',
    'rust',
    'vite',
    'cargo',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/slyedoc/vite-plugin-vue-bevy-wasm',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-bevy-wasm',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 6,
    },
  },
})
