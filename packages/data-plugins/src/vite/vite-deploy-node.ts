import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vite-deploy/node',
  description: 'Deploy your Vite project to hosts which support Node.js.',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'adapter',
    'node',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/web-runes/vite-deploy',
    npm: 'https://www.npmjs.com/package/@vite-deploy/node',
  },
  stats: {
    downloads: {
      monthly: 220,
      weekly: 23,
    },
  },
})
