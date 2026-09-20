import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zeekay/rollup-plugin-node-resolve',
  description: 'Rollup.js plugin which resolves third-party dependencies in node_modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'commonjs',
    'node_modules',
    'npm',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/zeekay/rollup-plugin-node-resolve',
    npm: 'https://www.npmjs.com/package/@zeekay/rollup-plugin-node-resolve',
    website: 'https://github.com/zeekay/rollup-plugin-node-resolve',
  },
  source: {
    github: 'zeekay/rollup-plugin-node-resolve',
    npm: '@zeekay/rollup-plugin-node-resolve',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 95,
      weekly: 35,
    },
  },
})
