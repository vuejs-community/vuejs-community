import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'macaly-vite-tagger',
  description: 'A Vite plugin that adds location metadata to JSX elements for development debugging',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'jsx',
    'tsx',
    'react',
    'tanstack',
    'debugging',
    'development',
    'typescript',
    'babel',
  ],
  source: {
    npm: 'macaly-vite-tagger',
  },
  links: {
    npm: 'https://www.npmjs.com/package/macaly-vite-tagger',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
