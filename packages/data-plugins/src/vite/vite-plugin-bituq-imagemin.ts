import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bituq-imagemin',
  description: 'A vite plugin for compressing image assets',
  icon: 'logos:vite-icon',
  version: '0.6.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'imagemin',
    'vben',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'anncwb/vite-plugin-imagemin',
    npm: 'vite-plugin-bituq-imagemin',
  },
  links: {
    github: 'https://github.com/anncwb/vite-plugin-imagemin',
    npm: 'https://www.npmjs.com/package/vite-plugin-bituq-imagemin',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
