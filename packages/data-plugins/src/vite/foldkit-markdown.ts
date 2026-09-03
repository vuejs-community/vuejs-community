import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@foldkit/markdown',
  description: 'Write markdown files, get Foldkit views with live islands.',
  version: '0.9.0',
  category: 'plugin',
  tags: [
    'foldkit',
    'markdown',
    'vite-plugin',
    'islands',
    'mdast',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/foldkit/foldkit',
    npm: 'https://www.npmjs.com/package/@foldkit/markdown',
  },
  stats: {
    downloads: {
      monthly: 9770,
      weekly: 8178,
    },
  },
})
