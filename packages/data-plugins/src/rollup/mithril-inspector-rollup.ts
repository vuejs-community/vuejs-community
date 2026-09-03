import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mithril-inspector/rollup',
  description: 'The Rollup integration for Mithril Inspector — a thin adapter over the shared transform, runtime and server packages (§4, §12.3).',
  version: '0.3.3',
  category: 'plugin',
  tags: [
    'mithril',
    'mithril.js',
    'devtools',
    'inspector',
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/erikvullings/mithril-inspector',
    npm: 'https://www.npmjs.com/package/@mithril-inspector/rollup',
  },
  stats: {
    downloads: {
      monthly: 233,
      weekly: 13,
    },
  },
})
