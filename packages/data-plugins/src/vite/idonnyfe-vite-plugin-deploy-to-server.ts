import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@idonnyfe/vite-plugin-deploy-to-server',
  description: 'A vite plugin for deploying to remote server',
  version: '0.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'deploy',
    'ssh',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/donnyfe/vite-plugin-deploy-to-server',
    npm: 'https://www.npmjs.com/package/@idonnyfe/vite-plugin-deploy-to-server',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 2,
    },
  },
})
