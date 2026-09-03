import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-requiretoimport',
  description: 'require 转 import插件',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
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
