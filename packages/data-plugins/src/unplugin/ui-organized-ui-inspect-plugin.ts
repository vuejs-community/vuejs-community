import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ui-organized/ui-inspect-plugin',
  description: 'Bundler-agnostic dev-server plugin for UI.Inspect — discovers design tokens from disk, injects the inspector in dev only, and writes copy edits back to source.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'design-system',
    'design-tokens',
    'inspector',
    'devtools',
    'unplugin',
    'vite',
    'dx',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@ui-organized/ui-inspect-plugin',
  },
  stats: {
    downloads: {
      monthly: 369,
      weekly: 11,
    },
  },
})
