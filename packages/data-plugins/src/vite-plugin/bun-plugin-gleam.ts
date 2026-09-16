import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'bun-plugin-gleam',
  description: 'Gleam plugin to bun runtime.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'bun',
    'bunup',
    'gleam',
    'javascript',
    'bun-plugin',
    'bunup-plugin',
    'vite-plugin',
  ],
  source: {
    github: 'gleam-br/bun-plugin-gleam',
    npm: 'bun-plugin-gleam',
  },
  links: {
    github: 'https://github.com/gleam-br/bun-plugin-gleam',
    npm: 'https://www.npmjs.com/package/bun-plugin-gleam',
    website: 'https://github.com/gleam-br/bun-plugin-gleam#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
