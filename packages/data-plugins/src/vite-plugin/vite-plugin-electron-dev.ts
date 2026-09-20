import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-electron-dev',
  description: '一款在开发使用vite开发electron程序时的插件（注意，在使用此插件前，需要安装 mv-tsc-watch）',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'electron',
    'plugin',
    'development',
    'es-module',
    'commonjs',
    'vite',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-electron-dev',
  },
  source: {
    npm: 'vite-plugin-electron-dev',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
