import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@qiaoge/vite-plugin-elnglegacy',
  description: 'Vite 一站式兼容插件（JS+CSS 自动兼容旧浏览器，支持 Chrome ≥80+, 也可以自定义配置适配目标）',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-compat',
    'legacy',
    'css-compat',
    'autoprefixer',
    'core-js',
  ],
  source: {
    npm: '@qiaoge/vite-plugin-elnglegacy',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@qiaoge/vite-plugin-elnglegacy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
