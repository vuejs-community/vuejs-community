import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@pactor-app/vite-plugin',
  description: 'Pactor Vite plugin: import .page.yaml / .fragment.yaml DSL files as JS modules with build-time validation and HMR',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'pactor',
    'dsl',
    'server-driven-ui',
    'vite',
    'vite-plugin',
    'yaml',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/426-330/pactor',
    npm: 'https://www.npmjs.com/package/@pactor-app/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
