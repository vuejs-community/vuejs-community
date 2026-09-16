import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-chrome-extensions-hmr',
  description: '基于rollup/vite开发的浏览器插件热更新插件',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'chrome-extensions',
    'hmr',
    'rollup-plugin',
  ],
  source: {
    github: 'zhangrunzhao/rollup-plugin-chrome-extensions-hmr',
    npm: 'rollup-plugin-chrome-extensions-hmr',
  },
  links: {
    github: 'https://github.com/zhangrunzhao/rollup-plugin-chrome-extensions-hmr',
    npm: 'https://www.npmjs.com/package/rollup-plugin-chrome-extensions-hmr',
    website: 'https://github.com/zhangrunzhao/rollup-plugin-chrome-extensions-hmr#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 24,
      weekly: 5,
    },
  },
})
