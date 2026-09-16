import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-es3',
  description: 'Make rollup compatible with ES3, remove Object.defineProperty of __esModule part',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'esModule',
    'Object.defineProperty',
  ],
  source: {
    github: 'futurist/rollup-plugin-es3',
    npm: 'rollup-plugin-es3',
  },
  links: {
    github: 'https://github.com/futurist/rollup-plugin-es3',
    npm: 'https://www.npmjs.com/package/rollup-plugin-es3',
    website: 'https://github.com/futurist/rollup-plugin-es3#readme',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 86214,
      weekly: 16244,
    },
  },
})
