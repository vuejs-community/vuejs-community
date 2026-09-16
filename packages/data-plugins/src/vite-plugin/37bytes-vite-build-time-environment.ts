import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@37bytes/vite-build-time-environment',
  description: 'Vite plugin for integrating build-time environment variables like Git branch and commit hash.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: '37bytes/public-packages',
    npm: '@37bytes/vite-build-time-environment',
  },
  links: {
    github: 'https://github.com/37bytes/public-packages',
    npm: 'https://www.npmjs.com/package/@37bytes/vite-build-time-environment',
    website: 'https://github.com/37bytes/public-packages#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 81,
      weekly: 3,
    },
  },
})
