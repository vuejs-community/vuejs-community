import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'wouter-fs-routes',
  description: 'A vite plugin for wouter to generate routes from filesystem structure.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'wouter-fs-routes',
    'wouter',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/wouter-fs-routes',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 2,
    },
  },
})
