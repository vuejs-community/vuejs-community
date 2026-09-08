import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-imagemin-lts',
  description: 'A vite plugin for compressing image assets',
  icon: 'logos:vite-icon',
  version: '0.6.3',
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
    github: 'VaJoy/vite-plugin-imagemin-lts',
    npm: 'vite-plugin-imagemin-lts',
  },
  links: {
    github: 'https://github.com/VaJoy/vite-plugin-imagemin-lts',
    npm: 'https://www.npmjs.com/package/vite-plugin-imagemin-lts',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 9,
    },
  },
})
