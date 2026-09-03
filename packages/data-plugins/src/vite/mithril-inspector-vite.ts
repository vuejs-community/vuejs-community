import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mithril-inspector/vite',
  description: 'Zero-config Vite plugin for Mithril Inspector — combines the transform, runtime, overlay and server packages.',
  version: '0.3.3',
  category: 'plugin',
  tags: [
    'mithril',
    'mithril.js',
    'devtools',
    'inspector',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/erikvullings/mithril-inspector',
    npm: 'https://www.npmjs.com/package/@mithril-inspector/vite',
  },
  stats: {
    downloads: {
      monthly: 369,
      weekly: 28,
    },
  },
})
