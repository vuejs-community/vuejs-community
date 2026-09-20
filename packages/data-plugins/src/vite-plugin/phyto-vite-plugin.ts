import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@phyto/vite-plugin',
  description: 'Vite plugin that injects the Phyto in-page harness into a Tauri app for end-to-end testing.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'phyto',
    'tauri',
    'vite-plugin',
    'vite',
    'testing',
    'e2e',
  ],
  links: {
    github: 'https://github.com/coniferous-dev/phyto',
    npm: 'https://www.npmjs.com/package/@phyto/vite-plugin',
    website: 'https://github.com/coniferous-dev/phyto#readme',
  },
  source: {
    github: 'coniferous-dev/phyto',
    npm: '@phyto/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 119,
      weekly: 5,
    },
  },
})
