import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@madogai/vite-plugin-imagemin',
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
    github: 'madguy/vite-plugin-imagemin',
    npm: '@madogai/vite-plugin-imagemin',
  },
  links: {
    github: 'https://github.com/madguy/vite-plugin-imagemin',
    npm: 'https://www.npmjs.com/package/@madogai/vite-plugin-imagemin',
    website: 'https://github.com/madguy/vite-plugin-imagemin/tree/master/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 92,
      weekly: 7,
    },
  },
})
