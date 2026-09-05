import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-killer-instincts',
  description: 'Vite plugin that detects and optionally kills processes blocking your dev server port',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'port',
    'kill',
    'strictPort',
    'dev-server',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wesbos/vite-plugin-killer-instincts',
    npm: 'https://www.npmjs.com/package/vite-plugin-killer-instincts',
  },
  stats: {
    downloads: {
      monthly: 8504,
      weekly: 2738,
    },
  },
})
