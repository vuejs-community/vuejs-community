import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-appsettings',
  description: 'Runtime environment for Vite. Serves an appsettings.json next to your bundle and honors Vite\'s .env convention — configure without rebuilding.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'appsettings',
    'runtime-env',
    'dotenv',
    '12-factor',
    'docker',
    'kubernetes',
    'net-appsettings',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cristiancastineiras/vite-plugin-appsettings',
    npm: 'https://www.npmjs.com/package/vite-plugin-appsettings',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
