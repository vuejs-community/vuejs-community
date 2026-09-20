import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ignore-regex',
  description: 'For ignoring a module in rollup.js.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/alexlur/rollup-plugin-ignore',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ignore-regex',
    website: 'https://github.com/alexlur/rollup-plugin-ignore#readme',
  },
  source: {
    github: 'alexlur/rollup-plugin-ignore',
    npm: 'rollup-plugin-ignore-regex',
  },
  stats: {
    stars: 28,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
