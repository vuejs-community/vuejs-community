import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ruby2js/vite-plugin',
  description: 'ruby2js plugin for vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ruby2js',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'ruby2js/ruby2js',
    npm: '@ruby2js/vite-plugin',
  },
  links: {
    github: 'https://github.com/ruby2js/ruby2js',
    npm: 'https://www.npmjs.com/package/@ruby2js/vite-plugin',
    website: 'https://github.com/ruby2js/ruby2js/tree/master/packages/rollup-plugin#readme',
  },
  stats: {
    stars: 491,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
