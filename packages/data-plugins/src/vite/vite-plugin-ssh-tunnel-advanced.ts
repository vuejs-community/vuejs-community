import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ssh-tunnel-advanced',
  description: 'Vite plugin to create SSH tunnels using system SSH for exposing local dev server remotely.',
  icon: 'logos:vite-icon',
  version: '1.0.7',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'ssh',
    'tunnel',
    'vite-plugin',
    'dev-server',
    'remote-access',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'longpoll/vite-plugin-ssh-tunnel-advanced',
    npm: 'vite-plugin-ssh-tunnel-advanced',
  },
  links: {
    github: 'https://github.com/longpoll/vite-plugin-ssh-tunnel-advanced',
    npm: 'https://www.npmjs.com/package/vite-plugin-ssh-tunnel-advanced',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 5,
    },
  },
})
