import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ui-organized/ui-inspect-plugin',
  description: 'Bundler-agnostic dev-server plugin for UI.Inspect — discovers design tokens from disk, injects the inspector in dev only, and writes copy edits back to source.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'design-system',
    'design-tokens',
    'inspector',
    'devtools',
    'unplugin',
    'vite',
    'dx',
  ],
  source: {
    npm: '@ui-organized/ui-inspect-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@ui-organized/ui-inspect-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 42,
      weekly: 4,
    },
  },
})
