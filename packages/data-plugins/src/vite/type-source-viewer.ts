import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'type-source-viewer',
  description: 'Extract TypeScript type definitions as strings at build time. Show any type in Storybook.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'storybook',
    'typescript',
    'type',
    'documentation',
    'addon',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/PavelPotapov/TypeSourceViewer',
    npm: 'https://www.npmjs.com/package/type-source-viewer',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
