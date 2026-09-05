import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sec-fetch-dest',
  description: 'Vite plugin that patches missing Sec-Fetch-Dest headers for IP/Safari access. Fixes TanStack Start + Nitro dev server module loading failures.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tanstack-start',
    'nitro',
    'sec-fetch-dest',
    'safari',
    'dev-server',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/babpulss/vite-plugin-sec-fetch-dest',
    npm: 'https://www.npmjs.com/package/vite-plugin-sec-fetch-dest',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
