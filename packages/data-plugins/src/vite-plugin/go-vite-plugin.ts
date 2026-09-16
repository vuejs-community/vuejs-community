import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'go-vite-plugin',
  description: 'Go plugin for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'go',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'geekr-dev/go-vite-plugin',
    npm: 'go-vite-plugin',
  },
  links: {
    github: 'https://github.com/geekr-dev/go-vite-plugin',
    npm: 'https://www.npmjs.com/package/go-vite-plugin',
    website: 'https://github.com/geekr-dev/go-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
