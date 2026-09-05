import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-port',
  description: 'A Vite plugin that automatically finds and uses the next available port when the default port is occupied',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'port',
    'auto-port',
    'port-detection',
    'port-increment',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/GongTengXY/vite-plugin-auto-port',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-port',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
