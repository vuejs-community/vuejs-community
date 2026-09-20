import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@wave3d/vite',
  description: 'Vite plugin: auto-capture a wave3d poster from the dev browser and write it to disk, HMR-synced (no headless browser).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'gradient',
    'poster',
    'three',
    'vite',
    'vite-plugin',
    'wave',
    'webgl',
  ],
  links: {
    github: 'https://github.com/Amir-Abushanab/wave3d',
    npm: 'https://www.npmjs.com/package/@wave3d/vite',
    website: 'https://github.com/Amir-Abushanab/wave3d/tree/main/packages/vite#readme',
  },
  source: {
    github: 'Amir-Abushanab/wave3d',
    npm: '@wave3d/vite',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 20,
      weekly: 3,
    },
  },
})
