import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-observing-components',
  description: 'Vite plugin that wraps React components with observer — works with any Vite version and any underlying transformer (SWC or Babel)',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'observer',
    'reactive',
    'mobx',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/christianalfoni/observing-components',
    npm: 'https://www.npmjs.com/package/vite-plugin-observing-components',
  },
  stats: {
    downloads: {
      monthly: 1041,
      weekly: 224,
    },
  },
})
