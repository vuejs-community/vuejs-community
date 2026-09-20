import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-blinko',
  description: 'A Vite plugin for Blinko application development',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'blinko',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-blinko',
  },
  source: {
    npm: 'vite-plugin-blinko',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 42,
      weekly: 3,
    },
  },
})
