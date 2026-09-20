import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pocka/rollup-plugin-gleam',
  description: 'Rollup plugin for Gleam language.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@pocka/rollup-plugin-gleam',
  },
  source: {
    npm: '@pocka/rollup-plugin-gleam',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 30,
      weekly: 4,
    },
  },
})
