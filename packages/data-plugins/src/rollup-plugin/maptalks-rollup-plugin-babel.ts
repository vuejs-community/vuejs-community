import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'maptalks-rollup-plugin-babel',
  description: 'Seamless integration between Rollup and Babel.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'babel',
    'es2015',
    'es6',
  ],
  source: {
    github: 'rollup/rollup-plugin-babel',
    npm: 'maptalks-rollup-plugin-babel',
  },
  links: {
    github: 'https://github.com/rollup/rollup-plugin-babel',
    npm: 'https://www.npmjs.com/package/maptalks-rollup-plugin-babel',
    website: 'https://github.com/rollup/rollup-plugin-babel',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 154,
      weekly: 24,
    },
  },
})
