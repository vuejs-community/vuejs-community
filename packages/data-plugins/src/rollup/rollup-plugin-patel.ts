import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-patel',
  description: 'Integration between Rollup and PatEL.',
  icon: 'logos:rollupjs',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'PatEL',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: '',
    npm: 'rollup-plugin-patel',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-patel',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 7,
    },
  },
})
