import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'litestar-vite-plugin',
  description: 'Litestar plugin for Vite.',
  version: '0.31.0',
  category: 'plugin',
  tags: [
    'litestar',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/litestar-org/litestar-vite',
    npm: 'https://www.npmjs.com/package/litestar-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 9973,
      weekly: 2045,
    },
  },
})
