import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'wangeditor',
  description: '国产开源富文本编辑器，作者已停止积极维护',
  category: 'component',
  types: ['editor'],
  tags: ['rich-text'],

  source: {
    github: 'wangeditor-team/wangEditor',
    npm: '@wangeditor/editor-for-vue',
  },

  links: {
    github: 'https://github.com/wangeditor-team/wangEditor',
    npm: 'https://www.npmjs.com/package/@wangeditor/editor-for-vue',
  },
  stats: {
    stars: 18364,
    downloads: {
      monthly: 172706,
      weekly: 42618,
    },
  },
})
