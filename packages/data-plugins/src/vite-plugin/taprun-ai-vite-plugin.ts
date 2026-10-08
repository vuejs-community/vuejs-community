import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@taprun-ai/vite-plugin',
  description: 'Vite plugin for sites built on Taprun: dev server on the platform\'s port, page meta, Taprun analytics, preview reporter, robots.txt and sitemap.xml.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'taprun',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@taprun-ai/vite-plugin',
  },
  source: {
    npm: '@taprun-ai/vite-plugin',
  },
})
