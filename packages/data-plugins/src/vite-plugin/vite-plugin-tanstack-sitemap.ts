import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tanstack-sitemap',
  description: 'Vite plugin to generate a `sitemap.xml` from your TanStack Start route manifest',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'tanstack',
    'sitemap',
  ],
  links: {
    github: 'https://github.com/thrivcompany/vite-plugin-tanstack-sitemap',
    npm: 'https://www.npmjs.com/package/vite-plugin-tanstack-sitemap',
    website: 'https://github.com/thrivcompany/vite-plugin-tanstack-sitemap#readme',
  },
  source: {
    github: 'thrivcompany/vite-plugin-tanstack-sitemap',
    npm: 'vite-plugin-tanstack-sitemap',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
