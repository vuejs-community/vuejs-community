import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-golang-wasm-lite',
  description: 'Vite plugin that handles golang codes, based on Golang-WASM implementations',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'golang',
    'wasm',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/bearsh/vite-plugin-golang-wasm-lite',
    npm: 'https://www.npmjs.com/package/vite-plugin-golang-wasm-lite',
    website: 'https://github.com/bearsh/vite-plugin-golang-wasm-lite#readme',
  },
  source: {
    github: 'bearsh/vite-plugin-golang-wasm-lite',
    npm: 'vite-plugin-golang-wasm-lite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 6,
    },
  },
})
