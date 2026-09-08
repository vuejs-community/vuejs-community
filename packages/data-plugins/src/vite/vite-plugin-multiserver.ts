import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-multiserver',
  description: 'A Vite plugin to launch multiple servers for the same app',
  icon: 'logos:vite-icon',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite-server',
    'server',
    'http-server',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'idleberg/vite-plugin-multiserver',
    npm: 'vite-plugin-multiserver',
  },
  links: {
    github: 'https://github.com/idleberg/vite-plugin-multiserver',
    npm: 'https://www.npmjs.com/package/vite-plugin-multiserver',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 13,
    },
  },
})
