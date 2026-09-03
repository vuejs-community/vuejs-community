import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'bun-plugin-gleam',
  description: 'Gleam plugin to bun runtime.',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'bun',
    'bunup',
    'gleam',
    'javascript',
    'bun-plugin',
    'bunup-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gleam-br/bun-plugin-gleam',
    npm: 'https://www.npmjs.com/package/bun-plugin-gleam',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 7,
    },
  },
})
