import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kranehq/yard-vite',
  description: 'Vite plugin for Yard local hostname routing',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'yard',
    'vite',
    'vite-plugin',
    'localhost',
    'dev-proxy',
    'development',
  ],
  links: {
    github: 'https://github.com/calasanmarko/yard',
    npm: 'https://www.npmjs.com/package/@kranehq/yard-vite',
    website: 'https://github.com/calasanmarko/yard/tree/main/packages/vite',
  },
  source: {
    github: 'calasanmarko/yard',
    npm: '@kranehq/yard-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 2,
    },
  },
})
