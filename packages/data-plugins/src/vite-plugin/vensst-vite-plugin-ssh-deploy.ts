import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vensst/vite-plugin-ssh-deploy',
  description: 'A Vite plugin to deploy build output to a remote server via SSH with backup and rollback.',
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
    'deployment',
    'backup',
    'rollback',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@vensst/vite-plugin-ssh-deploy',
  },
  source: {
    npm: '@vensst/vite-plugin-ssh-deploy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
