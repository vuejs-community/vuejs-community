import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jk2908/mdsrc',
  description: 'A Vite plugin for turning structured Markdown content into importable, type-safe modules',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'markdown',
    'vite-plugin',
    'typescript',
    'content-management',
    'frontmatter',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jk2908/mdsrc',
    npm: 'https://www.npmjs.com/package/@jk2908/mdsrc',
  },
  stats: {
    downloads: {
      monthly: 71,
      weekly: 4,
    },
  },
})
