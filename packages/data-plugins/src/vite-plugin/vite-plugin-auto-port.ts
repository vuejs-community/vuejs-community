import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-port',
  description: 'A Vite plugin that automatically finds and uses the next available port when the default port is occupied',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'port',
    'auto-port',
    'port-detection',
    'port-increment',
  ],
  links: {
    github: 'https://github.com/GongTengXY/vite-plugin-auto-port',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-port',
    website: 'https://github.com/GongTengXY/vite-plugin-auto-port#readme',
  },
  source: {
    github: 'GongTengXY/vite-plugin-auto-port',
    npm: 'vite-plugin-auto-port',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
