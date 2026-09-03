import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@zxzy/vite-plugin-dist-zip',
  description: 'A Vite plugin to zip the dist directory after building',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'zip',
    'archive',
    'dist',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@zxzy/vite-plugin-dist-zip',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 8,
    },
  },
})
