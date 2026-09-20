import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-firebase-config',
  description: 'A Vite plugin to automatically sync Firebase configuration from environment variables to static files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'firebase',
    'config',
    'environment-variables',
  ],
  links: {
    github: 'https://github.com/YuArtian/vite-plugin-firebase-config',
    npm: 'https://www.npmjs.com/package/vite-plugin-firebase-config',
    website: 'https://github.com/YuArtian/vite-plugin-firebase-config#readme',
  },
  source: {
    github: 'YuArtian/vite-plugin-firebase-config',
    npm: 'vite-plugin-firebase-config',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 35,
      weekly: 3,
    },
  },
})
