import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ignore-regex',
  description: 'For ignoring a module in rollup.js.',
  icon: 'logos:rollupjs',
  version: '0.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'alexlur/rollup-plugin-ignore',
    npm: 'rollup-plugin-ignore-regex',
  },
  links: {
    github: 'https://github.com/alexlur/rollup-plugin-ignore',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ignore-regex',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
