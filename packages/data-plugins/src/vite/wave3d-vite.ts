import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@wave3d/vite',
  description: 'Vite plugin: auto-capture a wave3d poster from the dev browser and write it to disk, HMR-synced (no headless browser).',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'gradient',
    'poster',
    'three',
    'vite',
    'vite-plugin',
    'wave',
    'webgl',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Amir-Abushanab/wave3d',
    npm: 'https://www.npmjs.com/package/@wave3d/vite',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 3,
    },
  },
})
