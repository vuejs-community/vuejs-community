import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svgo',
  description: 'Vite plugin to import and compress svg files with SVGO',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'svg',
    'svgo',
  ],
  source: {
    github: 'r3dDoX/vite-plugin-svgo',
    npm: 'vite-plugin-svgo',
  },
  links: {
    github: 'https://github.com/r3dDoX/vite-plugin-svgo',
    npm: 'https://www.npmjs.com/package/vite-plugin-svgo',
    website: 'https://github.com/r3dDoX/vite-plugin-svgo#readme',
  },
  stats: {
    stars: 37,
    downloads: {
      monthly: 36097,
      weekly: 6184,
    },
  },
})
