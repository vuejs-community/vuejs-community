import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tslfe/tsl-env-vite-plugin',
  description: 'tsl 基于 vite 打包工具的环境变量注入插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'env',
    'runtime-env',
  ],
  source: {
    npm: '@tslfe/tsl-env-vite-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@tslfe/tsl-env-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
