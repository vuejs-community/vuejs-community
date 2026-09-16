import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-node-red',
  description: 'Vite plugin for compiling Node-RED nodes',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'node-red',
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
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 5,
    },
  },
})
