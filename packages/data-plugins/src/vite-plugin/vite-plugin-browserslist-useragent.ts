import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-browserslist-useragent',
  description: 'A utility vite plugin to compile browserslist query to a RegExp to test browser useragent.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'browserslist',
    'regexp',
    'vite-plugin',
    'useragent',
  ],
  links: {
    github: 'https://github.com/kingyue737/vite-plugin-browserslist-useragent',
    npm: 'https://www.npmjs.com/package/vite-plugin-browserslist-useragent',
    website: 'https://github.com/kingyue737/vite-plugin-browserslist-useragent#readme',
  },
  source: {
    github: 'kingyue737/vite-plugin-browserslist-useragent',
    npm: 'vite-plugin-browserslist-useragent',
  },
  stats: {
    stars: 17,
    downloads: {
      monthly: 23855,
      weekly: 5146,
    },
  },
})
