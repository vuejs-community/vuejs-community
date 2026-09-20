import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-console-forward',
  description: 'Vite plugin to forward browser console logs to the terminal during development',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'console',
    'logging',
    'devtools',
    'debug',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-console-forward',
  },
  source: {
    npm: 'vite-plugin-console-forward',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
