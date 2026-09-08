import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-browserslist-useragent',
  description: 'A utility vite plugin to compile browserslist query to a RegExp to test browser useragent.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'kingyue737/vite-plugin-browserslist-useragent',
    npm: 'vite-plugin-browserslist-useragent',
  },
  links: {
    github: 'https://github.com/kingyue737/vite-plugin-browserslist-useragent',
    npm: 'https://www.npmjs.com/package/vite-plugin-browserslist-useragent',
  },
  stats: {
    downloads: {
      monthly: 26818,
      weekly: 3784,
    },
  },
})
