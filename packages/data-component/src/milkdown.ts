import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'milkdown',
  description: '插件化 WYSIWYG Markdown 编辑器框架',
  category: 'component',
  types: ['editor'],
  tags: ['markdown', 'wysiwyg'],

  source: {
    github: 'Milkdown/milkdown',
    npm: '@milkdown/vue',
  },

  links: {
    github: 'https://github.com/Milkdown/milkdown',
    npm: 'https://www.npmjs.com/package/@milkdown/vue',
  },
  stats: {
    stars: 11891,
    downloads: {
      monthly: 41074,
      weekly: 9516,
    },
  },
})
