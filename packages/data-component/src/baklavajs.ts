import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'baklavajs',
  description: '浏览器端节点编辑器，适合可视化编程 / 数据流场景',
  category: 'component',
  types: ['component-library'],
  tags: ['node-editor', 'diagram'],

  source: {
    github: 'newcat/baklavajs',
    npm: '@baklavajs/renderer-vue',
  },

  links: {
    github: 'https://github.com/newcat/baklavajs',
    npm: 'https://www.npmjs.com/package/@baklavajs/renderer-vue',
  },
  stats: {
    stars: 2090,
    downloads: {
      monthly: 19599,
      weekly: 4664,
    },
  },
})
