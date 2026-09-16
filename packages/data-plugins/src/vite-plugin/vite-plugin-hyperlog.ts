import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hyperlog',
  description: 'High-performance Vite plugin for request and browser logging, powered by Rust',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'browser-logger',
    'hyperlog',
    'logger',
    'request-logger',
    'vite',
    'vite-plugin',
    'vite-plugin-hyperlog',
  ],
  source: {
    github: 'kiyors/vite-plugin-hyperlog',
    npm: 'vite-plugin-hyperlog',
  },
  links: {
    github: 'https://github.com/kiyors/vite-plugin-hyperlog',
    npm: 'https://www.npmjs.com/package/vite-plugin-hyperlog',
    website: 'https://github.com/kiyors/vite-plugin-hyperlog#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 485,
      weekly: 485,
    },
  },
})
