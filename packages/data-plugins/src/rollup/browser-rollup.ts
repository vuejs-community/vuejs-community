import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'browser-rollup',
  description: 'Use Rollup in Browser to compile your code!',
  version: '1.2.1',
  category: 'plugin',
  tags: [
    'rollup',
    'browser',
    'browserify',
    'plugin',
    'plugins',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/browser-rollup',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 2,
    },
  },
})
