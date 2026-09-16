import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tspaths',
  description: 'Vite plugin to allow use of tsconfig paths',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
    'tsconfig',
  ],
  source: {
    npm: 'vite-plugin-tspaths',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-tspaths',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
