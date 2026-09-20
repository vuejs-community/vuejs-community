import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kumikijs/vite',
  description: 'Vite plugin for Kumiki — import .kumiki files as modules in any Vite/Next project.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'kumiki',
    'vite',
    'vite-plugin',
    'ai-first',
    'build',
  ],
  links: {
    github: 'https://github.com/kumikijs/Kumiki',
    npm: 'https://www.npmjs.com/package/@kumikijs/vite',
    website: 'https://github.com/kumikijs/Kumiki/tree/main/packages/vite#readme',
  },
  source: {
    github: 'kumikijs/Kumiki',
    npm: '@kumikijs/vite',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 247,
      weekly: 25,
    },
  },
})
