import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@gracile-labs/lit-macros',
  description: 'Vite plugin to compile Lit decorators into static class idioms — zero-runtime, OXC-powered',
  version: '0.1.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gracile-web/gracile',
    npm: 'https://www.npmjs.com/package/@gracile-labs/lit-macros',
  },
  stats: {
    downloads: {
      monthly: 43,
      weekly: 10,
    },
  },
})
