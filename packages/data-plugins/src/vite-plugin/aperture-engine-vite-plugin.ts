import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aperture-engine/vite-plugin',
  description: 'Vite integration for Aperture config, worker system discovery, and generated browser bootstrap.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'aperture',
    'ecs',
    'webgpu',
    'game-engine',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'felixtrz/aperture',
    npm: '@aperture-engine/vite-plugin',
  },
  links: {
    github: 'https://github.com/felixtrz/aperture',
    npm: 'https://www.npmjs.com/package/@aperture-engine/vite-plugin',
    website: 'https://github.com/felixtrz/aperture/tree/main/packages/vite-plugin#readme',
  },
  stats: {
    stars: 53,
    downloads: {
      monthly: 41,
      weekly: 7,
    },
  },
})
