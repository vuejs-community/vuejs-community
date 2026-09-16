import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-replace',
  description: 'Replace strings in files while bundling',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'replace',
    'es2015',
    'npm',
    'modules',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-replace',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-replace',
    website: 'https://github.com/rollup/plugins/tree/master/packages/replace#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 53172667,
      weekly: 10327931,
    },
  },
})
