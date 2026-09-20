import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-iconify-offline',
  description: 'Vite 插件：构建时自动扫描 Iconify 图标引用并预注册，实现零运行时开销的离线图标方案',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'iconify',
    'offline',
    'icon',
    'vue',
    'react',
  ],
  links: {
    github: 'https://github.com/AkagiYui/vite-plugin-iconify-offline',
    npm: 'https://www.npmjs.com/package/vite-plugin-iconify-offline',
    website: 'https://github.com/AkagiYui/vite-plugin-iconify-offline',
  },
  source: {
    github: 'AkagiYui/vite-plugin-iconify-offline',
    npm: 'vite-plugin-iconify-offline',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 104,
      weekly: 20,
    },
  },
})
