import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-optimize-deps-include',
  description: '<p align="center">\r 自动更新 vite.config.ts 中的 optimizeDeps.include 配置项\r </p>',
  icon: 'logos:vite-icon',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-auto-optimize-deps-include',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'laihaojie/vite-plugin-auto-optimize-deps-include',
    npm: 'vite-plugin-auto-optimize-deps-include',
  },
  links: {
    github: 'https://github.com/laihaojie/vite-plugin-auto-optimize-deps-include',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-optimize-deps-include',
  },
  stats: {
    downloads: {
      monthly: 28,
      weekly: 2,
    },
  },
})
