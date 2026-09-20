import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kevinmarrec/cloudstack-vite-plugin',
  description: 'Opinionated Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cloudstack',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kevinmarrec/cloudstack',
    npm: 'https://www.npmjs.com/package/@kevinmarrec/cloudstack-vite-plugin',
    website: 'https://github.com/kevinmarrec/cloudstack/tree/main/packages/vite-plugin#readme',
  },
  source: {
    github: 'kevinmarrec/cloudstack',
    npm: '@kevinmarrec/cloudstack-vite-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 63,
      weekly: 5,
    },
  },
})
