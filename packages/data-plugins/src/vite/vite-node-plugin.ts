import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-node-plugin',
  description: 'Plugin to use Vite with Node.js as dev server',
  version: '0.0.10',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'node',
    'istanbul',
    'plugin',
    'instrument',
    'middleware',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/fargass/vite-node-plugin',
    npm: 'https://www.npmjs.com/package/vite-node-plugin',
  },
  stats: {
    downloads: {
      monthly: 39,
      weekly: 2,
    },
  },
})
