import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@honeyjs/vite-loader',
  description: 'A vite plugin to load various files, like png, svg, etc. As native html elements, or h functions',
  version: '0.2.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'svg',
    'components',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/CodeFoxDev/honeyjs-vite-loader',
    npm: 'https://www.npmjs.com/package/@honeyjs/vite-loader',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 6,
    },
  },
})
