import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-iconify-offline',
  description: 'Vite 插件：构建时自动扫描 Iconify 图标引用并预注册，实现零运行时开销的离线图标方案',
  version: '0.4.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'iconify',
    'offline',
    'icon',
    'vue',
    'react',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AkagiYui/vite-plugin-iconify-offline',
    npm: 'https://www.npmjs.com/package/vite-plugin-iconify-offline',
  },
  stats: {
    downloads: {
      monthly: 125,
      weekly: 24,
    },
  },
})
