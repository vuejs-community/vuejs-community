import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-node-red',
  description: 'Vite plugin for compiling Node-RED nodes',
  icon: 'logos:vite-icon',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'node-red',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'iamtheyammer/vite-plugin-node-red',
    npm: 'vite-plugin-node-red',
  },
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
