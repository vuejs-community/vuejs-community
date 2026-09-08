import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-external-node-modules',
  description: 'Rollup plugin to use process.env',
  icon: 'logos:rollupjs',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'env',
    'front-end',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'd8corp/rollup-plugin-external-node-modules',
    npm: 'rollup-plugin-external-node-modules',
  },
  links: {
    github: 'https://github.com/d8corp/rollup-plugin-external-node-modules',
    npm: 'https://www.npmjs.com/package/rollup-plugin-external-node-modules',
  },
  stats: {
    downloads: {
      monthly: 273,
      weekly: 25,
    },
  },
})
