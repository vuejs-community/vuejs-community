import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nanyujun/rum-vite-plugin-sourcemap',
  description: 'RUM 前端性能监控平台的 Vite 插件：vite build 完成后自动把产物 *.map 上传到 collector，无需手动跑 CLI。',
  version: '0.1.4',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@nanyujun/rum-vite-plugin-sourcemap',
  },
  stats: {
    downloads: {
      monthly: 72,
      weekly: 10,
    },
  },
})
