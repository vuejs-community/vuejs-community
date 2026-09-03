import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vituum/vite-plugin-concat',
  description: 'Vite plugin for concatenating files together, handy especially for old projects that used gulp-concat or grunt-concat ',
  version: '2.0.2',
  category: 'plugin',
  tags: [
    'concat',
    'vituum',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vituum/vite-plugin-concat',
    npm: 'https://www.npmjs.com/package/@vituum/vite-plugin-concat',
  },
  stats: {
    downloads: {
      monthly: 378,
      weekly: 89,
    },
  },
})
