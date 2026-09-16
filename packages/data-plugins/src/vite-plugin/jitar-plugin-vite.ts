import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jitar/plugin-vite',
  description: 'Vite plugin for Jitar.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'jitar',
  ],
  source: {
    github: 'MaskingTechnology/jitar',
    npm: '@jitar/plugin-vite',
  },
  links: {
    github: 'https://github.com/MaskingTechnology/jitar',
    npm: 'https://www.npmjs.com/package/@jitar/plugin-vite',
    website: 'https://jitar.dev',
  },
  stats: {
    stars: 167,
    downloads: {
      monthly: 395,
      weekly: 200,
    },
  },
})
