import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@chasket/vite-plugin-chasket',
  description: 'Vite plugin for Chasket (.csk) components — compile .csk files to Web Components with HMR support',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
    'chasket',
    'web-components',
    'compiler',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/UltraEgoist/chasket',
    npm: 'https://www.npmjs.com/package/@chasket/vite-plugin-chasket',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 8,
    },
  },
})
