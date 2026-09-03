import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vensst/vite-plugin-ssh-deploy',
  description: 'A Vite plugin to deploy build output to a remote server via SSH with backup and rollback.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'deploy',
    'ssh',
    'deployment',
    'backup',
    'rollback',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@vensst/vite-plugin-ssh-deploy',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 6,
    },
  },
})
