import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ldesign/vite-plugin-markdown-vue',
  description: 'Compile Markdown to Vue component',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'markdown-it',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mdit-vue/vite-plugin-vue-markdown',
    npm: 'https://www.npmjs.com/package/@ldesign/vite-plugin-markdown-vue',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 8,
    },
  },
})
