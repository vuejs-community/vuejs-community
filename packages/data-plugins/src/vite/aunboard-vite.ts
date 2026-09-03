import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aunboard/vite',
  description: 'Vite plugin that stamps stable data-aun ids onto exactly the JSX elements your committed aunboard tours reference, so tours survive UI refactors.',
  version: '0.5.0',
  category: 'plugin',
  tags: [
    'aunboard',
    'vite',
    'vite-plugin',
    'product-tour',
    'onboarding',
    'jsx',
    'data-attribute',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/NikhilTirunagiri/aunboard',
    npm: 'https://www.npmjs.com/package/@aunboard/vite',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
