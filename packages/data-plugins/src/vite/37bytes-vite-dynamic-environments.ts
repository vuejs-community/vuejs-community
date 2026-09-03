import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@37bytes/vite-dynamic-environments',
  description: 'Vite plugin for generating dynamic JavaScript files for each environment, allowing seamless integration and management of environment-specific configurations.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'environment-variables',
    'dynamic-environment',
    'build-tools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/37bytes/public-packages',
    npm: 'https://www.npmjs.com/package/@37bytes/vite-dynamic-environments',
  },
  stats: {
    downloads: {
      monthly: 50,
      weekly: 3,
    },
  },
})
