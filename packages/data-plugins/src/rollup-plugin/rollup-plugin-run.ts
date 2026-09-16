import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-run',
  description: 'Run your bundle after you\'ve built it',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'run',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-run',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-run',
    website: 'https://github.com/rollup/plugins/tree/master/packages/run/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25049,
      weekly: 5364,
    },
  },
})
