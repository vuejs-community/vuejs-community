import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@povly/vite-plugin-pug',
  description: 'Vite plugin for transform Pug into HTML',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'pug',
    'jade',
  ],
  source: {
    github: 'povly/vite-plugin-pug',
    npm: '@povly/vite-plugin-pug',
  },
  links: {
    github: 'https://github.com/povly/vite-plugin-pug',
    npm: 'https://www.npmjs.com/package/@povly/vite-plugin-pug',
    website: 'https://github.com/povly/vite-plugin-pug#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 30,
      weekly: 4,
    },
  },
})
