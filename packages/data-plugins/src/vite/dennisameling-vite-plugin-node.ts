import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@dennisameling/vite-plugin-node',
  description: 'Vite plugin to enable your node server HMR',
  version: '4.0.0-beta1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'node',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/axe-me/vite-plugin-node',
    npm: 'https://www.npmjs.com/package/@dennisameling/vite-plugin-node',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
