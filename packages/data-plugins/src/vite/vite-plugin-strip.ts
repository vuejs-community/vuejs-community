import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-strip',
  description: 'Remove or strip specific code from your JavaScript or TypeScript.',
  icon: 'logos:vite-icon',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vue',
    'vite',
    'console',
    'vite-plugin',
    'debug',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'YaroED/vite-plugin-strip',
    npm: 'vite-plugin-strip',
  },
  links: {
    github: 'https://github.com/YaroED/vite-plugin-strip',
    npm: 'https://www.npmjs.com/package/vite-plugin-strip',
  },
  stats: {
    downloads: {
      monthly: 505,
      weekly: 140,
    },
  },
})
