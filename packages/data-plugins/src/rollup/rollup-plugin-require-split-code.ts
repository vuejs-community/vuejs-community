import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-require-split-code',
  description: 'Enable code splitting with require()',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'commonjs',
    'cjs',
    'require',
    'splitting',
    'transform',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/eight04/rollup-plugin-require-split-code',
    npm: 'https://www.npmjs.com/package/rollup-plugin-require-split-code',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 5,
    },
  },
})
