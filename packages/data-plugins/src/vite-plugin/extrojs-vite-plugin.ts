import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@extrojs/vite-plugin',
  description: 'Vite plugin powering Extro: file-based entrypoints, Manifest V3 generation, and React routing for Chrome extensions.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'extro',
    'chrome-extension',
    'manifest-v3',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Sahilm416/extro',
    npm: 'https://www.npmjs.com/package/@extrojs/vite-plugin',
    website: 'https://github.com/Sahilm416/extro#readme',
  },
  source: {
    github: 'Sahilm416/extro',
    npm: '@extrojs/vite-plugin',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
