import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@reticlehq/vite-plugin',
  description: 'Vite plugin for Reticle: dev-only source-map stamping plus auto-injected reticle.connect(). apply:\'serve\' guarantees it never ships to production.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'reticle',
    'react',
    'devtools',
  ],
  links: {
    github: 'https://github.com/reticlehq/reticle',
    npm: 'https://www.npmjs.com/package/@reticlehq/vite-plugin',
    website: 'https://github.com/reticlehq/reticle#readme',
  },
  source: {
    github: 'reticlehq/reticle',
    npm: '@reticlehq/vite-plugin',
  },
  stats: {
    stars: 670,
    downloads: {
      monthly: 5151,
      weekly: 1127,
    },
  },
})
