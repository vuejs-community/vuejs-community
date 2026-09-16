import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-node-resolve',
  description: 'Locate and bundle third-party dependencies in node_modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'es2015',
    'npm',
    'modules',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-node-resolve',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-node-resolve',
    website: 'https://github.com/rollup/plugins/tree/master/packages/node-resolve/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 67424389,
      weekly: 13732582,
    },
  },
})
