import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xiaohuohumax/rollup-plugin-file-base64',
  description: 'Rollup 插件: 将文件以 base64 格式导入, 并且添加媒体类型',
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
    npm: 'https://www.npmjs.com/package/@xiaohuohumax/rollup-plugin-file-base64',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 5,
    },
  },
})
