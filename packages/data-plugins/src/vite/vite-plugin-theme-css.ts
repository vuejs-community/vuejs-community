import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-theme-css',
  description: 'Vite 插件：用一份主题配置生成 CSS 变量、SCSS helper 与 JS 运行时，支持多主题切换与热更新',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'theme',
    'css',
    'css-variables',
    'scss',
    'dark-mode',
    'theme-switcher',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yvygyyth/theme-css',
    npm: 'https://www.npmjs.com/package/vite-plugin-theme-css',
  },
  stats: {
    downloads: {
      monthly: 463,
      weekly: 463,
    },
  },
})
