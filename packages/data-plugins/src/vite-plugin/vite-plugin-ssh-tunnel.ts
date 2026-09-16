import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ssh-tunnel',
  description: 'Vite plugin to set up a reverse SSH tunnel for reverse proxies',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'plugin',
    'ssh',
    'tunnel',
    'reverse',
    'proxy',
  ],
  source: {
    github: 'fabrykowski/vite-plugin-ssh-tunnel',
    npm: 'vite-plugin-ssh-tunnel',
  },
  links: {
    github: 'https://github.com/fabrykowski/vite-plugin-ssh-tunnel',
    npm: 'https://www.npmjs.com/package/vite-plugin-ssh-tunnel',
    website: 'https://github.com/fabrykowski/vite-plugin-ssh-tunnel#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 53,
      weekly: 22,
    },
  },
})
