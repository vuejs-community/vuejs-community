import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sigtrace/vite',
  description: 'Vite compiler plugin for SigTrace AST instrumentation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'sigtrace-dev/sigtrace',
    npm: '@sigtrace/vite',
  },
  links: {
    github: 'https://github.com/sigtrace-dev/sigtrace',
    npm: 'https://www.npmjs.com/package/@sigtrace/vite',
    website: 'https://sigtrace.dev',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 69,
      weekly: 6,
    },
  },
})
