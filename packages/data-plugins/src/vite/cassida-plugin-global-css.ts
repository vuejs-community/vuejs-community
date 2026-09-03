import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@cassida/plugin-global-css',
  description: 'Vite plugin for Cassida: serves arbitrary global CSS (preflight, resets, body/tag-selector rules) via a virtual module, wrapped in a configurable `@layer` so it cooperates with Cassida\'s single-class output.',
  version: '0.12.0',
  category: 'plugin',
  tags: [
    'cassida',
    'css-in-js',
    'vite-plugin',
    'global-css',
    'preflight',
    'cascade-layer',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pishio/cassida',
    npm: 'https://www.npmjs.com/package/@cassida/plugin-global-css',
  },
  stats: {
    downloads: {
      monthly: 50,
      weekly: 13,
    },
  },
})
