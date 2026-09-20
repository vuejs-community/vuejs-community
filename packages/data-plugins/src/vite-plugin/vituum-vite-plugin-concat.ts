import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vituum/vite-plugin-concat',
  description: 'Vite plugin for concatenating files together, handy especially for old projects that used gulp-concat or grunt-concat ',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'concat',
    'vituum',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vituum/vite-plugin-concat',
    npm: 'https://www.npmjs.com/package/@vituum/vite-plugin-concat',
    website: 'https://github.com/vituum/vite-plugin-concat#readme',
  },
  source: {
    github: 'vituum/vite-plugin-concat',
    npm: '@vituum/vite-plugin-concat',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 436,
      weekly: 134,
    },
  },
})
