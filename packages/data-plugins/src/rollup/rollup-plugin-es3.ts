import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-es3',
  description: 'Make rollup compatible with ES3, remove Object.defineProperty of __esModule part',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'esModule',
    'Object.defineProperty',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/futurist/rollup-plugin-es3',
    npm: 'https://www.npmjs.com/package/rollup-plugin-es3',
  },
  stats: {
    downloads: {
      monthly: 100975,
      weekly: 29187,
    },
  },
})
