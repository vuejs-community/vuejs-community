import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-terser',
  description: 'Generate minified bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'terser',
    'minify',
    'npm',
    'modules',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-terser',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-terser',
    website: 'https://github.com/rollup/plugins/tree/master/packages/terser#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32890825,
      weekly: 6475321,
    },
  },
})
