import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aaronellington/vite-plugin-inkwell',
  description: 'A Vite plugin that transforms directories of markdown files into typed, lazy-loaded content collections with frontmatter parsing, asset hashing, and HMR.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'markdown',
    'content',
    'frontmatter',
    'blog',
  ],
  links: {
    github: 'https://github.com/aaronellington/vite-plugin-inkwell',
    npm: 'https://www.npmjs.com/package/@aaronellington/vite-plugin-inkwell',
    website: 'https://github.com/aaronellington/vite-plugin-inkwell#readme',
  },
  source: {
    github: 'aaronellington/vite-plugin-inkwell',
    npm: '@aaronellington/vite-plugin-inkwell',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 114,
      weekly: 12,
    },
  },
})
