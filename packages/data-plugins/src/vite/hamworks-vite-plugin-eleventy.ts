import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@hamworks/vite-plugin-eleventy',
  description: 'A Vite plugin to build your site with 11ty',
  version: '0.3.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'eleventy',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/hamworks/vite-plugin-eleventy',
    npm: 'https://www.npmjs.com/package/@hamworks/vite-plugin-eleventy',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 10,
    },
  },
})
