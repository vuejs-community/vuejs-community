import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xiaohuohumax/rollup-plugin-raw',
  description: 'Rollup 插件: 将文件以字符串导入',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'file',
    'base64',
  ],
  links: {
    github: 'https://github.com/xiaohuohumax/rollup-plugins',
    npm: 'https://www.npmjs.com/package/@xiaohuohumax/rollup-plugin-raw',
    website: 'https://github.com/xiaohuohumax/rollup-plugins/tree/main/packages/rollup-plugin-raw#readme',
  },
  source: {
    github: 'xiaohuohumax/rollup-plugins',
    npm: '@xiaohuohumax/rollup-plugin-raw',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
