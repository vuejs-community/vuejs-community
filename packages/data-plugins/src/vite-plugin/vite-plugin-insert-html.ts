import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-insert-html',
  description: 'Super simple Vite plugin to insert HTML into the head or body of your HTML entrypoints',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'inject',
    'insert',
    'hyperscript',
    'jsx',
  ],
  source: {
    github: 'NotWoods/vite-plugin-insert-html',
    npm: 'vite-plugin-insert-html',
  },
  links: {
    github: 'https://github.com/NotWoods/vite-plugin-insert-html',
    npm: 'https://www.npmjs.com/package/vite-plugin-insert-html',
    website: 'https://github.com/NotWoods/vite-plugin-insert-html#readme',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 1401,
      weekly: 271,
    },
  },
})
