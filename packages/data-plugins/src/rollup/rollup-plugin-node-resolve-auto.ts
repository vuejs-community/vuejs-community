import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-resolve-auto',
  description: 'Bundle third-party dependencies in node_modules',
  icon: 'logos:rollupjs',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'nolanlawson/rollup-plugin-node-resolve-auto',
    npm: 'rollup-plugin-node-resolve-auto',
  },
  links: {
    github: 'https://github.com/nolanlawson/rollup-plugin-node-resolve-auto',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-resolve-auto',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 10,
    },
  },
})
