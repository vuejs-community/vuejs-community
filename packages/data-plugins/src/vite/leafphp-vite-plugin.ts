import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@leafphp/vite-plugin',
  description: 'Leaf plugin for Vite.',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'leafphp',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/leafsphp/vite-plugin',
    npm: 'https://www.npmjs.com/package/@leafphp/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 17,
    },
  },
})
