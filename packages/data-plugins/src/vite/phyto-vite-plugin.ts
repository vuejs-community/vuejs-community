import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@phyto/vite-plugin',
  description: 'Vite plugin that injects the Phyto in-page harness into a Tauri app for end-to-end testing.',
  version: '0.1.47',
  category: 'plugin',
  tags: [
    'phyto',
    'tauri',
    'vite-plugin',
    'vite',
    'testing',
    'e2e',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/coniferous-dev/phyto',
    npm: 'https://www.npmjs.com/package/@phyto/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 178,
      weekly: 4,
    },
  },
})
