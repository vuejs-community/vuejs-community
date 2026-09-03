import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@sgysldz/version-check',
  description: '前端版本更新检测：构建期生成版本元信息，运行时比对并触发整页刷新',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'force-refresh',
    'update',
    'version',
    'vite',
    'vite-plugin',
    'vue',
    'vue-router',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@sgysldz/version-check',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 4,
    },
  },
})
