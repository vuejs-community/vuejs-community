import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xvis/vite-plugin-update-popup',
  description: 'Vite plugin: emit a build version file and notify the running page to refresh',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'update',
    'popup',
    'version',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@xvis/vite-plugin-update-popup',
  },
  source: {
    npm: '@xvis/vite-plugin-update-popup',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 117,
      weekly: 3,
    },
  },
})
