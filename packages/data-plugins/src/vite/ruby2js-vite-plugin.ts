import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ruby2js/vite-plugin',
  description: 'ruby2js plugin for vite',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'ruby2js',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ruby2js/ruby2js',
    npm: 'https://www.npmjs.com/package/@ruby2js/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 7,
    },
  },
})
