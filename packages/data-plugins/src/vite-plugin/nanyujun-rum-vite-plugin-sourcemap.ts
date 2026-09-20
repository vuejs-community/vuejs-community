import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nanyujun/rum-vite-plugin-sourcemap',
  description: 'RUM 前端性能监控平台的 Vite 插件：vite build 完成后自动把产物 *.map 上传到 collector，无需手动跑 CLI。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rum',
    'sourcemap',
    'source-map',
    'vite',
    'vite-plugin',
    'upload',
    'monitoring',
    'error-tracking',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@nanyujun/rum-vite-plugin-sourcemap',
  },
  source: {
    npm: '@nanyujun/rum-vite-plugin-sourcemap',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 30,
      weekly: 5,
    },
  },
})
