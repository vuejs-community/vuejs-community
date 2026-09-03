import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-exporter',
  description: 'A vite plugin that auto-generate index files to make exports/imports more readable and centralized',
  version: '2.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dev-pengi/vite-exporter',
    npm: 'https://www.npmjs.com/package/vite-exporter',
  },
  stats: {
    downloads: {
      monthly: 56,
      weekly: 7,
    },
  },
})
