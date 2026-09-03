import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nodemon',
  description: 'Run a backend server in a Vite project via Nodemon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'nodemon',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/MomsFriendlyDevCo/vite-plugin-nodemon',
    npm: 'https://www.npmjs.com/package/vite-plugin-nodemon',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
