import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@foxlight/bundle',
  description: 'Bundle size analysis for Foxlight — Vite and Webpack plugins for per-component size tracking.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'foxlight',
    'bundle-size',
    'vite-plugin',
    'webpack-plugin',
    'performance',
  ],
  links: {
    github: 'https://github.com/josegabrielcruz/foxlight',
    npm: 'https://www.npmjs.com/package/@foxlight/bundle',
    website: 'https://github.com/josegabrielcruz/foxlight/tree/master/packages/bundle#readme',
  },
  source: {
    github: 'josegabrielcruz/foxlight',
    npm: '@foxlight/bundle',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 1,
    },
  },
})
