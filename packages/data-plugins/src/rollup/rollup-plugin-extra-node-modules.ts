import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-extra-node-modules',
  description: 'A Rollup plugin to extra node modules from your project.',
  icon: 'logos:rollupjs',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'node modules',
    'components',
    'libs',
    'react',
    'modules',
    'extract',
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'xiaosen7/rollup-plugin-extra-node-modules',
    npm: 'rollup-plugin-extra-node-modules',
  },
  links: {
    github: 'https://github.com/xiaosen7/rollup-plugin-extra-node-modules',
    npm: 'https://www.npmjs.com/package/rollup-plugin-extra-node-modules',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
