import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-binary2base64',
  description: 'Converts binary files to base64 string modules',
  icon: 'logos:rollupjs',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'stringify',
    'binary',
    'base64',
    'binary2base64',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'czizzy/rollup-plugin-binary2base64',
    npm: 'rollup-plugin-binary2base64',
  },
  links: {
    github: 'https://github.com/czizzy/rollup-plugin-binary2base64',
    npm: 'https://www.npmjs.com/package/rollup-plugin-binary2base64',
  },
  stats: {
    downloads: {
      monthly: 456,
      weekly: 4,
    },
  },
})
