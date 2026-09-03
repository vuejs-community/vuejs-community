import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vaidev-locator',
  description: '开发期给模板元素注入 data-vaidev-loc="文件:行:列" 源码定位属性，供可视化 AI 开发工具点选元素反查源码。基于 unplugin，跨 Vite/Webpack/Rollup/Rspack，支持 Vue2/Vue3/JSX/TSX。',
  version: '0.1.0',
  category: 'plugin',
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
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/unplugin-vaidev-locator',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
