import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-resource-waste',
  description: '基于 Vite 的前端构建资源浪费分析插件，利用 Module Graph 检测未使用 JS、不可达组件、缓存失效与重复依赖，量化传输/解析开销并输出可执行优化报告，支持 CI 构建阈值拦截',
  version: '1.6.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    '资源浪费',
    'resource-waste',
    'vite-plugin-resource-waste',
    '资源浪费分析',
    'bundle-waste',
    'tree-shaking',
    'dead-code',
    '前端性能优化',
    '构建分析报告',
    '包体积优化',
    '无效资源检测',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/shilimingY/vite-plugin-resource-waste',
    npm: 'https://www.npmjs.com/package/vite-plugin-resource-waste',
  },
  stats: {
    downloads: {
      monthly: 1278,
      weekly: 88,
    },
  },
})
