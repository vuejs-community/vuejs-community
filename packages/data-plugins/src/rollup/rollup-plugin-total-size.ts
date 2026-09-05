import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-total-size',
  description: '统计rollup 打包文件的 总计、原始尺寸、gzipped 体积',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/halo951/rollup-plugin-total-size',
    npm: 'https://www.npmjs.com/package/rollup-plugin-total-size',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
