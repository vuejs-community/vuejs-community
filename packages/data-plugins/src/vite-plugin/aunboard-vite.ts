import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aunboard/vite',
  description: 'Vite plugin that stamps stable data-aun ids onto exactly the JSX elements your committed aunboard tours reference, so tours survive UI refactors.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'aunboard',
    'vite',
    'vite-plugin',
    'product-tour',
    'onboarding',
    'jsx',
    'data-attribute',
  ],
  links: {
    github: 'https://github.com/NikhilTirunagiri/aunboard',
    npm: 'https://www.npmjs.com/package/@aunboard/vite',
    website: 'https://github.com/NikhilTirunagiri/aunboard#readme',
  },
  source: {
    github: 'NikhilTirunagiri/aunboard',
    npm: '@aunboard/vite',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 582,
      weekly: 25,
    },
  },
})
