import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-node-red',
  description: 'Vite plugin for compiling Node-RED nodes',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'node-red',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/iamtheyammer/vite-plugin-node-red',
    npm: 'https://www.npmjs.com/package/vite-plugin-node-red',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 5,
    },
  },
})
