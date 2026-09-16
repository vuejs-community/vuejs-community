import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cassida/plugin-global-css',
  description: 'Vite plugin for Cassida: serves arbitrary global CSS (preflight, resets, body/tag-selector rules) via a virtual module, wrapped in a configurable `@layer` so it cooperates with Cassida\'s single-class output.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cassida',
    'css-in-js',
    'vite-plugin',
    'global-css',
    'preflight',
    'cascade-layer',
  ],
  source: {
    github: 'pishio/cassida',
    npm: '@cassida/plugin-global-css',
  },
  links: {
    github: 'https://github.com/pishio/cassida',
    npm: 'https://www.npmjs.com/package/@cassida/plugin-global-css',
    website: 'https://github.com/pishio/cassida/tree/main/packages/plugin-global-css#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 57,
      weekly: 7,
    },
  },
})
