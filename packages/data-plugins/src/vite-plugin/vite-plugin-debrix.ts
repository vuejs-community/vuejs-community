import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-debrix',
  description: 'Offical debrix vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'debrix',
  ],
  source: {
    github: 'debrixjs/debrix',
    npm: 'vite-plugin-debrix',
  },
  links: {
    github: 'https://github.com/debrixjs/debrix',
    npm: 'https://www.npmjs.com/package/vite-plugin-debrix',
    website: 'https://github.com/debrixjs/debrix/tree/main/packages/vite-plugin-debrix#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
