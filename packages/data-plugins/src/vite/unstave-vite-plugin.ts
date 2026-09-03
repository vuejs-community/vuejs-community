import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@unstave/vite-plugin',
  description: 'Non-blocking unstave module-graph reports for Vite',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
    'module-graph',
    'dependency-graph',
    'barrel-files',
    'codemod',
    'monorepo',
    'static-analysis',
    'build-performance',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/eddiesr93/unstave',
    npm: 'https://www.npmjs.com/package/@unstave/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 889,
      weekly: 7,
    },
  },
})
