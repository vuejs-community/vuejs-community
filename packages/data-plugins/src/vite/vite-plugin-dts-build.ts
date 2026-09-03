import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dts-build',
  description: 'Fast .d.ts builds for Vite (worker + incremental) with optional dual ESM/CJS support.',
  version: '0.2.3',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'dts',
    'typescript',
    'tsc',
    'build',
    'incremental',
    'worker-thread',
    'performance',
    'declaration',
    'types',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/black7375/vite-plugin-dts-build',
    npm: 'https://www.npmjs.com/package/vite-plugin-dts-build',
  },
  stats: {
    downloads: {
      monthly: 2785,
      weekly: 720,
    },
  },
})
