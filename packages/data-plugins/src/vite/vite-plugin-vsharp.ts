import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vsharp',
  description: 'A Vite plugin that compresses static images after each builds by using sharp.js',
  version: '1.9.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'sharp.js',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jw-12138/vite-plugin-vsharp',
    npm: 'https://www.npmjs.com/package/vite-plugin-vsharp',
  },
  stats: {
    downloads: {
      monthly: 5621,
      weekly: 1605,
    },
  },
})
