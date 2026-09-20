import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-golang-wasm',
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
    github: 'https://github.com/slainless/vite-plugin-golang-wasm',
    npm: 'https://www.npmjs.com/package/vite-plugin-golang-wasm',
    website: 'https://github.com/slainless/vite-plugin-golang-wasm#readme',
  },
  source: {
    github: 'slainless/vite-plugin-golang-wasm',
    npm: 'vite-plugin-golang-wasm',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
