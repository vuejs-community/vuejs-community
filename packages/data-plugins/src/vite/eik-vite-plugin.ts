import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@eik/vite-plugin',
  description: 'Vite plugin for loading import maps from a Eik server and applying the mapping to ECMAScript modules in preparation for upload to the same server.',
  version: '3.0.4',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/eik-lib/vite-plugin',
    npm: 'https://www.npmjs.com/package/@eik/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 345,
      weekly: 232,
    },
  },
})
