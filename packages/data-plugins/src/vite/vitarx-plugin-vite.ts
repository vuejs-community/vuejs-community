import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vitarx/plugin-vite',
  description: 'The official plugin for Vitarx support in Vite.',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'vitarx',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vitarx-lib/plugin-vite',
    npm: 'https://www.npmjs.com/package/@vitarx/plugin-vite',
  },
  stats: {
    downloads: {
      monthly: 234,
      weekly: 5,
    },
  },
})
