import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@foldkit/markdown',
  description: 'Write markdown files, get Foldkit views with live islands.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'foldkit',
    'markdown',
    'vite-plugin',
    'islands',
    'mdast',
  ],
  links: {
    github: 'https://github.com/foldkit/foldkit',
    npm: 'https://www.npmjs.com/package/@foldkit/markdown',
    website: 'https://github.com/foldkit/foldkit#readme',
  },
  source: {
    github: 'foldkit/foldkit',
    npm: '@foldkit/markdown',
  },
  stats: {
    stars: 851,
    downloads: {
      monthly: 20322,
      weekly: 3937,
    },
  },
})
