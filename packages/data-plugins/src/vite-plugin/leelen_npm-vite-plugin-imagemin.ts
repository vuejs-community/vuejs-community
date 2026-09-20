import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@leelen_npm/vite-plugin-imagemin',
  description: 'A vite plugin for compressing image assets',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'imagemin',
    'vben',
  ],
  links: {
    github: 'https://github.com/anncwb/vite-plugin-imagemin',
    npm: 'https://www.npmjs.com/package/@leelen_npm/vite-plugin-imagemin',
    website: 'https://github.com/anncwb/vite-plugin-imagemin/tree/master/#readme',
  },
  source: {
    github: 'anncwb/vite-plugin-imagemin',
    npm: '@leelen_npm/vite-plugin-imagemin',
  },
  stats: {
    stars: 250,
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
