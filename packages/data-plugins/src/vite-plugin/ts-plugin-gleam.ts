import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ts-plugin-gleam',
  description: 'Gleam plugin to typescript runtime.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'typescript',
    'gleam',
    'ts-plugin',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gleam-br/ts-plugin-gleam',
    npm: 'https://www.npmjs.com/package/ts-plugin-gleam',
    website: 'https://github.com/gleam-br/ts-plugin-gleam#readme',
  },
  source: {
    github: 'gleam-br/ts-plugin-gleam',
    npm: 'ts-plugin-gleam',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
