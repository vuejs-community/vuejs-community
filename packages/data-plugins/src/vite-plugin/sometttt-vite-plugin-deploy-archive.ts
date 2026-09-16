import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sometttt/vite-plugin-deploy-archive',
  description: 'Deploy Vite build output to an SSH server with timestamped remote backups.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'deploy',
    'ssh',
    'backup',
  ],
  source: {
    npm: '@sometttt/vite-plugin-deploy-archive',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@sometttt/vite-plugin-deploy-archive',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
