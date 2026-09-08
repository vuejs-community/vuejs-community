import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-crx',
  description: 'Vite plugin for Chrome Extensions',
  icon: 'logos:vite-icon',
  version: '0.0.0-beta.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'crx',
    'rollup-plugin',
    'chrome-extension',
    'chrome',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'guocaoyi/vite-plugin-crx',
    npm: 'vite-plugin-crx',
  },
  links: {
    github: 'https://github.com/guocaoyi/vite-plugin-crx',
    npm: 'https://www.npmjs.com/package/vite-plugin-crx',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 3,
    },
  },
})
