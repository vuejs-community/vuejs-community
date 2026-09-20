import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@eik/vite-plugin',
  description: 'Vite plugin for loading import maps from a Eik server and applying the mapping to ECMAScript modules in preparation for upload to the same server.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/eik-lib/vite-plugin',
    npm: 'https://www.npmjs.com/package/@eik/vite-plugin',
    website: 'https://github.com/eik-lib/vite-plugin#readme',
  },
  source: {
    github: 'eik-lib/vite-plugin',
    npm: '@eik/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 304,
      weekly: 21,
    },
  },
})
