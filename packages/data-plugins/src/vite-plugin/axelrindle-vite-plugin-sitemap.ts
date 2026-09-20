import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@axelrindle/vite-plugin-sitemap',
  description: 'Vite plugin for dynamic sitemap generation.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'sitemap',
    'sitemap-generator',
  ],
  links: {
    github: 'https://github.com/axelrindle/vite-plugin-sitemap',
    npm: 'https://www.npmjs.com/package/@axelrindle/vite-plugin-sitemap',
    website: 'https://github.com/axelrindle/vite-plugin-sitemap#readme',
  },
  source: {
    github: 'axelrindle/vite-plugin-sitemap',
    npm: '@axelrindle/vite-plugin-sitemap',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 25,
      weekly: 4,
    },
  },
})
