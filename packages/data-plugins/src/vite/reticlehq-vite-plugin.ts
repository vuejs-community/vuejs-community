import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@reticlehq/vite-plugin',
  description: 'Vite plugin for Reticle: dev-only source-map stamping plus auto-injected reticle.connect(). apply:\'serve\' guarantees it never ships to production.',
  version: '2.13.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'reticle',
    'react',
    'devtools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/reticlehq/reticle',
    npm: 'https://www.npmjs.com/package/@reticlehq/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 5909,
      weekly: 1529,
    },
  },
})
