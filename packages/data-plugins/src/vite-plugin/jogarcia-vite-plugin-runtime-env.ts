import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jogarcia/vite-plugin-runtime-env',
  description: 'Read environment variables on runtime instead of build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@jogarcia/vite-plugin-runtime-env',
  },
  source: {
    npm: '@jogarcia/vite-plugin-runtime-env',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 1,
    },
  },
})
