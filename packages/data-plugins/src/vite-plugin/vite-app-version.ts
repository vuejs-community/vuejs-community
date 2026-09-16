import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-app-version',
  description: 'Vite plugin + runtime client for SPA version detection via buildTime, with configurable watch triggers and onUpdate callback',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'version-check',
    'build-time',
    'spa',
    'hot-update',
    'auto-reload',
    'deploy',
  ],
  source: {
    github: '960602906/vite-app-version',
    npm: 'vite-app-version',
  },
  links: {
    github: 'https://github.com/960602906/vite-app-version',
    npm: 'https://www.npmjs.com/package/vite-app-version',
    website: 'https://github.com/960602906/vite-app-version#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 90,
      weekly: 5,
    },
  },
})
