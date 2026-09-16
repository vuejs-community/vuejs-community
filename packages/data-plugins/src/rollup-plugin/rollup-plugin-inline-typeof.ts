import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-inline-typeof',
  description: 'Rollup plugin to inline `typeof` expressions as separate functions',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  source: {
    github: 'nolanlawson/rollup-plugin-inline-typeof',
    npm: 'rollup-plugin-inline-typeof',
  },
  links: {
    github: 'https://github.com/nolanlawson/rollup-plugin-inline-typeof',
    npm: 'https://www.npmjs.com/package/rollup-plugin-inline-typeof',
    website: 'https://github.com/nolanlawson/rollup-plugin-inline-typeof#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 21,
      weekly: 4,
    },
  },
})
