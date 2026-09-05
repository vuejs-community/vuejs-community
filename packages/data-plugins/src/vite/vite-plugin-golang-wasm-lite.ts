import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-golang-wasm-lite',
  description: 'Vite plugin that handles golang codes, based on Golang-WASM implementations',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'golang',
    'wasm',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/bearsh/vite-plugin-golang-wasm-lite',
    npm: 'https://www.npmjs.com/package/vite-plugin-golang-wasm-lite',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 0,
    },
  },
})
