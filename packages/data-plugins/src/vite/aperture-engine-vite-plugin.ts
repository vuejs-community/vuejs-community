import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aperture-engine/vite-plugin',
  description: 'Vite integration for Aperture config, worker system discovery, and generated browser bootstrap.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'aperture',
    'ecs',
    'webgpu',
    'game-engine',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/felixtrz/aperture',
    npm: 'https://www.npmjs.com/package/@aperture-engine/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 39,
      weekly: 9,
    },
  },
})
