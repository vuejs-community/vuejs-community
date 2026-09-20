import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@insy/vite',
  description: 'Vite plugin for Insy - AI-powered visual editing',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'insy',
    'ai',
    'visual-editing',
    'react',
  ],
  links: {
    github: 'https://github.com/DivinPrince/insy',
    npm: 'https://www.npmjs.com/package/@insy/vite',
    website: 'https://github.com/DivinPrince/insy#readme',
  },
  source: {
    github: 'DivinPrince/insy',
    npm: '@insy/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 2,
    },
  },
})
