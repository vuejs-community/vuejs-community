import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unstave/vite-plugin',
  description: 'Non-blocking unstave module-graph reports for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'eddiesr93/unstave',
    npm: '@unstave/vite-plugin',
  },
  links: {
    github: 'https://github.com/eddiesr93/unstave',
    npm: 'https://www.npmjs.com/package/@unstave/vite-plugin',
    website: 'https://eddiesr93.github.io/unstave/',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 97,
      weekly: 18,
    },
  },
})
