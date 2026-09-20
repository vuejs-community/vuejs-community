import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@chasket/vite-plugin-chasket',
  description: 'Vite plugin for Chasket (.csk) components — compile .csk files to Web Components with HMR support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
    'chasket',
    'web-components',
    'compiler',
    'hmr',
  ],
  links: {
    github: 'https://github.com/UltraEgoist/chasket',
    npm: 'https://www.npmjs.com/package/@chasket/vite-plugin-chasket',
    website: 'https://github.com/UltraEgoist/chasket#readme',
  },
  source: {
    github: 'UltraEgoist/chasket',
    npm: '@chasket/vite-plugin-chasket',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 23,
      weekly: 1,
    },
  },
})
