import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-requiretoimport',
  description: 'require 转 import插件',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/xyl66/rollup-plugin-requiretoimport',
    npm: 'https://www.npmjs.com/package/rollup-plugin-requiretoimport',
    website: 'https://github.com/xyl66/rollup-plugin-requiretoimport#readme',
  },
  source: {
    github: 'xyl66/rollup-plugin-requiretoimport',
    npm: 'rollup-plugin-requiretoimport',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
