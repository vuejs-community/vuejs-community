import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@phillip-best/foundry-build-tools',
  description: 'Vite build tooling for Foundry VTT modules: manifest generation, a dev server Foundry can load, and a linker.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'foundry-vtt',
    'foundryvtt',
    'foundry-module',
    'vite-plugin',
    'vite',
  ],
  links: {
    github: 'https://github.com/Pjb518/foundry-build-tools',
    npm: 'https://www.npmjs.com/package/@phillip-best/foundry-build-tools',
    website: 'https://github.com/Pjb518/foundry-build-tools#readme',
  },
  source: {
    github: 'Pjb518/foundry-build-tools',
    npm: '@phillip-best/foundry-build-tools',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 71,
      weekly: 7,
    },
  },
})
