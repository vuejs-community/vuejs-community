import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@deadsimpleseo/vite-deadsimpleseo',
  description: 'A Vite plugin to generate static SEO pages from React components',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'seo',
    'static-site-generation',
    'ssr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@deadsimpleseo/vite-deadsimpleseo',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 7,
    },
  },
})
