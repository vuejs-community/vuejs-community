import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gnocchicss/core',
  description: 'Internal module used by [GnocchiCSS](https://github.com/sudowoodle/gnocchicss).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css',
    'sass',
    'scss',
    'gnocchi',
    'gnocchicss',
    'vite-plugin',
  ],
  source: {
    github: 'chriswoodle/gnocchicss',
    npm: '@gnocchicss/core',
  },
  links: {
    github: 'https://github.com/chriswoodle/gnocchicss',
    npm: 'https://www.npmjs.com/package/@gnocchicss/core',
    website: 'https://github.com/sudowoodle/gnocchicss#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 1,
    },
  },
})
