import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@phillip-best/foundry-build-tools',
  description: 'Vite build tooling for Foundry VTT modules: manifest generation, a dev server Foundry can load, and a linker.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'foundry-vtt',
    'foundryvtt',
    'foundry-module',
    'vite-plugin',
    'vite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Pjb518/foundry-build-tools',
    npm: 'https://www.npmjs.com/package/@phillip-best/foundry-build-tools',
  },
  stats: {
    downloads: {
      monthly: 266,
      weekly: 8,
    },
  },
})
