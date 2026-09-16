import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-src-update',
  description: '`vite-plugin-src-update` is a Vite plugin that automatically updates a template file with development or production script tags for your project assets, ensuring the correct scripts are loaded depending on your build environment. It supports configuration',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'Julboben/vite-plugin-src-update',
    npm: 'vite-plugin-src-update',
  },
  links: {
    github: 'https://github.com/Julboben/vite-plugin-src-update',
    npm: 'https://www.npmjs.com/package/vite-plugin-src-update',
    website: 'https://github.com/Julboben/vite-plugin-src-update#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 248,
      weekly: 4,
    },
  },
})
