import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@volynets/reflex-vite-plugin',
  description: 'The default Vite plugin for Reflex projects',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'reflex',
    'vite',
    'vite-plugin',
    'jsx',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/volynetstyle/Reflex',
    npm: 'https://www.npmjs.com/package/@volynets/reflex-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 4,
    },
  },
})
