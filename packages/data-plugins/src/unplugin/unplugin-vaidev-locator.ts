import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vaidev-locator',
  description: '开发期给模板元素注入 data-vaidev-loc="文件:行:列" 源码定位属性，供可视化 AI 开发工具点选元素反查源码。基于 unplugin，跨 Vite/Webpack/Rollup/Rspack，支持 Vue2/Vue3/JSX/TSX。',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rspack',
    'vue',
    'react',
    'jsx',
    'tsx',
    'vaidev',
    'source-locator',
    'click-to-source',
    'devtools',
  ],
  source: {
    npm: 'unplugin-vaidev-locator',
  },
  links: {
    npm: 'https://www.npmjs.com/package/unplugin-vaidev-locator',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 11,
    },
  },
})
