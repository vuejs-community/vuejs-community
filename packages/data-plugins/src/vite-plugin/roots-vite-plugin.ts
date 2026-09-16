import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@roots/vite-plugin',
  description: 'A Vite plugin for working with WordPress.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'wordpress',
  ],
  source: {
    github: 'roots/vite-plugin',
    npm: '@roots/vite-plugin',
  },
  links: {
    github: 'https://github.com/roots/vite-plugin',
    npm: 'https://www.npmjs.com/package/@roots/vite-plugin',
    website: 'https://github.com/roots/vite-plugin',
  },
  stats: {
    stars: 59,
    downloads: {
      monthly: 29895,
      weekly: 5744,
    },
  },
})
