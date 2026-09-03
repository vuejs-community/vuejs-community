import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-env-parse',
  description: 'Parse env string values to correct values, not all values are strings. And automatically generate ImportMetaEnv',
  version: '1.0.15',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
    'env',
    'env-parse',
    'string convert',
    'typecast',
    'dotEnv',
    'import',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-env-parse',
  },
  stats: {
    downloads: {
      monthly: 2698,
      weekly: 547,
    },
  },
})
