import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@twgen/vite',
  description: 'Vite plugin for twgen — regenerates the Tailwind v4 theme CSS from your tokens on build and HMR',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'tailwind',
    'tailwindcss',
    'tailwind-v4',
    'vite-plugin',
    'design-tokens',
    'theme',
    'twgen',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/hunterdavisdev/twgen',
    npm: 'https://www.npmjs.com/package/@twgen/vite',
  },
  stats: {
    downloads: {
      monthly: 58,
      weekly: 11,
    },
  },
})
