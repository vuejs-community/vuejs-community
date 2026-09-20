import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-env-parse',
  description: 'Parse env string values to correct values, not all values are strings. And automatically generate ImportMetaEnv',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-env-parse',
    website: 'https://github.com/yue1123/vite-plugin-env-parse/#readme',
  },
  source: {
    npm: 'vite-plugin-env-parse',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2991,
      weekly: 761,
    },
  },
})
