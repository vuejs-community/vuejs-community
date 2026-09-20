import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ui-doc/vite',
  description: 'Vite plugin for UI-Doc generation and preview.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'documentation',
    'generation',
    'styleguide',
    'ui-doc',
    'ui-kit',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gherrink/ui-doc',
    npm: 'https://www.npmjs.com/package/@ui-doc/vite',
    website: 'https://github.com/gherrink/ui-doc/tree/master/packages/vite#readme',
  },
  source: {
    github: 'gherrink/ui-doc',
    npm: '@ui-doc/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 414,
      weekly: 20,
    },
  },
})
