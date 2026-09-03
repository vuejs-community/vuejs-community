import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ui-doc/vite',
  description: 'Vite plugin for UI-Doc generation and preview.',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'documentation',
    'generation',
    'styleguide',
    'ui-doc',
    'ui-kit',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gherrink/ui-doc',
    npm: 'https://www.npmjs.com/package/@ui-doc/vite',
  },
  stats: {
    downloads: {
      monthly: 403,
      weekly: 17,
    },
  },
})
