import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ui-organized/ui-inspect-vite',
  description: 'Vite plugin for UI.Inspect — mounts the inspector in dev with your project\'s own design tokens, read from disk, and writes copy edits back to source.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'design-system',
    'design-tokens',
    'inspector',
    'devtools',
    'dx',
  ],
  source: {
    npm: '@ui-organized/ui-inspect-vite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@ui-organized/ui-inspect-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 42,
      weekly: 3,
    },
  },
})
