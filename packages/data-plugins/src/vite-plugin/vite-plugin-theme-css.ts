import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-theme-css',
  description: 'Vite 插件：theme.config → 编译期 SCSS（CSS 变量 + helper）+ 运行时 globalThis.__THEME_CSS__ 深合并',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/yvygyyth/theme-css',
    npm: 'https://www.npmjs.com/package/vite-plugin-theme-css',
    website: 'https://github.com/yvygyyth/theme-css#readme',
  },
  source: {
    github: 'yvygyyth/theme-css',
    npm: 'vite-plugin-theme-css',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 500,
      weekly: 8,
    },
  },
})
