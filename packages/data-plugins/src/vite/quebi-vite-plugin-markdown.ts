import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@quebi/vite-plugin-markdown',
  description: 'Plugin compiling directories of markdown files into a nested json structure',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'markdown',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/quebi-gmbh/vite-markdown',
    npm: 'https://www.npmjs.com/package/@quebi/vite-plugin-markdown',
  },
  stats: {
    downloads: {
      monthly: 392,
      weekly: 3,
    },
  },
})
