import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tiptap',
  description: 'Headless 富文本编辑器框架',
  category: 'component',
  types: ['editor'],
  tags: ['rich-text', 'headless'],

  source: {
    github: 'ueberdosis/tiptap',
    npm: '@tiptap/vue-3',
  },

  links: {
    github: 'https://github.com/ueberdosis/tiptap',
    npm: 'https://www.npmjs.com/package/@tiptap/vue-3',
  },
  stats: {
    stars: 38277,
    downloads: {
      monthly: 6225810,
      weekly: 1601593,
    },
  },
})
