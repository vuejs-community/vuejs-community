import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vizejs/musea-nuxt',
  description: 'Nuxt mock layer for Musea - enables Nuxt component isolation in galleries',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'component-gallery',
    'mock',
    'musea',
    'nuxt',
    'vite-plugin',
  ],
  source: {
    github: 'ubugeeei-prod/vize',
    npm: '@vizejs/musea-nuxt',
  },
  links: {
    github: 'https://github.com/ubugeeei-prod/vize',
    npm: 'https://www.npmjs.com/package/@vizejs/musea-nuxt',
    website: 'https://github.com/ubugeeei-prod/vize',
  },
  stats: {
    stars: 895,
    downloads: {
      monthly: 9991,
      weekly: 2563,
    },
  },
})
