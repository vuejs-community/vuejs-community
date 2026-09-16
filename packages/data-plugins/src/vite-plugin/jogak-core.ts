import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jogak/core',
  description: 'Core types, registry, and Vite plugin for Jogak — a lightweight Storybook alternative.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'jogak',
    'storybook',
    'storybook-alternative',
    'showcase',
    'design-system',
    'component-library',
    'vite-plugin',
  ],
  source: {
    github: 'devclib/jogak',
    npm: '@jogak/core',
  },
  links: {
    github: 'https://github.com/devclib/jogak',
    npm: 'https://www.npmjs.com/package/@jogak/core',
    website: 'https://github.com/devclib/jogak#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 188,
      weekly: 6,
    },
  },
})
