import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-formatter',
  description: 'A code editor and comments formatter plugin of rollup, 一个rollup代码修改和格式化注释的插件',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup-babel-plugin',
    'rollup-plugin-formatter',
    'rollup-plugin-format',
    'rollup-plugin-editor',
    'rollup-plugin-comments',
    'rollup-plugin-fmtcomment',
    'rollup-plugin-beautify',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/CN-Tower/rollup-plugin-formatter',
    npm: 'https://www.npmjs.com/package/rollup-plugin-formatter',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
