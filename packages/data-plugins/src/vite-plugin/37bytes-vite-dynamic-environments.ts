import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@37bytes/vite-dynamic-environments',
  description: 'Vite plugin for generating dynamic JavaScript files for each environment, allowing seamless integration and management of environment-specific configurations.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'environment-variables',
    'dynamic-environment',
    'build-tools',
  ],
  source: {
    github: '37bytes/public-packages',
    npm: '@37bytes/vite-dynamic-environments',
  },
  links: {
    github: 'https://github.com/37bytes/public-packages',
    npm: 'https://www.npmjs.com/package/@37bytes/vite-dynamic-environments',
    website: 'https://github.com/37bytes/public-packages#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 61,
      weekly: 4,
    },
  },
})
