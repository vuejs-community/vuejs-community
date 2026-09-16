import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@oveo/vite',
  description: 'Vite plugin for oveo optimizer',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'oveo',
    'vite-plugin',
  ],
  source: {
    github: 'localvoid/oveo',
    npm: '@oveo/vite',
  },
  links: {
    github: 'https://github.com/localvoid/oveo',
    npm: 'https://www.npmjs.com/package/@oveo/vite',
    website: 'https://github.com/localvoid/oveo',
  },
  stats: {
    stars: 16,
    downloads: {
      monthly: 22,
      weekly: 1,
    },
  },
})
