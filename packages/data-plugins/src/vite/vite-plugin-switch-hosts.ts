import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-switch-hosts',
  description: 'switch hosts by service worker for each origin in browser without modify system hosts file',
  version: '0.0.8',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'switch-hosts',
    'SwitchHosts',
    'host',
    'hosts',
    'switch',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lisonge/vite-plugin-switch-hosts',
    npm: 'https://www.npmjs.com/package/vite-plugin-switch-hosts',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
