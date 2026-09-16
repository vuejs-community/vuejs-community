import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mars-tech/vite-debug-plugin',
  description: 'Vite plugin exposing a global $debug function in dev that mirrors output to the browser console and the Vite terminal. Calls are stripped from production builds.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'debug',
    'logger',
    'console',
    'mars-tech',
  ],
  source: {
    npm: '@mars-tech/vite-debug-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@mars-tech/vite-debug-plugin',
    website: 'https://gitlab.com/mars-tech/vite-debug-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 37,
      weekly: 3,
    },
  },
})
