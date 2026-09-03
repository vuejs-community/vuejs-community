import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tanstack-sitemap',
  description: 'Vite plugin to generate a `sitemap.xml` from your TanStack Start route manifest',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'tanstack',
    'sitemap',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/thrivcompany/vite-plugin-tanstack-sitemap',
    npm: 'https://www.npmjs.com/package/vite-plugin-tanstack-sitemap',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
