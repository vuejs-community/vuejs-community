import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jogak/core',
  description: 'Core types, registry, and Vite plugin for Jogak — a lightweight Storybook alternative.',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'jogak',
    'storybook',
    'storybook-alternative',
    'showcase',
    'design-system',
    'component-library',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/devclib/jogak',
    npm: 'https://www.npmjs.com/package/@jogak/core',
  },
  stats: {
    downloads: {
      monthly: 196,
      weekly: 11,
    },
  },
})
