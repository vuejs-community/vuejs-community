import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-electron-dev',
  description: '一款在开发使用vite开发electron程序时的插件（注意，在使用此插件前，需要安装 mv-tsc-watch）',
  version: '1.0.12',
  category: 'plugin',
  tags: [
    'electron',
    'plugin',
    'development',
    'es-module',
    'commonjs',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-electron-dev',
  },
  stats: {
    downloads: {
      monthly: 32,
      weekly: 5,
    },
  },
})
