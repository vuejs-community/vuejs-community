import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-browserslist-useragent',
  description: 'A utility vite plugin to compile browserslist query to a RegExp to test browser useragent.',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'browserslist',
    'regexp',
    'vite-plugin',
    'useragent',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kingyue737/vite-plugin-browserslist-useragent',
    npm: 'https://www.npmjs.com/package/vite-plugin-browserslist-useragent',
  },
  stats: {
    downloads: {
      monthly: 33927,
      weekly: 8203,
    },
  },
})
