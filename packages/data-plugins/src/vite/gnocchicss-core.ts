import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@gnocchicss/core',
  description: 'Internal module used by [GnocchiCSS](https://github.com/sudowoodle/gnocchicss).',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'css',
    'sass',
    'scss',
    'gnocchi',
    'gnocchicss',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/chriswoodle/gnocchicss',
    npm: 'https://www.npmjs.com/package/@gnocchicss/core',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 7,
    },
  },
})
