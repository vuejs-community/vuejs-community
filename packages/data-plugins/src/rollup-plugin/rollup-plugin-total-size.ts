import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-total-size',
  description: '统计rollup 打包文件的 总计、原始尺寸、gzipped 体积',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/halo951/rollup-plugin-total-size',
    npm: 'https://www.npmjs.com/package/rollup-plugin-total-size',
    website: 'https://github.com/halo951/rollup-plugin-total-size#readme',
  },
  source: {
    github: 'halo951/rollup-plugin-total-size',
    npm: 'rollup-plugin-total-size',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
