import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compress-dist',
  description: 'A Vite plugin to compress the dist folder after build',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'zip',
    'dist',
    'compress',
    'archive',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lvzhenbo/vite-plugin-compress-dist',
    npm: 'https://www.npmjs.com/package/vite-plugin-compress-dist',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
