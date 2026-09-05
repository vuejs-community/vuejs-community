import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-typejuice',
  description: 'Vite plugin for loading typejuice docs into Markdown files',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'markdown',
    'typescript',
    'documentation',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/galvez/typejuice',
    npm: 'https://www.npmjs.com/package/vite-plugin-typejuice',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 2,
    },
  },
})
