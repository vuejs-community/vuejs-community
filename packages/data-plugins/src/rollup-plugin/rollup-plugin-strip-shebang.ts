import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-strip-shebang',
  description: 'A Rollup.js plugin to remove and optionally extract shebang.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'shebang',
    'hashbang',
    'extract',
    'strip',
  ],
  source: {
    github: 'manferlo81/rollup-plugin-strip-shebang',
    npm: 'rollup-plugin-strip-shebang',
  },
  links: {
    github: 'https://github.com/manferlo81/rollup-plugin-strip-shebang',
    npm: 'https://www.npmjs.com/package/rollup-plugin-strip-shebang',
    website: 'https://github.com/manferlo81/rollup-plugin-strip-shebang#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 480,
      weekly: 73,
    },
  },
})
