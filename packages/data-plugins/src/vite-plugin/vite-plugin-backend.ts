import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-backend',
  description: 'backend plugin for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'backend',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'mrrizkin/vite-plugin-backend',
    npm: 'vite-plugin-backend',
  },
  links: {
    github: 'https://github.com/mrrizkin/vite-plugin-backend',
    npm: 'https://www.npmjs.com/package/vite-plugin-backend',
    website: 'https://github.com/mrrizkin/vite-plugin-backend',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 2,
    },
  },
})
