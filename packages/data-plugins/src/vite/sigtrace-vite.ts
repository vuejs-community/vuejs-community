import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@sigtrace/vite',
  description: 'Vite compiler plugin for SigTrace AST instrumentation',
  version: '1.2.1',
  category: 'plugin',
  tags: [
    'reactivity',
    'signals',
    'computed',
    'effect',
    'vite',
    'vite-plugin',
    'babel',
    'compiler',
    'ast',
    'instrumentation',
    'angular',
    'vue',
    'solidjs',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/sigtrace-dev/sigtrace',
    npm: 'https://www.npmjs.com/package/@sigtrace/vite',
  },
  stats: {
    downloads: {
      monthly: 182,
      weekly: 8,
    },
  },
})
