import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xiaohuohumax/rollup-plugin-raw',
  description: 'Rollup 插件: 将文件以字符串导入',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'file',
    'base64',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/xiaohuohumax/rollup-plugins',
    npm: 'https://www.npmjs.com/package/@xiaohuohumax/rollup-plugin-raw',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 8,
    },
  },
})
