import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@idonnyfe/vite-plugin-deploy-to-server',
  description: 'A vite plugin for deploying to remote server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'deploy',
    'ssh',
  ],
  source: {
    github: 'donnyfe/vite-plugin-deploy-to-server',
    npm: '@idonnyfe/vite-plugin-deploy-to-server',
  },
  links: {
    github: 'https://github.com/donnyfe/vite-plugin-deploy-to-server',
    npm: 'https://www.npmjs.com/package/@idonnyfe/vite-plugin-deploy-to-server',
    website: 'https://github.com/donnyfe/vite-plugin-deploy-to-server/README.md',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
