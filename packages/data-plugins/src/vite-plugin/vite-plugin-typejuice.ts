import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-typejuice',
  description: 'Vite plugin for loading typejuice docs into Markdown files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'markdown',
    'typescript',
    'documentation',
  ],
  source: {
    github: 'galvez/typejuice',
    npm: 'vite-plugin-typejuice',
  },
  links: {
    github: 'https://github.com/galvez/typejuice',
    npm: 'https://www.npmjs.com/package/vite-plugin-typejuice',
    website: 'https://github.com/galvez/typejuice#readme',
  },
  stats: {
    stars: 266,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
