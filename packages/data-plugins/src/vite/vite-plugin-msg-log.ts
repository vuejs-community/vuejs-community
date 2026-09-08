import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-msg-log',
  description: 'log your current env',
  icon: 'logos:vite-icon',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'node',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'PengBoUESTC/vite-plugin-msg-log',
    npm: 'vite-plugin-msg-log',
  },
  links: {
    github: 'https://github.com/PengBoUESTC/vite-plugin-msg-log',
    npm: 'https://www.npmjs.com/package/vite-plugin-msg-log',
  },
  stats: {
    downloads: {
      monthly: 62,
      weekly: 23,
    },
  },
})
