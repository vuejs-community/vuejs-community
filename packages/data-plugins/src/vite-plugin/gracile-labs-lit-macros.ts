import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gracile-labs/lit-macros',
  description: 'Vite plugin to compile Lit decorators into static class idioms — zero-runtime, OXC-powered',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'lit',
    'lit-element',
    'decorators',
    'macros',
    'compiler',
    'oxc',
    'web-components',
  ],
  links: {
    github: 'https://github.com/gracile-web/gracile',
    npm: 'https://www.npmjs.com/package/@gracile-labs/lit-macros',
    website: 'https://github.com/gracile-web/gracile#readme',
  },
  source: {
    github: 'gracile-web/gracile',
    npm: '@gracile-labs/lit-macros',
  },
  stats: {
    stars: 54,
    downloads: {
      monthly: 38,
      weekly: 6,
    },
  },
})
