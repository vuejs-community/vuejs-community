import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-markdown-jsdoc',
  description: '> 基于 JSDoc 注释自动生成 Markdown 格式 API 文档的 Rollup 插件，支持函数/对象的多维度文档生成，完美适配现代前端工程化流程',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'markdown',
    'jsdoc',
  ],
  source: {
    npm: 'rollup-plugin-markdown-jsdoc',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-markdown-jsdoc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
