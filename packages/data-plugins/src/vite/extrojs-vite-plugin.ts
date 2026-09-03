import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@extrojs/vite-plugin',
  description: 'Vite plugin powering Extro: file-based entrypoints, Manifest V3 generation, and React routing for Chrome extensions.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'extro',
    'chrome-extension',
    'manifest-v3',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Sahilm416/extro',
    npm: 'https://www.npmjs.com/package/@extrojs/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 6,
    },
  },
})
