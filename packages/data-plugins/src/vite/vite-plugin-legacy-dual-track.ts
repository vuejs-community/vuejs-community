import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-legacy-dual-track',
  description: 'Vite 浏览器双轨兼容插件：构建现代包与 legacy 包，并按运行时探测分流加载',
  version: '1.1.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'legacy',
    'browser-compatibility',
    'chrome-69',
    'firefox-52',
    'dual-track',
    'polyfill',
    'postcss',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/zhaojiale/vite-plugin-legacy-dual-track',
    npm: 'https://www.npmjs.com/package/vite-plugin-legacy-dual-track',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
