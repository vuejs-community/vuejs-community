import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vitarx/plugin-vite',
  description: 'The official plugin for Vitarx support in Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vitarx',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vitarx-lib/plugin-vite',
    npm: 'https://www.npmjs.com/package/@vitarx/plugin-vite',
    website: 'https://github.com/vitarx-lib/plugin-vite#readme',
  },
  source: {
    github: 'vitarx-lib/plugin-vite',
    npm: '@vitarx/plugin-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 160,
      weekly: 30,
    },
  },
})
