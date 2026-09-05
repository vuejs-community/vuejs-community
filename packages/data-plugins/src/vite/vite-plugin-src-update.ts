import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-src-update',
  description: '`vite-plugin-src-update` is a Vite plugin that automatically updates a template file with development or production script tags for your project assets, ensuring the correct scripts are loaded depending on your build environment. It supports configuration',
  version: '1.1.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Julboben/vite-plugin-src-update',
    npm: 'https://www.npmjs.com/package/vite-plugin-src-update',
  },
  stats: {
    downloads: {
      monthly: 262,
      weekly: 12,
    },
  },
})
