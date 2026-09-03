import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@foxlight/bundle',
  description: 'Bundle size analysis for Foxlight — Vite and Webpack plugins for per-component size tracking.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'foxlight',
    'bundle-size',
    'vite-plugin',
    'webpack-plugin',
    'performance',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/josegabrielcruz/foxlight',
    npm: 'https://www.npmjs.com/package/@foxlight/bundle',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 3,
    },
  },
})
