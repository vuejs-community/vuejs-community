import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-observing-components',
  description: 'Vite plugin that wraps React components with observer — works with any Vite version and any underlying transformer (SWC or Babel)',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'christianalfoni/observing-components',
    npm: 'vite-plugin-observing-components',
  },
  links: {
    github: 'https://github.com/christianalfoni/observing-components',
    npm: 'https://www.npmjs.com/package/vite-plugin-observing-components',
  },
  stats: {
    downloads: {
      monthly: 955,
      weekly: 294,
    },
  },
})
