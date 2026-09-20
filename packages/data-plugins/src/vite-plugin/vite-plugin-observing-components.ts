import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-observing-components',
  description: 'Vite plugin that wraps React components with observer — works with any Vite version and any underlying transformer (SWC or Babel)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'observer',
    'reactive',
    'mobx',
  ],
  links: {
    github: 'https://github.com/christianalfoni/observing-components',
    npm: 'https://www.npmjs.com/package/vite-plugin-observing-components',
    website: 'https://github.com/christianalfoni/observing-components#readme',
  },
  source: {
    github: 'christianalfoni/observing-components',
    npm: 'vite-plugin-observing-components',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 850,
      weekly: 148,
    },
  },
})
