import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-geo',
  description: 'Vite plugin to generate sitemap.xml, llms.txt, robots.txt, and optional GEO companion files.',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'geo',
    'seo',
    'sitemap',
    'robots',
    'llms',
    'sku.md',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/maxlee/vite-plugin-geo',
    npm: 'https://www.npmjs.com/package/vite-plugin-geo',
  },
  stats: {
    downloads: {
      monthly: 576,
      weekly: 44,
    },
  },
})
