import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mars-tech/vite-debug-plugin',
  description: 'Vite plugin exposing a global $debug function in dev that mirrors output to the browser console and the Vite terminal. Calls are stripped from production builds.',
  version: '0.6.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'debug',
    'logger',
    'console',
    'mars-tech',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@mars-tech/vite-debug-plugin',
  },
  stats: {
    downloads: {
      monthly: 67,
      weekly: 6,
    },
  },
})
