import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-estrela',
  description: 'A vite plugin to pre-process estrela jsx/tsx files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'estrela',
    'jsx',
    'tsx',
  ],
  source: {
    npm: 'vite-plugin-estrela',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-estrela',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 3,
    },
  },
})
