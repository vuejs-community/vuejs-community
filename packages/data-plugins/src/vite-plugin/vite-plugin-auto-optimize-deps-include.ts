import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-optimize-deps-include',
  description: '<p align="center">\r 自动更新 vite.config.ts 中的 optimizeDeps.include 配置项\r </p>',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-auto-optimize-deps-include',
  ],
  source: {
    github: 'laihaojie/vite-plugin-auto-optimize-deps-include',
    npm: 'vite-plugin-auto-optimize-deps-include',
  },
  links: {
    github: 'https://github.com/laihaojie/vite-plugin-auto-optimize-deps-include',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-optimize-deps-include',
    website: 'https://github.com/laihaojie/vite-plugin-auto-optimize-deps-include#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 24,
      weekly: 6,
    },
  },
})
