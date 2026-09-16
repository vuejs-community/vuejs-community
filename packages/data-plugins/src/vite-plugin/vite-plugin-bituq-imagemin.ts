import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bituq-imagemin',
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
  source: {
    github: 'anncwb/vite-plugin-imagemin',
    npm: 'vite-plugin-bituq-imagemin',
  },
  links: {
    github: 'https://github.com/anncwb/vite-plugin-imagemin',
    npm: 'https://www.npmjs.com/package/vite-plugin-bituq-imagemin',
    website: 'https://github.com/anncwb/vite-plugin-imagemin/tree/master/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
