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
  links: {
    github: 'https://github.com/innospots/pactor',
    npm: 'https://www.npmjs.com/package/@pactor-app/vite-plugin',
    website: 'https://github.com/innospots/pactor/tree/main/packages/vite-plugin',
  },
  source: {
    github: 'innospots/pactor',
    npm: '@pactor-app/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 47,
      weekly: 47,
    },
  },
})
