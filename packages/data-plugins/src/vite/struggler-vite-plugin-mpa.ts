import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@struggler/vite-plugin-mpa',
  description: 'Vite MPA: input keys map to dist HTML paths; virtual resolve, dev middleware (pre), relative script rewrite, optional HTML minify.',
  version: '1.2.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'mpa',
    'multi-page',
    'html',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/strugglerx/vite-mpa-plugin',
    npm: 'https://www.npmjs.com/package/@struggler/vite-plugin-mpa',
  },
  stats: {
    downloads: {
      monthly: 41,
      weekly: 14,
    },
  },
})
