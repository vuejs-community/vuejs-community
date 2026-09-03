import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-static-filehash',
  description: 'A Vite plugin that tries to keep the hash of a single file unchanged',
  version: '0.0.8-alpha.2',
  category: 'plugin',
  tags: [
    'vite',
    'hash',
    'file',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/MrQinYQ/vite-plugin-static-filehash',
    npm: 'https://www.npmjs.com/package/vite-plugin-static-filehash',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 2,
    },
  },
})
