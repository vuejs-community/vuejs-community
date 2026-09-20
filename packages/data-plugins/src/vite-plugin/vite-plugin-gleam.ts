import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-gleam',
  description: 'Gleam plugin to vite runtime.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'bun',
    'bunup',
    'vite',
    'gleam',
    'javascript',
    'bun-plugin',
    'bunup-plugin',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gleam-br/vite-plugin-gleam',
    npm: 'https://www.npmjs.com/package/vite-plugin-gleam',
    website: 'https://github.com/gleam-br/vite-plugin-gleam#readme',
  },
  source: {
    github: 'gleam-br/vite-plugin-gleam',
    npm: 'vite-plugin-gleam',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 325,
      weekly: 241,
    },
  },
})
