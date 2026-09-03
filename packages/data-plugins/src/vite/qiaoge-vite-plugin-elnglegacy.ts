import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@qiaoge/vite-plugin-elnglegacy',
  description: 'Vite 一站式兼容插件（JS+CSS 自动兼容旧浏览器，支持 Chrome ≥80+, 也可以自定义配置适配目标）',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite-compat',
    'legacy',
    'css-compat',
    'autoprefixer',
    'core-js',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@qiaoge/vite-plugin-elnglegacy',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 9,
    },
  },
})
