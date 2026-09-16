import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sec-fetch-dest',
  description: 'Vite plugin that patches missing Sec-Fetch-Dest headers for IP/Safari access. Fixes TanStack Start + Nitro dev server module loading failures.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tanstack-start',
    'nitro',
    'sec-fetch-dest',
    'safari',
    'dev-server',
  ],
  source: {
    github: 'babpulss/vite-plugin-sec-fetch-dest',
    npm: 'vite-plugin-sec-fetch-dest',
  },
  links: {
    github: 'https://github.com/babpulss/vite-plugin-sec-fetch-dest',
    npm: 'https://www.npmjs.com/package/vite-plugin-sec-fetch-dest',
    website: 'https://github.com/babpulss/vite-plugin-sec-fetch-dest#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 5,
    },
  },
})
