import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'gnocchicss',
  description: 'NOTE: This project is experimental and under active development. Use at your own risk.',
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
    npm: 'gnocchicss',
  },
  links: {
    github: 'https://github.com/chriswoodle/gnocchicss',
    npm: 'https://www.npmjs.com/package/gnocchicss',
    website: 'https://github.com/sudowoodle/gnocchicss#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
