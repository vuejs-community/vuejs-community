import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'wouter-fs-routes',
  description: 'A vite plugin for wouter to generate routes from filesystem structure.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'wouter-fs-routes',
    'wouter',
  ],
  source: {
    npm: 'wouter-fs-routes',
  },
  links: {
    npm: 'https://www.npmjs.com/package/wouter-fs-routes',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
