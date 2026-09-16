import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-eleventy',
  description: 'A Vite plugin to build your site with 11ty',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'eleventy',
  ],
  source: {
    github: 'Snugug/vite-plugin-eleventy',
    npm: 'vite-plugin-eleventy',
  },
  links: {
    github: 'https://github.com/Snugug/vite-plugin-eleventy',
    npm: 'https://www.npmjs.com/package/vite-plugin-eleventy',
    website: 'https://github.com/Snugug/vite-plugin-eleventy#readme',
  },
  stats: {
    stars: 36,
    downloads: {
      monthly: 54,
      weekly: 8,
    },
  },
})
