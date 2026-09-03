import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'ts-plugin-gleam',
  description: 'Gleam plugin to typescript runtime.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'typescript',
    'gleam',
    'ts-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gleam-br/ts-plugin-gleam',
    npm: 'https://www.npmjs.com/package/ts-plugin-gleam',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 6,
    },
  },
})
