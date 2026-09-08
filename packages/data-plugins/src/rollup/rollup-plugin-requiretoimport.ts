import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-requiretoimport',
  description: 'require 转 import插件',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'xyl66/rollup-plugin-requiretoimport',
    npm: 'rollup-plugin-requiretoimport',
  },
  links: {
    github: 'https://github.com/xyl66/rollup-plugin-requiretoimport',
    npm: 'https://www.npmjs.com/package/rollup-plugin-requiretoimport',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
