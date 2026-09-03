import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-merge-css',
  description: 'A vite plugin that automatically merges all css chunks for each entry point into a single css file.',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'frontend',
    'vite',
    'vite-plugin',
    'vite-plugin-merge-css',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/doberkofler/vite-plugin-merge-css',
    npm: 'https://www.npmjs.com/package/vite-plugin-merge-css',
  },
  stats: {
    downloads: {
      monthly: 47,
      weekly: 6,
    },
  },
})
