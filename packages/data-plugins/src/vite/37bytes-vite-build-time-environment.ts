import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@37bytes/vite-build-time-environment',
  description: 'Vite plugin for integrating build-time environment variables like Git branch and commit hash.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'build-time',
    'versioning',
    'environment-variables',
    'ci-cd',
    'build-info',
    'build-variables',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/37bytes/public-packages',
    npm: 'https://www.npmjs.com/package/@37bytes/vite-build-time-environment',
  },
  stats: {
    downloads: {
      monthly: 66,
      weekly: 14,
    },
  },
})
