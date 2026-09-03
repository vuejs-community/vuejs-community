import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-sitemap-gen',
  description: 'Vite plugin to auto-generate sitemap.xml and robots.txt for SvelteKit at build time',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'sitemap',
    'seo',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Posterior-AI/vite-sitemap',
    npm: 'https://www.npmjs.com/package/vite-sitemap-gen',
  },
  stats: {
    downloads: {
      monthly: 377,
      weekly: 74,
    },
  },
})
