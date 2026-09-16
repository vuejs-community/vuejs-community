import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xiaohuohumax/rollup-plugin-file-base64',
  description: 'Rollup 插件: 将文件以 base64 格式导入, 并且添加媒体类型',
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
  source: {
    github: 'xiaohuohumax/rollup-plugins',
    npm: '@xiaohuohumax/rollup-plugin-file-base64',
  },
  links: {
    github: 'https://github.com/xiaohuohumax/rollup-plugins',
    npm: 'https://www.npmjs.com/package/@xiaohuohumax/rollup-plugin-file-base64',
    website: 'https://github.com/xiaohuohumax/rollup-plugins/tree/main/packages/rollup-plugin-file-base64#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
