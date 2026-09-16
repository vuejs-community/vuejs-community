import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-resolve-magic',
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
  source: {
    github: 'zeekay/rollup-plugin-node-resolve-magic',
    npm: 'rollup-plugin-node-resolve-magic',
  },
  links: {
    github: 'https://github.com/zeekay/rollup-plugin-node-resolve-magic',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-resolve-magic',
    website: 'https://github.com/zeekay/rollup-plugin-node-resolve-magic',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 188,
      weekly: 59,
    },
  },
})
