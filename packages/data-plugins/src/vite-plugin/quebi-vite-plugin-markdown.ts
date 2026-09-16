import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@quebi/vite-plugin-markdown',
  description: 'Plugin compiling directories of markdown files into a nested json structure',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'markdown',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'quebi-gmbh/vite-markdown',
    npm: '@quebi/vite-plugin-markdown',
  },
  links: {
    github: 'https://github.com/quebi-gmbh/vite-markdown',
    npm: 'https://www.npmjs.com/package/@quebi/vite-plugin-markdown',
    website: 'https://github.com/quebi-gmbh/vite-markdown#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 701,
      weekly: 509,
    },
  },
})
