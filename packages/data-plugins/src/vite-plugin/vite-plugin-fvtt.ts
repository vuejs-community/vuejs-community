import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-fvtt',
  description: 'A Vite plugin for module and system development for Foundry VTT',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'foundryvtt',
  ],
  source: {
    github: 'MatyeusM/vite-plugin-fvtt',
    npm: 'vite-plugin-fvtt',
  },
  links: {
    github: 'https://github.com/MatyeusM/vite-plugin-fvtt',
    npm: 'https://www.npmjs.com/package/vite-plugin-fvtt',
    website: 'https://github.com/MatyeusM/vite-plugin-fvtt#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 2,
    },
  },
})
