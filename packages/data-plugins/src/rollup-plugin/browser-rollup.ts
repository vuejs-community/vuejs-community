import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'browser-rollup',
  description: 'Use Rollup in Browser to compile your code!',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'browser',
    'browserify',
    'plugin',
    'plugins',
    'rollup-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/browser-rollup',
  },
  source: {
    npm: 'browser-rollup',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
