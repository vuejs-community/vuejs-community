import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-multiserver',
  description: 'A Vite plugin to launch multiple servers for the same app',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-server',
    'server',
    'http-server',
  ],
  source: {
    github: 'idleberg/vite-plugin-multiserver',
    npm: 'vite-plugin-multiserver',
  },
  links: {
    github: 'https://github.com/idleberg/vite-plugin-multiserver',
    npm: 'https://www.npmjs.com/package/vite-plugin-multiserver',
    website: 'https://github.com/idleberg/vite-plugin-multiserver#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
