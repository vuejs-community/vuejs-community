import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-resolve-magic',
  description: 'Rollup.js plugin which resolves third-party dependencies in node_modules',
  version: '0.2.11',
  category: 'plugin',
  tags: [
    'commonjs',
    'node_modules',
    'npm',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/zeekay/rollup-plugin-node-resolve-magic',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-resolve-magic',
  },
  stats: {
    downloads: {
      monthly: 166,
      weekly: 43,
    },
  },
})
