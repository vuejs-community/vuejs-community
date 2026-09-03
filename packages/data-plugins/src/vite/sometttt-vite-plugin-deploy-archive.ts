import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@sometttt/vite-plugin-deploy-archive',
  description: 'Deploy Vite build output to an SSH server with timestamped remote backups.',
  version: '0.1.0',
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
    npm: 'https://www.npmjs.com/package/@sometttt/vite-plugin-deploy-archive',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 5,
    },
  },
})
