import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-golang-wasm',
  description: 'Vite plugin that handles golang codes, based on Golang-WASM implementations',
  version: '0.1.7',
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
    github: 'https://github.com/slainless/vite-plugin-golang-wasm',
    npm: 'https://www.npmjs.com/package/vite-plugin-golang-wasm',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
