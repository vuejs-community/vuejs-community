import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@michthemaker/vite-plugin-vanjs',
  description: 'The default Vite plugin for VanJS projects',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'fast refresh',
    'vanjs',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/michthemaker/vanjs',
    npm: 'https://www.npmjs.com/package/@michthemaker/vite-plugin-vanjs',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 5,
    },
  },
})
