import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mithril-inspector/vite',
  description: 'Zero-config Vite plugin for Mithril Inspector — combines the transform, runtime, overlay and server packages.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'mithril',
    'mithril.js',
    'devtools',
    'inspector',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/erikvullings/mithril-inspector',
    npm: 'https://www.npmjs.com/package/@mithril-inspector/vite',
    website: 'https://github.com/erikvullings/mithril-inspector#readme',
  },
  source: {
    github: 'erikvullings/mithril-inspector',
    npm: '@mithril-inspector/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 359,
      weekly: 7,
    },
  },
})
