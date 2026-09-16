import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-commonjs',
  description: 'Convert CommonJS modules to ES2015',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'npm',
    'modules',
    'commonjs',
    'require',
    'rollup-plugin',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-commonjs',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-commonjs',
    website: 'https://github.com/rollup/plugins/tree/master/packages/commonjs/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 80000419,
      weekly: 15883092,
    },
  },
})
