import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-eleventy',
  description: 'A Vite plugin to build your site with 11ty',
  icon: 'logos:vite-icon',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'eleventy',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Snugug/vite-plugin-eleventy',
    npm: 'vite-plugin-eleventy',
  },
  links: {
    github: 'https://github.com/Snugug/vite-plugin-eleventy',
    npm: 'https://www.npmjs.com/package/vite-plugin-eleventy',
  },
  stats: {
    downloads: {
      monthly: 109,
      weekly: 12,
    },
  },
})
