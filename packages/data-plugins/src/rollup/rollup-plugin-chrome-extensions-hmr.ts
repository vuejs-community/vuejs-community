import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-chrome-extensions-hmr',
  description: '基于rollup/vite开发的浏览器插件热更新插件',
  version: '1.0.8',
  category: 'plugin',
  tags: [
    'chrome-extensions',
    'hmr',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/zhangrunzhao/rollup-plugin-chrome-extensions-hmr',
    npm: 'https://www.npmjs.com/package/rollup-plugin-chrome-extensions-hmr',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 9,
    },
  },
})
