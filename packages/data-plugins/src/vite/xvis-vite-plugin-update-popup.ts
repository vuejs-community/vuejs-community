import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xvis/vite-plugin-update-popup',
  description: 'Vite plugin: emit a build version file and notify the running page to refresh',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'update',
    'popup',
    'version',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@xvis/vite-plugin-update-popup',
  },
  stats: {
    downloads: {
      monthly: 106,
      weekly: 15,
    },
  },
})
