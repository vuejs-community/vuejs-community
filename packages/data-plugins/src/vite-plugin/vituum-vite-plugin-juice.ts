import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vituum/vite-plugin-juice',
  description: 'Vite plugin for Juice, inlines css into HTML',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'juice',
    'vituum',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vituum/vite-plugin-juice',
    npm: 'https://www.npmjs.com/package/@vituum/vite-plugin-juice',
    website: 'https://github.com/vituum/vite-plugin-juice#readme',
  },
  source: {
    github: 'vituum/vite-plugin-juice',
    npm: '@vituum/vite-plugin-juice',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 613,
      weekly: 121,
    },
  },
})
