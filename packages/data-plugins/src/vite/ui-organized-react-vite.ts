import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ui-organized/react-vite',
  description: 'Vite plugin for the ui-organized design system: validates a theme config, runs the token pipeline, and injects CSS variables at build time and during dev with HMR.',
  version: '2.2.3',
  category: 'plugin',
  tags: [
    'design-system',
    'design-tokens',
    'vite',
    'vite-plugin',
    'theme',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/arossi58/ui-organized',
    npm: 'https://www.npmjs.com/package/@ui-organized/react-vite',
  },
  stats: {
    downloads: {
      monthly: 264,
      weekly: 10,
    },
  },
})
