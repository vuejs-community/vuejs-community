import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-dynamic-import-vars',
  description: 'Resolving dynamic imports that contain variables.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'dynamic import',
    'variable',
    'variables',
    'glob',
    'string',
    'concatenation',
    'interpolation',
  ],
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-dynamic-import-vars',
    website: 'https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars',
  },
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-dynamic-import-vars',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 507104,
      weekly: 99216,
    },
  },
})
