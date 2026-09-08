import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ssh-tunnel',
  description: 'Vite plugin to set up a reverse SSH tunnel for reverse proxies',
  icon: 'logos:vite-icon',
  version: '1.2.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'plugin',
    'ssh',
    'tunnel',
    'reverse',
    'proxy',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'fabrykowski/vite-plugin-ssh-tunnel',
    npm: 'vite-plugin-ssh-tunnel',
  },
  links: {
    github: 'https://github.com/fabrykowski/vite-plugin-ssh-tunnel',
    npm: 'https://www.npmjs.com/package/vite-plugin-ssh-tunnel',
  },
  stats: {
    downloads: {
      monthly: 42,
      weekly: 13,
    },
  },
})
