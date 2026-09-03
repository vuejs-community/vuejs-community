import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aaronellington/vite-plugin-inkwell',
  description: 'A Vite plugin that transforms directories of markdown files into typed, lazy-loaded content collections with frontmatter parsing, asset hashing, and HMR.',
  version: '0.2.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'markdown',
    'content',
    'frontmatter',
    'blog',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aaronellington/vite-plugin-inkwell',
    npm: 'https://www.npmjs.com/package/@aaronellington/vite-plugin-inkwell',
  },
  stats: {
    downloads: {
      monthly: 135,
      weekly: 7,
    },
  },
})
