import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@adaptive-bundle/vite-plugin',
  description: 'Vite plugin for device-aware bundle optimization — analyzes dependencies, splits chunks by device tier, generates reports, and enforces CI budgets.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'adaptive-loading',
    'device-aware',
    'bundle-optimization',
    'performance',
    'adaptive-bundle',
    'vite',
    'vite-plugin',
    'rollup',
    'code-splitting',
    'chunk-isolation',
    'build-analysis',
    'bundle-size',
    'ci-budgets',
    'preload-hints',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Pizanjavier/adaptive',
    npm: 'https://www.npmjs.com/package/@adaptive-bundle/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 5,
    },
  },
})
