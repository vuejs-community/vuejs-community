import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@struggler/vite-plugin-mpa',
  description: 'Vite MPA: input keys map to dist HTML paths; virtual resolve, dev middleware (pre), relative script rewrite, optional HTML minify.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'mpa',
    'multi-page',
    'html',
  ],
  source: {
    github: 'strugglerx/vite-mpa-plugin',
    npm: '@struggler/vite-plugin-mpa',
  },
  links: {
    github: 'https://github.com/strugglerx/vite-mpa-plugin',
    npm: 'https://www.npmjs.com/package/@struggler/vite-plugin-mpa',
    website: 'https://github.com/strugglerx/vite-mpa-plugin#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 45,
      weekly: 6,
    },
  },
})
