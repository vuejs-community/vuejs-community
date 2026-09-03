import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-firebase-config',
  description: 'A Vite plugin to automatically sync Firebase configuration from environment variables to static files',
  version: '0.2.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'firebase',
    'config',
    'environment-variables',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/YuArtian/vite-plugin-firebase-config',
    npm: 'https://www.npmjs.com/package/vite-plugin-firebase-config',
  },
  stats: {
    downloads: {
      monthly: 39,
      weekly: 17,
    },
  },
})
