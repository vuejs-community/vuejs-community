import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-merge-css',
  description: 'A vite plugin that automatically merges all css chunks for each entry point into a single css file.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'frontend',
    'vite',
    'vite-plugin',
    'vite-plugin-merge-css',
  ],
  links: {
    github: 'https://github.com/doberkofler/vite-plugin-merge-css',
    npm: 'https://www.npmjs.com/package/vite-plugin-merge-css',
    website: 'https://github.com/doberkofler/vite-plugin-merge-css#readme',
  },
  source: {
    github: 'doberkofler/vite-plugin-merge-css',
    npm: 'vite-plugin-merge-css',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
