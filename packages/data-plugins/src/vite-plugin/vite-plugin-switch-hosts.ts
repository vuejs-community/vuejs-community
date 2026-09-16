import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-switch-hosts',
  description: 'switch hosts by service worker for each origin in browser without modify system hosts file',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'switch-hosts',
    'SwitchHosts',
    'host',
    'hosts',
    'switch',
  ],
  source: {
    github: 'lisonge/vite-plugin-switch-hosts',
    npm: 'vite-plugin-switch-hosts',
  },
  links: {
    github: 'https://github.com/lisonge/vite-plugin-switch-hosts',
    npm: 'https://www.npmjs.com/package/vite-plugin-switch-hosts',
    website: 'https://github.com/lisonge/vite-plugin-switch-hosts#readme',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
