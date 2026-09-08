import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-es3',
  description: 'Make rollup compatible with ES3, remove Object.defineProperty of __esModule part',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'futurist/rollup-plugin-es3',
    npm: 'rollup-plugin-es3',
  },
  links: {
    github: 'https://github.com/futurist/rollup-plugin-es3',
    npm: 'https://www.npmjs.com/package/rollup-plugin-es3',
  },
  stats: {
    downloads: {
      monthly: 87713,
      weekly: 12671,
    },
  },
})
