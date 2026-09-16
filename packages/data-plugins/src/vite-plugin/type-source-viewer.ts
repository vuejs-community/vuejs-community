import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'type-source-viewer',
  description: 'Extract TypeScript type definitions as strings at build time. Show any type in Storybook.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'storybook',
    'typescript',
    'type',
    'documentation',
    'addon',
    'vite-plugin',
  ],
  source: {
    github: 'PavelPotapov/TypeSourceViewer',
    npm: 'type-source-viewer',
  },
  links: {
    github: 'https://github.com/PavelPotapov/TypeSourceViewer',
    npm: 'https://www.npmjs.com/package/type-source-viewer',
    website: 'https://github.com/PavelPotapov/TypeSourceViewer#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
