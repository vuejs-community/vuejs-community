import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-console-forward',
  description: 'Vite plugin to forward browser console logs to the terminal during development',
  icon: 'logos:vite-icon',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'console',
    'logging',
    'devtools',
    'debug',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-console-forward',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-console-forward',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 2,
    },
  },
})
