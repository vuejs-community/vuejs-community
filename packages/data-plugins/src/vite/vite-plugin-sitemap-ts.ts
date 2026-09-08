import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sitemap-ts',
  description: 'Vite plugin to generate sitemap.xml. Works in dev mode.',
  icon: 'logos:vite-icon',
  version: '1.4.8',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite sitemap',
    'sitemap',
    'sitemap.xml',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'kyco/vite-plugin-sitemap-ts',
    npm: 'vite-plugin-sitemap-ts',
  },
  links: {
    github: 'https://github.com/kyco/vite-plugin-sitemap-ts',
    npm: 'https://www.npmjs.com/package/vite-plugin-sitemap-ts',
  },
  stats: {
    downloads: {
      monthly: 241,
      weekly: 67,
    },
  },
})
