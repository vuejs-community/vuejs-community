import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-bevy-wasm',
  description: 'Vite plugin to build bevy wasms',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'slyedoc/vite-plugin-vue-bevy-wasm',
    npm: 'vite-plugin-vue-bevy-wasm',
  },
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
