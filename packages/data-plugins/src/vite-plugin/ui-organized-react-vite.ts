import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ui-organized/react-vite',
  description: 'Vite plugin for the ui-organized design system: validates a theme config, runs the token pipeline, and injects CSS variables at build time and during dev with HMR.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'design-system',
    'design-tokens',
    'vite',
    'vite-plugin',
    'theme',
  ],
  links: {
    github: 'https://github.com/arossi58/ui-organized',
    npm: 'https://www.npmjs.com/package/@ui-organized/react-vite',
    website: 'https://github.com/arossi58/ui-organized/tree/main/packages/react-vite#readme',
  },
  source: {
    github: 'arossi58/ui-organized',
    npm: '@ui-organized/react-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 48,
      weekly: 3,
    },
  },
})
