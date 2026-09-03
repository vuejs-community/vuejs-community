import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ui-organized/ui-inspect-vite',
  description: 'Vite plugin for UI.Inspect — mounts the inspector in dev with your project\'s own design tokens, read from disk, and writes copy edits back to source.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'design-system',
    'design-tokens',
    'inspector',
    'devtools',
    'dx',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@ui-organized/ui-inspect-vite',
  },
  stats: {
    downloads: {
      monthly: 355,
      weekly: 9,
    },
  },
})
