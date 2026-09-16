import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svell',
  description: 'Vite plugin for svell dev environment.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'svell',
    'vw',
  ],
  source: {
    github: 'svell/svell',
    npm: 'vite-plugin-svell',
  },
  links: {
    github: 'https://github.com/svell/svell',
    npm: 'https://www.npmjs.com/package/vite-plugin-svell',
    website: 'https://github.com/svell/svell/tree/main/packages/vite-plugin-svell#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
