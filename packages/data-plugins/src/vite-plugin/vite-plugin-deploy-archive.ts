import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deploy-archive',
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
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-deploy-archive',
  },
  source: {
    npm: 'vite-plugin-deploy-archive',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
