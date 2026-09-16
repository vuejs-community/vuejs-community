import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-unified-compiler',
  description: 'Vite plugin that compiles files using unified.js.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'markdown',
    'unified',
  ],
  source: {
    github: 'cclinet/vite-plugin-unified-compiler',
    npm: 'vite-plugin-unified-compiler',
  },
  links: {
    github: 'https://github.com/cclinet/vite-plugin-unified-compiler',
    npm: 'https://www.npmjs.com/package/vite-plugin-unified-compiler',
    website: 'https://github.com/cclinet/vite-plugin-unified-compiler',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
