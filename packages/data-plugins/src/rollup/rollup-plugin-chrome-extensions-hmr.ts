import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-chrome-extensions-hmr',
  description: '基于rollup/vite开发的浏览器插件热更新插件',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'zhangrunzhao/rollup-plugin-chrome-extensions-hmr',
    npm: 'rollup-plugin-chrome-extensions-hmr',
  },
  links: {
    github: 'https://github.com/zhangrunzhao/rollup-plugin-chrome-extensions-hmr',
    npm: 'https://www.npmjs.com/package/rollup-plugin-chrome-extensions-hmr',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 4,
    },
  },
})
