import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@goodforyou/vite-plugin-markdown-import',
  description: 'Vite plugin to import markdown files with support for front-matter',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'markdown',
    'front-matter',
  ],
  links: {
    github: 'https://github.com/good-for-you-web-services/vite-plugin-import-markdown',
    npm: 'https://www.npmjs.com/package/@goodforyou/vite-plugin-markdown-import',
    website: 'https://github.com/good-for-you-web-services/vite-plugin-import-markdown#readme',
  },
  source: {
    github: 'good-for-you-web-services/vite-plugin-import-markdown',
    npm: '@goodforyou/vite-plugin-markdown-import',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 160,
      weekly: 14,
    },
  },
})
