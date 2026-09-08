import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-backend',
  description: 'backend plugin for Vite.',
  icon: 'logos:vite-icon',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'backend',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'mrrizkin/vite-plugin-backend',
    npm: 'vite-plugin-backend',
  },
  links: {
    github: 'https://github.com/mrrizkin/vite-plugin-backend',
    npm: 'https://www.npmjs.com/package/vite-plugin-backend',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 8,
    },
  },
})
