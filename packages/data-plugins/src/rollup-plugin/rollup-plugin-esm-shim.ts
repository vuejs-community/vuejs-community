import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-esm-shim',
  description: 'Generate minified bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'esm-shim',
    'npm',
    'modules',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-esm-shim',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-esm-shim',
    website: 'https://github.com/rollup/plugins/tree/master/packages/esm-shim#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2573631,
      weekly: 563908,
    },
  },
})
