import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-fvtt',
  description: 'A Vite plugin for module and system development for Foundry VTT',
  version: '0.2.12',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'foundryvtt',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/MatyeusM/vite-plugin-fvtt',
    npm: 'https://www.npmjs.com/package/vite-plugin-fvtt',
  },
  stats: {
    downloads: {
      monthly: 74,
      weekly: 3,
    },
  },
})
