import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cy-env-dts',
  description: 'vite 自定义引入环境变量 dts 类型定义',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'env',
    'dts',
  ],
  source: {
    npm: 'vite-plugin-cy-env-dts',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-cy-env-dts',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 4,
    },
  },
})
