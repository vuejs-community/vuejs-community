import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@edgeone/vite',
  description: 'EdgeOne universal Vite adapter — supports Vite SSR, Vike, and TanStack Start',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'edgeone',
    'adapter',
    'ssr',
    'vike',
    'tanstack-start',
  ],
  source: {
    npm: '@edgeone/vite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@edgeone/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1839,
      weekly: 52,
    },
  },
})
