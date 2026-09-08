import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-qiniu',
  description: '打包时将静态资源上传到七牛',
  icon: 'logos:rollupjs',
  version: '1.0.7',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'idler8/rollup-plugin-qiniu',
    npm: 'rollup-plugin-qiniu',
  },
  links: {
    github: 'https://github.com/idler8/rollup-plugin-qiniu',
    npm: 'https://www.npmjs.com/package/rollup-plugin-qiniu',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
