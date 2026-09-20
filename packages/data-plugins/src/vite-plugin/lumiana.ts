import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'lumiana',
  description: 'A local Node.js runtime for Vite with operating-system capability bridging',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'lumiana',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/lumiana',
  },
  source: {
    npm: 'lumiana',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2026,
      weekly: 1524,
    },
  },
})
