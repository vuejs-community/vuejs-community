import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-app-version',
  description: 'Vite plugin + runtime client for SPA version detection via buildTime, with configurable watch triggers and onUpdate callback',
  version: '1.0.2',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/960602906/vite-app-version',
    npm: 'https://www.npmjs.com/package/vite-app-version',
  },
  stats: {
    downloads: {
      monthly: 85,
      weekly: 52,
    },
  },
})
