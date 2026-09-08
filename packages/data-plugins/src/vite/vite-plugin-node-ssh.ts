import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-node-ssh',
  description: 'vite plugin power by node-ssh',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ssh2',
    'node-ssh',
    'ssh-promise',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'AFine970/vite-plugin-node-ssh',
    npm: 'vite-plugin-node-ssh',
  },
  links: {
    github: 'https://github.com/AFine970/vite-plugin-node-ssh',
    npm: 'https://www.npmjs.com/package/vite-plugin-node-ssh',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
