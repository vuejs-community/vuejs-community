import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pactor-app/vite-plugin',
  description: 'Pactor Vite plugin: import .page.yaml / .fragment.yaml DSL files as JS modules with build-time validation and HMR',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'pactor',
    'dsl',
    'server-driven-ui',
    'vite',
    'vite-plugin',
    'yaml',
  ],
  source: {
    github: '426-330/pactor',
    npm: '@pactor-app/vite-plugin',
  },
  links: {
    github: 'https://github.com/426-330/pactor',
    npm: 'https://www.npmjs.com/package/@pactor-app/vite-plugin',
    website: 'https://github.com/426-330/pactor/tree/main/packages/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 47,
      weekly: 47,
    },
  },
})
