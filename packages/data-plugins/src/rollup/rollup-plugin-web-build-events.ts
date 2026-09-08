import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-web-build-events',
  description: 'Live reloading for Rollup-based projects',
  icon: 'logos:rollupjs',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'shanewholloway/rollup-plugin-web-build-events',
    npm: 'rollup-plugin-web-build-events',
  },
  links: {
    github: 'https://github.com/shanewholloway/rollup-plugin-web-build-events',
    npm: 'https://www.npmjs.com/package/rollup-plugin-web-build-events',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
