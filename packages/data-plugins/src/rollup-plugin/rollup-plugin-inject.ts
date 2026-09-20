import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-inject',
  description: 'Scan modules for global variables and injects `import` statements where necessary',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'inject',
    'es2015',
    'npm',
    'modules',
  ],
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-inject',
    website: 'https://github.com/rollup/plugins/tree/master/packages/inject#readme',
  },
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-inject',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15622432,
      weekly: 3022583,
    },
  },
})
