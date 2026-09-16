import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-legacy-dual-track',
  description: 'Vite 浏览器双轨兼容插件：构建现代包与 legacy 包，并按运行时探测分流加载',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'zhaojiale/vite-plugin-legacy-dual-track',
    npm: 'vite-plugin-legacy-dual-track',
  },
  links: {
    github: 'https://github.com/zhaojiale/vite-plugin-legacy-dual-track',
    npm: 'https://www.npmjs.com/package/vite-plugin-legacy-dual-track',
    website: 'https://github.com/zhaojiale/vite-plugin-legacy-dual-track#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1174,
      weekly: 46,
    },
  },
})
