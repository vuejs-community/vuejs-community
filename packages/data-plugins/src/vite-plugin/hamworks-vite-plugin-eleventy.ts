import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hamworks/vite-plugin-eleventy',
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
    github: 'hamworks/vite-plugin-eleventy',
    npm: '@hamworks/vite-plugin-eleventy',
  },
  links: {
    github: 'https://github.com/hamworks/vite-plugin-eleventy',
    npm: 'https://www.npmjs.com/package/@hamworks/vite-plugin-eleventy',
    website: 'https://github.com/hamworks/vite-plugin-eleventy#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 9,
    },
  },
})
