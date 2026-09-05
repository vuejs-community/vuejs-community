import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deploy-archive',
  description: 'Deploy Vite build output to an SSH server with timestamped remote backups.',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'deploy',
    'ssh',
    'backup',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-deploy-archive',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 0,
    },
  },
})
