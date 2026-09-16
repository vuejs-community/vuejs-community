import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vapor-vite-plugin',
  description: 'Vapor plugin for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vapor',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'm1guelpf/vapor-vite-plugin',
    npm: 'vapor-vite-plugin',
  },
  links: {
    github: 'https://github.com/m1guelpf/vapor-vite-plugin',
    npm: 'https://www.npmjs.com/package/vapor-vite-plugin',
    website: 'https://github.com/m1guelpf/vapor-vite-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
